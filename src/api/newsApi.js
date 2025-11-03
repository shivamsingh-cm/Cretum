// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';

// const api = axios.create({
//   baseURL: API_URL,
//   timeout: 10000,
// });

// // Store all news data
// let allNews = [];
// let latestNews = [];

// export const newsApi = {
//   // Fetch all news from API
//   async fetchAllNews() {
//     try {
//       const response = await api.get('/api/news?populate=*');
      
//       // Transform and store all news - match the blog API structure
//       allNews = response.data.data.map(post => ({
//         id: post.id,
//         title: post.attributes?.title || post.title,
//         summary: post.attributes?.summary || post.summary,
//         content: post.attributes?.content || post.content,
//         category: post.attributes?.category || post.category,
//         author: post.attributes?.author || post.author,
//         date: new Date(post.attributes?.publishedDate || post.publishedDate || post.date).toLocaleDateString('en-GB', {
//           day: 'numeric',
//           month: 'short',
//           year: 'numeric'
//         }),
//         slug: post.attributes?.slug || post.slug,
//         tags: post.attributes?.tags || post.tags || [],
//         imageUrl: post.attributes?.imageUrl || post.imageUrl,
//         featured: post.attributes?.featured || post.featured || false,
//         status: post.attributes?.statu || post.statu,
//         link: `/news/${post.attributes?.slug || post.slug}`
//       }));

//       // Sort by date and get latest news
//       latestNews = [...allNews]
//         .sort((a, b) => new Date(b.date) - new Date(a.date));

//       return {
//         allNews,
//         latestNews
//       };
//     } catch (error) {
//       console.error('Error fetching news:', error);
      
//       // Return mock data for development
//       return this.getMockNewsData();
//     }
//   },

//   // Get all news
//   getAllNews() {
//     return allNews;
//   },

//   // Get latest news
//   getLatestNews() {
//     return latestNews;
//   },

//   // Get paginated news
//   getPaginatedNews(page = 1, pageSize = 6) {
//     const startIndex = (page - 1) * pageSize;
//     const endIndex = startIndex + pageSize;
//     const paginatedNews = allNews.slice(startIndex, endIndex);
    
//     return {
//       news: paginatedNews,
//       latestNews: latestNews.slice(0, 3), // Always return 3 latest for sidebar
//       pagination: {
//         page,
//         pageSize,
//         pageCount: Math.ceil(allNews.length / pageSize),
//         total: allNews.length
//       }
//     };
//   },

//   // Get news by ID
//   getNewsById(id) {
//     return allNews.find(news => news.id == id);
//   },

//   // Get news by slug
//   getNewsBySlug(slug) {
//     return allNews.find(news => news.slug === slug);
//   },

//   // Get featured news
//   getFeaturedNews() {
//     return allNews.filter(news => news.featured);
//   },

//   // Get news by category
//   getNewsByCategory(category) {
//     return allNews.filter(news => news.category === category);
//   },

//   // Search news
//   searchNews(searchTerm) {
//     if (!searchTerm.trim()) return allNews;
    
//     return allNews.filter(news => 
//       news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       news.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (typeof news.content === 'string' && news.content.toLowerCase().includes(searchTerm.toLowerCase())) ||
//       news.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       news.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
//     );
//   },

//   // Mock data for development
//   getMockNewsData() {
//     const mockNews = [
//       {
//         id: 1,
//         title: "Cretum Advisory Assists Tech Startup in Securing $2M Seed Funding",
//         summary: "We supported a fast-growing SaaS startup with financial structuring, compliance cleanup, and investor-ready models.",
//         content: "Sample content for development and testing purposes.",
//         category: "Business",
//         author: "Cretum Advisory",
//         date: "15 Jan, 2024",
//         slug: "tech-startup-seed-funding",
//         tags: ["Funding", "Startup", "Advisory"],
//         imageUrl: "/assets/randomblog.jpg",
//         featured: true,
//         status: "published",
//         link: "/news/tech-startup-seed-funding"
//       },
//       {
//         id: 2,
//         title: "Expanding Globally: How Businesses Can Navigate International Markets",
//         summary: "Helping businesses scale internationally with strategic advisory, tax structuring, and operational guidance.",
//         content: "Sample content for development and testing purposes.",
//         category: "International",
//         author: "Cretum Advisory",
//         date: "10 Jan, 2024",
//         slug: "expanding-globally-international-markets",
//         tags: ["Global", "Expansion", "Strategy"],
//         imageUrl: "/assets/randomblog.jpg",
//         featured: false,
//         status: "published",
//         link: "/news/expanding-globally-international-markets"
//       }
//     ];

//     allNews = mockNews;
//     latestNews = [...mockNews].sort((a, b) => new Date(b.date) - new Date(a.date));

//     return {
//       allNews,
//       latestNews
//     };
//   }
// };

// // Utility function to extract text from content array
// export const extractTextFromContent = (content) => {
//   if (!content) return 'No content available.';
  
//   // If content is already a string, return it
//   if (typeof content === 'string') {
//     return content.substring(0, 150) + (content.length > 150 ? '...' : '');
//   }
  
//   // If content is an array (Strapi rich text format)
//   if (Array.isArray(content)) {
//     try {
//       return content
//         .map(item => {
//           if (item.children && Array.isArray(item.children)) {
//             return item.children.map(child => child.text || '').join(' ');
//           }
//           return '';
//         })
//         .join(' ')
//         .substring(0, 150) + (content.length > 150 ? '...' : '');
//     } catch (error) {
//       return 'Content preview not available.';
//     }
//   }
  
//   return 'No content available.';
// };

// // Utility function to get image URL
// export const getImageUrl = (imageUrl) => {
//   if (!imageUrl) return '/assets/randomblog.jpg';
  
//   // If it's already a full URL, return as is
//   if (imageUrl.startsWith('http')) {
//     return imageUrl;
//   }
  
//   // If it's a relative path, make it absolute
//   if (imageUrl.startsWith('/')) {
//     return `${API_URL}${imageUrl}`;
//   }
  
//   return '/assets/randomblog.jpg';
// };



// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';

// const api = axios.create({
//   baseURL: API_URL,
//   timeout: 10000,
// });

// // Store all news data
// let allNews = [];
// let latestNews = [];

// // Utility function to extract text from content array
// export const extractTextFromContent = (content) => {
//   if (!content) return 'No content available.';
  
//   if (typeof content === 'string') {
//     return content.substring(0, 150) + (content.length > 150 ? '...' : '');
//   }
  
//   if (Array.isArray(content)) {
//     try {
//       return content
//         .map(item => {
//           if (item.children && Array.isArray(item.children)) {
//             return item.children.map(child => child.text || '').join(' ');
//           }
//           return '';
//         })
//         .join(' ')
//         .substring(0, 150) + (content.length > 150 ? '...' : '');
//     } catch (error) {
//       return 'Content preview not available.';
//     }
//   }
  
//   return 'No content available.';
// };

// // Utility function to get image URL
// export const getImageUrl = (imageUrl) => {
//   if (!imageUrl) return '/assets/randomblog.jpg';
  
//   if (imageUrl.startsWith('http')) {
//     return imageUrl;
//   }
  
//   if (imageUrl.startsWith('/')) {
//     return `${API_URL}${imageUrl}`;
//   }
  
//   return '/assets/randomblog.jpg';
// };

// // Transform news item for list view
// const transformNewsListItem = (post) => {
//   const attributes = post.attributes || post;
//   return {
//     id: post.id,
//     title: attributes.title,
//     summary: attributes.summary,
//     content: attributes.content,
//     category: attributes.category,
//     author: attributes.author,
//     publishedDate: new Date(attributes.publishedDate || attributes.date).toLocaleDateString('en-GB', {
//       day: 'numeric',
//       month: 'short',
//       year: 'numeric'
//     }),
//     slug: attributes.slug,
//     tags: attributes.tags || [],
//     imageUrl: attributes.imageUrl,
//     featured: attributes.featured || false,
//     status: attributes.statu,
//     link: `/news/${post.id}`
//   };
// };

// // Transform news item for detailed view
// const transformNewsDetail = (post) => {
//   const attributes = post.attributes || post;
//   return {
//     id: post.id,
//     title: attributes.title,
//     summary: attributes.summary,
//     content: attributes.content,
//     category: attributes.category,
//     author: attributes.author,
//     authorInfo: attributes.authors,
//     publishedDate: new Date(attributes.publishedDate || attributes.date).toLocaleDateString('en-GB', {
//       day: 'numeric',
//       month: 'long',
//       year: 'numeric'
//     }),
//     slug: attributes.slug,
//     tags: attributes.tags || [],
//     imageUrl: attributes.imageUrl,
//     featured: attributes.featured || false,
//     status: attributes.statu,
//     categories: attributes.categories || [],
//     seo: attributes.seo,
//     similarNews: attributes.similarNews || []
//   };
// };

// // Mock data for development
// const getMockNewsData = () => {
//   const mockNews = [
//     {
//       id: 1,
//       title: "Cretum Advisory Assists Tech Startup in Securing $2M Seed Funding",
//       summary: "We supported a fast-growing SaaS startup with financial structuring, compliance cleanup, and investor-ready models.",
//       content: [{ type: "paragraph", children: [{ type: "text", text: "Sample content for development." }] }],
//       category: "Business",
//       author: "Cretum Advisory",
//       publishedDate: "2024-01-15T10:00:00.000Z",
//       slug: "tech-startup-seed-funding",
//       tags: ["Funding", "Startup", "Advisory"],
//       imageUrl: "/assets/randomblog.jpg",
//       featured: true,
//       status: "published"
//     },
//     {
//       id: 2,
//       title: "Expanding Globally: How Businesses Can Navigate International Markets",
//       summary: "Helping businesses scale internationally with strategic advisory, tax structuring, and operational guidance.",
//       content: [{ type: "paragraph", children: [{ type: "text", text: "Sample content for development." }] }],
//       category: "International",
//       author: "Cretum Advisory",
//       publishedDate: "2024-01-10T10:00:00.000Z",
//       slug: "expanding-globally-international-markets",
//       tags: ["Global", "Expansion", "Strategy"],
//       imageUrl: "/assets/randomblog.jpg",
//       featured: false,
//       status: "published"
//     }
//   ];

//   allNews = mockNews.map(post => transformNewsListItem(post));
//   latestNews = [...allNews].sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));

//   return {
//     allNews,
//     latestNews
//   };
// };

// export const newsApi = {
//   // Fetch all news from API
//   async fetchAllNews() {
//     try {
//       const response = await api.get('/api/news?populate=*');
//       console.log("my new api response data ", response.data.data)
//       if (response.data && response.data.data) {
//         // Transform and store all news
//         allNews = response.data.data.map(post => transformNewsListItem(post));

//         // Sort by date and get latest news
//         latestNews = [...allNews]
//           .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));

//         return {
//           allNews,
//           latestNews
//         };
//       } else {
//         throw new Error('Invalid API response format');
//       }
//     } catch (error) {
//       console.error('Error fetching news:', error);
//       return getMockNewsData();
//     }
//   },

//   // Get single news by ID from API
//   async getNewsById(id) {
//     try {
//       // First try to get from local cache
//       const localNews = allNews.find(news => news.id == id);
//       if (localNews) {
//         return transformNewsDetail({ id: localNews.id, ...localNews });
//       }

//       // If not in cache, fetch from API
//       const response = await api.get(`/api/news/${id}?populate=*`);
//       console.log("my new api response data when id are pass ", response.data.data)
//       if (response.data && response.data.data) {
//         return transformNewsDetail(response.data.data);
//       }
//       return null;
//     } catch (error) {
//       console.error('Error fetching single news:', error);
      
//       // Fallback to local data
//       const localNews = allNews.find(news => news.id == id);
//       return localNews ? transformNewsDetail(localNews) : null;
//     }
//   },

//   // Get all news from local storage
//   getAllNews() {
//     return allNews;
//   },

//   // Get latest news from local storage
//   getLatestNews() {
//     return latestNews;
//   },

//   // Get paginated news
//   getPaginatedNews(page = 1, pageSize = 6) {
//     const startIndex = (page - 1) * pageSize;
//     const endIndex = startIndex + pageSize;
//     const paginatedNews = allNews.slice(startIndex, endIndex);
    
//     return {
//       news: paginatedNews,
//       latestNews: latestNews.slice(0, 3),
//       pagination: {
//         page,
//         pageSize,
//         pageCount: Math.ceil(allNews.length / pageSize),
//         total: allNews.length
//       }
//     };
//   },

//   // Get featured news
//   getFeaturedNews() {
//     return allNews.filter(news => news.featured);
//   },

//   // Get similar news (by category)
//   getSimilarNews(currentNewsId, category, limit = 3) {
//     return allNews
//       .filter(news => 
//         news.id !== currentNewsId && 
//         news.category === category
//       )
//       .slice(0, limit);
//   }
// };


// src/api/newsApi.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';

// Create axios instance with optimized settings
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

// Store all news data with cache invalidation
let allNews = [];
let latestNews = [];
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Utility function to get image URL with optimization
export const getImageUrl = (imageUrl, options = {}) => {
  if (!imageUrl) return '/assets/randomblog.jpg';
  
  let finalUrl = imageUrl;
  
  if (imageUrl.startsWith('/')) {
    finalUrl = `${API_URL}${imageUrl}`;
  }
  
  // Add image optimization parameters if needed
  if (options.width || options.height || options.quality) {
    const params = new URLSearchParams();
    if (options.width) params.append('width', options.width);
    if (options.height) params.append('height', options.height);
    if (options.quality) params.append('quality', options.quality);
    
    finalUrl = `${finalUrl}?${params.toString()}`;
  }
  
  return finalUrl;
};

// Extract text from content for summaries
export const extractTextFromContent = (content) => {
  if (!content) return 'No content available.';
  
  if (typeof content === 'string') {
    return content.substring(0, 150) + (content.length > 150 ? '...' : '');
  }
  
  if (Array.isArray(content)) {
    try {
      const text = content
        .map(item => {
          if (item.children && Array.isArray(item.children)) {
            return item.children.map(child => child.text || '').join(' ');
          }
          return '';
        })
        .join(' ')
        .trim();
      
      return text.substring(0, 150) + (text.length > 150 ? '...' : '');
    } catch (error) {
      console.warn('Error extracting text from content:', error);
      return 'Content preview not available.';
    }
  }
  
  return 'No content available.';
};

// Transform news item for list view
const transformNewsListItem = (post) => {
  const attributes = post.attributes || post;
  const publishedDate = attributes.publishedDate || attributes.date;
  
  return {
    id: post.id,
    title: attributes.title || 'Untitled',
    summary: attributes.summary || extractTextFromContent(attributes.content),
    content: attributes.content, // Store full content for detail view
    category: attributes.category,
    author: attributes.author,
    publishedDate: publishedDate ? new Date(publishedDate).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }) : 'No date',
    slug: attributes.slug,
    tags: attributes.tags || [],
    imageUrl: attributes.imageUrl,
    featured: Boolean(attributes.featured),
    status: attributes.statu,
    categories: attributes.categories || [],
    authorInfo: attributes.authors,
    seo: attributes.seo,
  };
};

// Transform news item for detailed view
const transformNewsDetail = (post) => {
  const attributes = post.attributes || post;
  const publishedDate = attributes.publishedDate || attributes.date;
  
  return {
    id: post.id,
    title: attributes.title || 'Untitled',
    summary: attributes.summary,
    content: attributes.content, // Full content for BlocksRenderer
    category: attributes.category,
    author: attributes.author,
    authorInfo: attributes.authors,
    publishedDate: publishedDate ? new Date(publishedDate).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }) : 'No date',
    slug: attributes.slug,
    tags: attributes.tags || [],
    imageUrl: attributes.imageUrl,
    featured: Boolean(attributes.featured),
    status: attributes.statu,
    categories: attributes.categories || [],
    seo: attributes.seo,
    similarNews: attributes.similarNews || [],
  };
};

// Mock data for development
const getMockNewsData = () => {
  const mockNews = [
    {
      id: 1,
      title: "Cretum Advisory Assists Tech Startup in Securing $2M Seed Funding",
      summary: "We supported a fast-growing SaaS startup with financial structuring, compliance cleanup, and investor-ready models.",
      content: [{ type: "paragraph", children: [{ type: "text", text: "Sample content for development." }] }],
      category: "Business",
      author: "Cretum Advisory",
      publishedDate: "2024-01-15T10:00:00.000Z",
      slug: "tech-startup-seed-funding",
      tags: ["Funding", "Startup", "Advisory"],
      imageUrl: "/assets/randomblog.jpg",
      featured: true,
      status: "published",
      categories: [{ id: 1, name: "Business", slug: "business" }]
    }
  ];

  allNews = mockNews.map(post => transformNewsListItem(post));
  latestNews = [...allNews].sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
  lastFetchTime = Date.now();

  return { allNews, latestNews };
};

export const newsApi = {
  // Check if cache is stale
  isCacheStale() {
    return Date.now() - lastFetchTime > CACHE_DURATION;
  },

  // Fetch all news from API with caching
  async fetchAllNews(forceRefresh = false) {
    // Return cached data if not stale and not forced
    if (!forceRefresh && !this.isCacheStale() && allNews.length > 0) {
      return { allNews, latestNews };
    }

    try {
      const response = await api.get('/api/news?populate=*');
      
      if (response.data?.data) {
        // Transform and store all news
        allNews = response.data.data.map(post => transformNewsListItem(post));

        // Sort by date and get latest news
        latestNews = [...allNews]
          .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));

        lastFetchTime = Date.now();

        return {
          allNews,
          latestNews
        };
      } else {
        throw new Error('Invalid API response format');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      
      // Return mock data only if we have no cached data
      if (allNews.length === 0) {
        return getMockNewsData();
      }
      
      // Return cached data even if stale when API fails
      return { allNews, latestNews };
    }
  },

  // Get single news by ID from API
  async getNewsById(id) {
    if (!id || id === 'undefined') {
      throw new Error('Invalid news ID');
    }

    try {
      // First try to get from local cache
      const localNews = allNews.find(news => news.id == id);
      if (localNews) {
        return transformNewsDetail(localNews);
      }

      // If not in cache, fetch from API
      const response = await api.get(`/api/news/${id}?populate=*`);
      
      if (response.data?.data) {
        return transformNewsDetail(response.data.data);
      }
      
      return null;
    } catch (error) {
      console.error('Error fetching single news:', error);
      
      // Fallback to local data
      const localNews = allNews.find(news => news.id == id);
      return localNews ? transformNewsDetail(localNews) : null;
    }
  },

  // Get all news from local storage
  getAllNews() {
    return allNews;
  },

  // Get latest news from local storage
  getLatestNews() {
    return latestNews;
  },

  // Get paginated news
  getPaginatedNews(page = 1, pageSize = 6) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedNews = allNews.slice(startIndex, endIndex);
    
    return {
      news: paginatedNews,
      latestNews: latestNews.slice(0, 3),
      pagination: {
        page: Math.max(1, page),
        pageSize: Math.max(1, pageSize),
        pageCount: Math.ceil(allNews.length / pageSize),
        total: allNews.length
      }
    };
  },

  // Get featured news
  getFeaturedNews() {
    return allNews.filter(news => news.featured);
  },

  // Get similar news (by category)
  getSimilarNews(currentNewsId, category, limit = 3) {
    return allNews
      .filter(news => 
        news.id != currentNewsId && 
        news.category === category
      )
      .slice(0, limit);
  },

  // Clear cache
  clearCache() {
    allNews = [];
    latestNews = [];
    lastFetchTime = 0;
  }
};