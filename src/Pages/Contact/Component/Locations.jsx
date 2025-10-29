// import React, { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import MapBase from '../../../assets/mapbase.png';
// import Contact from '../../../assets/contact.png'
// const locations = [
//   {
//     city: "NEW DELHI",
//     address:
//       "40 Hanuman Lane, Connaught Place, Behind CP Police Station, New Delhi - 110001",
//   },
//   {
//     city: "GURGAON",
//     address:
//       "C-25, Udyog Vihar, Phase 1, Near Cyber City, Gurgaon - 122016",
//   },
//   {
//     city: "MUMBAI",
//     address: "Level 3, BKC, Bandra East, Mumbai - 400051",
//   },
//   {
//     city: "BENGALURU",
//     address:
//       "91 Springboard, Koramangala, 7th Block, Bengaluru - 560095",
//   },
//   {
//     city: "DUBAI",
//     address: "Business Bay, Dubai, UAE",
//   },
//   {
//     city: "USA",
//     address: "1234 Market Street, San Francisco, CA, USA",
//   },
// ];

// const Locations = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20">
//       {/* Heading */}
//       <h2 className="text-2xl md:text-4xl font-medium text-center mb-10">
//         We are available in
//       </h2>

//       {/* Map Image */}
//       <div className="relative flex justify-center mb-12">
//         <img
//           src={MapBase}
//           loading="lazy"
//           alt="World Map"
//           className="max-w-3xl w-full opacity-90"
//         />

//             <div className="absolute top-[40%] left-[55%] w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_2px_rgba(168,85,247,0.7)]"></div>
//             <div className="absolute top-[42%] left-[58%] w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_2px_rgba(168,85,247,0.7)]"></div>
//             <div className="absolute top-[38%] left-[53%] w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_2px_rgba(168,85,247,0.7)]"></div>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
//         {/* Office Image */}
//         <div className="rounded-2xl overflow-hidden shadow-lg">
//           <img
//             src={Contact}
//             loading="lazy"
//             alt="Office"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Accordion */}
//         <div className="flex flex-col gap-4">
//           {locations.map((loc, index) => (
//             <div
//               key={index}
//               className={`rounded-xl border ${
//                 openIndex === index ? "border-purple-500" : "border-transparent"
//               } overflow-hidden`}
//             >
//               <button
//                 onClick={() => toggleAccordion(index)}
//                 className={`w-full flex justify-between items-center px-5 py-4 text-left font-medium transition-colors ${
//                   openIndex === index
//                     ? "bg-purple-600"
//                     : "bg-[#1e1630] hover:bg-[#2a1d47]"
//                 }`}
//               >
//                 <span>{loc.city}</span>
//                 {openIndex === index ? (
//                   <ChevronUp size={18} />
//                 ) : (
//                   <ChevronDown size={18} />
//                 )}
//               </button>

//               {openIndex === index && (
//                 <div className="bg-[#1e1630] px-5 py-4 text-sm text-gray-300">
//                   {loc.address}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Locations;


import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import MapBase from "../../../assets/mapbase.png";
import DelhiImg from "../../../assets/contact.png";
import GurgaonImg from "../../../assets/mapbase.png";
import MumbaiImg from "../../../assets/mapbase.png";
import BengaluruImg from "../../../assets/contact.png";
import DubaiImg from "../../../assets/mapbase.png";
import UsaImg from "../../../assets/mapbase.png";

const locations = [
  {
    city: "NEW DELHI",
    address:
      "40 Hanuman Lane, Connaught Place, Behind CP Police Station, New Delhi - 110001",
    image: DelhiImg,
  },
  {
    city: "GURGAON",
    address: "C-25, Udyog Vihar, Phase 1, Near Cyber City, Gurgaon - 122016",
    image: GurgaonImg,
  },
  {
    city: "MUMBAI",
    address: "Level 3, BKC, Bandra East, Mumbai - 400051",
    image: MumbaiImg,
  },
  {
    city: "BENGALURU",
    address: "91 Springboard, Koramangala, 7th Block, Bengaluru - 560095",
    image: BengaluruImg,
  },
  {
    city: "DUBAI",
    address: "Business Bay, Dubai, UAE",
    image: DubaiImg,
  },
  {
    city: "USA",
    address: "1234 Market Street, San Francisco, CA, USA",
    image: UsaImg,
  },
];

const Locations = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-medium text-center mb-10">
        We are available in
      </h2>

      {/* Map Image */}
      <div className="relative flex justify-center mb-12">
        <img
          src={MapBase}
          loading="lazy"
          alt="World Map"
          className="max-w-3xl w-full opacity-90"
        />

        {/* Example map points */}
        <div className="absolute top-[40%] left-[55%] w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_2px_rgba(168,85,247,0.7)]"></div>
        <div className="absolute top-[42%] left-[58%] w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_2px_rgba(168,85,247,0.7)]"></div>
        <div className="absolute top-[38%] left-[53%] w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_2px_rgba(168,85,247,0.7)]"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
        {/* Office Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-[300px] sm:h-[400px] md:h-[450px]">
          <img
            key={locations[openIndex]?.image}
            src={locations[openIndex]?.image}
            alt={locations[openIndex]?.city}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-700 ease-in-out opacity-100"
          />
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {locations.map((loc, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === index ? "border-purple-500" : "border-transparent"
              } overflow-hidden`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center px-5 py-4 text-left font-medium transition-colors ${
                  openIndex === index
                    ? "bg-purple-600"
                    : "bg-[#1e1630] hover:bg-[#2a1d47]"
                }`}
              >
                <span>{loc.city}</span>
                {openIndex === index ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {openIndex === index && (
                <div className="bg-[#1e1630] px-5 py-4 text-sm text-gray-300">
                  {loc.address}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
