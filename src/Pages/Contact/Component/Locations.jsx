// import { useState, useEffect } from "react";
// import {
//   ChevronDown,
//   ChevronUp,
//   X,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import MapBase from "../../../assets/mapbase.png";
// import DelhiImg from "../../../assets/contact.png";
// import GurgaonImg from "../../../assets/mumbai1.jpeg";
// import MumbaiImg1 from "../../../assets/mumbai1.jpeg";
// import MumbaiImg2 from "../../../assets/mumbai2.jpeg";
// import MumbaiImg3 from "../../../assets/mumbai3.jpeg";
// import MumbaiImg4 from "../../../assets/mumbai4.jpeg";
// import MumbaiImg5 from "../../../assets/mumbai5.jpeg";
// import MumbaiImg6 from "../../../assets/mumbai6.jpeg";
// import BengaluruImg from "../../../assets/contact.png";
// import DubaiImg from "../../../assets/mapbase.png";
// import UsaImg from "../../../assets/mapbase.png";

// // Updated locations with multiple images
// const locations = [
//   {
//     city: "NEW DELHI",
//     address:
//       "40 Hanuman Lane, Connaught Place, Behind CP Police Station, New Delhi - 110001",
//     images: [DelhiImg, MapBase, GurgaonImg],
//   },
//   {
//     city: "GURGAON",
//     address: "C-25, Udyog Vihar, Phase 1, Near Cyber City, Gurgaon - 122016",
//     images: [GurgaonImg, DelhiImg],
//   },
//   {
//     city: "MUMBAI",
//     address: "Level 3, BKC, Bandra East, Mumbai - 400051",
//     images: [
//       MumbaiImg1,
//       MumbaiImg2,
//       MumbaiImg3,
//       MumbaiImg4,
//       MumbaiImg5,
//       MumbaiImg6,
//     ],
//   },
//   {
//     city: "BENGALURU",
//     address: "91 Springboard, Koramangala, 7th Block, Bengaluru - 560095",
//     images: [BengaluruImg, DelhiImg, MapBase],
//   },
//   {
//     city: "DUBAI",
//     address: "Business Bay, Dubai, UAE",
//     images: [DubaiImg],
//   },
//   {
//     city: "USA",
//     address: "1234 Market Street, San Francisco, CA, USA",
//     images: [UsaImg, DelhiImg],
//   },
// ];

// const Locations = () => {
//   const [openIndex, setOpenIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activePhoto, setActivePhoto] = useState(0);
//   const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'preview'
//   const [mainImageIndex, setMainImageIndex] = useState(0); // For main office image navigation

//   const activeLocation = locations[openIndex];

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//     setMainImageIndex(0); // Reset main image index when location changes
//   };

//   const openGallery = () => {
//     setActivePhoto(0);
//     setViewMode("grid"); // Start with grid view
//     setIsModalOpen(true);
//   };

//   const closeGallery = () => {
//     setIsModalOpen(false);
//     setViewMode("grid"); // Reset to grid view when closing
//   };

//   const openPhotoPreview = (index) => {
//     setActivePhoto(index);
//     setViewMode("preview");
//   };

//   const closePhotoPreview = () => {
//     setViewMode("grid");
//   };

//   const nextPhoto = () => {
//     setActivePhoto((prev) => (prev + 1) % activeLocation.images.length);
//   };

//   const prevPhoto = () => {
//     setActivePhoto(
//       (prev) =>
//         (prev - 1 + activeLocation.images.length) % activeLocation.images.length
//     );
//   };

//   // Navigation for main office image
//   const nextMainImage = () => {
//     setMainImageIndex((prev) => (prev + 1) % activeLocation.images.length);
//   };

//   const prevMainImage = () => {
//     setMainImageIndex(
//       (prev) =>
//         (prev - 1 + activeLocation.images.length) % activeLocation.images.length
//     );
//   };

//   // Keyboard support for navigation
//   useEffect(() => {
//     const handleKey = (e) => {
//       if (!isModalOpen) return;

//       if (viewMode === "preview") {
//         if (e.key === "ArrowRight") nextPhoto();
//         if (e.key === "ArrowLeft") prevPhoto();
//       }

//       if (e.key === "Escape") {
//         if (viewMode === "preview") {
//           closePhotoPreview();
//         } else {
//           closeGallery();
//         }
//       }
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [isModalOpen, viewMode, activeLocation]);

//   return (
//     <section className="bg-backgroundPrimary text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
//       {/* Heading */}
//       <h2 className="text-xl sm:text-2xl md:text-4xl font-medium text-center mb-6 sm:mb-8 md:mb-10">
//         We are available in
//       </h2>

//       {/* Map Image */}
//       <div className="relative flex justify-center mb-8 sm:mb-10 md:mb-12">
//         <img
//           src={MapBase}
//           loading="lazy"
//           alt="World Map"
//           className="max-w-full sm:max-w-2xl md:max-w-3xl w-full opacity-90"
//         />
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start max-w-7xl mx-auto">
//         {/* Office Image */}
//         <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
//           <img
//             key={activeLocation.images[mainImageIndex]}
//             src={activeLocation.images[mainImageIndex]}
//             alt={activeLocation.city}
//             loading="lazy"
//             className="absolute inset-0 w-full h-full object-cover  transition-opacity duration-700 ease-in-out opacity-100"
//           />

//           {/* Navigation Arrows for Main Image */}
//           {activeLocation.images.length > 1 && (
//             <>
//               {/* Left Arrow */}
//               <button
//                 onClick={prevMainImage}
//                 className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-1.5 sm:p-2 z-10 transition-all hover:bg-black/70"
//               >
//                 <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
//               </button>

//               {/* Right Arrow */}
//               <button
//                 onClick={nextMainImage}
//                 className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-1.5 sm:p-2 z-10 transition-all hover:bg-black/70"
//               >
//                 <ChevronRight size={18} className="sm:w-5 sm:h-5" />
//               </button>

//               {/* Image Counter */}
//               <div className="absolute top-3 left-3 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
//                 {mainImageIndex + 1} / {activeLocation.images.length}
//               </div>
//             </>
//           )}

//           {activeLocation.images.length > 1 && (
//             <button
//               onClick={openGallery}
//               className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md shadow-lg transition z-10"
//             >
//               See Photos
//             </button>
//           )}
//         </div>

//         {/* Accordion */}
//         <div className="flex flex-col gap-3 sm:gap-4">
//           {locations.map((loc, index) => (
//             <div
//               key={index}
//               className={`rounded-xl border transition-all duration-300 ${
//                 openIndex === index ? "border-purple-500" : "border-transparent"
//               } overflow-hidden`}
//             >
//               <button
//                 onClick={() => toggleAccordion(index)}
//                 className={`w-full flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 text-left font-medium transition-colors ${
//                   openIndex === index
//                     ? "bg-purple-600"
//                     : "bg-[#1e1630] hover:bg-[#2a1d47]"
//                 }`}
//               >
//                 <span className="text-sm sm:text-base">{loc.city}</span>
//                 {openIndex === index ? (
//                   <ChevronUp size={16} className="sm:w-[18px] sm:h-[18px]" />
//                 ) : (
//                   <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px]" />
//                 )}
//               </button>

//               {openIndex === index && (
//                 <div className="bg-[#1e1630] px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm text-gray-300">
//                   {loc.address}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Enhanced Gallery Modal - Fully Responsive */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4">
//           <div className="bg-gray-900 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl h-[90vh] sm:h-[85vh] flex flex-col overflow-hidden">
//             {/* Header */}
//             <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-700">
//               <h3 className="text-white text-lg sm:text-xl font-semibold">
//                 {activeLocation.city} - Photos
//               </h3>
//               <button
//                 onClick={closeGallery}
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <X size={20} className="sm:w-6 sm:h-6" />
//               </button>
//             </div>

//             {/* Content Area */}
//             <div className="flex-1 overflow-hidden">
//               {/* Grid View - All photos in different sizes */}
//               {viewMode === "grid" && (
//                 <div className="p-3 sm:p-4 md:p-6 h-full overflow-y-auto">
//                   <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
//                     {activeLocation.images.map((img, index) => (
//                       <div
//                         key={index}
//                         className={`relative rounded-lg sm:rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group ${
//                           index % 3 === 0
//                             ? "md:col-span-2 md:row-span-2 h-32 xs:h-36 sm:h-40 md:h-48 lg:h-56"
//                             : index % 3 === 1
//                             ? "h-28 xs:h-32 sm:h-36 md:h-40"
//                             : "h-24 xs:h-28 sm:h-32 md:h-36"
//                         }`}
//                         onClick={() => openPhotoPreview(index)}
//                       >
//                         <img
//                           src={img}
//                           alt={`Photo ${index + 1}`}
//                           loading="lazy"
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
//                           <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
//                             <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full" />
//                           </div>
//                         </div>
//                         <div className="absolute bottom-1.5 sm:bottom-2 left-1.5 sm:left-2 bg-black/60 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
//                           Photo {index + 1}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Preview View - Responsive 70% main photo, 30% thumbnails */}
//               {viewMode === "preview" && (
//                 <div className="flex flex-col md:flex-row h-full">
//                   {/* Left Side - Thumbnails (30% on desktop, full width on mobile) */}
//                   <div className="w-full md:w-[30%] bg-gray-800 p-3 sm:p-4 overflow-y-auto border-b md:border-b-0 md:border-r border-gray-700">
//                     <h4 className="text-white font-medium mb-3 sm:mb-4 px-2 text-sm sm:text-base">
//                       All Photos ({activeLocation.images.length})
//                     </h4>
//                     <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-3 md:grid-cols-1 gap-2 sm:gap-3">
//                       {activeLocation.images.map((img, index) => (
//                         <div
//                           key={index}
//                           className={`relative rounded-md sm:rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
//                             index === activePhoto
//                               ? "ring-2 ring-purple-500 scale-105"
//                               : "opacity-70 hover:opacity-100 hover:scale-102"
//                           }`}
//                           onClick={() => setActivePhoto(index)}
//                         >
//                           <img
//                             src={img}
//                             alt={`Thumbnail ${index + 1}`}
//                             loading="lazy"
//                             className="w-full h-16 xs:h-18 sm:h-20 md:h-16 lg:h-20 object-cover"
//                           />
//                           {index === activePhoto && (
//                             <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center">
//                               <div className="bg-purple-600 rounded-full p-0.5 sm:p-1">
//                                 <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
//                               </div>
//                             </div>
//                           )}
//                           <div className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-1 rounded">
//                             {index + 1}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Right Side - Main Image (70% on desktop, full width on mobile) */}
//                   <div className="flex-1 flex items-center justify-center bg-gray-900 relative min-h-[50vh] md:min-h-0">
//                     {/* Cross Icon - Top Right Corner to go back to grid */}
//                     <button
//                       onClick={closePhotoPreview}
//                       className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 text-gray-400 hover:text-white bg-black/50 rounded-full p-1.5 sm:p-2 z-10 transition-all hover:bg-black/70"
//                     >
//                       <X size={16} className="sm:w-5 sm:h-5" />
//                     </button>

//                     {/* Navigation Arrows */}
//                     {activeLocation.images.length > 1 && (
//                       <>
//                         <button
//                           onClick={prevPhoto}
//                           className="absolute left-2 sm:left-3 md:left-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-1.5 sm:p-2 z-10 transition-all hover:bg-black/70"
//                         >
//                           <ChevronLeft size={18} className="sm:w-6 sm:h-6" />
//                         </button>
//                         <button
//                           onClick={nextPhoto}
//                           className="absolute right-2 sm:right-3 md:right-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-1.5 sm:p-2 z-10 transition-all hover:bg-black/70"
//                         >
//                           <ChevronRight size={18} className="sm:w-6 sm:h-6" />
//                         </button>
//                       </>
//                     )}

//                     {/* Main Image */}
//                     <div className="max-w-full max-h-full p-3 sm:p-4 md:p-6 w-full">
//                       <img
//                         src={activeLocation.images[activePhoto]}
//                         alt={`Photo ${activePhoto + 1}`}
//                         loading="lazy"
//                         className="w-full h-full object-contain rounded-lg shadow-xl max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh]"
//                       />
//                     </div>

//                     {/* Image Counter */}
//                     <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
//                       {activePhoto + 1} / {activeLocation.images.length}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Locations;

import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import MapBase from "../../../assets/mapbase.png";
import DelhiImg from "../../../assets/contact.png";
import GurgaonImg from "../../../assets/mumbai1.jpeg";
import MumbaiImg1 from "../../../assets/mumbai1.jpeg";
import MumbaiImg2 from "../../../assets/mumbai2.jpeg";
import MumbaiImg3 from "../../../assets/mumbai3.jpeg";
import MumbaiImg4 from "../../../assets/mumbai4.jpeg";
import MumbaiImg5 from "../../../assets/mumbai5.jpeg";
import MumbaiImg6 from "../../../assets/mumbai6.jpeg";
import BengaluruImg from "../../../assets/contact.png";
import DubaiImg from "../../../assets/mapbase.png";
import UsaImg from "../../../assets/mapbase.png";

// Updated locations with multiple images
const locations = [
  {
    city: "NEW DELHI",
    address:
      "40 Hanuman Lane, Connaught Place, Behind CP Police Station, New Delhi - 110001",
    images: [DelhiImg, MapBase, GurgaonImg],
  },
  {
    city: "GURGAON",
    address: "C-25, Udyog Vihar, Phase 1, Near Cyber City, Gurgaon - 122016",
    images: [GurgaonImg, DelhiImg],
  },
  {
    city: "MUMBAI",
    address: "Level 3, BKC, Bandra East, Mumbai - 400051",
    images: [
      MumbaiImg1,
      MumbaiImg2,
      MumbaiImg3,
      MumbaiImg4,
      MumbaiImg5,
      MumbaiImg6,
    ],
  },
  {
    city: "BENGALURU",
    address: "91 Springboard, Koramangala, 7th Block, Bengaluru - 560095",
    images: [BengaluruImg, DelhiImg, MapBase],
  },
  {
    city: "DUBAI",
    address: "Business Bay, Dubai, UAE",
    images: [DubaiImg],
  },
  {
    city: "USA",
    address: "1234 Market Street, San Francisco, CA, USA",
    images: [UsaImg, DelhiImg],
  },
];

const Locations = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'preview'
  const [mainImageIndex, setMainImageIndex] = useState(0); // For main office image navigation

  // Always ensure activeLocation is defined
  const activeLocation = locations[openIndex] || locations[0];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
    setMainImageIndex(0); // Reset main image index when location changes
  };

  const openGallery = () => {
    setActivePhoto(0);
    setViewMode("grid"); // Start with grid view
    setIsModalOpen(true);
  };

  const closeGallery = () => {
    setIsModalOpen(false);
    setViewMode("grid"); // Reset to grid view when closing
  };

  const openPhotoPreview = (index) => {
    setActivePhoto(index);
    setViewMode("preview");
  };

  const closePhotoPreview = () => {
    setViewMode("grid");
  };

  const nextPhoto = () => {
    setActivePhoto((prev) => (prev + 1) % activeLocation.images.length);
  };

  const prevPhoto = () => {
    setActivePhoto(
      (prev) =>
        (prev - 1 + activeLocation.images.length) % activeLocation.images.length
    );
  };

  // Navigation for main office image
  const nextMainImage = () => {
    setMainImageIndex((prev) => (prev + 1) % activeLocation.images.length);
  };

  const prevMainImage = () => {
    setMainImageIndex(
      (prev) =>
        (prev - 1 + activeLocation.images.length) % activeLocation.images.length
    );
  };

  // Keyboard support for navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!isModalOpen) return;

      if (viewMode === "preview") {
        if (e.key === "ArrowRight") nextPhoto();
        if (e.key === "ArrowLeft") prevPhoto();
      }

      if (e.key === "Escape") {
        if (viewMode === "preview") {
          closePhotoPreview();
        } else {
          closeGallery();
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isModalOpen, viewMode, activeLocation]);

  return (
    <section className="bg-white text-gray-900 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center mb-6 sm:mb-8 md:mb-10 text-gray-800">
        We are available in
      </h2>

      {/* Map Image */}
      <div className="relative flex justify-center mb-8 sm:mb-10 md:mb-12">
        <img
          src={MapBase}
          loading="lazy"
          alt="World Map"
          className="max-w-full sm:max-w-2xl md:max-w-3xl w-full opacity-90"
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start max-w-7xl mx-auto">
        {/* Office Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] border border-gray-200">
          <img
            key={activeLocation.images[mainImageIndex]}
            src={activeLocation.images[mainImageIndex]}
            alt={activeLocation.city}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100"
          />

          {/* Navigation Arrows for Main Image */}
          {activeLocation.images.length > 1 && (
            <>
              {/* Left Arrow */}
              <button
                onClick={prevMainImage}
                className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 bg-black/60 rounded-full p-1.5 sm:p-2 z-10 transition-all hover:bg-black/70 shadow-lg"
              >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextMainImage}
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 bg-black/60 rounded-full p-1.5 sm:p-2 z-10 transition-all hover:bg-black/70 shadow-lg"
              >
                <ChevronRight size={18} className="sm:w-5 sm:h-5" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-3 left-3 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                {mainImageIndex + 1} / {activeLocation.images.length}
              </div>
            </>
          )}

          {activeLocation.images.length > 1 && (
            <button
              onClick={openGallery}
              className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-backgroundPrimary hover:bg-backgroundPrimaryDark text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md shadow-lg transition-all z-10 font-medium hover:shadow-xl"
            >
              See Photos
            </button>
          )}
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {locations.map((loc, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 overflow-hidden shadow-sm ${
                openIndex === index
                  ? "border-backgroundPrimary shadow-md"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 text-left font-semibold transition-all ${
                  openIndex === index
                    ? "bg-backgroundPrimary/80 text-white"
                    : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                }`}
              >
                <span className="text-sm sm:text-base">{loc.city}</span>
                {openIndex === index ? (
                  <ChevronUp
                    size={16}
                    className="sm:w-[18px] sm:h-[18px] text-white"
                  />
                ) : (
                  <ChevronDown
                    size={16}
                    className="sm:w-[18px] sm:h-[18px] text-gray-600"
                  />
                )}
              </button>

              {openIndex === index && (
                <div className="bg-white px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm text-gray-600 border-t border-gray-100">
                  {loc.address}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Gallery Modal - Fully Responsive */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl h-[90vh] sm:h-[85vh] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
              <h3 className="text-gray-800 text-lg sm:text-xl font-semibold">
                {activeLocation.city} - Photos
              </h3>
              <button
                onClick={closeGallery}
                className="text-gray-500 hover:text-gray-700 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-1"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden">
              {/* Grid View - All photos in different sizes */}
              {viewMode === "grid" && (
                <div className="p-3 sm:p-4 md:p-6 h-full overflow-y-auto">
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    {activeLocation.images.map((img, index) => (
                      <div
                        key={index}
                        className={`relative rounded-lg sm:rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group border border-gray-200 ${
                          index % 3 === 0
                            ? "md:col-span-2 md:row-span-2 h-32 xs:h-36 sm:h-40 md:h-48 lg:h-56"
                            : index % 3 === 1
                            ? "h-28 xs:h-32 sm:h-36 md:h-40"
                            : "h-24 xs:h-28 sm:h-32 md:h-36"
                        }`}
                        onClick={() => openPhotoPreview(index)}
                      >
                        <img
                          src={img}
                          alt={`Photo ${index + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-full p-1.5 sm:p-2 shadow-lg">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-backgroundPrimary/80 rounded-full" />
                          </div>
                        </div>
                        <div className="absolute bottom-1.5 sm:bottom-2 left-1.5 sm:left-2 bg-black/70 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium">
                          Photo {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Preview View - Responsive 70% main photo, 30% thumbnails */}
              {viewMode === "preview" && (
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left Side - Thumbnails (30% on desktop, full width on mobile) */}
                  <div className="w-full md:w-[30%] bg-gray-50 p-3 sm:p-4 overflow-y-auto border-b md:border-b-0 md:border-r border-gray-200">
                    <h4 className="text-gray-800 font-semibold mb-3 sm:mb-4 px-2 text-sm sm:text-base">
                      All Photos ({activeLocation.images.length})
                    </h4>
                    <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-3 md:grid-cols-1 gap-2 sm:gap-3">
                      {activeLocation.images.map((img, index) => (
                        <div
                          key={index}
                          className={`relative rounded-md sm:rounded-lg overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                            index === activePhoto
                              ? "border-backgroundPrimary/80 scale-105 shadow-md"
                              : "border-gray-200 opacity-70 hover:opacity-100 hover:scale-102 hover:border-gray-300"
                          }`}
                          onClick={() => setActivePhoto(index)}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            loading="lazy"
                            className="w-full h-16 xs:h-18 sm:h-20 md:h-16 lg:h-20 object-cover"
                          />
                          {index === activePhoto && (
                            <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center">
                              <div className="bg-backgroundPrimary/80 rounded-full p-0.5 sm:p-1 shadow-md">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                              </div>
                            </div>
                          )}
                          <div className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-1 rounded font-medium">
                            {index + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Main Image (70% on desktop, full width on mobile) */}
                  <div className="flex-1 flex items-center justify-center bg-white relative min-h-[50vh] md:min-h-0">
                    {/* Cross Icon - Top Right Corner to go back to grid */}
                    <button
                      onClick={closePhotoPreview}
                      className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 text-gray-500 hover:text-gray-700 bg-white/90 rounded-full p-1.5 sm:p-2 z-10 transition-all hover:bg-white shadow-lg border border-gray-200"
                    >
                      <X size={16} className="sm:w-5 sm:h-5" />
                    </button>

                    {/* Navigation Arrows */}
                    {activeLocation.images.length > 1 && (
                      <>
                        <button
                          onClick={prevPhoto}
                          className="absolute left-2 sm:left-3 md:left-4 text-gray-700 hover:text-gray-900 bg-white/90 rounded-full p-1.5 sm:p-2 z-10 transition-all hover:bg-white shadow-lg border border-gray-200"
                        >
                          <ChevronLeft size={18} className="sm:w-6 sm:h-6" />
                        </button>
                        <button
                          onClick={nextPhoto}
                          className="absolute right-2 sm:right-3 md:right-4 text-gray-700 hover:text-gray-900 bg-white/90 rounded-full p-1.5 sm:p-2 z-10 transition-all hover:bg-white shadow-lg border border-gray-200"
                        >
                          <ChevronRight size={18} className="sm:w-6 sm:h-6" />
                        </button>
                      </>
                    )}

                    {/* Main Image */}
                    <div className="max-w-full max-h-full p-3 sm:p-4 md:p-6 w-full">
                      <img
                        src={activeLocation.images[activePhoto]}
                        alt={`Photo ${activePhoto + 1}`}
                        loading="lazy"
                        className="w-full h-full object-contain rounded-lg shadow-lg max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] border border-gray-200"
                      />
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                      {activePhoto + 1} / {activeLocation.images.length}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Locations;
