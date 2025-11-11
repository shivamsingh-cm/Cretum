

// import React, { useState, useEffect } from 'react';
// import { ArrowUpRight } from 'lucide-react';
// import { BlocksRenderer } from '@strapi/blocks-react-renderer';
// import Pagination from '../../../Components/Common/Pagination';
// import { blogApi } from '../../../api/blog';

// const FilterSearch = () => {
//   const POSTS_PER_PAGE = 1;
  
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeFilters, setActiveFilters] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [totalPosts, setTotalPosts] = useState(0);
  
//   const [checkedCategories, setCheckedCategories] = useState({
//     Leadership: false,
//     Management: false,
//     Brand: false,
//     Tax: false,
//     GST: false,
//     Strategy: false,
//     Technology: false,
//     Compliance: false,
//     Finance: false,
//     Lifestyle: false,
//   });

//   const availableCategories = ["Leadership", "Management", "Brand", "Tax", "GST", "Strategy", "Technology", "Compliance", "Finance", "Lifestyle"];

//   // Custom function to truncate text to 4 lines
//   const truncateToLines = (text, maxLines = 4) => {
//     if (!text || typeof text !== 'string') return text;
    
//     const maxCharsPerLine = 60;
//     const maxChars = maxCharsPerLine * maxLines;
    
//     if (text.length <= maxChars) return text;
    
//     const truncated = text.substring(0, maxChars);
//     const lastSpace = truncated.lastIndexOf(' ');
    
//     if (lastSpace > maxChars - 20) {
//       return text.substring(0, lastSpace) + '...';
//     }
    
//     return truncated + '...';
//   };

//   // Fetch blog posts from API with pagination
//   const fetchBlogPosts = async (page = 1, pageSize = POSTS_PER_PAGE) => {
//     try {
//       setLoading(true);
      
//       // Use the paginated API call
//       const response = await blogApi.fetchBlogs(page, pageSize);
      
//       setBlogPosts(response.posts);
//       setTotalPages(response.pagination.pageCount);
//       setTotalPosts(response.pagination.total);
//       setCurrentPage(response.pagination.page);
      
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching blog posts:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch posts when component mounts or page changes
//   useEffect(() => {
//     fetchBlogPosts(currentPage, POSTS_PER_PAGE);
//   }, [currentPage]);

//   // Filtering Logic
//   const handleRemoveFilter = (filterToRemove) => {
//     setActiveFilters(activeFilters.filter((filter) => filter !== filterToRemove));
//     setCheckedCategories((prev) => ({ ...prev, [filterToRemove]: false }));
//   };

//   const handleClearAllFilters = () => {
//     setActiveFilters([]);
//     setCheckedCategories(
//       Object.keys(checkedCategories).reduce((acc, key) => ({ ...acc, [key]: false }), {})
//     );
//   };

//   const handleCategoryChange = (category) => {
//     setCheckedCategories((prev) => {
//       const newChecked = { ...prev, [category]: !prev[category] };
//       const newActiveFilters = Object.keys(newChecked).filter((key) => newChecked[key]);
//       setActiveFilters(newActiveFilters);
//       return newChecked;
//     });
//   };

//   // Handle page change
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     document.getElementById('posts-grid')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   // Filter posts based on active categories (client-side filtering)
//   const filteredPosts = blogPosts.filter(post => {
//     if (activeFilters.length === 0) return true;
    
//     // Check if post has any tag that matches active filters
//     return post.tags && post.tags.some(tag => 
//       activeFilters.some(filter => 
//         tag.toLowerCase().includes(filter.toLowerCase())
//       )
//     );
//   });

//   // Handle search
//   const handleSearch = async (e) => {
//     e.preventDefault();
    
//     if (searchTerm.trim()) {
//       try {
//         setLoading(true);
//         // For search, fetch all data first
//         await blogApi.fetchAllBlogs();
//         const searchedPosts = blogApi.searchBlogs(searchTerm);
        
//         // Client-side pagination for search results
//         const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
//         const endIndex = startIndex + POSTS_PER_PAGE;
//         const paginatedResults = searchedPosts.slice(startIndex, endIndex);
        
//         setBlogPosts(paginatedResults);
//         setTotalPages(Math.ceil(searchedPosts.length / POSTS_PER_PAGE));
//         setTotalPosts(searchedPosts.length);
        
//       } catch (err) {
//         setError(err.message);
//         console.error('Error searching blogs:', err);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       // If search is cleared, go back to normal paginated fetch
//       fetchBlogPosts(1, POSTS_PER_PAGE);
//     }
//   };

//   // Reset to normal pagination when filters are cleared
//   useEffect(() => {
//     if (activeFilters.length === 0 && !searchTerm.trim()) {
//       fetchBlogPosts(1, POSTS_PER_PAGE);
//     }
//   }, [activeFilters, searchTerm]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-backgroundPrimary text-gray-100 font-sans p-6 sm:p-10 lg:p-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-center items-center h-64">
//             <div className="text-purple-400 text-lg">Loading blog posts...</div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-backgroundPrimary text-gray-100 font-sans p-6 sm:p-10 lg:p-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-center items-center h-64">
//             <div className="text-red-400 text-lg">Error: {error}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-backgroundPrimary text-gray-100 font-sans p-6 sm:p-10 lg:p-16">
//       <div className="max-w-7xl mx-auto">

//         {/* Page Title */}
//         <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-white mb-8 sm:mb-10">
//           All blog posts
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

//           {/* Sidebar / Filter Section */}
//           <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-8">
//             {/* Search Input */}
//             <form onSubmit={handleSearch} className="flex flex-col sm:flex-row rounded-lg overflow-hidden border border-purple-700/50 focus-within:ring-2 focus-within:ring-purple-500">
//               <input
//                 type="text"
//                 id="search-blogs"
//                 placeholder="Search Blogs"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full p-3 bg-purple-900/40 text-gray-100 placeholder-gray-400 focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="bg-purple-700 hover:bg-purple-600 text-white font-medium py-3 px-6 transition duration-300 w-full sm:w-auto"
//               >
//                 Search
//               </button>
//             </form>

//             {/* Filters Section */}
//             <div className="mt-4">
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-base font-normal text-gray-100">Filters</span>
//                 <button
//                   onClick={handleClearAllFilters}
//                   className="text-purple-400 hover:text-purple-300 text-sm font-normal transition duration-200"
//                 >
//                   Clear All
//                 </button>
//               </div>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {activeFilters.map((filter) => (
//                   <span
//                     key={filter}
//                     className="inline-flex items-center bg-purple-700/50 text-purple-200 text-sm px-3 py-1 rounded-full"
//                   >
//                     {filter}
//                     <button
//                       onClick={() => handleRemoveFilter(filter)}
//                       className="ml-2 text-purple-300 hover:text-purple-100"
//                     >
//                       &times;
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Category Filter - Scrollbar Hidden */}
//             <div>
//               <span className="text-base font-normal text-gray-100 mb-4 block">Category</span>
//               <div className="space-y-3 max-h-64 overflow-y-auto 
//                               [-ms-overflow-style:none] [scrollbar-width:none] 
//                               [&::-webkit-scrollbar]:hidden">
//                 {availableCategories.map((category) => (
//                   <div key={category} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id={`category-${category}`}
//                       checked={checkedCategories[category]}
//                       onChange={() => handleCategoryChange(category)}
//                       className="form-checkbox h-5 w-5 text-purple-600 bg-purple-900/50 border-purple-700 rounded focus:ring-purple-500"
//                     />
//                     <label htmlFor={`category-${category}`} className="ml-3 text-sm font-normal text-gray-200 cursor-pointer">
//                       {category}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </aside>

//           {/* Blog Posts Grid */}
//           <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
//             <main id="posts-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
//               {filteredPosts.length > 0 ? (
//                 filteredPosts.map((post) => (
//                   <a
//                     key={post.id}
//                     href={`/showblog/${post.slug}`}
//                     className="bg-purple-900/20 rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl flex flex-col group"
//                   >
//                     {/* Blog Post Image */}
//                     <div className="relative w-full aspect-[3/2] overflow-hidden">
//                       <img
//                         src={post.imageUrl}
//                         alt={post.title}
//                         className="w-full h-full object-cover rounded-t-xl transition duration-500 group-hover:scale-105"
//                         onError={(e) => { 
//                           e.target.onerror = null; 
//                           e.target.src = "https://placehold.co/600x400/6b21a8/ffffff?text=Image+Unavailable"; 
//                         }}
//                       />
//                     </div>

//                     {/* Blog Post Content */}
//                     <div className="p-5 sm:p-6 flex-grow flex flex-col">
//                       {/* Tags */}
//                       {post.tags && post.tags.length > 0 && (
//                         <div className="flex flex-wrap gap-2 mb-3">
//                           {post.tags.slice(0, 3).map((tag, index) => (
//                             <span
//                               key={index}
//                               className="inline-flex items-center rounded-full bg-purple-600/50 px-3 py-1 text-sm font-normal text-purple-200"
//                             >
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
//                       )}

//                       {/* Date */}
//                       <p className="text-sm sm:text-base md:text-lg font-normal text-purple-300 mb-2">
//                         {post.date}
//                       </p>

//                       {/* Title and Icon */}
//                       <div className="flex items-start justify-between mb-3">
//                         <h3 className="text-lg sm:text-xl font-medium text-gray-50 leading-snug transition duration-300 group-hover:text-purple-400 flex-1">
//                           {truncateToLines(post.title, 2)}
//                         </h3>
//                         <ArrowUpRight className="ml-4 w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0 opacity-80 group-hover:opacity-100 transition duration-300 mt-1" />
//                       </div>

//                       {/* Summary limited to 4 lines using custom function */}
//                       <p className="text-base sm:text-base font-normal text-gray-300 flex-grow">
//                         {truncateToLines(post.summary, 4)}
//                       </p>
//                     </div>
//                   </a>
//                 ))
//               ) : (
//                 <p className="text-lg text-gray-400 md:col-span-2 text-center py-10">
//                   No blog posts found matching your current filters.
//                 </p>
//               )}
//             </main>

//             {/* Reusable Pagination Component */}
//             {totalPages > 1 && (
//               <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={handlePageChange}
//                 className="mt-12"
//                 showFirstLast={true}
//                 showPreviousNext={true}
//                 showPageNumbers={true}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterSearch;

// import React, { useState, useEffect } from 'react';
// import { ArrowUpRight } from 'lucide-react';
// import { BlocksRenderer } from '@strapi/blocks-react-renderer';
// import Pagination from '../../../Components/Common/Pagination';
// import { blogApi } from '../../../api/blog';

// const FilterSearch = () => {
//   const POSTS_PER_PAGE = 1;
  
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [allBlogPosts, setAllBlogPosts] = useState([]); // Store all posts for client-side filtering
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeFilters, setActiveFilters] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [totalPosts, setTotalPosts] = useState(0);
//   const [isSearchActive, setIsSearchActive] = useState(false);
  
//   const [checkedCategories, setCheckedCategories] = useState({
//     Leadership: false,
//     Management: false,
//     Brand: false,
//     Tax: false,
//     GST: false,
//     Strategy: false,
//     Technology: false,
//     Compliance: false,
//     Finance: false,
//     Lifestyle: false,
//   });

//   const availableCategories = ["Leadership", "Management", "Brand", "Tax", "GST", "Strategy", "Technology", "Compliance", "Finance", "Lifestyle"];

//   // Custom function to truncate text to 4 lines
//   const truncateToLines = (text, maxLines = 4) => {
//     if (!text || typeof text !== 'string') return text;
    
//     const maxCharsPerLine = 60;
//     const maxChars = maxCharsPerLine * maxLines;
    
//     if (text.length <= maxChars) return text;
    
//     const truncated = text.substring(0, maxChars);
//     const lastSpace = truncated.lastIndexOf(' ');
    
//     if (lastSpace > maxChars - 20) {
//       return text.substring(0, lastSpace) + '...';
//     }
    
//     return truncated + '...';
//   };

//   // Fetch all blog posts for client-side filtering
//   const fetchAllBlogPosts = async () => {
//     try {
//       setLoading(true);
//       const response = await blogApi.fetchAllBlogs(); // Assuming this returns all posts
      
//       // Ensure we always have an array, handle different response structures
//       let postsArray = [];
      
//       if (Array.isArray(response)) {
//         postsArray = response;
//       } else if (response && Array.isArray(response.posts)) {
//         postsArray = response.posts;
//       } else if (response && response.data && Array.isArray(response.data)) {
//         postsArray = response.data;
//       }
      
//       setAllBlogPosts(postsArray);
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching all blog posts:', err);
//       setAllBlogPosts([]); // Set empty array on error
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch paginated blog posts from API
//   const fetchBlogPosts = async (page = 1, pageSize = POSTS_PER_PAGE) => {
//     try {
//       setLoading(true);
//       const response = await blogApi.fetchBlogs(page, pageSize);
      
//       setBlogPosts(response.posts || []);
//       setTotalPages(response.pagination?.pageCount || 0);
//       setTotalPosts(response.pagination?.total || 0);
//       setCurrentPage(response.pagination?.page || 1);
      
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching blog posts:', err);
//       setBlogPosts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch posts when component mounts
//   useEffect(() => {
//     fetchAllBlogPosts(); // For client-side filtering
//     fetchBlogPosts(1, POSTS_PER_PAGE); // For initial paginated view
//   }, []);

//   // Filtering Logic
//   const handleRemoveFilter = (filterToRemove) => {
//     const newActiveFilters = activeFilters.filter((filter) => filter !== filterToRemove);
//     setActiveFilters(newActiveFilters);
//     setCheckedCategories((prev) => ({ ...prev, [filterToRemove]: false }));
    
//     // Reset to paginated view if no filters and no search
//     if (newActiveFilters.length === 0 && !isSearchActive) {
//       fetchBlogPosts(1, POSTS_PER_PAGE);
//       setIsSearchActive(false);
//     }
//   };

//   const handleClearAllFilters = () => {
//     setActiveFilters([]);
//     setCheckedCategories(
//       Object.keys(checkedCategories).reduce((acc, key) => ({ ...acc, [key]: false }), {})
//     );
//     setSearchTerm("");
//     setIsSearchActive(false);
    
//     // Reset to normal paginated view
//     fetchBlogPosts(1, POSTS_PER_PAGE);
//   };

//   const handleCategoryChange = (category) => {
//     setCheckedCategories((prev) => {
//       const newChecked = { ...prev, [category]: !prev[category] };
//       const newActiveFilters = Object.keys(newChecked).filter((key) => newChecked[key]);
//       setActiveFilters(newActiveFilters);
      
//       // If filters are applied, switch to client-side filtering
//       if (newActiveFilters.length > 0) {
//         setIsSearchActive(true);
//         setCurrentPage(1); // Reset to first page when applying filters
//       } else {
//         setIsSearchActive(false);
//         fetchBlogPosts(1, POSTS_PER_PAGE);
//       }
      
//       return newChecked;
//     });
//   };

//   // Handle page change
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
    
//     // Only fetch new data if not in search/filter mode
//     if (!isSearchActive && activeFilters.length === 0) {
//       fetchBlogPosts(page, POSTS_PER_PAGE);
//     }
    
//     document.getElementById('posts-grid')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   // Apply filters and search to all posts - SAFE VERSION
//   const getFilteredPosts = () => {
//     // If no active search or filters, return paginated posts
//     if (!isSearchActive && activeFilters.length === 0) {
//       return blogPosts || [];
//     }

//     // Start with all posts for client-side filtering
//     let filtered = Array.isArray(allBlogPosts) ? allBlogPosts : [];

//     // Apply category filters if any
//     if (activeFilters.length > 0 && Array.isArray(filtered)) {
//       filtered = filtered.filter(post => {
//         if (!post || !post.tags || !Array.isArray(post.tags)) return false;
        
//         return post.tags.some(tag => 
//           activeFilters.some(filter => 
//             String(tag).toLowerCase().includes(String(filter).toLowerCase())
//           )
//         );
//       });
//     }

//     // Apply search filter if any
//     if (searchTerm.trim() && Array.isArray(filtered)) {
//       const searchLower = searchTerm.toLowerCase();
//       filtered = filtered.filter(post => {
//         if (!post) return false;
        
//         return (
//           String(post.title || '').toLowerCase().includes(searchLower) ||
//           String(post.summary || '').toLowerCase().includes(searchLower) ||
//           (Array.isArray(post.tags) && 
//             post.tags.some(tag => 
//               String(tag).toLowerCase().includes(searchLower)
//             )
//           )
//         );
//       });
//     }

//     return filtered || [];
//   };

//   // Get paginated results for filtered posts
//   const getPaginatedPosts = (posts) => {
//     if (!Array.isArray(posts)) return [];
    
//     const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
//     const endIndex = startIndex + POSTS_PER_PAGE;
//     return posts.slice(startIndex, endIndex);
//   };

//   // Handle search
//   const handleSearch = async (e) => {
//     e.preventDefault();
    
//     if (searchTerm.trim()) {
//       setIsSearchActive(true);
//       setCurrentPage(1); // Reset to first page when searching
//     } else {
//       // If search is cleared, go back to normal paginated fetch
//       setIsSearchActive(false);
//       setCurrentPage(1);
//       fetchBlogPosts(1, POSTS_PER_PAGE);
//     }
//   };

//   // Clear search and reset
//   const handleClearSearch = () => {
//     setSearchTerm("");
//     setIsSearchActive(false);
//     setCurrentPage(1);
//     fetchBlogPosts(1, POSTS_PER_PAGE);
//   };

//   // Calculate displayed posts and pagination
//   const filteredPosts = getFilteredPosts();
//   const displayedPosts = isSearchActive || activeFilters.length > 0 
//     ? getPaginatedPosts(filteredPosts) 
//     : filteredPosts;
  
//   const calculatedTotalPages = isSearchActive || activeFilters.length > 0
//     ? Math.ceil((Array.isArray(filteredPosts) ? filteredPosts.length : 0) / POSTS_PER_PAGE)
//     : totalPages;

//   const showNoResultsMessage = displayedPosts.length === 0 && (isSearchActive || activeFilters.length > 0);
//   const showPagination = calculatedTotalPages > 1 && !showNoResultsMessage && displayedPosts.length > 0;

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-backgroundPrimary text-gray-100 font-sans p-6 sm:p-10 lg:p-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-center items-center h-64">
//             <div className="text-purple-400 text-lg">Loading blog posts...</div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-backgroundPrimary text-gray-100 font-sans p-6 sm:p-10 lg:p-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-center items-center h-64">
//             <div className="text-red-400 text-lg">Error: {error}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-backgroundPrimary text-gray-100 font-sans p-6 sm:p-10 lg:p-16">
//       <div className="max-w-7xl mx-auto">

//         {/* Page Title */}
//         <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-white mb-8 sm:mb-10">
//           All blog posts
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

//           {/* Sidebar / Filter Section */}
//           <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-8">
//             {/* Search Input */}
//             <form onSubmit={handleSearch} className="flex flex-col sm:flex-row rounded-lg overflow-hidden border border-purple-700/50 focus-within:ring-2 focus-within:ring-purple-500">
//               <input
//                 type="text"
//                 id="search-blogs"
//                 placeholder="Search Blogs"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full p-3 bg-purple-900/40 text-gray-100 placeholder-gray-400 focus:outline-none"
//               />
//               <div className="flex">
//                 {searchTerm && (
//                   <button
//                     type="button"
//                     onClick={handleClearSearch}
//                     className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-3 px-4 transition duration-300"
//                   >
//                     ✕
//                   </button>
//                 )}
//                 <button
//                   type="submit"
//                   className="bg-purple-700 hover:bg-purple-600 text-white font-medium py-3 px-6 transition duration-300 w-full sm:w-auto"
//                 >
//                   Search
//                 </button>
//               </div>
//             </form>

//             {/* Active Filters Section */}
//             {(activeFilters.length > 0 || isSearchActive) && (
//               <div className="mt-4">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-base font-normal text-gray-100">Active Filters</span>
//                   <button
//                     onClick={handleClearAllFilters}
//                     className="text-purple-400 hover:text-purple-300 text-sm font-normal transition duration-200"
//                   >
//                     Clear All
//                   </button>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {isSearchActive && searchTerm && (
//                     <span className="inline-flex items-center bg-purple-700/50 text-purple-200 text-sm px-3 py-1 rounded-full">
//                       Search: "{searchTerm}"
//                       <button
//                         onClick={handleClearSearch}
//                         className="ml-2 text-purple-300 hover:text-purple-100"
//                       >
//                         &times;
//                       </button>
//                     </span>
//                   )}
//                   {activeFilters.map((filter) => (
//                     <span
//                       key={filter}
//                       className="inline-flex items-center bg-purple-700/50 text-purple-200 text-sm px-3 py-1 rounded-full"
//                     >
//                       {filter}
//                       <button
//                         onClick={() => handleRemoveFilter(filter)}
//                         className="ml-2 text-purple-300 hover:text-purple-100"
//                       >
//                         &times;
//                       </button>
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Category Filter - Scrollbar Hidden */}
//             <div>
//               <span className="text-base font-normal text-gray-100 mb-4 block">Category</span>
//               <div className="space-y-3 max-h-64 overflow-y-auto 
//                               [-ms-overflow-style:none] [scrollbar-width:none] 
//                               [&::-webkit-scrollbar]:hidden">
//                 {availableCategories.map((category) => (
//                   <div key={category} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id={`category-${category}`}
//                       checked={checkedCategories[category]}
//                       onChange={() => handleCategoryChange(category)}
//                       className="form-checkbox h-5 w-5 text-purple-600 bg-purple-900/50 border-purple-700 rounded focus:ring-purple-500"
//                     />
//                     <label htmlFor={`category-${category}`} className="ml-3 text-sm font-normal text-gray-200 cursor-pointer">
//                       {category}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </aside>

//           {/* Blog Posts Grid */}
//           <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
//             <main id="posts-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
//               {showNoResultsMessage ? (
//                 <div className="md:col-span-2 text-center py-10">
//                   <p className="text-lg text-gray-400 mb-4">
//                     No blog posts found matching your current filters.
//                   </p>
//                   <button
//                     onClick={handleClearAllFilters}
//                     className="bg-purple-700 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
//                   >
//                     Clear all filters
//                   </button>
//                 </div>
//               ) : (
//                 displayedPosts.map((post) => (
//                   <a
//                     key={post.id}
//                     href={`/showblog/${post.slug}`}
//                     className="bg-purple-900/20 rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl flex flex-col group"
//                   >
//                     {/* Blog Post Image */}
//                     <div className="relative w-full aspect-[3/2] overflow-hidden">
//                       <img
//                         src={post.imageUrl}
//                         alt={post.title}
//                         className="w-full h-full object-cover rounded-t-xl transition duration-500 group-hover:scale-105"
//                         onError={(e) => { 
//                           e.target.onerror = null; 
//                           e.target.src = "https://placehold.co/600x400/6b21a8/ffffff?text=Image+Unavailable"; 
//                         }}
//                       />
//                     </div>

//                     {/* Blog Post Content */}
//                     <div className="p-5 sm:p-6 flex-grow flex flex-col">
//                       {/* Tags */}
//                       {post.tags && post.tags.length > 0 && (
//                         <div className="flex flex-wrap gap-2 mb-3">
//                           {post.tags.slice(0, 3).map((tag, index) => (
//                             <span
//                               key={index}
//                               className="inline-flex items-center rounded-full bg-purple-600/50 px-3 py-1 text-sm font-normal text-purple-200"
//                             >
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
//                       )}

//                       {/* Date */}
//                       <p className="text-sm sm:text-base md:text-lg font-normal text-purple-300 mb-2">
//                         {post.date}
//                       </p>

//                       {/* Title and Icon */}
//                       <div className="flex items-start justify-between mb-3">
//                         <h3 className="text-lg sm:text-xl font-medium text-gray-50 leading-snug transition duration-300 group-hover:text-purple-400 flex-1">
//                           {truncateToLines(post.title, 2)}
//                         </h3>
//                         <ArrowUpRight className="ml-4 w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0 opacity-80 group-hover:opacity-100 transition duration-300 mt-1" />
//                       </div>

//                       {/* Summary limited to 4 lines using custom function */}
//                       <p className="text-base sm:text-base font-normal text-gray-300 flex-grow">
//                         {truncateToLines(post.summary, 4)}
//                       </p>
//                     </div>
//                   </a>
//                 ))
//               )}
//             </main>

//             {/* Reusable Pagination Component */}
//             {showPagination && (
//               <Pagination
//                 currentPage={currentPage}
//                 totalPages={calculatedTotalPages}
//                 onPageChange={handlePageChange}
//                 className="mt-12"
//                 showFirstLast={true}
//                 showPreviousNext={true}
//                 showPageNumbers={true}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterSearch;

import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Pagination from '../../../Components/Common/Pagination';
import { blogApi } from '../../../api/blog';

const FilterSearch = ({ currentPage: propCurrentPage, onPageChange }) => {
  const POSTS_PER_PAGE = 1;
  
  const [blogPosts, setBlogPosts] = useState([]);
  const [allBlogPosts, setAllBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [isSearchActive, setIsSearchActive] = useState(false);
  
  const [checkedCategories, setCheckedCategories] = useState({
    Leadership: false,
    Management: false,
    Brand: false,
    Tax: false,
    GST: false,
    Strategy: false,
    Technology: false,
    Compliance: false,
    Finance: false,
    Lifestyle: false,
  });

  const availableCategories = ["Leadership", "Management", "Brand", "Tax", "GST", "Strategy", "Technology", "Compliance", "Finance", "Lifestyle"];

  // Use prop current page or default to 1
  const [internalCurrentPage, setInternalCurrentPage] = useState(propCurrentPage || 1);

  // Sync with prop changes
  useEffect(() => {
    if (propCurrentPage && propCurrentPage !== internalCurrentPage) {
      setInternalCurrentPage(propCurrentPage);
    }
  }, [propCurrentPage]);

  // Custom function to truncate text to 4 lines
  const truncateToLines = (text, maxLines = 4) => {
    if (!text || typeof text !== 'string') return text;
    
    const maxCharsPerLine = 60;
    const maxChars = maxCharsPerLine * maxLines;
    
    if (text.length <= maxChars) return text;
    
    const truncated = text.substring(0, maxChars);
    const lastSpace = truncated.lastIndexOf(' ');
    
    if (lastSpace > maxChars - 20) {
      return text.substring(0, lastSpace) + '...';
    }
    
    return truncated + '...';
  };

  // Fetch all blog posts for client-side filtering
  const fetchAllBlogPosts = async () => {
    try {
      setLoading(true);
      const response = await blogApi.fetchAllBlogs();
      
      let postsArray = [];
      
      if (Array.isArray(response)) {
        postsArray = response;
      } else if (response && Array.isArray(response.posts)) {
        postsArray = response.posts;
      } else if (response && response.data && Array.isArray(response.data)) {
        postsArray = response.data;
      }
      
      setAllBlogPosts(postsArray);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching all blog posts:', err);
      setAllBlogPosts([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch paginated blog posts from API
  const fetchBlogPosts = async (page = internalCurrentPage, pageSize = POSTS_PER_PAGE) => {
    try {
      setLoading(true);
      const response = await blogApi.fetchBlogs(page, pageSize);
      
      setBlogPosts(response.posts || []);
      setTotalPages(response.pagination?.pageCount || 0);
      setTotalPosts(response.pagination?.total || 0);
      
    } catch (err) {
      setError(err.message);
      console.error('Error fetching blog posts:', err);
      setBlogPosts([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts when component mounts or page changes
  useEffect(() => {
    fetchAllBlogPosts();
    fetchBlogPosts(internalCurrentPage, POSTS_PER_PAGE);
  }, [internalCurrentPage]);

  // Filtering Logic
  const handleRemoveFilter = (filterToRemove) => {
    const newActiveFilters = activeFilters.filter((filter) => filter !== filterToRemove);
    setActiveFilters(newActiveFilters);
    setCheckedCategories((prev) => ({ ...prev, [filterToRemove]: false }));
    
    // Reset to paginated view if no filters and no search
    if (newActiveFilters.length === 0 && !isSearchActive) {
      if (onPageChange) {
        onPageChange(1); // Navigate to first page
      } else {
        setInternalCurrentPage(1);
      }
      setIsSearchActive(false);
    }
  };

  const handleClearAllFilters = () => {
    setActiveFilters([]);
    setCheckedCategories(
      Object.keys(checkedCategories).reduce((acc, key) => ({ ...acc, [key]: false }), {})
    );
    setSearchTerm("");
    setIsSearchActive(false);
    
    // Reset to normal paginated view and navigate to first page
    if (onPageChange) {
      onPageChange(1);
    } else {
      setInternalCurrentPage(1);
    }
  };

  const handleCategoryChange = (category) => {
    setCheckedCategories((prev) => {
      const newChecked = { ...prev, [category]: !prev[category] };
      const newActiveFilters = Object.keys(newChecked).filter((key) => newChecked[key]);
      setActiveFilters(newActiveFilters);
      
      // If filters are applied, switch to client-side filtering
      if (newActiveFilters.length > 0) {
        setIsSearchActive(true);
        if (onPageChange) {
          onPageChange(1);
        } else {
          setInternalCurrentPage(1);
        }
      } else {
        setIsSearchActive(false);
        if (onPageChange) {
          onPageChange(1);
        } else {
          setInternalCurrentPage(1);
        }
      }
      
      return newChecked;
    });
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (onPageChange) {
      // Use parent component's navigation
      onPageChange(page);
    } else {
      // Fallback to internal state management
      setInternalCurrentPage(page);
    }
    
    // Only fetch new data if not in search/filter mode
    if (!isSearchActive && activeFilters.length === 0) {
      if (!onPageChange) {
        // If using internal state, fetch data
        fetchBlogPosts(page, POSTS_PER_PAGE);
      }
    }
    
    document.getElementById('posts-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Apply filters and search to all posts
  const getFilteredPosts = () => {
    if (!isSearchActive && activeFilters.length === 0) {
      return blogPosts || [];
    }

    let filtered = Array.isArray(allBlogPosts) ? allBlogPosts : [];

    // Apply category filters if any
    if (activeFilters.length > 0 && Array.isArray(filtered)) {
      filtered = filtered.filter(post => {
        if (!post || !post.tags || !Array.isArray(post.tags)) return false;
        
        return post.tags.some(tag => 
          activeFilters.some(filter => 
            String(tag).toLowerCase().includes(String(filter).toLowerCase())
          )
        );
      });
    }

    // Apply search filter if any
    if (searchTerm.trim() && Array.isArray(filtered)) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(post => {
        if (!post) return false;
        
        return (
          String(post.title || '').toLowerCase().includes(searchLower) ||
          String(post.summary || '').toLowerCase().includes(searchLower) ||
          (Array.isArray(post.tags) && 
            post.tags.some(tag => 
              String(tag).toLowerCase().includes(searchLower)
            )
          )
        );
      });
    }

    return filtered || [];
  };

  // Get paginated results for filtered posts
  const getPaginatedPosts = (posts) => {
    if (!Array.isArray(posts)) return [];
    
    const startIndex = (internalCurrentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return posts.slice(startIndex, endIndex);
  };

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (searchTerm.trim()) {
      setIsSearchActive(true);
      if (onPageChange) {
        onPageChange(1);
      } else {
        setInternalCurrentPage(1);
      }
    } else {
      // If search is cleared, go back to normal paginated fetch
      setIsSearchActive(false);
      if (onPageChange) {
        onPageChange(1);
      } else {
        setInternalCurrentPage(1);
      }
    }
  };

  // Clear search and reset
  const handleClearSearch = () => {
    setSearchTerm("");
    setIsSearchActive(false);
    if (onPageChange) {
      onPageChange(1);
    } else {
      setInternalCurrentPage(1);
    }
  };

  // Calculate displayed posts and pagination
  const filteredPosts = getFilteredPosts();
  const displayedPosts = isSearchActive || activeFilters.length > 0 
    ? getPaginatedPosts(filteredPosts) 
    : filteredPosts;
  
  const calculatedTotalPages = isSearchActive || activeFilters.length > 0
    ? Math.ceil((Array.isArray(filteredPosts) ? filteredPosts.length : 0) / POSTS_PER_PAGE)
    : totalPages;

  const showNoResultsMessage = displayedPosts.length === 0 && (isSearchActive || activeFilters.length > 0);
  const showPagination = calculatedTotalPages > 1 && !showNoResultsMessage && displayedPosts.length > 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-backgroundPrimary text-gray-100 font-sans p-6 sm:p-10 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="text-purple-400 text-lg">Loading blog posts...</div>
          </div>
        </div>
      </div>
    );
  }


  if (error) {
    return (
      <div className="min-h-screen bg-backgroundPrimary text-gray-100 font-sans p-6 sm:p-10 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="text-red-400 text-lg">Error: {error}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-backgroundPrimary text-gray-100 font-sans p-6 sm:p-10 lg:p-16">
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-white mb-8 sm:mb-10">
          All blog posts
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Sidebar / Filter Section */}
          <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-8">
            {/* Search Input */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row rounded-lg overflow-hidden border border-purple-700/50 focus-within:ring-2 focus-within:ring-purple-500">
              <input
                type="text"
                id="search-blogs"
                placeholder="Search Blogs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 bg-purple-900/40 text-gray-100 placeholder-gray-400 focus:outline-none"
              />
              <div className="flex">
                {searchTerm && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-3 px-4 transition duration-300"
                  >
                    ✕
                  </button>
                )}
                <button
                  type="submit"
                  className="bg-purple-700 hover:bg-purple-600 text-white font-medium py-3 px-6 transition duration-300 w-full sm:w-auto"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Active Filters Section */}
            {(activeFilters.length > 0 || isSearchActive) && (
              <div className="mt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-base font-normal text-gray-100">Active Filters</span>
                  <button
                    onClick={handleClearAllFilters}
                    className="text-purple-400 hover:text-purple-300 text-sm font-normal transition duration-200"
                  >
                    Clear All
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {isSearchActive && searchTerm && (
                    <span className="inline-flex items-center bg-purple-700/50 text-purple-200 text-sm px-3 py-1 rounded-full">
                      Search: "{searchTerm}"
                      <button
                        onClick={handleClearSearch}
                        className="ml-2 text-purple-300 hover:text-purple-100"
                      >
                        &times;
                      </button>
                    </span>
                  )}
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
            )}

            {/* Category Filter - Scrollbar Hidden */}
            <div>
              <span className="text-base font-normal text-gray-100 mb-4 block">Category</span>
              <div className="space-y-3 max-h-64 overflow-y-auto 
                              [-ms-overflow-style:none] [scrollbar-width:none] 
                              [&::-webkit-scrollbar]:hidden">
                {availableCategories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      checked={checkedCategories[category]}
                      onChange={() => handleCategoryChange(category)}
                      className="form-checkbox h-5 w-5 text-purple-600 bg-purple-900/50 border-purple-700 rounded focus:ring-purple-500"
                    />
                    <label htmlFor={`category-${category}`} className="ml-3 text-sm font-normal text-gray-200 cursor-pointer">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Blog Posts Grid */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
            <main id="posts-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              {showNoResultsMessage ? (
                <div className="md:col-span-2 text-center py-10">
                  <p className="text-lg text-gray-400 mb-4">
                    No blog posts found matching your current filters.
                  </p>
                  <button
                    onClick={handleClearAllFilters}
                    className="bg-purple-700 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                displayedPosts.map((post) => (
                  <a
                    key={post.id}
                    href={`/showblog/${post.slug}`}
                    className="bg-purple-900/20 rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl flex flex-col group"
                  >
                    {/* Blog Post Image */}
                    <div className="relative w-full aspect-[3/2] overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover rounded-t-xl transition duration-500 group-hover:scale-105"
                        onError={(e) => { 
                          e.target.onerror = null; 
                          e.target.src = "https://placehold.co/600x400/6b21a8/ffffff?text=Image+Unavailable"; 
                        }}
                      />
                    </div>

                    {/* Blog Post Content */}
                    <div className="p-5 sm:p-6 flex-grow flex flex-col">
                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center rounded-full bg-purple-600/50 px-3 py-1 text-sm font-normal text-purple-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Date */}
                      <p className="text-sm sm:text-base md:text-lg font-normal text-purple-300 mb-2">
                        {post.date}
                      </p>

                      {/* Title and Icon */}
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg sm:text-xl font-medium text-gray-50 leading-snug transition duration-300 group-hover:text-purple-400 flex-1">
                          {truncateToLines(post.title, 2)}
                        </h3>
                        <ArrowUpRight className="ml-4 w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0 opacity-80 group-hover:opacity-100 transition duration-300 mt-1" />
                      </div>

                      {/* Summary limited to 4 lines using custom function */}
                      <p className="text-base sm:text-base font-normal text-gray-300 flex-grow">
                        {truncateToLines(post.summary, 4)}
                      </p>
                    </div>
                  </a>
                ))
              )}
            </main>

            {/* Reusable Pagination Component */}
            {showPagination && (
              <Pagination
                currentPage={internalCurrentPage}
                totalPages={calculatedTotalPages}
                onPageChange={handlePageChange}
                basePath="/blog"
                className="mt-12"
                showFirstLast={true}
                showPreviousNext={true}
                showPageNumbers={true}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;