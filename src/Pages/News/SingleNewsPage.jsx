import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { 
  Calendar, 
  User, 
  Folder, 
  ArrowLeft,
  Clock,
  ArrowUpRight 
} from 'lucide-react';
import { newsApi, getImageUrl, extractTextFromContent } from '../../api/newsApi';

// Optimized Image Component with lazy loading and error handling
const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height,
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const imageSrc = imageError ? '/assets/randomblog.jpg' : getImageUrl(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onError={handleError}
        onLoad={handleLoad}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } ${props.onClick ? 'cursor-pointer' : ''}`}
        {...props}
      />
      {!imageLoaded && (
        <div className="absolute inset-0 bg-backgroundSecondary animate-pulse" />
      )}
    </div>
  );
};

// Memoized Similar News Card Component
const SimilarNewsCard = React.memo(({ article }) => {
  const formatDate = useMemo(() => {
    try {
      return new Date(article.publishedDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return 'Recent';
    }
  }, [article.publishedDate]);

  return (
    <div className="bg-backgroundSecondary rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group flex flex-col h-full">
      {article.imageUrl && (
        <OptimizedImage
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-48"
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
          {article.summary || 'Read more about this related topic...'}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-3 h-3 mr-1 flex-shrink-0" />
            <span className="truncate">{formatDate}</span>
          </div>
          <Link
            to={`/news/${article.slug}`}
            className="text-purple-400 hover:text-purple-300 font-semibold flex items-center space-x-1 transition-all duration-200 text-sm hover:space-x-2"
          >
            <span>Read More</span>
            <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  );
});

SimilarNewsCard.displayName = 'SimilarNewsCard';

const SingleNewsPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [similarNews, setSimilarNews] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      // Early return for invalid ID
      if (!id || id === 'undefined') {
        setError('Invalid news ID');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const newsData = await newsApi.getNewsById(id);
        
        if (!newsData) {
          setError('News article not found');
          return;
        }

        setNews(newsData);
        
        // Use similarNews from API response first, then fallback to category-based
        if (newsData.similarNews?.length > 0) {
          setSimilarNews(newsData.similarNews);
        } else if (newsData.categories?.length > 0) {
          const similar = newsApi.getSimilarNews(
            newsData.id, 
            newsData.categories[0]?.name, 
            3
          );
          setSimilarNews(similar);
        }
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load news article');
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [id]);

  // Loading skeleton component
  if (loading) {
    return (
      <div className="min-h-screen bg-backgroundPrimary pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            {/* Back button skeleton */}
            <div className="h-6 bg-backgroundSecondary rounded w-24"></div>
            
            {/* Header skeleton */}
            <div className="space-y-4">
              <div className="h-8 bg-backgroundSecondary rounded w-1/3"></div>
              <div className="h-4 bg-backgroundSecondary rounded w-1/4"></div>
              <div className="h-12 bg-backgroundSecondary rounded w-3/4"></div>
            </div>
            
            {/* Image skeleton */}
            <div className="h-96 bg-backgroundSecondary rounded-2xl"></div>
            
            {/* Content skeleton */}
            <div className="space-y-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 bg-backgroundSecondary rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !news) {
    return (
      <div className="min-h-screen bg-backgroundPrimary pt-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-6 mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">Article Not Found</h1>
            <p className="text-gray-400">{error || 'The requested article could not be found.'}</p>
          </div>
          <Link 
            to="/news" 
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-backgroundPrimary pt-20">
      {/* Back Button */}
      <div className="border-b border-gray-800 sticky top-0 bg-backgroundPrimary/95 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/news" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-all duration-200 hover:translate-x-1 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to News</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          {/* Categories */}
          {news.categories?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {news.categories.map((category) => (
                <span 
                  key={category.id}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium border border-purple-500/30"
                >
                  <Folder className="w-3 h-3 mr-1" />
                  {category.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {news.title}
          </h1>

          {/* Summary */}
          {news.summary && (
            <p className="text-xl text-purple-200 mb-8 leading-relaxed font-light">
              {news.summary}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 p-4 bg-backgroundSecondary/50 rounded-lg border border-gray-800">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{news.authorInfo?.name || news.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{news.publishedDate}</span>
            </div>


          </div>
        </header>

        {/* Featured Image */}
        {news.imageUrl && (
          <div className="mb-12">
            <OptimizedImage
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl shadow-2xl"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-300 leading-relaxed">
            {Array.isArray(news.content) ? (
              <BlocksRenderer
                content={news.content}
                blocks={{
                  paragraph: ({ children }) => (
                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                      {children}
                    </p>
                  ),
                  heading: ({ children, level }) => {
                    const HeadingTag = `h${level}`;
                    return (
                      <HeadingTag className="text-white font-semibold mt-8 mb-4">
                        {children}
                      </HeadingTag>
                    );
                  },
                  list: ({ children, format }) => {
                    const ListTag = format === 'unordered' ? 'ul' : 'ol';
                    return (
                      <ListTag className="text-gray-300 mb-6 space-y-2">
                        {children}
                      </ListTag>
                    );
                  },
                  'list-item': ({ children }) => (
                    <li className="text-gray-300">{children}</li>
                  ),
                  link: ({ children, url }) => (
                    <a 
                      href={url} 
                      className="text-purple-400 hover:text-purple-300 underline transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                }}
                modifiers={{
                  bold: ({ children }) => (
                    <strong className="font-bold text-white">{children}</strong>
                  ),
                  italic: ({ children }) => (
                    <em className="italic text-gray-200">{children}</em>
                  ),
                  underline: ({ children }) => (
                    <u className="underline">{children}</u>
                  ),
                }}
              />
            ) : (
              <p className="text-gray-300 leading-relaxed mb-4">{news.content}</p>
            )}
          </div>
        </div>

        {/* Tags */}
        {news.tags?.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors duration-200 cursor-pointer border border-gray-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        {news.authorInfo && (
          <div className="mt-12 p-6 bg-backgroundSecondary rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">About the Author</h3>
            <div className="flex items-start gap-4">
              {news.authorInfo.profile_picture && (
                <OptimizedImage
                  src={news.authorInfo.profile_picture.url}
                  alt={news.authorInfo.name}
                  className="w-16 h-16 rounded-full flex-shrink-0"
                />
              )}
              <div className="flex-grow">
                <h4 className="text-lg font-medium text-white">{news.authorInfo.name}</h4>
                {news.authorInfo.bio && (
                  <div className="text-gray-400 mt-2">
                    {Array.isArray(news.authorInfo.bio) ? (
                      <BlocksRenderer
                        content={news.authorInfo.bio}
                        blocks={{
                          paragraph: ({ children }) => (
                            <p className="text-gray-400">{children}</p>
                          ),
                        }}
                      />
                    ) : (
                      <p>{news.authorInfo.bio}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </article>

      {/* Similar News Section */}
      {similarNews.length > 0 && (
        <section className="border-t border-gray-800 mt-16 bg-backgroundSecondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarNews.map((article) => (
                <SimilarNewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SingleNewsPage;