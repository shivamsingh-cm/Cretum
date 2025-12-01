// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { CheckCircle } from "lucide-react";
// import serviceImg1 from "../../../assets/gstserviceleftbgimage.jpg";

// export default function GstServices() {
//   const services = [
//     {
//       title: "GST Compliance & Filing",
//       description:
//         "Timely and accurate filing of all GST returns with pre-filing review and validation to ensure 100% compliance.",
//       points: [
//         "Monthly/Quarterly Returns",
//         "Annual Returns & Reconciliation",
//         "E-way Bills & E-invoicing",
//       ],
//       image: serviceImg1,
//     },
//     {
//       title: "Refund Assistance",
//       description:
//         "End-to-end support for claiming and tracking GST refunds efficiently with minimal follow-ups.",
//       points: [
//         "Export Refunds",
//         "Inverted Duty Refunds",
//         "Refund Audits & Support",
//       ],
//       image: serviceImg1,
//     },
//     {
//       title: "GST Health Check",
//       description:
//         "Comprehensive review of GST records to identify risks, recover ITC, and optimize tax position.",
//       points: ["Risk Mapping", "ITC Optimization", "Compliance Scoring"],
//       image: serviceImg1,
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const total = services.length;
//   const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
//   const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
//   const currentService = services[current];

//   return (
//     <section className="  py-16 px-6 md:px-12 lg:px-20">
//       <div className="max-w-[1200px] mx-auto">
//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
//           Our GST Services
//         </h2>

//         {/* Service Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
//           {/* LEFT IMAGE (50% width on desktop) */}
//           <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[420px] lg:-ml-20">
//             <img
//               src={currentService?.image}
//               alt={currentService.title}
//               className="absolute top-0 left-0 w-full h-full object-cover "
//               loading="lazy"
//             />
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="flex flex-col justify-center space-y-4">
//             <h3 className="text-2xl md:text-3xl font-semibold">
//               {currentService?.title}
//             </h3>

//             <p className=" text-sm md:text-base leading-relaxed">
//               {currentService?.description}
//             </p>

//             <ul className="space-y-2">
//               {currentService?.points?.map((point, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center gap-2 text-sm md:text-base"
//                 >
//                   <CheckCircle
//                     className="text-[#A164FF] flex-shrink-0 mt-0.5"
//                     size={16}
//                   />
//                   {point}
//                 </li>
//               ))}
//             </ul>

//             <button className="mt-2 bg-gray-100 border border-[#A164FF] text-backgroundPrimary font-semibold py-2 px-6 rounded-full w-fit hover:bg-buttonBackground hover:text-white transition">
//               Talk to our GST Expert
//             </button>
//           </div>
//         </div>

//         {/* Pagination Controls (Moved below section and centered) */}
//         <div className="flex justify-end items-center gap-6 mt-12">
//           <button
//             onClick={prevSlide}
//             className="p-3 rounded-full bg-gray-300 hover:bg-gray-500 transition"
//           >
//             <FaArrowLeft />
//           </button>

//           <p className="text-sm text-gray-400">
//             {current + 1} of {total}
//           </p>

//           <button
//             onClick={nextSlide}
//             className="p-3 rounded-full bg-gray-300 hover:bg-gray-500 transition"
//           >
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import serviceImg1 from "../../../assets/gstserviceleftbgimage.jpg";
import serviceImg2 from "../../../assets/careerbg.webp";
import serviceImg3 from "../../../assets/life1.png";

export default function GstServices() {
  const services = [
    {
      title: "GST Compliance & Filing",
      description:
        "Timely and accurate filing of all GST returns with pre-filing review and validation to ensure 100% compliance.",
      points: [
        "Monthly/Quarterly Returns",
        "Annual Returns & Reconciliation",
        "E-way Bills & E-invoicing",
      ],
      image: serviceImg1,
    },
    {
      title: "Refund Assistance",
      description:
        "End-to-end support for claiming and tracking GST refunds efficiently with minimal follow-ups.",
      points: [
        "Export Refunds",
        "Inverted Duty Refunds",
        "Refund Audits & Support",
      ],
      image: serviceImg2,
    },
    {
      title: "GST Health Check",
      description:
        "Comprehensive review of GST records to identify risks, recover ITC, and optimize tax position.",
      points: ["Risk Mapping", "ITC Optimization", "Compliance Scoring"],
      image: serviceImg3,
    },
  ];

  const [current, setCurrent] = useState(0);
  const total = services.length;

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [total]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const currentService = services[current];

  return (
    <section className="  py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Our GST Services
        </h2>

        {/* Service Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
          {/* LEFT IMAGE (50% width on desktop) */}
          <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[420px] lg:-ml-20">
            <img
              src={currentService?.image}
              alt={currentService.title}
              className="absolute top-0 left-0 w-full h-full object-cover "
              loading="lazy"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">
              {currentService?.title}
            </h3>

            <p className=" text-sm md:text-base leading-relaxed">
              {currentService?.description}
            </p>

            <ul className="space-y-2">
              {currentService?.points?.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm md:text-base"
                >
                  <CheckCircle
                    className="text-[#A164FF] flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  {point}
                </li>
              ))}
            </ul>

            <button className="mt-2 bg-gray-100 border border-[#A164FF] text-backgroundPrimary font-semibold py-2 px-6 rounded-full w-fit hover:bg-buttonBackground hover:text-white transition">
              Talk to our GST Expert
            </button>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-3 mt-8 sm:mt-12">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-purple-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
