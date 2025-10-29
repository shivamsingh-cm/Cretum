// import React from 'react'

// function HeroSection() {
//   return (
//     <div>HeroSection</div>
//   )
// }

// export default HeroSection

// EventsSection.jsx
import React from "react";
import { Check, Users, Briefcase } from "lucide-react";

const EventsWorkshops = () => {
  return (
    <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-12 mt-10">
        <h2 className="text-3xl md:text-5xl font-medium mb-3">
          Events & Workshops
        </h2>
        <p className="text-gray-300 text-lg font-normal max-w-2xl mx-auto">
          At Cretum Advisory, we organize exclusive events and workshops tailored for
          startups, SMEs, and corporates.
        </p>
      </div>

      {/* Event Card */}
      <div className="bg-backgroundSecondary rounded-lg border border-backgroundSecondary flex flex-col lg:flex-row items-stretch overflow-hidden">
        {/* Left Image */}
        <div className="lg:w-1/2 w-full p-4">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
            alt="Event audience"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-buttonBackground text-sm px-3 py-1 rounded-full  font-normal">
              Featured
            </span>
          </div>

          <p className="text-buttonBackground text-lg font-normal mb-1">
            New Delhi & Live Online - 18 Oct 2025
          </p>

          <h3 className="text-2xl md:text-3xl font-medium mb-5">
            Cretum Annual Tax & Compliance Summit 2025
          </h3>

          <ul className="space-y-3 mb-6 text-white text-xl font-normal">
            <li className="flex items-start gap-2">
                <span className="mt-1.5 text-white  rounded-full bg-buttonBackground">
                  <Check size={18} strokeWidth={2.5} />
                </span>
                Expert sessions by Big 4 veterans
            </li>

            <li className="flex items-start gap-2">
                <span className="mt-1.5 text-white rounded-full bg-buttonBackground">
                <Check size={18} strokeWidth={2.5} />
                </span>
                Panel discussion on Startup Funding & Compliance
            </li>

            <li className="flex items-start gap-2">
                <span className="mt-1.5 text-white rounded-full bg-buttonBackground">
                <Check size={18} strokeWidth={2.5} />
                </span>
                Networking with 200+ industry professionals
            </li>
            </ul>


          <button className="text-sm font-medium self-start bg-white text-[#1a103d]  px-6 py-2 rounded-full hover:bg-gray-200 transition">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsWorkshops;
