import React from 'react';
import LeaderImage from '../../../assets/leader.png'
const StorySection = () => {

  return (
  
    <div className="min-h-screen bg-backgroundPrimary text-gray-100 font-sans p-6 sm:p-10 lg:p-16">
      <div className="max-w-7xl mx-auto">

        <section className="mb-20">
          <div className="flex">
            <div className="hidden lg:block border-l-4 border-purple-500 h-28 mr-8 mt-1"></div>
            <div className="flex-1">
              
              {/* Tagline */}
              <p className="text-base  tracking-wider text-purple-300 mb-2">
                Our mission is simple:
              </p>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight">
                To simplify financial transactions and compliance, so 
                businesses can focus on what truly matters — growth.
              </h1>
            </div>
          </div>
        </section>

        {/* Our Story Section  */}
        <section className="mt-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">

            <div className="w-full lg:w-1/2 shadow-2xl rounded-xl overflow-hidden">
              <img
                src={LeaderImage}
                alt="A photo of the founding team members."
                className="w-full h-96 object-cover rounded-xl transition duration-300 hover:scale-[1.02]"
                // Fallback style if the placeholder fails
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/6b21a8/ffffff?text=Image+Unavailable"; }}
              />
            </div>


            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                Our Story
              </h2>
              <div className="space-y-4 text-base font-normal text-gray-300 leading-relaxed">
                <p>
                  What started as a shared vision between two professionals — CA Devan Gupta and CA Kapil Mahani — has grown into a trusted advisory firm driven by integrity, precision, and innovation.
                </p>
                <p>
                  Under their leadership, Cretum Advisory has built long-term relationships with clients by combining deep industry expertise with hands-on collaboration.
                </p>
                <p>
                  With a diverse team of CAs, lawyers, and financial experts, we provide tailored solutions that adapt to the ever-changing regulatory landscape.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default StorySection;