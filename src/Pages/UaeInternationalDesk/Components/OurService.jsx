// import { useState } from "react";
// import RandomImage from "../../../assets/randomblog.jpg";
// const services = [
//   {
//     id: 1,
//     title: "Startup Services ",
//     description:
//       "If you’re a Startup, you already know the complexities of launching, managing, and scaling your business.",
//     image: RandomImage,
//   },
//   {
//     id: 2,
//     title: "Customs Services",
//     description:
//       "Cretum Advisory provides specialized customs advisory services to help businesses manage customs regulations, mitigate risks, and ensure smooth import/export operations",
//     image: RandomImage,
//   },
//   {
//     id: 3,
//     title: "Income Tax Services",
//     description:
//       "Income tax is imposed on individuals or entities (taxpayers) based on income or profits earned (taxable income).",
//     image: RandomImage,
//   },
//   {
//     id: 4,
//     title: "CFO Services",
//     description:
//       "CFO services refer to the suite of financial management services provided by a Chief Financial Officer (CFO) to organizations. ",
//     image: RandomImage,
//   },
// ];

// export default function OurService() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="min-h-screen text-white bg-backgroundPrimary p-6 sm:p-10 md:p-14 lg:p-16">
//       <div className="max-w-7xl mx-auto relative">
//         <h2 className="text-center text-2xl font-semibold mb-10">
//           Our Core Services
//         </h2>

//         {/* Carousel */}
//         <div className="overflow-hidden relative">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {services.map((service) => (
//               <div
//                 key={service.id}
//                 className="flex-shrink-0 w-full md:w-full px-2"
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-backgroundSecondary rounded-lg overflow-hidden p-4 md:p-6">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-64 md:h-80 object-cover rounded-md"
//                   />
//                   <div className="text-left px-4 md:px-8">
//                     <h3 className="text-xl md:text-2xl font-semibold mb-3">
//                       {service.title}
//                     </h3>
//                     <p className="text-gray-300 mb-6 text-sm md:text-base">
//                       {service.description}
//                     </p>
//                     <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
//                       Learn More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Bottom Navigation */}
//           <div className="flex justify-center items-center gap-4 mt-4 text-white text-lg font-medium">
//             <button
//               onClick={prevSlide}
//               className="px-3 py-1 bg-purple-700 rounded hover:bg-purple-800 transition"
//             >
//               &lt;-
//             </button>
//             <span>
//               {currentIndex + 1} / {services.length}
//             </span>
//             <button
//               onClick={nextSlide}
//               className="px-3 py-1 bg-purple-700 rounded hover:bg-purple-800 transition"
//             >
//               -&gt;
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import RandomImage from "../../../assets/randomblog.jpg";

const services = [
  {
    id: 1,
    title: "Startup Services",
    description:
      "If you're a Startup, you already know the complexities of launching, managing, and scaling your business.",
    image: RandomImage,
  },
  {
    id: 2,
    title: "Customs Services",
    description:
      "Cretum Advisory provides specialized customs advisory services to help businesses manage customs regulations, mitigate risks, and ensure smooth import/export operations",
    image: RandomImage,
  },
  {
    id: 3,
    title: "Income Tax Services",
    description:
      "Income tax is imposed on individuals or entities (taxpayers) based on income or profits earned (taxable income).",
    image: RandomImage,
  },
  {
    id: 4,
    title: "CFO Services",
    description:
      "CFO services refer to the suite of financial management services provided by a Chief Financial Officer (CFO) to organizations.",
    image: RandomImage,
  },
];

export default function OurService() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Core Services
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service) => (
              <div key={service.id} className="flex-shrink-0 w-full px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl overflow-hidden p-4 border border-gray-200">
                  {/* Image Section */}
                  <div className="order-2 lg:order-1">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-80 lg:h-80 object-cover rounded-xl shadow-lg"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="order-1 lg:order-2 text-left">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-3 mb-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-purple-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to ${services[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
