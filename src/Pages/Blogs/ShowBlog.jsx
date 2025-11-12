import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  ChevronRight,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { blogApi } from "../../api/blog";
import BlogHeading from "../../assets/blogHeading.png";
import RandomImage from "../../assets/randomblog.jpg";
import { Helmet } from "react-helmet-async";
import LoadingHandler from "../../Components/Common/LoadingHandler";

// Reusable Components
const ContentNavItem = ({ title, id }) => (
  <a
    href={`#${id}`}
    className="flex items-center justify-between py-2 px-3 hover:bg-purple-800/50 rounded-lg transition"
  >
    <span className="text-sm font-medium text-gray-300 group-hover:text-white">
      {title}
    </span>
    <ChevronRight className="w-4 h-4 text-purple-400" />
  </a>
);

const ContactForm = () => {
  const IconInput = ({ item }) => {
    const { Icon, placeholder, type = "text" } = item;

    return (
      <div className="relative mb-4">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-purple-900 border border-purple-700 rounded-lg text-white placeholder-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none"
        />
      </div>
    );
  };

  return (
    <div className="bg-backgroundSecondary p-6 rounded-2xl border border-white/40 sticky top-10">
      <h2 className="text-2xl font-bold text-white mb-2">Get in touch</h2>
      <form>
        {/* <IconInput Icon={User} placeholder="Name" /> */}
        <IconInput item={{ Icon: User, placeholder: "Name" }} />
        <IconInput item={{ Icon: Phone, placeholder: "Name", type: "tel" }} />
        <IconInput item={{ Icon: Mail, placeholder: "Name", type: "email" }} />
        {/* <IconInput Icon={Phone} placeholder="Phone Number" type="tel" /> */}
        {/* <IconInput Icon={Mail} placeholder="Email" type="email" /> */}
        <div className="relative mb-6">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
          <textarea
            placeholder="Message (optional)"
            rows="4"
            className="w-full pl-10 pr-4 py-3 bg-purple-900 border border-purple-700 rounded-lg text-white placeholder-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none resize-none"
          ></textarea>
        </div>
        <div className="flex items-start mb-6">
          <input
            type="checkbox"
            id="subscribe"
            className="mt-1 w-4 h-4 accent-purple-500 bg-purple-900 border-purple-700 rounded"
          />
          <label htmlFor="subscribe" className="ml-3 text-sm text-purple-300">
            Subscribe to our newsletter.
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const ShowBlog = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        // console.log('Fetching blog post with ID:', id);

        const post = await blogApi.fetchBlogById(id);
        // console.log('Blog post fetched successfully:', post);
        setBlogPost(post);
      } catch (err) {
        // console.error('Error in fetchBlogPost:', err);
        setError(err?.message || "Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogPost();
    } else {
      setError("No blog ID provided");
      setLoading(false);
    }
  }, [id]);

  // Add safe data access functions
  const getContentSections = () => {
    return blogPost?.contentSection || [];
  };

  const getSimilarPosts = () => {
    return blogPost?.similarBlogs || [];
  };

  const getTags = () => {
    return blogPost?.tags || [];
  };

  const contentSections = getContentSections();
  const similarPosts = getSimilarPosts();
  const tags = getTags();
  const seo = blogPost?.seo || {};

  return (
    <LoadingHandler
      state={
        loading
          ? "loading"
          : error
          ? "error"
          : !blogPost
          ? "not-found"
          : "success"
      }
      type="spinner"
      variant="blog"
      size="xl"
      message={
        loading
          ? "Loading blog post..."
          : error
          ? "Failed to load blog post"
          : "Blog post not found"
      }
      error={error}
      onRetry={() => window.location.reload()}
      fullScreen={true}
      centered={true}
    >
      <div className="min-h-screen bg-backgroundPrimary text-white font-sans pt-16">
        {/* Top Full-Width Banner */}

        {/* dynamic seo tags uing react-helmet-async */}
        <Helmet>
          <title>{seo.metaTitle || blogPost?.title || "Blog Post"}</title>
          <meta
            name="description"
            content={
              seo?.metaDescription ||
              blogPost?.summary ||
              "Read our latest insights."
            }
          />
          <meta name="keywords" content={seo.keyword || ""} />

          {/* open graph for social sharing */}
          <meta
            property="og:title"
            content={seo.metaTitle || blogPost?.title}
          />
          <meta
            property="og:description"
            content={seo.metaDescription || blogPost?.summary}
          />
          <meta
            property="og:image"
            content={blogPost?.imageUrl || RandomImage}
          />
          <meta property="og:type" content="article" />

          {/* twitter card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={seo.metaTitle || blogPost?.title}
          />
          <meta
            name="twitter:description"
            content={seo.metaDescription || blogPost?.summary}
          />
          <meta
            name="twitter:image"
            content={blogPost?.imageUrl || RandomImage}
          />
        </Helmet>
        <img
          src={BlogHeading}
          alt="Blog Heading"
          loading="lazy"
          className="w-full object-cover"
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <div className="flex flex-wrap gap-3 mb-4">
                {tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-700 text-purple-100 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
                {blogPost?.title}
              </h1>
              <div className="flex items-center space-x-4">
                <img
                  src={blogPost?.authorImageUrl || RandomImage}
                  alt={blogPost?.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = RandomImage;
                  }}
                />
                <div>
                  <p className="font-semibold text-white">{blogPost?.author}</p>
                  <p className="text-sm text-purple-300">Content Writer</p>
                  <p className="text-sm text-purple-400">{blogPost?.date}</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src={blogPost?.imageUrl}
                alt={blogPost?.title}
                loading="lazy"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = RandomImage;
                }}
              />
            </div>
          </div>

          {/* Main 3-Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Left: Table of Contents */}
            {contentSections.length > 0 && (
              <div className="lg:col-span-1">
                <div className="bg-purple-900/40 p-6 rounded-2xl border border-purple-800 sticky top-10">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />{" "}
                    Table of Contents
                  </h2>
                  <div className="space-y-2">
                    {contentSections.map((section, index) => (
                      <ContentNavItem
                        key={section?.id || index}
                        title={section?.title}
                        id={`section-${section?.id || index}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Middle: Blog Content */}
            <div
              className={`text-white leading-relaxed space-y-8 ${
                contentSections?.length > 0 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              {/* Blog Summary */}
              {blogPost?.summary && (
                <div className="bg-purple-900/20 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold text-purple-300 mb-3">
                    Summary
                  </h3>
                  <p className="text-lg text-gray-200">{blogPost.summary}</p>
                </div>
              )}

              {/* Main Content */}
              {contentSections?.length > 0 ? (
                contentSections?.map((section, index) => (
                  <section
                    key={section.id || index}
                    id={`section-${section.id || index}`}
                    className="scroll-mt-20"
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white/80 mb-6 border-b border-purple-700/50 pb-2">
                      {section?.title}
                    </h2>
                    <div className="prose prose-invert prose-purple max-w-none">
                      {section.content && section.content.length > 0 ? (
                        <BlocksRenderer content={section.content} />
                      ) : (
                        <p className="text-gray-400 italic">
                          No content available for this section.
                        </p>
                      )}
                    </div>
                  </section>
                ))
              ) : (
                /* Fallback to main content if no contentSections */
                <div className="prose prose-invert prose-purple max-w-none">
                  {blogPost?.content && blogPost?.content?.length > 0 ? (
                    <BlocksRenderer content={blogPost.content} />
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-400 text-lg">
                        No content available for this blog post.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-1">
              <ContactForm />
            </div>
          </div>

          {/* Similar Blogs Section */}
          {similarPosts?.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl font-bold mb-8">Similar Blogs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {similarPosts?.map((post) => (
                  <a
                    key={post.id}
                    href={post.link}
                    className="bg-purple-900/20 rounded-xl overflow-hidden shadow-lg hover:scale-[1.01] hover:shadow-2xl transition flex flex-col group"
                  >
                    <div className="relative w-full aspect-[3/2] overflow-hidden">
                      <img
                        src={post?.imageUrl}
                        alt={post?.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = RandomImage;
                        }}
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {(post?.tags || [])?.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-purple-600/50 px-3 py-1 text-xs font-medium text-purple-200 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-purple-300 mb-2">
                        <span className="font-semibold">{post?.author}</span> -{" "}
                        {post?.date}
                      </p>
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-medium text-gray-50 leading-snug group-hover:text-purple-400 transition line-clamp-2">
                          {post?.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      </div>
                      <p className="text-base text-gray-300 flex-grow line-clamp-3">
                        {post?.summary}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </LoadingHandler>
  );
};

export default ShowBlog;
