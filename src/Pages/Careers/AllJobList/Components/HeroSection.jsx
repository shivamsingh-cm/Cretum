const HeroSection = ({ onViewJobsClick, onLearnAboutClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-backgroundPrimary">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5 bg-gradient-to-br from-transparent via-white to-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-7xl mx-auto mt-20">
          {/* Company Logo/Badge */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-200">
                We're Hiring Across Multiple Departments
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Build Your Career at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
              Cretum Advisory
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Join a team of{" "}
            <span className="text-white font-semibold">visionary leaders</span>{" "}
            and{" "}
            <span className="text-white font-semibold">industry experts</span>{" "}
            shaping the future of business advisory.
          </p>

          {/* Additional Value Proposition */}
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in-delay">
            <p className="text-lg text-gray-400 mb-6">
              We're not just offering jobs - we're offering{" "}
              <span className="text-white">career pathways</span>,{" "}
              <span className="text-white">mentorship</span>, and opportunities
              to work on{" "}
              <span className="text-white">transformative projects</span> with
              global impact.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-delay-2">
            <button
              onClick={onViewJobsClick}
              className="group px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-buttonBackground to-purple-600 hover:from-buttonBackgroundHover hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              <span>View Open Positions</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            <button
              onClick={onLearnAboutClick}
              className="group px-8 py-4 rounded-lg font-semibold text-white border-2 border-purple-500 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              <span>Learn About Our Culture</span>
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 animate-fade-in-delay-3">
            {[
              {
                number: "50+",
                label: "Open Positions",
                description: "Across all experience levels",
              },
              {
                number: "15+",
                label: "Countries",
                description: "Global presence & opportunities",
              },
              {
                number: "98%",
                label: "Employee Satisfaction",
                description: "Based on 2024 survey",
              },
            ]?.map((stat) => (
              <div
                key={stat?.label}
                className="text-center group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 hover:bg-white/10"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-3 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                  {stat?.number}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {stat?.label}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat?.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
