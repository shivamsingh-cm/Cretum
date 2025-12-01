// import { CheckCircle } from "lucide-react";
// import serviceImg1 from "../../../assets/gstserviceleftbgimage.jpg";

// export default function CfoServices() {
//   const currentService = {
//     title: "GST Compliance & Filing",
//     description:
//       "Timely and accurate filing of all GST returns with pre-filing review and validation to ensure 100% compliance.",
//     points: [
//       "Monthly/Quarterly Returns",
//       "Annual Returns & Reconciliation",
//       "E-way Bills & E-invoicing",
//     ],
//     image: serviceImg1,
//   };

//   return (
//     <div className="w-full bg-white py-16 sm:py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* Title */}
//         <h2 className="text-gray-800 text-3xl sm:text-4xl font-semibold">
//           Our CFO Services
//         </h2>

//         {/* Service Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-8 sm:mt-12">
//           {/* LEFT IMAGE */}
//           <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] order-1 lg:order-1">
//             <img
//               src={currentService?.image}
//               alt={currentService.title}
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//               loading="lazy"
//             />
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-left order-2 lg:order-2">
//             <h3 className="text-gray-800 text-2xl sm:text-3xl font-semibold">
//               {currentService?.title}
//             </h3>

//             <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//               {currentService?.description}
//             </p>

//             <ul className="space-y-2 sm:space-y-3">
//               {currentService?.points?.map((point, index) => (
//                 <li
//                   key={index}
//                   className="flex items-start gap-2 text-sm sm:text-base"
//                 >
//                   <CheckCircle
//                     className="text-[#A164FF] flex-shrink-0 mt-0.5"
//                     size={18}
//                   />
//                   <span className="text-gray-600 leading-relaxed flex-1">
//                     {point}
//                   </span>
//                 </li>
//               ))}
//             </ul>

//             <button className="mt-2 bg-white border border-[#A164FF] text-[#A164FF] font-semibold py-2 px-6 rounded-full w-fit hover:bg-[#A164FF] hover:text-white transition-all duration-300">
//               Talk to our GST Expert
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { CheckCircle } from "lucide-react";

export default function CfoServices({
  heading,
  service,
  ctaText = "Talk to our GST Expert",
}) {
  const { title, description, points = [], image } = service;

  return (
    <div className="w-full bg-white py-16 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        {heading && (
          <h2 className="text-gray-800 text-3xl sm:text-4xl font-bold mb-6">
            {heading}
          </h2>
        )}

        {/* Service Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-8 sm:mt-12">
          {/* LEFT IMAGE */}
          <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-left">
            <h3 className="text-gray-800 text-2xl sm:text-3xl font-semibold">
              {title}
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {description}
            </p>

            <ul className="space-y-2 sm:space-y-3">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm sm:text-base"
                >
                  <CheckCircle className="text-[#A164FF] mt-0.5" size={18} />
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>

            <button className="mt-2 bg-white border border-[#A164FF] text-[#A164FF] font-semibold py-2 px-6 rounded-full w-fit hover:bg-[#A164FF] hover:text-white transition-all duration-300">
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
