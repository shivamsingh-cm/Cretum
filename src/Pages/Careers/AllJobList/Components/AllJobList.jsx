import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllJobList = ({ onContactClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const categories = ['All', 'Engineering', 'Design', 'Marketing', 'Sales', 'Operations', 'Technology'];

  const jobs = [
    {
      id: 1,
      title: 'Full Stack Developer – Tax & Technology Product',
      department: 'Technology',
      type: 'Full-time',
      employmentType: 'Permanent',
      location: 'Connaught Place, New Delhi',
      salary: '₹12L - ₹18L PA',
      description: 'Join our Tax Technology vertical as a Full Stack Developer to build innovative solutions that transform GST refund processes for businesses across India.',
      tags: ['React', 'Node.js', 'Python', 'AWS', 'GST'],
      experience: '4-5 Years',
      company: 'MYGST Refund, Fintaxicorn Solution Pvt Ltd'
    },
    {
      id: 2,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      type: 'Full-time',
      employmentType: 'Permanent',
      location: 'Remote',
      salary: '$90k - $120k',
      description: 'We are looking for an experienced Frontend Developer to join our team and help build amazing user experiences.',
      tags: ['React', 'TypeScript', 'Tailwind'],
      experience: '3-5 Years',
      company: 'Cretum Advisory'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'Design',
      type: 'Full-time',
      employmentType: 'Permanent',
      location: 'New York',
      salary: '$80k - $100k',
      description: 'Create amazing user experiences and beautiful interfaces that delight our customers.',
      tags: ['Figma', 'UI/UX', 'Prototyping'],
      experience: '2-4 Years',
      company: 'Cretum Advisory'
    },
    {
      id: 4,
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      type: 'Full-time',
      employmentType: 'Permanent',
      location: 'Remote',
      salary: '$70k - $90k',
      description: 'Drive our digital marketing strategy and campaign performance to new heights.',
      tags: ['SEO', 'Social Media', 'Analytics'],
      experience: '3-6 Years',
      company: 'Cretum Advisory'
    },
    {
      id: 5,
      title: 'Sales Executive',
      department: 'Sales',
      type: 'Full-time',
      employmentType: 'Permanent',
      location: 'San Francisco',
      salary: '$85k - $110k',
      description: 'Join our sales team and help grow our client base with your exceptional skills.',
      tags: ['B2B', 'CRM', 'Negotiation'],
      experience: '2-5 Years',
      company: 'Cretum Advisory'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Engineering',
      type: 'Full-time',
      employmentType: 'Permanent',
      location: 'Remote',
      salary: '$100k - $130k',
      description: 'Manage our infrastructure and deployment processes with cutting-edge technologies.',
      tags: ['AWS', 'Docker', 'Kubernetes'],
      experience: '3-5 Years',
      company: 'Cretum Advisory'
    }
  ];

  const filteredJobs = selectedCategory === 'All' 
    ? jobs 
    : jobs.filter(job => job.department === selectedCategory);

  const handleMoreInfo = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-backgroundPrimaryDark">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Open Positions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover your next career move with Cretum Advisory. We're always looking for talented individuals to join our team.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up-delay">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                selectedCategory === category
                  ? 'text-white shadow-lg bg-buttonBackground hover:bg-buttonBackgroundHover'
                  : 'text-gray-400 bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Job List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up-delay-2">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`rounded-xl p-6 cursor-pointer transition-all duration-300 group ${
                hoveredCard === job.id 
                  ? 'shadow-2xl transform -translate-y-2 scale-105' 
                  : 'shadow-lg hover:shadow-xl'
              }`}
              style={{ backgroundColor: '#221736' }}
              onMouseEnter={() => setHoveredCard(job.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-buttonBackground transition-colors duration-300">
                  {job.title}
                </h3>
                <span className="px-3 py-1 text-xs rounded-full bg-purple-900 text-purple-200">
                  {job.type}
                </span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-2">
                <span>{job.department}</span>
                <span>•</span>
                <span>{job.location}</span>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span>{job.experience} Experience</span>
                <span>•</span>
                <span>{job.employmentType}</span>
              </div>

              <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 group-hover:bg-gray-700 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-white group-hover:text-buttonBackground transition-colors duration-300">
                  {job.salary}
                </span>
                <button 
                  onClick={() => handleMoreInfo(job.id)}
                  className="px-6 py-2 rounded-lg font-semibold text-white bg-buttonBackground hover:bg-buttonBackgroundHover transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  More Info...
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12 fade-in-up">
            <p className="text-xl text-gray-400">No positions found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllJobList;