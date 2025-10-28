// components/ContactSection.jsx
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'hello@cretumadvisory.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: '🏢',
      title: 'Visit Us',
      details: '123 Business District',
      description: 'San Francisco, CA 94105'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: 'Start Chat',
      description: 'Available 24/7 for urgent matters'
    }
  ];

  const offices = [
    {
      city: 'Delhi',
      address: '123 Business District, SF 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@cretumadvisory.com'
    },
    {
      city: 'Noida',
      address: '456 Manhattan Ave, NY 10001',
      phone: '+1 (555) 123-4568',
      email: 'ny@cretumadvisory.com'
    },
    {
      city: 'Gurugram',
      address: '789 Business Street, London EC2A',
      phone: '+44 20 7946 0958',
      email: 'london@cretumadvisory.com'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-backgroundPrimaryDark">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business? Let's start a conversation about how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-in-up">
            <div className="bg-backgroundSecondary rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-green-900/20 border border-green-500">
                  <p className="text-green-400 font-semibold">
                    ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2" htmlFor="company">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2" htmlFor="subject">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white focus:outline-none focus:border-buttonBackground transition-colors duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="careers">Careers & Opportunities</option>
                      <option value="partnership">Partnership</option>
                      <option value="services">Our Services</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-backgroundPrimary border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-buttonBackground transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-buttonBackground hover:bg-buttonBackgroundHover text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="fade-in-up-delay">
            <div className="space-y-8">
              {/* Contact Methods */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-backgroundSecondary hover:bg-backgroundPrimary transition-all duration-300 group hover:scale-105 cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-buttonBackground transition-colors duration-300">
                            {method.title}
                          </h4>
                          <p className="text-buttonBackground font-medium text-sm">
                            {method.details}
                          </p>
                          <p className="text-gray-400 text-sm mt-1">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offices */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Our Offices</h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-backgroundSecondary hover:bg-backgroundPrimary transition-all duration-300 group"
                    >
                      <h4 className="font-bold text-white text-lg mb-2 group-hover:text-buttonBackground transition-colors duration-300">
                        {office.city}
                      </h4>
                      <div className="space-y-1 text-gray-300">
                        <p className="flex items-center gap-2">
                          <span>📍</span> {office.address}
                        </p>
                        <p className="flex items-center gap-2">
                          <span>📞</span> {office.phone}
                        </p>
                        <p className="flex items-center gap-2">
                          <span>📧</span> {office.email}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

        
            </div>
          </div>
        </div>

        {/* Response Time Promise */}
        <div className="text-center mt-16 fade-in-up-delay-2">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-backgroundSecondary">
            <div className="text-3xl">⚡</div>
            <div className="text-left">
              <h4 className="text-white font-bold text-lg">Quick Response Guarantee</h4>
              <p className="text-gray-300">We respond to all inquiries within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;