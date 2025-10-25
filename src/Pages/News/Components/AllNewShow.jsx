import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import RandoMImage from '../../../assets/randomblog.jpg';

const newsArticles = [
  {
    id: 1,
    imageUrl: RandoMImage,
    title: "Cretum Advisory Assists Tech Startup in Securing $2M Seed Funding",
    description: "We supported a fast-growing SaaS startup with financial structuring, compliance cleanup, and investor-ready models – helping them close a $2M seed round with top venture funds.",
  },
  {
    id: 2,
    imageUrl: RandoMImage,
    title: "Expanding Globally: How Businesses Can Navigate International Markets",
    description: "Helping businesses scale internationally with strategic advisory, tax structuring, and operational guidance to ensure smooth global expansion.",
  },
  {
    id: 3,
    imageUrl: RandoMImage,
    title: "SaaS Financial Planning: Tips for Startups",
    description: "Essential insights for SaaS founders on financial planning, compliance, and fundraising strategies to maximize growth and minimize risk.",
  },
  {
    id: 4,
    imageUrl: RandoMImage,
    title: "Navigating Regulatory Challenges for SMEs",
    description: "A practical guide for SMEs to navigate complex regulatory environments while focusing on innovation and growth.",
  },
  {
    id: 5,
    imageUrl: RandoMImage,
    title: "Investor Readiness for Tech Startups",
    description: "Key steps for tech startups to become investor-ready, including financial modeling, compliance checks, and pitch preparation.",
  },
];

const ReadMoreLink = ({ href }) => (
  <a href={href} className="text-purple-400 hover:text-purple-300 font-semibold flex items-center space-x-1 transition duration-200 mt-2">
    <span>Read More</span>
    <ArrowUpRight className="w-4 h-4" />
  </a>
);

const NewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 2;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = newsArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(newsArticles.length / articlesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="bg-backgroundPrimary min-h-screen p-6 sm:p-10 md:p-14 lg:p-16">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">All News</h2>

        <div className="flex flex-col space-y-6">
          {currentArticles.map((article) => (
            <div key={article.id} className="bg-backgroundSecondary border border-backgroundSecondary rounded-2xl shadow-md flex flex-col md:flex-row h-[330px] overflow-hidden">
              
              {/* Image on left */}
              <div className="md:w-1/3 h-[180px] md:h-auto flex-shrink-0">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover p-4 rounded-lg"
                />
              </div>

              {/* Content on right */}
              <div className="md:w-2/3 p-4 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-purple-300 text-sm sm:text-base mb-2">
                    {article.description}
                  </p>
                </div>
                <ReadMoreLink href="#" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg font-medium ${
                currentPage === page ? "bg-purple-500 text-white" : "bg-backgroundSecondary text-purple-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
