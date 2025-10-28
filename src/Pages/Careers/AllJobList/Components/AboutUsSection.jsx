import React from 'react';
const AboutUsSection = ({onContactClick}) => {
  const values = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To empower businesses with strategic advisory services that drive growth, innovation, and sustainable success in a rapidly evolving market landscape.'
    },
    {
      icon: '👁️',
      title: 'Our Vision',
      description: 'To be the most trusted advisory partner for organizations seeking transformative growth and competitive advantage in their industries.'
    },
    {
      icon: '⭐',
      title: 'Our Values',
      description: 'Integrity, innovation, collaboration, and excellence guide every decision we make and every relationship we build.'
    }
  ];

  const milestones = [
    { year: '2015', event: 'Cretum Advisory Founded', description: 'Started with a vision to transform business consulting' },
    { year: '2018', event: 'Global Expansion', description: 'Expanded operations to 3 continents' },
    { year: '2020', event: 'Digital Transformation', description: 'Pioneered AI-driven advisory services' },
    { year: '2023', event: 'Industry Recognition', description: 'Awarded Top Advisory Firm of the Year' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-backgroundPrimaryDark">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Cretum Advisory
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            For nearly a decade, we've been at the forefront of business transformation, 
            helping organizations navigate complexity and achieve extraordinary results.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Content */}
          <div className="fade-in-up">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Who We Are
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Cretum Advisory is a global strategic consulting firm that partners with 
              leaders in business and society to tackle their most important challenges 
              and capture their greatest opportunities.
            </p>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Our team of experienced consultants, industry experts, and technology 
              specialists work collaboratively to deliver innovative solutions that 
              drive measurable impact and sustainable growth.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 rounded-lg bg-backgroundSecondary hover:bg-buttonBackground transition-colors duration-300 group">
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-white">100+</div>
                <div className="text-gray-400 group-hover:text-gray-200">Expert Consultants</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-backgroundSecondary hover:bg-buttonBackground transition-colors duration-300 group">
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-white">25+</div>
                <div className="text-gray-400 group-hover:text-gray-200">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="fade-in-up-delay">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              What We Believe
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="p-6 rounded-xl bg-backgroundSecondary hover:bg-backgroundPrimary transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-buttonBackground transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="fade-in-up-delay-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-buttonBackground opacity-30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="p-6 rounded-xl bg-backgroundSecondary hover:bg-backgroundPrimary transition-all duration-300 group hover:scale-105">
                      <div className="text-sm font-semibold text-buttonBackground mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-buttonBackground transition-colors duration-300">
                        {milestone.event}
                      </h4>
                      <p className="text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-buttonBackground border-4 border-backgroundPrimaryDark z-10"></div>
                  
                  {/* Year */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                    <div className="text-2xl font-bold text-white opacity-80">
                      {milestone.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in-up-delay-2">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
               onClick={onContactClick}
               className="px-8 py-4 rounded-lg font-semibold text-white bg-buttonBackground hover:bg-buttonBackgroundHover transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;