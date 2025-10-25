import React from "react";

const CtaBanner = () => {
  return (
    <section className="relative bg-buttonBackground overflow-hidden text-center text-white py-20 px-6 md:px-12">
      
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0">
        {/* Left curved shape */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 border-r border-white/20 rounded-r-[50%]" />
        {/* Right curved shape */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 border-l border-white/20 rounded-l-[50%]" />
        {/* Subtle overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#a46cf0]/30 to-[#8c4ad8]/30 opacity-70" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
          Roles We’re Hiring For
        </h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">
          Write to us at&nbsp;<span className="underline">careers@cretumadvisory.com</span>&nbsp;to explore opportunities at Uniqus and elevate your professional journey.
        </p>
        <button 
          className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-sm"
        >
          View Opportunities
        </button>
      </div>
    </section>
  );
};

export default CtaBanner;


