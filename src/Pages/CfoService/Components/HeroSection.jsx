// import React from "react";
// import CfoBackground from "../../../assets/CfoBackground.png";

// function HeroSection() {
//   return (
//     <section class="bg-backgroundPrimary text-white px-6 md:px-12 lg:px-20">
//       <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         <div class="lg:pr-8 xl:pr-12">
//           <p class="text-sm tracking-widest text-purple-300 mb-4">
//             VIRTUAL CFO ADVISORY
//           </p>

//           <h1 class="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 lg:whitespace-nowrap">
//             <span class="block">Virtual CFO: Smarter Finance,</span>
//             <span class="block">Powered by Real-Time Dashboards </span>
//             <span>and Automation</span>
//           </h1>

//           <p class="text-gray-300 text-base md:text-lg mb-8">
//             From maximizing ITC to handling audits and notices — our expert team
//             ensures your GST is always under control.
//           </p>

//           <div class="flex flex-wrap gap-4">
//             <button class="bg-purple-500 hover:bg-purple-600 transition text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
//               Book a Free CFO Dashboard Now
//             </button>

//             <button class="border border-gray-400 hover:border-white transition text-white px-6 py-3 rounded-full text-sm font-medium">
//               Explore Services
//             </button>
//           </div>
//         </div>

//         <div class="flex justify-center lg:justify-end">
//           <img
//             src={CfoBackground}
//             loading="lazy"
//             alt="CFO Dashboard "
//             class="w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg  drop-shadow-2xl hover:scale-105 transition-transform duration-300"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

import React from "react";
import CfoBackground from "../../../assets/Cfobackground.png";

function HeroSection() {
  return (
    <section className="bg-backgroundPrimary text-white px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="">
          <p className="text-sm  mt-0 sm:mt-10 md:mt-4 lg:mt-0 tracking-widest text-purple-300 mb-3 sm:mb-4   uppercase">
            VIRTUAL CFO ADVISORY
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            Virtual CFO: Smarter Finance, Powered by Real-Time Dashboards and
            Automation
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            From maximizing ITC to handling audits and notices — our expert team
            ensures your GST is always under control.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <button className="bg-purple-500 hover:bg-purple-600 transition text-white px-5 sm:px-6 py-3 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
              Book a Free CFO Dashboard Now
            </button>

            <button className="border border-gray-400 hover:border-white transition text-white px-5 sm:px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap">
              Explore Services
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={CfoBackground}
            loading="lazy"
            alt="CFO Dashboard"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
