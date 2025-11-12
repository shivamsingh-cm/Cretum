import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Pagination from "../../../Components/Common/Pagination";
import {
  newsApi,
  extractTextFromContent,
  getImageUrl,
} from "../../../api/newsApi";
import { Link } from "react-router-dom";

const ReadMoreLink = ({ slug }) => (
  <Link
    to={`/news/${slug}`}
    className="text-purple-400 hover:text-purple-300 font-semibold flex items-center space-x-1 transition duration-200 mt-2"
  >
    <span>Read More</span>
    <ArrowUpRight className="w-4 h-4" />
  </Link>
);

const AllNewsShow = ({ currentPage: propCurrentPage, onPageChange }) => {
  const [internalCurrentPage, setInternalCurrentPage] = useState(
    propCurrentPage || 1
  );
  const [newsData, setNewsData] = useState({
    news: [],
    pagination: {
      page: 1,
      pageSize: 2,
      pageCount: 1,
      total: 0,
    },
  });
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);

  const articlesPerPage = 1;

  // Sync with prop changes
  useEffect(() => {
    if (propCurrentPage && propCurrentPage !== internalCurrentPage) {
      setInternalCurrentPage(propCurrentPage);
    }
  }, [propCurrentPage, internalCurrentPage]);

  useEffect(() => {
    const initializeData = async () => {
      if (!initialized) {
        try {
          await newsApi.fetchAllNews();
          setInitialized(true);
        } catch (error) {
          console.error("Error initializing news data:", error);
          setInitialized(true);
        }
      }
    };

    initializeData();
  }, [initialized]);

  useEffect(() => {
    if (initialized) {
      const data = newsApi.getPaginatedNews(
        internalCurrentPage,
        articlesPerPage
      );
      setNewsData(data);
      setLoading(false);
    }
  }, [internalCurrentPage, initialized]);

  const handlePageChange = (page) => {
    if (onPageChange) {
      // Use parent component's navigation
      onPageChange(page);
    } else {
      // Fallback to internal state management
      setInternalCurrentPage(page);
    }
  };

  if (loading) {
    return (
      <section className="bg-backgroundPrimary min-h-screen p-6 sm:p-10 md:p-14 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-backgroundSecondary rounded w-48 mb-8"></div>
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-backgroundSecondary rounded-2xl h-48"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-backgroundPrimary min-h-screen p-6 sm:p-10 md:p-14 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-medium text-white mb-8">
          All News
        </h2>

        {newsData.news.length === 0 ? (
          <div className="text-center text-purple-300 py-12">
            <p className="text-lg">No news articles found.</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col space-y-6">
              {newsData.news.map((article) => (
                <div
                  key={article.id}
                  className="bg-backgroundSecondary border border-backgroundSecondary rounded-2xl shadow-md flex flex-col md:flex-row h-auto md:h-62 overflow-hidden"
                >
                  {/* Image on left */}
                  <div className="md:w-1/3 h-48 md:h-auto flex-shrink-0">
                    <img
                      src={getImageUrl(article.imageUrl)}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover p-4 rounded-2xl"
                      onError={(e) => {
                        e.target.src = "/assets/randomblog.jpg";
                      }}
                    />
                  </div>

                  {/* Content on right */}
                  <div className="md:w-2/3 p-4 sm:p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-purple-300 font-normal text-sm sm:text-base mb-2">
                        {article.summary ||
                          extractTextFromContent(article.content)}
                      </p>
                    </div>
                    <ReadMoreLink slug={article.slug} />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {newsData.pagination.pageCount > 1 && (
              <div className="mt-8">
                <Pagination
                  currentPage={internalCurrentPage}
                  totalPages={newsData.pagination.pageCount}
                  onPageChange={handlePageChange}
                  basePath="/news"
                  showPageNumbers={true}
                  showPreviousNext={true}
                  showFirstLast={true}
                  className="mt-8"
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default AllNewsShow;
