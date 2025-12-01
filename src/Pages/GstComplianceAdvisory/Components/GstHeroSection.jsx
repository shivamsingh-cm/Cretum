// import React from "react";
// import GstServiceBackground from "../../../assets/gstservicebgc.png";

// function HeroSection() {
//   return (
//     <section class="bg-backgroundPrimary min-h-screen text-white ">
//       <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-20">
//         <div class="lg:pr-8 xl:pr-12">
//           <p class="text-sm tracking-widest text-purple-300 mb-4">
//             GST-COMPLIANCE-AND-ADVISORY
//           </p>

//           <h1 class="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 whitespace-nowrap">
//             <span class="block">GST Advisory : Make your GST </span>
//             <span class="block">Compliance More Smooth </span>
//           </h1>

//           <p class="text-gray-300 text-base md:text-lg mb-8">
//             From maximizing ITC to handling audits and notices — our expert team
//             ensures your GST is always under control.
//           </p>

//           <div class="flex flex-wrap gap-4">
//             <button class="bg-purple-500 hover:bg-purple-600 transition text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
//               Book a Free GST Review
//             </button>

//             <button class="border border-gray-400 hover:border-white transition text-white px-6 py-3 rounded-full text-sm font-medium">
//               Explore Services
//             </button>
//           </div>
//         </div>

//         <div class="flex justify-center lg:justify-end">
//           <img
//             src={GstServiceBackground}
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

// import React from "react";
// import GstServiceBackground from "../../../assets/gstservicebgc.png";

// function HeroSection() {
//   return (
//     <section className="bg-backgroundPrimary min-h-screen text-white flex items-center">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-20">
//         <div className="lg:pr-8 xl:pr-12">
//           <p className="text-sm tracking-widest text-purple-300 mb-4">
//             GST-COMPLIANCE-AND-ADVISORY
//           </p>

//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 whitespace-nowrap">
//             <span className="block">GST Advisory : Make your GST</span>
//             <span className="block">Compliance More Smooth</span>
//           </h1>

//           <p className="text-gray-300 text-base md:text-lg mb-8">
//             From maximizing ITC to handling audits and notices — our expert team
//             ensures your GST is always under control.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <button className="bg-purple-500 hover:bg-purple-600 transition text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
//               Book a Free GST Review
//             </button>

//             <button className="border border-gray-400 hover:border-white transition text-white px-6 py-3 rounded-full text-sm font-medium">
//               Explore Services
//             </button>
//           </div>
//         </div>

//         <div className="flex justify-center lg:justify-end">
//           <img
//             src={GstServiceBackground}
//             loading="lazy"
//             alt="CFO Dashboard"
//             className="w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl hover:scale-105 transition-transform duration-300"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

import React from "react";
import GstServiceBackground from "../../../assets/gstservicebgc.png";

function HeroSection() {
  return (
    <section className="bg-backgroundPrimary min-h-[80vh] text-white flex items-center py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm tracking-widest text-purple-300 mb-3">
              GST-COMPLIANCE-AND-ADVISORY
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-5">
              <span className="">GST Advisory : Make your GST </span>
              <span>Compliance More Smooth</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-xl">
              From maximizing ITC to handling audits and notices — our expert
              team ensures your GST is always under control.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg transition">
                Book a Free GST Review
              </button>

              <button className="border border-gray-400 hover:border-white text-white px-6 py-3 rounded-full text-sm font-medium transition">
                Explore Services
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={GstServiceBackground}
              loading="lazy"
              alt="GST Services"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
