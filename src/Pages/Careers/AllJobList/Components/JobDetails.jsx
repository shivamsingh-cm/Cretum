import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApplyForm from '../Components/ApplyForm'

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
   const [showApplyForm, setShowApplyForm] = useState(false);
   
  const handleApplyNow = () => {
    setShowApplyForm(true);
  };

  const handleCloseForm = () => {
    setShowApplyForm(false);
  };
  // Mock job data - in real app, this would come from API
  const jobDetails = {
    1: {
      id: 1,
      title: 'Full Stack Developer – Tax & Technology Product',
      type: 'Full Time',
      employmentType: 'Permanent',
      experience: '4-5 Years',
      location: 'Connaught Place, New Delhi',
      salary: '₹12L - ₹18L PA',
      company: 'MYGST Refund, a brand of Fintaxicorn Solution Pvt Ltd',
      tags: ['React', 'Node.js', 'Python', 'AWS', 'MySQL', 'MongoDB', 'GST'],
      
      companyDescription: `MYGST Refund, a brand of Fintaxicorn Solution Pvt Ltd, is a tax technology solutions provider that focuses on easing the GST Refund process for businesses. With over 200 clients across India, we have developed various solutions that have enabled us to process over 10Cr+ refunds with an average turnaround time of 30 to 45 days.`,

      roleDescription: `This is a full-time on-site role for a Full Stack Developer in our Tax Technology vertical for Delhi. As a Full Stack Developer, you will be responsible for both the back-end and front-end development of our tax technology solutions. This includes software development and working with Cascading Style Sheets (CSS) to create visually appealing user interfaces.`,

      positionOverview: `We are seeking a skilled Full Stack Developer to join our team in developing Tax Technology Product. The ideal candidate will have experience working with both front-end and back-end technologies, and a passion for creating efficient, user-friendly applications.`,

      keyResponsibilities: [
        'Develop front-end components using modern JavaScript frameworks (e.g., React, Angular, Vue.js)',
        'Design and implement back-end services and APIs using Node.js, Python, or similar technologies',
        'Understanding the BRD and also assist in reviewing the BRD',
        'Collaborate with product managers and designers to translate requirements into high-quality code',
        'Optimize applications for maximum speed and scalability',
        'Perform code reviews, testing, and debugging to ensure the quality of the codebase',
        'Stay up-to-date with new technologies and best practices in web development'
      ],

      qualifications: [
        'Bachelor\'s degree in Computer Science or a related field',
        'Worked on collating the requirements from GSTN basis the law and changes required in system.',
        'Responsible for Roadmap of GST Software, GST Reconciliation and VPA products.',
        'Worked on development of BRDs for Various functionalities along with User Stories, test cases and supporting in testing and development of deliveries.',
        'Proven experience as a Full Stack Developer in the fintech or Tax Technology Domain.',
        'Strong proficiency in front-end development languages and frameworks (e.g., HTML, CSS, JavaScript, React)',
        'Experience with back-end development technologies (e.g., Node.js, Python, Java)',
        'Familiarity with databases (e.g., MySQL, MongoDB, PostgreSQL)',
        'Excellent communication and teamwork skills',
        'Ability to work independently and take ownership of projects'
      ],

      preferredQualifications: [
        'Experience with cloud services (e.g., AWS, Azure, Google Cloud Platform)',
        'Knowledge of DevOps practices and tools (e.g., Docker, Kubernetes, Jenkins)',
        'Understanding of agile development methodologies'
      ],

      benefits: [
        'Competitive salary',
        'Flexible work hours',
        'Health insurance',
        'Professional development opportunities'
      ],

      applicationProcess: `Please submit your resume and a cover letter detailing your relevant experience to hr@mygstrefund.com and why you are interested in this position. Include any links to your portfolio or GitHub profile, if available.`,

      contactEmail: 'hr@mygstrefund.com'
    }
  };

  const job = jobDetails[jobId];

  if (!job) {
    return (
      <div className="min-h-screen bg-backgroundPrimary flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Job Not Found</h2>
          <button 
            onClick={() => navigate('/alljoblist')}
            className="px-6 py-3 bg-buttonBackground hover:bg-buttonBackgroundHover text-white rounded-lg transition-colors duration-300"
          >
            Back to Careers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-backgroundPrimary py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors duration-300 group mt-6"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          Back to Jobs
        </button>

        {/* Job Header */}
        <div className="bg-backgroundSecondary rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                <div className="flex items-center gap-2">
                  <span>🏢</span>
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>💰</span>
                  <span>{job.salary}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-buttonBackground text-white rounded-full text-sm font-semibold">
                  {job.type}
                </span>
                <span className="px-4 py-2 bg-purple-900 text-purple-200 rounded-full text-sm font-semibold">
                  {job.employmentType}
                </span>
                <span className="px-4 py-2 bg-blue-900 text-blue-200 rounded-full text-sm font-semibold">
                  {job.experience} Experience
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                onClick={handleApplyNow}
               className="px-8 py-4 bg-buttonBackground hover:bg-buttonBackgroundHover text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                Apply Now
              </button>
              <button className="px-8 py-4 border-2 border-buttonBackground text-buttonBackground hover:bg-buttonBackground hover:text-white font-semibold rounded-lg transition-all duration-300">
                Save Job
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {job.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-backgroundPrimary text-gray-300 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Job Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Company Description */}
            <section className="bg-backgroundSecondary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Company Description</h2>
              <p className="text-gray-300 leading-relaxed">{job.companyDescription}</p>
            </section>

            {/* Role Description */}
            <section className="bg-backgroundSecondary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Role Description</h2>
              <p className="text-gray-300 leading-relaxed">{job.roleDescription}</p>
            </section>

            {/* Position Overview */}
            <section className="bg-backgroundSecondary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Position Overview</h2>
              <p className="text-gray-300 leading-relaxed">{job.positionOverview}</p>
            </section>

            {/* Key Responsibilities */}
            <section className="bg-backgroundSecondary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.keyResponsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-buttonBackground mt-1">•</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </section>

            {/* Qualifications */}
            <section className="bg-backgroundSecondary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Qualifications & Pre-requisites</h2>
              <ul className="space-y-3">
                {job.qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-buttonBackground mt-1">•</span>
                    {qualification}
                  </li>
                ))}
              </ul>
            </section>

            {/* Preferred Qualifications */}
            <section className="bg-backgroundSecondary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Preferred Qualifications</h2>
              <ul className="space-y-3">
                {job.preferredQualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-buttonBackground mt-1">•</span>
                    {qualification}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Apply */}
            <div className="bg-backgroundSecondary rounded-2xl p-6 sticky top-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Apply</h3>
              <button className="w-full py-4 bg-buttonBackground hover:bg-buttonBackgroundHover text-white font-semibold rounded-lg transition-colors duration-300 mb-3">
                Apply Now
              </button>
              <button className="w-full py-4 border-2 border-buttonBackground text-buttonBackground hover:bg-buttonBackground hover:text-white font-semibold rounded-lg transition-colors duration-300">
                Save for Later
              </button>
              
              <div className="mt-6 p-4 bg-backgroundPrimary rounded-lg">
                <h4 className="font-semibold text-white mb-2">📧 Apply via Email</h4>
                <p className="text-gray-300 text-sm">Send your resume to:</p>
                <a 
                  href={`mailto:${job.contactEmail}`}
                  className="text-buttonBackground hover:text-buttonBackgroundHover font-medium break-all"
                >
                  {job.contactEmail}
                </a>
              </div>
            </div>

            {/* Job Overview */}
            <div className="bg-backgroundSecondary rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Job Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Position:</span>
                  <span className="text-white font-medium">{job.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-white font-medium">{job.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Type:</span>
                  <span className="text-white font-medium">{job.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Experience:</span>
                  <span className="text-white font-medium">{job.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Salary:</span>
                  <span className="text-white font-medium">{job.salary}</span>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-backgroundSecondary rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
              <ul className="space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <section className="bg-backgroundSecondary rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Application Process</h2>
          <p className="text-gray-300 leading-relaxed">{job.applicationProcess}</p>
          <div className="mt-6 p-4 bg-buttonBackground/10 rounded-lg border border-buttonBackground/20">
            <p className="text-buttonBackground font-semibold">
              📧 Email your application to: {' '}
              <a 
                href={`mailto:${job.contactEmail}`}
                className="underline hover:text-buttonBackgroundHover"
              >
                {job.contactEmail}
              </a>
            </p>
          </div>
        </section>

        {/* Apply Form Modal */}
        {showApplyForm && (
          <ApplyForm 
            job={job}
            onClose={handleCloseForm}
          />
        )}

      </div>
    </div>
  );
};

export default JobDetailsPage;