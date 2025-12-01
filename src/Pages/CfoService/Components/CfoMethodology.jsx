// import { FaBuilding, FaCheckCircle, FaClipboardCheck } from "react-icons/fa";

// const CfoMethodology = () => {
//   const features = [
//     {
//       icon: <FaBuilding className="text-3xl text-buttonBackground" />,
//       title: "Expert-Led",
//       description:
//         "Your finance is handled by experienced CFOs, controllers, and analysts who understand complexities across industries and manage them with precision.",
//     },
//     {
//       icon: <FaCheckCircle className="text-3xl text-buttonBackground" />,
//       title: "Tech-Powered",
//       description:
//         "Our automated dashboards track cash flow, profitability, payables, receivables, and working capital in real time — so you always know exactly where your business stands.",
//     },
//     {
//       icon: <FaClipboardCheck className="text-3xl text-buttonBackground" />,
//       title: "Results-Focused",
//       description:
//         "We measure success through real outcomes: faster closings, 100% reporting continuity, accurate forecasts, lower leakages, and stronger decision-making across the business.",
//     },
//   ];

//   return (
//     <section className="w-full bg-white py-16 sm:py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* Heading Section */}
//         <div className="mb-12 sm:mb-16">
//           <h2 className="text-gray-800 text-3xl sm:text-4xl font-semibold mb-4">
//             Why Businesses Trust Us With Their Finance
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
//             We bring seasoned CFO expertise and intelligent automation together,
//             helping companies build a finance function that's faster, clearer,
//             and built for scale.
//           </p>
//         </div>

//         {/* Features Cards Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
//           {features?.map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 border border-[#A164FF] rounded-xl p-6 sm:p-8 text-center
//               transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-white cursor-pointer
//               flex flex-col items-center h-full"
//             >
//               {/* Icon Container */}
//               <div
//                 className="bg-purple-900/10 p-4 rounded-2xl shadow-sm mb-6 flex items-center justify-center
//               transition-all duration-300 hover:bg-purple-900/20 hover:shadow-md"
//               >
//                 {item?.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-gray-800 font-semibold text-lg sm:text-xl mb-4">
//                 {item?.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
//                 {item?.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CfoMethodology;

export default function CfoMethodology({ heading, subheading, features = [] }) {
  return (
    <section className="w-full bg-white py-16 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-gray-800 text-3xl sm:text-4xl font-semibold mb-4">
            {heading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {features?.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-[#A164FF] rounded-xl p-6 sm:p-8 text-center
              transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-white cursor-pointer
              flex flex-col items-center h-full"
            >
              {/* Icon */}
              <div className="bg-purple-900/10 p-4 rounded-2xl shadow-sm mb-6 flex items-center justify-center transition-all duration-300">
                {item?.icon}
              </div>

              <h3 className="text-gray-800 font-semibold text-lg sm:text-xl mb-4">
                {item?.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
