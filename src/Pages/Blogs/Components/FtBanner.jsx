import React from 'react';

const FtBanner = () => {
  return (
    // Outer container with a vibrant purple background and relative positioning for background circles
    <div className="relative overflow-hidden bg-buttonBackground min-h-[60vh] flex items-center justify-center p-6 sm:p-10">
      <div className="absolute top-[-100px] left-[-100px] w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/30 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/30 rounded-full blur-3xl opacity-50 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto py-10">
        
        {/* Title (Slightly reduced bottom margin since the curve is gone) */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-10 sm:mb-12">
          Subscribe to learn about new product features & updates
        </h1>

        {/* --- Curved Divider Line REMOVED --- */}
        {/* The 'mb' margin from the curve's container is distributed to the title */}


        {/* Input and Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 px-4 sm:px-0">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            // Simplified background/border for a cleaner look
            className="w-full sm:max-w-md p-4 bg-purple-700/60 border border-transparent rounded-xl text-white placeholder-purple-200
                       focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-300
                       text-base sm:text-lg shadow-inner"
            aria-label="Enter your email for subscription"
          />
          {/* Subscribe Button */}
          <button
            className="w-full sm:w-auto px-8 py-4 bg-white text-purple-700 font-bold rounded-xl shadow-lg
                       hover:bg-gray-100 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600
                       transition duration-300 text-base sm:text-lg"
          >
            Subscribe
          </button>
        </div>

        {/* Privacy Policy Text */}
        <p className="text-purple-200 text-sm sm:text-base px-4">
          We care about your data in our <a href="#" className="underline hover:text-white transition duration-200 font-medium">privacy policy</a>
        </p>
      </div>
    </div>
  );
};

export default FtBanner;