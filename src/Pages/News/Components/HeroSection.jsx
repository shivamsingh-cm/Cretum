import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { newsApi, extractTextFromContent, getImageUrl } from '../../../api/newsApi';

const ReadMoreLink = ({ slug }) => (
  <a 
    href={`/news/${slug}`} 
    className="text-purple-400 hover:text-purple-300 font-semibold flex items-center space-x-1 transition duration-200 mt-2 md:mt-4"
  >
    <span>Read More</span>
    <ArrowUpRight className="w-4 h-4" />
  </a>
);

const HeroSection = () => {
  const [newsData, setNewsData] = useState({
    featuredNews: [],
    latestNews: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch all news first
        await newsApi.fetchAllNews();
        
        // Get featured and latest news
        const featured = newsApi.getFeaturedNews()[0] || newsApi.getLatestNews()[0];
        const latest = newsApi.getLatestNews().slice(0, 2);
        
        setNewsData({
          featuredNews: featured ? [featured] : [],
          latestNews: latest
        });
      } catch (error) {
        console.error('Error fetching news for hero section:', error);
        setError('Failed to load news. Using sample data.');
        
        // Use mock data as fallback
        const featured = newsApi.getFeaturedNews()[0] || newsApi.getLatestNews()[0];
        const latest = newsApi.getLatestNews().slice(0, 2);
        
        setNewsData({
          featuredNews: featured ? [featured] : [],
          latestNews: latest
        });
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-backgroundPrimary p-6 sm:p-10 md:p-14 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-backgroundSecondary rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-backgroundSecondary rounded w-2/3 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2 bg-backgroundSecondary rounded-3xl h-96"></div>
              <div className="space-y-6">
                <div className="bg-backgroundSecondary rounded-3xl h-32"></div>
                <div className="bg-backgroundSecondary rounded-3xl h-32"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-backgroundPrimary p-6 sm:p-10 md:p-14 lg:p-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Error Message */}
        {error && (
          <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-4 mb-6">
            <p className="text-yellow-300 text-sm">{error}</p>
          </div>
        )}
        
        {/* Header Section */}
        <header className="text-center mb-6 sm:mb-10 mt-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white">
            Stay Updated With Cretum <br/> Advisory
          </h1>
          <p className="text-white font-normal text-base sm:text-sm md:text-lg max-w-3xl mx-auto mt-4">
            Discover the latest updates, announcements, and insights shaping our journey and the businesses we serve.
          </p>
        </header>

        {/* Recent News Heading */}
        <h2 className="text-xl sm:text-2xl font-medium text-white mb-6 sm:mb-10">
          Recent News
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Featured News Article */}
          {newsData?.featuredNews?.map(article => (
            <div key={article.id} className="lg:col-span-2 bg-backgroundSecondary rounded-3xl p-4 sm:p-6 shadow-xl border border-backgroundSecondary flex flex-col">
              <img
                src={getImageUrl(article.imageUrl)}
                alt={article.title}
                className="w-full h-48 sm:h-60 lg:h-64 object-cover rounded-2xl mb-4 sm:mb-6 shadow-md"
                onError={(e) => {
                  e.target.src = '/assets/randomblog.jpg';
                }}
              />
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-purple-300 text-sm sm:text-base font-normal mb-3 flex-grow">
                {article.summary || extractTextFromContent(article.content)}
              </p>
              <ReadMoreLink slug={article.slug} />
            </div>
          ))}

          {/* Smaller News Articles */}
          <div className="lg:col-span-1 flex flex-col gap-4 sm:gap-6">
            {newsData.latestNews.map(article => (
              <div key={article.id} className="bg-backgroundSecondary rounded-3xl p-4 sm:p-5 shadow-xl border border-backgroundSecondary flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-3 sm:gap-4">
                <img
                  src={getImageUrl(article.imageUrl)}
                  alt={article.title}
                  className="w-full sm:w-24 sm:h-16 lg:w-full lg:h-28 object-cover rounded-md shadow-md flex-shrink-0"
                  onError={(e) => {
                    e.target.src = '/assets/randomblog.jpg';
                  }}
                />
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg font-medium text-white mb-1 leading-snug">
                    {article.title}
                  </h3>
                  <ReadMoreLink slug={article.slug} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;