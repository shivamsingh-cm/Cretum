import React from 'react';
import { ArrowUpRight } from 'lucide-react'; 
import RandoMImage from '../../../assets/randomblog.jpg';

const newsArticles = [
  {
    id: 1,
    isFeatured: true,
    imageUrl: RandoMImage,
    title: "Cretum Advisory Assists Tech Startup in Securing $2M Seed Funding",
    description: "We supported a fast-growing SaaS startup with financial structuring, compliance cleanup, and investor-ready models – helping them close a $2M seed round with top venture funds.",
    link: "#",
  },
  {
    id: 2,
    imageUrl: RandoMImage,
    title: "Cretum Advisory Assists Tech Startup in Securing $2M Seed Funding",
    link: "#",
  },
  {
    id: 3,
    imageUrl: RandoMImage,
    title: "Cretum Advisory Assists Tech Startup in Securing $2M Seed Funding",
    link: "#",
  },
];

const ReadMoreLink = ({ href }) => (
  <a href={href} className="text-purple-400 hover:text-purple-300 font-semibold flex items-center space-x-1 transition duration-200 mt-2 md:mt-4">
    <span>Read More</span>
    <ArrowUpRight className="w-4 h-4" />
  </a>
);

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-backgroundPrimary p-6 sm:p-10 md:p-14 lg:p-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-6 sm:mb-10 mt-16 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Stay Updated With Cretum <br/> Advisory
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-4">
            Discover the latest updates, announcements, and insights shaping our journey and the businesses we serve.
          </p>
        </header>

        {/* Recent News Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-10">
          Recent News
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Featured News Article */}
          {newsArticles.filter(article => article.isFeatured).map(article => (
            <div key={article.id} className="lg:col-span-2 bg-backgroundSecondary rounded-3xl p-4 sm:p-6 shadow-xl border border-backgroundSecondary flex flex-col">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 sm:h-60 lg:h-64 object-cover rounded-2xl mb-4 sm:mb-6 shadow-md"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-purple-300 text-sm sm:text-base mb-3 flex-grow">
                {article.description}
              </p>
              <ReadMoreLink href={article.link} />
            </div>
          ))}

          {/* Smaller News Articles */}
          <div className="lg:col-span-1 flex flex-col gap-4 sm:gap-6">
            {newsArticles.filter(article => !article.isFeatured).map(article => (
              <div key={article.id} className="bg-backgroundSecondary rounded-3xl p-4 sm:p-5 shadow-xl border border-backgroundSecondary flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-3 sm:gap-4">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full sm:w-24 sm:h-16 lg:w-full lg:h-28 object-cover rounded-md shadow-md flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg font-medium text-white mb-1 leading-snug">
                    {article.title}
                  </h3>
                  <ReadMoreLink href={article.link} />
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
