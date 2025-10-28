import React from 'react';

const HeroSection = ({ onViewJobsClick, onLearnAboutClick  }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-backgroundPrimary">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-10 blur-xl bg-buttonBackground animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-xl bg-buttonBackgroundHover animate-pulse-slower" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Cretum Advisory</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
            Build your career with industry leaders. Discover opportunities that match your skills and ambitions in a dynamic, innovative environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <button 
              onClick={onViewJobsClick}
              className="px-8 py-4 rounded-lg font-semibold text-white bg-buttonBackground hover:bg-buttonBackgroundHover transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              View Open Positions
            </button>
            
            <button 
              onClick={onLearnAboutClick}
              className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-purple-500 hover:bg-purple-500 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Learn About Us
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 animate-fade-in-delay-3">
            {[
              { number: '50+', label: 'Open Positions' },
              { number: '15+', label: 'Countries' },
              { number: '98%', label: 'Employee Satisfaction' }
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-buttonBackground transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;