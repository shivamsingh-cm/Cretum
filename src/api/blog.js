// import api from "./client";

// export const getBlogs = (params = {}) =>api.get("/blogs", { params });

// export const getBlogById = (id) =>api.get(`/blogs/${id}`);


// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// // Create axios instance
// const api = axios.create({
//   baseURL: API_URL,
//   timeout: 10000,
// });

// // Store all blog data
// let allBlogs = [];
// let latestBlogs = [];
// let featuredBlog = null;

// export const blogApi = {
//   // Fetch all blogs from API
//   async fetchAllBlogs() {
//     try {
//       const response = await api.get('/api/blogs');
      
//       // Transform and store all blogs
//       allBlogs = response.data.data.map(post => ({
//         id: post.id,
//         title: post.title,
//         summary: post.summary,
//         content: post.content,
//         category: post.category,
//         author: post.author,
//         date: new Date(post.date).toLocaleDateString('en-GB', {
//           day: 'numeric',
//           month: 'short',
//           year: 'numeric'
//         }),
//         slug: post.slug,
//         tags: post.tags || [],
//         imageUrl: post.imageUrl,
//         link: `/showblog/${post.id}`
//       }));

//       // Sort by date and get latest 3 blogs (newest first)
//       latestBlogs = [...allBlogs]
//         .sort((a, b) => new Date(b.date) - new Date(a.date))
//         .slice(0, 3);

//       // Set featured blog (first one or you can add featured field in API)
//       featuredBlog = allBlogs[0];

//       return {
//         allBlogs,
//         latestBlogs,
//         featuredBlog
//       };
//     } catch (error) {
//       console.error('Error fetching blogs:', error);
//       throw error;
//     }
//   },

//   // Get all blogs
//   getAllBlogs() {
//     return allBlogs;
//   },

//   // Get latest blogs
//   getLatestBlogs() {
//     return latestBlogs;
//   },

//   // Get featured blog
//   getFeaturedBlog() {
//     return featuredBlog;
//   },

//   // Get blog by ID
//   getBlogById(id) {
//     return allBlogs.find(blog => blog.id == id);
//   },

//   // Get blogs by category
//   getBlogsByCategory(category) {
//     return allBlogs.filter(blog => blog.category === category);
//   },

//   // Search blogs
//   searchBlogs(searchTerm) {
//     return allBlogs.filter(blog => 
//       blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       blog.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       blog.content.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }
// };



// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// const api = axios.create({
//   baseURL: API_URL,
//   timeout: 10000,
// });

// // Store all blog data
// let allBlogs = [];
// let latestBlogs = [];

// export const blogApi = {
//   // Fetch all blogs from API
//   async fetchAllBlogs() {
//     try {
//       const response = await api.get('/api/blogs');
      
//       // Transform and store all blogs
//       allBlogs = response.data.data.map(post => ({
//         id: post.id,
//         title: post.title,
//         summary: post.summary,
//         content: post.content,
//         category: post.category,
//         author: post.author,
//         date: new Date(post.date).toLocaleDateString('en-GB', {
//           day: 'numeric',
//           month: 'short',
//           year: 'numeric'
//         }),
//         slug: post.slug,
//         tags: post.tags || [],
//         imageUrl: post.imageUrl,
//         link: `/showblog/${post.id}`
//       }));

//       // Sort by date and get latest blogs
//       latestBlogs = [...allBlogs]
//         .sort((a, b) => new Date(b.date) - new Date(a.date));

//       return {
//         allBlogs,
//         latestBlogs
//       };
//     } catch (error) {
//       console.error('Error fetching blogs:', error);
//       throw error;
//     }
//   },

//   // Get all blogs
//   getAllBlogs() {
//     return allBlogs;
//   },

//   // Get latest blogs
//   getLatestBlogs() {
//     return latestBlogs;
//   },

//   // Get paginated blogs
//   getPaginatedBlogs(page = 1, pageSize = 10) {
//     const startIndex = (page - 1) * pageSize;
//     const endIndex = startIndex + pageSize;
//     const paginatedBlogs = allBlogs.slice(startIndex, endIndex);
    
//     return {
//       posts: paginatedBlogs,
//       pagination: {
//         page,
//         pageSize,
//         pageCount: Math.ceil(allBlogs.length / pageSize),
//         total: allBlogs.length
//       }
//     };
//   },

//   // Get blog by ID
//   getBlogById(id) {
//     return allBlogs.find(blog => blog.id == id);
//   },

//   // Get blogs by category
//   getBlogsByCategory(category) {
//     return allBlogs.filter(blog => blog.category === category);
//   },

//   // Search blogs
//   searchBlogs(searchTerm) {
//     if (!searchTerm.trim()) return allBlogs;
    
//     return allBlogs.filter(blog => 
//       blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       blog.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
//     );
//   }
// };

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

console.log('API URL:', API_URL); // Debug: Check if env variable is loaded

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Store all blog data
let allBlogs = [];
let latestBlogs = [];

export const blogApi = {
  // Fetch blogs with pagination from API
  async fetchBlogs(page = 1, pageSize = 10) {
    try {
      console.log(`Fetching blogs - Page: ${page}, PageSize: ${pageSize}`);
      const response = await api.get(`/api/blogs?page=${page}&pageSize=${pageSize}`);
      console.log('Blogs API Response:', response.data);
      
      // Check if response has the expected structure
      if (!response.data || !response.data.data) {
        throw new Error('Invalid API response structure');
      }

      // Transform the paginated blogs
      const paginatedBlogs = response.data.data.map(post => ({
        id: post.id,
        title: post.title,
        summary: post.summary,
        date: new Date(post.date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }),
        slug: post.slug,
        tags: post.tags || [],
        imageUrl: post.imageUrl,
        seo: post.seo,
        link: `/showblog/${post.slug || post.id}`
      }));

      // Transform recent blogs if available
      const recentBlogs = (response.data.recentBlogs || []).map(blog => ({
        id: blog.id,
        title: blog.title,
        date: new Date(blog.date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }),
        slug: blog.slug,
        imageUrl: blog.imageUrl,
        summary : blog.summary,
        link: `/showblog/${blog.slug || blog.id}`
      }));

      return {
        posts: paginatedBlogs,
        recentBlogs: recentBlogs,
        pagination: response.data.meta?.pagination || {
          page,
          pageSize,
          pageCount: 1,
          total: paginatedBlogs.length
        }
      };
    } catch (error) {
      console.error('Error fetching blogs:', error);
      console.error('Error details:', error.response?.data);
      throw error;
    }
  },

  // Fetch single blog by ID or slug
  async fetchBlogById(idOrSlug) {
    console.log("my blog id or slug", idOrSlug)
    try {
      console.log(`Fetching blog by ID/Slug: ${idOrSlug}`);
      const response = await api.get(`/api/blogs/${idOrSlug}`);
      console.log('Single Blog API Response:', response.data);
      
      // Check if response has the expected structure
      if (!response.data || !response.data.data) {
        throw new Error('Invalid API response structure for single blog');
      }

      // Transform the blog post data
      const postData = response.data.data;
      const transformedPost = {
        id: postData.id,
        title: postData.title,
        summary: postData.summary,
        content: postData.content || [],
        author: postData.author || "cretum advisory",
        date: new Date(postData.date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }),
        slug: postData.slug,
        tags: postData.tags || [],
        imageUrl: postData.imageUrl,
        authorImageUrl: postData.authorImageUrl,
        seo: postData.seo || null,
        contentSection: postData.contentSection || [],
        similarBlogs: (postData.similarBlogs || []).map(blog => ({
          id: blog.id,
          title: blog.title,
          author: blog.author || "cretum advisory",
          date: new Date(blog.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }),
          tags: blog.tags || [],
          summary: blog.summary,
          imageUrl: blog.imageUrl,
          link: `/showblog/${blog.slug || blog.id}`
        }))
      };

      console.log('Transformed post:', transformedPost);
      return transformedPost;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      console.error('Error response:', error.response?.data);
      console.error('Error status:', error.response?.status);
      throw new Error(`Failed to fetch blog: ${error.response?.data?.error || error.message}`);
    }
  },

  // ... rest of your methods remain the same
  async fetchAllBlogs() {
    try {
      let allPosts = [];
      let currentPage = 1;
      let hasMorePages = true;

      // Fetch all pages
      while (hasMorePages) {
        const response = await this.fetchBlogs(currentPage, 50);
        allPosts = [...allPosts, ...response.posts];
        
        if (currentPage >= response.pagination.pageCount) {
          hasMorePages = false;
        } else {
          currentPage++;
        }
      }

      // Store all blogs
      allBlogs = allPosts;
      
      // Sort by date and get latest blogs
      latestBlogs = [...allBlogs]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

      return {
        allBlogs,
        latestBlogs
      };
    } catch (error) {
      console.error('Error fetching all blogs:', error);
      throw error;
    }
  },

  getBlogById(idOrSlug) {
    return allBlogs.find(blog => 
      blog.id == idOrSlug || blog.slug === idOrSlug
    );
  },

  getBlogsByTag(tag) {
    return allBlogs.filter(blog => 
      blog.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  },

  searchBlogs(searchTerm) {
    if (!searchTerm.trim()) return allBlogs;
    
    return allBlogs.filter(blog => 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  },

  getAllTags() {
    const allTags = allBlogs.flatMap(blog => blog.tags);
    return [...new Set(allTags)];
  },

  getAllBlogs() {
    return allBlogs;
  },

  getLatestBlogs() {
    return latestBlogs;
  },

  clearCache() {
    allBlogs = [];
    latestBlogs = [];
  }
};