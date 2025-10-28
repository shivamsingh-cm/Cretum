
import React, { useState } from 'react';

const ApplyForm = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentCompany: '',
    currentPosition: '',
    totalExperience: '',
    relevantExperience: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '',
    portfolioUrl: '',
    linkedinUrl: '',
    githubUrl: '',
    coverLetter: ''
  });

  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResume(file);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        currentCompany: '',
        currentPosition: '',
        totalExperience: '',
        relevantExperience: '',
        currentSalary: '',
        expectedSalary: '',
        noticePeriod: '',
        portfolioUrl: '',
        linkedinUrl: '',
        githubUrl: '',
        coverLetter: ''
      });
      setResume(null);

      // Auto close after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 2000);
  };

  const experienceOptions = [
    '0-1 years', '1-2 years', '2-3 years', '3-4 years', 
    '4-5 years', '5-7 years', '7-10 years', '10+ years'
  ];

  const noticePeriodOptions = [
    'Immediately', '15 days', '30 days', '45 days', '60 days', '90 days', '90+ days'
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-backgroundPrimary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-backgroundPrimary border-b border-gray-700 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">Apply for {job.title}</h2>
              <p className="text-gray-400">{job.company} • {job.location}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl font-bold transition-colors duration-300"
            >
              ×
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for applying to {job.title}. We'll review your application and get back to you soon.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-buttonBackground hover:bg-buttonBackgroundHover text-white rounded-lg transition-colors duration-300"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Personal Information */}
              <div className="bg-backgroundSecondary rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                      placeholder="john.doe@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="bg-backgroundSecondary rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Professional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Current Company</label>
                    <input
                      type="text"
                      name="currentCompany"
                      value={formData.currentCompany}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                      placeholder="Current company name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Current Position</label>
                    <input
                      type="text"
                      name="currentPosition"
                      value={formData.currentPosition}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                      placeholder="Your current position"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Total Experience *</label>
                    <select
                      name="totalExperience"
                      required
                      value={formData.totalExperience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                    >
                      <option value="">Select total experience</option>
                      {experienceOptions.map(exp => (
                        <option key={exp} value={exp}>{exp}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Relevant Experience *</label>
                    <select
                      name="relevantExperience"
                      required
                      value={formData.relevantExperience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                    >
                      <option value="">Select relevant experience</option>
                      {experienceOptions.map(exp => (
                        <option key={exp} value={exp}>{exp}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Current Salary (₹)</label>
                    <input
                      type="text"
                      name="currentSalary"
                      value={formData.currentSalary}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                      placeholder="Current annual salary"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Expected Salary (₹) *</label>
                    <input
                      type="text"
                      name="expectedSalary"
                      required
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                      placeholder="Expected annual salary"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-white font-semibold mb-2">Notice Period *</label>
                    <select
                      name="noticePeriod"
                      required
                      value={formData.noticePeriod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                    >
                      <option value="">Select notice period</option>
                      {noticePeriodOptions.map(period => (
                        <option key={period} value={period}>{period}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="bg-backgroundSecondary rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Resume & Portfolio</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Upload Resume (PDF only) *</label>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-buttonBackground transition-colors duration-300">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                        required
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer">
                        <div className="text-4xl mb-2">📄</div>
                        <p className="text-white font-semibold">Click to upload resume</p>
                        <p className="text-gray-400 text-sm">PDF files only (Max: 5MB)</p>
                        {resume && (
                          <p className="text-green-400 text-sm mt-2">✓ {resume.name}</p>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">Portfolio URL</label>
                      <input
                        type="url"
                        name="portfolioUrl"
                        value={formData.portfolioUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">LinkedIn URL</label>
                      <input
                        type="url"
                        name="linkedinUrl"
                        value={formData.linkedinUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">GitHub URL</label>
                      <input
                        type="url"
                        name="githubUrl"
                        value={formData.githubUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                        placeholder="https://github.com/yourusername"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cover Letter */}
              <div className="bg-backgroundSecondary rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Cover Letter</h3>
                <textarea
                  name="coverLetter"
                  rows="6"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300 resize-none"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-4 px-6 border-2 border-gray-600 text-gray-300 hover:bg-gray-700 font-semibold rounded-lg transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-4 px-6 bg-buttonBackground hover:bg-buttonBackgroundHover text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;