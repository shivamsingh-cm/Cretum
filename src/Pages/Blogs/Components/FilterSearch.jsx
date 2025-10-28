import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import RandomImage from '../../../assets/randomblog.jpg' 
const FilterSearch = () => {
  
  const POSTS_PER_PAGE = 4;


  const blogPosts = [
    { id: 1, imageUrl: RandomImage , tags: ["Leadership", "Management"], author: "Alec Whitten", date: "17 Jan 2022", title: "Bill Walsh leadership lessons", summary: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?", link: "#" },
    { id: 2, imageUrl: RandomImage , tags: ["Leadership", "Management"], author: "Demi Wilkinson", date: "16 Jan 2022", title: "PM mental models", summary: "Mental models are simple expressions of complex processes or relationships.", link: "#" },
    { id: 3, imageUrl: RandomImage , tags: ["Technology", "Innovation"], author: "Jane Doe", date: "15 Jan 2022", title: "The Future of AI in Business", summary: "Exploring how artificial intelligence is reshaping industries and workflows.", link: "#" },
    { id: 4, imageUrl: RandomImage , tags: ["Finance", "GST"], author: "John Smith", date: "14 Jan 2022", title: "Understanding GST for Small Businesses", summary: "A comprehensive guide to Goods and Services Tax for new entrepreneurs.", link: "#" },
    { id: 5, imageUrl: RandomImage, tags: ["Strategy"], author: "Chris Lee", date: "13 Jan 2022", title: "Strategic Planning in a Volatile Market", summary: "Tips on setting clear goals when market conditions are unpredictable.", link: "#" },
    { id: 6, imageUrl: RandomImage, tags: ["Tax"], author: "Priya Sharma", date: "12 Jan 2022", title: "Navigating the Latest Tax Amendments", summary: "Key changes in tax law that affect businesses this fiscal year.", link: "#" },
    { id: 7, imageUrl: RandomImage , tags: ["Compliance"], author: "Mike Ross", date: "11 Jan 2022", title: "The Importance of Regulatory Compliance", summary: "Why adhering to local and international regulations is crucial for growth.", link: "#" },
    { id: 8, imageUrl: RandomImage, tags: ["Brand"], author: "Sam Chen", date: "10 Jan 2022", title: "Building a Powerful Brand Narrative", summary: "How to use storytelling to connect with your target audience.", link: "#" },
    { id: 9, imageUrl: RandomImage , tags: ["Management"], author: "Alex Johnson", date: "09 Jan 2022", title: "Scaling Your Startup: From Idea to IPO", summary: "A roadmap for rapid business expansion and investment rounds.", link: "#" },
    { id: 10, imageUrl: RandomImage , tags: ["Finance"], author: "Maria Garcia", date: "08 Jan 2022", title: "Global Finance Trends of 2022", summary: "An overview of major shifts in global financial markets and predictions.", link: "#" },
  ];

  // State for filtering and pagination
  const [activeFilters, setActiveFilters] = useState(["Leadership", "Management", "Brand"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // New state for current page
  const [checkedCategories, setCheckedCategories] = useState({
    Leadership: true,
    Management: true,
    Brand: true,
    Tax: false,
    GST: false,
    Strategy: false,
    Technology: false,
    Compliance: false,
    Finance: false,
  });

  const availableCategories = ["Leadership", "Management", "Brand", "Tax", "GST", "Strategy", "Technology", "Compliance", "Finance"];

  // --- Filtering Logic ---
  const handleRemoveFilter = (filterToRemove) => {
    setActiveFilters(activeFilters.filter((filter) => filter !== filterToRemove));
    setCheckedCategories((prev) => ({ ...prev, [filterToRemove]: false }));
    setCurrentPage(1); // Reset page on filter change
  };

  const handleClearAllFilters = () => {
    setActiveFilters([]);
    setCheckedCategories(
      Object.keys(checkedCategories).reduce((acc, key) => ({ ...acc, [key]: false }), {})
    );
    setCurrentPage(1); // Reset page on filter change
  };

  const handleCategoryChange = (category) => {
    setCheckedCategories((prev) => {
      const newChecked = { ...prev, [category]: !prev[category] };
      const newActiveFilters = Object.keys(newChecked).filter((key) => newChecked[key]);
      setActiveFilters(newActiveFilters);
      setCurrentPage(1); // Reset page on filter change
      return newChecked;
    });
  };

  // 1. Filter posts based on active categories
  const filteredPosts = blogPosts.filter(post => {
    // If no categories are checked, show all posts (assuming search is handled separately if needed)
    if (activeFilters.length === 0) return true; 

    // Check if the post has at least one tag that is in the activeFilters list
    return post.tags.some(tag => activeFilters.includes(tag));
  });

  // --- Pagination Logic ---
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Optional: scroll to top of posts
      document.getElementById('posts-grid')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-backgroundPrimary text-gray-100 font-sans p-6 sm:p-10 lg:p-16">
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-8 sm:mb-10">
          All blog posts
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Sidebar / Filter Section (Left Column on Desktop)  */}
          <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-8">
            {/* Search Input */}
            <div className="flex flex-col sm:flex-row rounded-lg overflow-hidden border border-purple-700/50 focus-within:ring-2 focus-within:ring-purple-500">
              <input
                type="text"
                id="search-blogs"
                placeholder="Search Blogs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 bg-purple-900/40 text-gray-100 placeholder-gray-400 focus:outline-none"
              />
              <button
                className="bg-purple-700 hover:bg-purple-600 text-white font-medium py-3 px-6 transition duration-300 w-full sm:w-auto"
              >
                Search
              </button>
            </div>


            {/* Filters Section */}
            <div className="mt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold text-gray-100">Filters</span>
                <button
                  onClick={handleClearAllFilters}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium transition duration-200"
                >
                  Clear All
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeFilters.map((filter) => (
                  <span
                    key={filter}
                    className="inline-flex items-center bg-purple-700/50 text-purple-200 text-sm px-3 py-1 rounded-full"
                  >
                    {filter}
                    <button
                      onClick={() => handleRemoveFilter(filter)}
                      className="ml-2 text-purple-300 hover:text-purple-100"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <span className="text-xl font-semibold text-gray-100 mb-4 block">Category</span>
              <div className="space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {/* Custom scrollbar class is assumed for aesthetics in dark mode */}
                {availableCategories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      checked={checkedCategories[category]}
                      onChange={() => handleCategoryChange(category)}
                      className="form-checkbox h-5 w-5 text-purple-600 bg-purple-900/50 border-purple-700 rounded focus:ring-purple-500"
                    />
                    <label htmlFor={`category-${category}`} className="ml-3 text-lg text-gray-200 cursor-pointer">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* ======================= Blog Posts Grid (Right Column on Desktop) ======================= */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
            <main id="posts-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              {currentPosts?.length > 0 ? (
                currentPosts?.map((post) => (
                  <a
                    key={post.id}
                    href={post.link}
                    className="bg-purple-900/20 rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl flex flex-col group"
                  >
                    {/* Blog Post Image */}
                    <div className="relative w-full aspect-[3/2] overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover rounded-t-xl transition duration-500 group-hover:scale-105"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/6b21a8/ffffff?text=Image+Unavailable"; }}
                      />
                    </div>

                    {/* Blog Post Content */}
                    <div className="p-5 sm:p-6 flex-grow flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post?.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-purple-600/50 px-3 py-1 text-xs font-medium text-purple-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm sm:text-base text-purple-300 mb-2">
                        <span className="font-semibold">{post.author}</span> - {post.date}
                      </p>

                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg sm:text-xl font-medium text-gray-50 leading-snug transition duration-300 group-hover:text-purple-400">
                          {post.title}
                        </h3>
                        <ArrowUpRight className="ml-4 w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0 opacity-80 group-hover:opacity-100 transition duration-300" />
                      </div>

                      <p className="text-base sm:text-lg text-gray-300 flex-grow">
                        {post.summary}
                      </p>
                    </div>
                  </a>
                ))
              ) : (
                <p className="text-lg text-gray-400 md:col-span-2 text-center py-10">
                  No blog posts found matching your current filters.
                </p>
              )}
            </main>

            {/*  Pagination UI  */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2" aria-label="Pagination">
                  {/* Previous Button */}
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg text-lg transition duration-200 disabled:text-gray-600 disabled:cursor-not-allowed ${
                      currentPage !== 1
                        ? 'text-purple-400 hover:bg-purple-800/50'
                        : 'bg-purple-900/10'
                    }`}
                  >
                    &larr; Previous
                  </button>

                  {/* Page Numbers */}
                  {pageNumbers.map(number => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`px-4 py-2 rounded-lg text-lg font-medium transition duration-200 ${
                        number === currentPage
                          ? 'bg-purple-700 text-white shadow-lg'
                          : 'text-purple-400 hover:bg-purple-800/50'
                      }`}
                    >
                      {number}
                    </button>
                  ))}

                  {/* Next Button */}
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg text-lg transition duration-200 disabled:text-gray-600 disabled:cursor-not-allowed ${
                      currentPage !== totalPages
                        ? 'text-purple-400 hover:bg-purple-800/50'
                        : 'bg-purple-900/10'
                    }`}
                  >
                    Next &rarr;
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;