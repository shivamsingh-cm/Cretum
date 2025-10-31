// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AllJobList = ({ onContactClick }) => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const navigate = useNavigate();

//   const categories = ['All', 'Engineering', 'Design', 'Marketing', 'Sales', 'Operations', 'Technology'];

//   const jobs = [
//     {
//       id: 1,
//       title: 'Full Stack Developer – Tax & Technology Product',
//       department: 'Technology',
//       type: 'Full-time',
//       employmentType: 'Permanent',
//       location: 'Connaught Place, New Delhi',
//       salary: '₹12L - ₹18L PA',
//       description: 'Join our Tax Technology vertical as a Full Stack Developer to build innovative solutions that transform GST refund processes for businesses across India.',
//       tags: ['React', 'Node.js', 'Python', 'AWS', 'GST'],
//       experience: '4-5 Years',
//       company: 'MYGST Refund, Fintaxicorn Solution Pvt Ltd'
//     },
//     {
//       id: 2,
//       title: 'Senior Frontend Developer',
//       department: 'Engineering',
//       type: 'Full-time',
//       employmentType: 'Permanent',
//       location: 'Remote',
//       salary: '$90k - $120k',
//       description: 'We are looking for an experienced Frontend Developer to join our team and help build amazing user experiences.',
//       tags: ['React', 'TypeScript', 'Tailwind'],
//       experience: '3-5 Years',
//       company: 'Cretum Advisory'
//     },
//     {
//       id: 3,
//       title: 'UX/UI Designer',
//       department: 'Design',
//       type: 'Full-time',
//       employmentType: 'Permanent',
//       location: 'New York',
//       salary: '$80k - $100k',
//       description: 'Create amazing user experiences and beautiful interfaces that delight our customers.',
//       tags: ['Figma', 'UI/UX', 'Prototyping'],
//       experience: '2-4 Years',
//       company: 'Cretum Advisory'
//     },
//   ];

//   const filteredJobs = selectedCategory === 'All' 
//     ? jobs 
//     : jobs.filter(job => job.department === selectedCategory);

//   const handleMoreInfo = (jobId) => {
//     navigate(`/job/${jobId}`);
//   };

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-backgroundPrimaryDark">
//       <div className="container mx-auto">
//         <div className="text-center mb-16 fade-in-up">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
//             Open Positions
//           </h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Discover your next career move with Cretum Advisory. We're always looking for talented individuals to join our team.
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up-delay">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
//                 selectedCategory === category
//                   ? 'text-white shadow-lg bg-buttonBackground hover:bg-buttonBackgroundHover'
//                   : 'text-gray-400 bg-gray-800 hover:bg-gray-700'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Job List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up-delay-2">
//           {filteredJobs.map((job) => (
//             <div
//               key={job.id}
//               className={`rounded-xl p-6 cursor-pointer transition-all duration-300 group ${
//                 hoveredCard === job.id 
//                   ? 'shadow-2xl transform -translate-y-2 scale-105' 
//                   : 'shadow-lg hover:shadow-xl'
//               }`}
//               style={{ backgroundColor: '#221736' }}
//               onMouseEnter={() => setHoveredCard(job.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div className="flex justify-between items-start mb-4">
//                 <h3 className="text-xl font-bold text-white group-hover:text-buttonBackground transition-colors duration-300">
//                   {job.title}
//                 </h3>
//                 <span className="px-3 py-1 text-xs rounded-full bg-purple-900 text-purple-200">
//                   {job.type}
//                 </span>
//               </div>
              
//               <div className="flex items-center gap-4 text-sm text-gray-300 mb-2">
//                 <span>{job.department}</span>
//                 <span>•</span>
//                 <span>{job.location}</span>
//               </div>

//               <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
//                 <span>{job.experience} Experience</span>
//                 <span>•</span>
//                 <span>{job.employmentType}</span>
//               </div>

//               <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
//                 {job.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {job.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 group-hover:bg-gray-700 transition-colors duration-300"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-semibold text-white group-hover:text-buttonBackground transition-colors duration-300">
//                   {job.salary}
//                 </span>
//                 <button 
//                   onClick={() => handleMoreInfo(job.id)}
//                   className="px-6 py-2 rounded-lg font-semibold text-white bg-buttonBackground hover:bg-buttonBackgroundHover transition-all duration-300 hover:scale-105 active:scale-95"
//                 >
//                   More Info...
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredJobs.length === 0 && (
//           <div className="text-center py-12 fade-in-up">
//             <p className="text-xl text-gray-400">No positions found in this category.</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default AllJobList;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllJobList = ({ onContactClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const categories = ['All', 'Technology', 'Engineering', 'Design', 'Marketing', 'Sales', 'Operations', 'Finance'];

  const jobs = [
    {
      id: 1,
      title: 'Full Stack Developer – Tax & Technology Product',
      department: 'Technology',
      type: 'Full-time',
      employmentType: 'Permanent',
      location: 'Connaught Place, New Delhi',
      salary: '₹4L - ₹8L PA',
      description: 'Join our Tax Technology vertical as a Full Stack Developer to build innovative solutions that transform GST refund processes for businesses across India.',
      tags: ['React', 'Node.js', 'Python', 'AWS', 'GST'],
      experience: '4-5 Years',
      company: 'MYGST Refund, Fintaxicorn Solution Pvt Ltd',
      posted: '2 days ago',
      urgent: true
    },
    {
      id: 2,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      type: 'Full-time',
      employmentType: 'Permanent',
      location: 'Remote',
      salary: '₹4L - ₹8L PA',
      description: 'We are looking for an experienced Frontend Developer to join our team and help build amazing user experiences for our financial products.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
      experience: '3-5 Years',
      company: 'Cretum Advisory',
      posted: '1 week ago',
      urgent: false
    },
    {
      id: 3,
      title: 'UX/UI Designer - Financial Products',
      department: 'Design',
      type: 'Full-time',
      employmentType: 'Permanent',
      location: 'Gurgaon, Haryana',
      salary: '₹4L - ₹8L PA',
      description: 'Create amazing user experiences and beautiful interfaces that delight our customers in the financial advisory space.',
      tags: ['Figma', 'UI/UX', 'Prototyping', 'User Research'],
      experience: '2-4 Years',
      company: 'Cretum Advisory',
      posted: '3 days ago',
      urgent: true
    },

    
  ];

  const filteredJobs = selectedCategory === 'All' 
    ? jobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : jobs.filter(job => 
        job.department === selectedCategory && (
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
          job.location.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

  const handleMoreInfo = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-backgroundPrimaryDark">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-sm font-medium text-gray-200">
              {jobs.length} Open Positions Available
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Current Openings
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Join our team of experts and build your career with Cretum Advisory.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 sm:mb-12">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by job title, skills, location, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchTerm && (
              <p className="text-sm text-gray-400 mt-2 text-center">
                Searching for: "<span className="text-white">{searchTerm}</span>"
              </p>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-2.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${
                    selectedCategory === category
                      ? 'text-white bg-buttonBackground hover:bg-buttonBackgroundHover shadow-lg'
                      : 'text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 px-2">
          <p className="text-gray-400 mb-2 sm:mb-0">
            Showing <span className="text-white font-semibold">{filteredJobs.length}</span> of <span className="text-white font-semibold">{jobs.length}</span> positions
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
          {(searchTerm || selectedCategory !== 'All') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
            >
              <span>Reset filters</span>
            </button>
          )}
        </div>

        {/* Job List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`rounded-xl p-6 cursor-pointer transition-all duration-300 group border border-white/10 ${
                hoveredCard === job.id 
                  ? 'shadow-xl transform -translate-y-1 bg-white/5' 
                  : 'shadow-lg bg-white/[0.02] hover:bg-white/5'
              }`}
              onMouseEnter={() => setHoveredCard(job.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Urgent Badge */}
              {job.urgent && (
                <div className="mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                    Urgent Hiring
                  </span>
                </div>
              )}

              {/* Job Title & Company */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2">
                  {job.title}
                </h3>
                <p className="text-blue-300 text-sm">{job.company}</p>
              </div>

              {/* Job Meta Information */}
              <div className="space-y-3 mb-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-300">
                    {job.type}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {job.location}
                  </span>
                  <span>•</span>
                  <span className="text-gray-400">{job.experience}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                {job.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Salary & CTA */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-4 border-t border-white/10">
                <div>
                  <span className="text-lg font-semibold text-white">
                    {job.salary}
                  </span>
                  <p className="text-xs text-gray-400 mt-1">Annual package</p>
                </div>
                <button 
                  onClick={() => handleMoreInfo(job.id)}
                  className="px-6 py-3 rounded-lg font-semibold text-white bg-buttonBackground hover:bg-buttonBackgroundHover transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  <span>Apply Now</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              {/* Posted Date */}
              <div className="text-xs text-gray-500 mt-3 text-right">
                Posted {job.posted}
              </div>
            </div>
          ))}
        </div>

        {/* No Results State */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
              <p className="text-gray-400 mb-6">
                {searchTerm 
                  ? `No jobs found matching "${searchTerm}". Try different keywords.`
                  : `No positions found in ${selectedCategory}. Try another category.`
                }
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={clearSearch}
                  className="px-6 py-3 rounded-lg font-semibold text-white bg-buttonBackground hover:bg-buttonBackgroundHover transition-colors"
                >
                  Clear Search
                </button>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="px-6 py-3 rounded-lg font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
                >
                  View All Categories
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="text-center mt-12 sm:mt-16 border-t border-white/10 pt-12">
          <p className="text-gray-400 mb-4">Can't find what you're looking for?</p>
          <button 
            onClick={onContactClick}
            className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
          >
            Submit Your Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllJobList;


