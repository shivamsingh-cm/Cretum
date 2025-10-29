import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import RandomImage from '../../../assets/randomblog.jpg' 


const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate('/showblog')
  }
  const featuredPost = {
    id: 1,
    category: "Featured",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    title: "Will students aspiring to study abroad lose a few months or a year this academic season",
    summary: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    imageUrl: RandomImage, 
    link: "#" // Link to the full article
  };

  return (
  
    <div className="min-h-screen bg-backgroundPrimary text-white py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header  */}
        <header className="text-center mb-16 sm:mb-20 mt-10 ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4">
            Blogs & Articles
          </h1>
          <p className="text-lg sm:text-lg font-normal text-gray-300 max-w-xl mx-auto">
            Subscribe to learn about new product features, the latest in technology, solutions, and updates.
          </p>
        </header>
        
        <p className="text-xl sm:text-2xl font-medium text-white mb-4 sm:mb-6">
          Recent blog posts
        </p>

        {/* ======================= Featured Post Card ======================= */}
        <div className="bg-backgroundPrimaryDark rounded-xl p-6 sm:p-8 shadow-2xl">
          <a 
            href={featuredPost.link}
            className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-12 group transition duration-300 ease-in-out"
            aria-label={`Read article: ${featuredPost.title}`}
          >
            {/* A. Image Container (Left Column on Desktop) */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={featuredPost.imageUrl}
                  alt="A student looking at the sky, representing study abroad aspirations."
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/6b21a8/ffffff?text=Image+Unavailable"; }}
                />
              </div>
            </div>

            {/* B. Content Container (Right Column on Desktop) */}
            <div className="w-full lg:w-2/3 flex flex-col justify-center py-2">
              
              {/* Featured Tag */}
              <span className="inline-flex text-sm font-normal items-center rounded-full bg-buttonBackground px-3 py-1  text-purple-200 w-fit mb-4">
                {featuredPost.category}
              </span>

              {/* Author and Date */}
              <p className="text-base sm:text-lg text-purple-300 mb-3">
                <span className="font-normal">{featuredPost.author}</span> - {featuredPost.date}
              </p>

              {/* Title and Icon */}
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-50 leading-snug transition duration-300 group-hover:text-purple-400">
                  {featuredPost.title}
                </h2>
                {/* External Link Icon */}
                <ArrowUpRight onClick={handleClick} className="ml-4 w-6 h-6 text-purple-400 flex-shrink-0 opacity-80 group-hover:opacity-100 transition duration-300" />
              </div>

              {/* Summary */}
              <p className="text-lg sm:text-xl font-normal text-gray-300">
                {featuredPost.summary}
              </p>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;