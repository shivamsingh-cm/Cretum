// import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
// import serviceImg1 from "../../../assets/gstserviceleftbgimage.jpg"; // replace with your image

// const GstServices = () => {
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
//     <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20">
//       <div className="max-w-[1200px] mx-auto">
//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
//           Our GST Services
//         </h2>

//         {/* Service Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           {/* Image */}
//           <div className="w-full h-[280px] sm:h-[350px] lg:h-[400px]">
//             <img
//               src={currentService.image}
//               alt={currentService.title}
//               loading="lazy"
//               className="w-full h-full object-cover rounded-xl shadow-lg"
//             />
//           </div>

//           {/* Text Content */}
//           <div className="flex flex-col justify-center space-y-5">
//             <h3 className="text-2xl md:text-3xl font-semibold">
//               {currentService.title}
//             </h3>
//             <p className="text-gray-300 text-sm md:text-base leading-relaxed">
//               {currentService.description}
//             </p>

//             <ul className="space-y-2">
//               {currentService.points.map((point, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center gap-2 text-gray-300 text-sm md:text-base"
//                 >
//                   <FaCheckCircle className="text-buttonBackground text-base" />
//                   {point}
//                 </li>
//               ))}
//             </ul>

//             <button className="mt-4 bg-white text-backgroundPrimary font-semibold py-2 px-5 rounded-full w-fit hover:bg-buttonBackground hover:text-white transition">
//               Talk to our GST Expert
//             </button>
//           </div>
//         </div>

//         {/* Pagination Controls */}
//         <div className="flex justify-end items-center gap-6 mt-10">
//           <button
//             onClick={prevSlide}
//             className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
//           >
//             <FaArrowLeft />
//           </button>

//           <p className="text-sm text-gray-400">
//             {current + 1} of {total}
//           </p>

//           <button
//             onClick={nextSlide}
//             className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
//           >
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GstServices;

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import serviceImg1 from "../../../assets/gstserviceleftbgimage.jpg";

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
      image: serviceImg1,
    },
    {
      title: "GST Health Check",
      description:
        "Comprehensive review of GST records to identify risks, recover ITC, and optimize tax position.",
      points: ["Risk Mapping", "ITC Optimization", "Compliance Scoring"],
      image: serviceImg1,
    },
  ];

  const [current, setCurrent] = useState(0);
  const total = services.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  const currentService = services[current];

  return (
    <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20">
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
              src={currentService.image}
              alt={currentService.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">
              {currentService.title}
            </h3>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {currentService.description}
            </p>

            <ul className="space-y-2">
              {currentService.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-300 text-sm md:text-base"
                >
                  <FaCheckCircle className="text-buttonBackground text-base shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <button className="mt-2 bg-white text-backgroundPrimary font-semibold py-2 px-6 rounded-full w-fit hover:bg-buttonBackground hover:text-white transition">
              Talk to our GST Expert
            </button>
          </div>
        </div>

        {/* Pagination Controls (Moved below section and centered) */}
        <div className="flex justify-end items-center gap-6 mt-12">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FaArrowLeft />
          </button>

          <p className="text-sm text-gray-400">
            {current + 1} of {total}
          </p>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}




