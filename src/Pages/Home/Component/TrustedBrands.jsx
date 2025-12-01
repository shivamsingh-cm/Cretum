// import logo1 from "../../../assets/707.png";
// import logo2 from "../../../assets/CCI.png";
// import logo3 from "../../../assets/Digimap.png";
// import logo4 from "../../../assets/DigitsTrading.png";
// import logo5 from "../../../assets/Green.png";
// import logo6 from "../../../assets/Gemilang.png";
// import logo7 from "../../../assets/Burgundy.png";
// import logo8 from "../../../assets/Stepout.avif";
// import logo9 from "../../../assets/vidyoai.png";
// import logo10 from "../../../assets/wheelseye.svg";
// import Brand1 from "../../../assets/brand1.jpeg";
// import Brand2 from "../../../assets/brand2.jpeg";
// import Brand3 from "../../../assets/brand3.jpeg";
// import Brand4 from "../../../assets/brand4.jpeg";
// import Brand5 from "../../../assets/brand5.jpeg";
// import Brand6 from "../../../assets/brand6.jpeg";
// import Brand7 from "../../../assets/brand7.jpeg";
// import Brand8 from "../../../assets/brand8.jpeg";
// import Brand9 from "../../../assets/brand9.jpeg";
// import Brand10 from "../../../assets/brand10.jpeg";

// const TrustedBrands = () => {
//   const brands = [
//     { logo: logo1, name: "707" },
//     { logo: logo2, name: "CCI" },
//     { logo: logo3, name: "Digimap" },
//     { logo: logo4, name: "Digits Trading" },
//     { logo: logo7, name: "Burgundy" },
//     { logo: logo5, name: "Green" },
//     { logo: logo6, name: "Gemilang" },
//     { logo: logo8, name: "Stepout" },
//     { logo: logo9, name: "Vidyo AI" },
//     { logo: logo10, name: "Wheels Eye " },
//     { logo: Brand1, name: "Wheels Eye" },
//     { logo: Brand2, name: "Wheels Eye" },
//     { logo: Brand3, name: "Wheels Eye" },
//     { logo: Brand4, name: "Wheels Eye" },
//     { logo: Brand5, name: "Wheels Eye" },
//     { logo: Brand6, name: "Wheels Eye" },
//     { logo: Brand7, name: "Wheels Eye" },
//     { logo: Brand8, name: "Wheels Eye" },
//     { logo: Brand9, name: "Wheels Eye" },
//     { logo: Brand10, name: "Wheels Eye" },
//   ];

//   return (
//     <section className="bg-white py-12 lg:py-16 text-black overflow-hidden">
//       {/* Heading */}
//       <div className="container text-center mx-auto px-4 mb-10 lg:mb-12">
//         <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 uppercase tracking-wide">
//           Trusted by leading brands
//         </h2>
//       </div>

//       {/* Infinite Scroll */}
//       <div className="relative">
//         <div className="flex animate-scroll mb-6 md:mb-8">
//           {[...brands, ...brands].map((brand, index) => (
//             <div
//               key={`first-${index}`}
//               className="flex-shrink-0 w-32 md:w-40 lg:w-48 px-4 md:px-6 h-20 md:h-24 flex items-center justify-center"
//             >
//               <div className="relative w-full h-full flex items-center justify-center p-3 md:p-4 rounded-lg transition-all duration-300 group">
//                 <img
//                   src={brand.logo}
//                   alt={`${brand.name} logo`}
//                   loading="lazy"
//                   className={`w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 ${
//                     index < 10 ? "filter brightness-0" : ""
//                   }`}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrustedBrands;

// import logo1 from "../../../assets/707.png";
// import logo2 from "../../../assets/CCI.png";
// import logo3 from "../../../assets/Digimap.png";
// import logo4 from "../../../assets/DigitsTrading.png";
// import logo5 from "../../../assets/Green.png";
// import logo6 from "../../../assets/Gemilang.png";
// import logo7 from "../../../assets/Burgundy.png";
// import logo8 from "../../../assets/Stepout.avif";
// import logo9 from "../../../assets/vidyoai.png";
// import logo10 from "../../../assets/wheelseye.svg";
// import Brand1 from "../../../assets/brand1.jpeg";
// import Brand2 from "../../../assets/brand2.jpeg";
// import Brand3 from "../../../assets/brand3.jpeg";
// import Brand4 from "../../../assets/brand4.jpeg";
// import Brand5 from "../../../assets/brand5.jpeg";
// import Brand6 from "../../../assets/brand6.jpeg";
// import Brand7 from "../../../assets/brand7.jpeg";
// import Brand8 from "../../../assets/brand8.jpeg";
// import Brand9 from "../../../assets/brand9.jpeg";
// import Brand10 from "../../../assets/brand10.jpeg";

// const TrustedBrands = () => {
//   const brands = [
//     { logo: logo1, name: "707" },
//     { logo: logo2, name: "CCI" },
//     { logo: logo3, name: "Digimap" },
//     { logo: logo4, name: "Digits Trading" },
//     { logo: logo7, name: "Burgundy" },
//     { logo: logo5, name: "Green" },
//     { logo: logo6, name: "Gemilang" },
//     { logo: logo8, name: "Stepout" },
//     { logo: logo9, name: "Vidyo AI" },
//     { logo: logo10, name: "Wheels Eye" },
//     { logo: Brand1, name: "Brand 1" },
//     { logo: Brand2, name: "Brand 2" },
//     { logo: Brand3, name: "Brand 3" },
//     { logo: Brand4, name: "Brand 4" },
//     { logo: Brand5, name: "Brand 5" },
//     { logo: Brand6, name: "Brand 6" },
//     { logo: Brand7, name: "Brand 7" },
//     { logo: Brand8, name: "Brand 8" },
//     { logo: Brand9, name: "Brand 9" },
//     { logo: Brand10, name: "Brand 10" },
//   ];

//   return (
//     <section className="bg-white py-12 lg:py-16 text-black overflow-hidden">
//       {/* Heading */}
//       <div className="container text-center mx-auto px-4 mb-10 lg:mb-12">
//         <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 uppercase tracking-wide">
//           Trusted by leading brands
//         </h2>
//       </div>

//       {/* Infinite Scroll */}
//       <div className="relative">
//         <div className="flex animate-scroll mb-6 md:mb-8">
//           {[...brands, ...brands, ...brands].map((brand, index) => (
//             <div
//               key={`first-${index}`}
//               className="flex-shrink-0 w-32 md:w-40 lg:w-48 px-4 md:px-6 h-20 md:h-24 flex items-center justify-center"
//             >
//               <div className="relative w-full h-full flex items-center justify-center p-3 md:p-4 rounded-lg transition-all duration-300 group">
//                 <img
//                   src={brand.logo}
//                   alt={`${brand.name} logo`}
//                   loading="lazy"
//                   className={`w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 ${
//                     index < 10 ? "filter brightness-0" : ""
//                   }`}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrustedBrands;

// import logo1 from "../../../assets/707.png";
// import logo2 from "../../../assets/CCI.png";
// import logo3 from "../../../assets/Digimap.png";
// import logo4 from "../../../assets/DigitsTrading.png";
// import logo5 from "../../../assets/Green.png";
// import logo6 from "../../../assets/Gemilang.png";
// import logo7 from "../../../assets/Burgundy.png";
// import logo8 from "../../../assets/Stepout.avif";
// import logo9 from "../../../assets/vidyoai.png";
// import logo10 from "../../../assets/wheelseye.svg";
// import Brand1 from "../../../assets/brand1.jpeg";
// import Brand2 from "../../../assets/brand2.jpeg";
// import Brand3 from "../../../assets/brand3.jpeg";
// import Brand4 from "../../../assets/brand4.jpeg";
// import Brand5 from "../../../assets/brand5.jpeg";
// import Brand6 from "../../../assets/brand6.jpeg";
// import Brand7 from "../../../assets/brand7.jpeg";
// import Brand8 from "../../../assets/brand8.jpeg";
// import Brand9 from "../../../assets/brand9.jpeg";
// import Brand10 from "../../../assets/brand10.jpeg";

// const TrustedBrands = () => {
//   const brands = [
//     { logo: logo1, name: "707" },
//     { logo: logo2, name: "CCI" },
//     { logo: logo3, name: "Digimap" },
//     { logo: logo4, name: "Digits Trading" },
//     { logo: logo5, name: "Green" },
//     { logo: logo6, name: "Gemilang" },
//     { logo: logo7, name: "Burgundy" },
//     { logo: logo8, name: "Stepout" },
//     { logo: logo9, name: "Vidyo AI" },
//     { logo: logo10, name: "Wheels Eye" },
//     { logo: Brand1, name: "Brand 1" },
//     { logo: Brand2, name: "Brand 2" },
//     { logo: Brand3, name: "Brand 3" },
//     { logo: Brand4, name: "Brand 4" },
//     { logo: Brand5, name: "Brand 5" },
//     { logo: Brand6, name: "Brand 6" },
//     { logo: Brand7, name: "Brand 7" },
//     { logo: Brand8, name: "Brand 8" },
//     { logo: Brand9, name: "Brand 9" },
//     { logo: Brand10, name: "Brand 10" },
//   ];

//   return (
//     <section className="bg-white py-12 lg:py-16 text-black overflow-hidden">
//       <div className="container text-center mx-auto px-4 mb-10 lg:mb-12">
//         <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 uppercase tracking-wide">
//           Trusted by leading brands
//         </h2>
//       </div>

//       {/* Infinite Marquee */}
//       <div className="overflow-hidden">
//         <div className="animate-marquee">
//           {brands?.map((brand, index) => (
//             <div
//               key={index}
//               className="h-24 flex items-center justify-center p-3 md:p-4 rounded-lg transition-all duration-300 group"
//             >
//               <img
//                 src={brand.logo}
//                 alt={`${brand.name} logo`}
//                 loading="lazy"
//                 className={`w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 ${
//                   index < 10 ? "filter brightness-0" : ""
//                 }`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrustedBrands;

//working code
// import logo1 from "../../../assets/c1.jpeg";
// import logo2 from "../../../assets/c2.jpeg";
// import logo3 from "../../../assets/c3.jpeg";
// import logo4 from "../../../assets/c4.jpeg";
// // import logo5 from "../../../assets/Green.png";
// // import logo6 from "../../../assets/Gemilang.png";
// // import logo7 from "../../../assets/Burgundy.png";
// // import logo8 from "../../../assets/Stepout.avif";
// // import logo9 from "../../../assets/vidyoai.png";
// // import logo10 from "../../../assets/wheelseye.svg";
// // import Brand1 from "../../../assets/brand1.jpeg";
// // import Brand2 from "../../../assets/brand2.jpeg";
// // import Brand3 from "../../../assets/brand3.jpeg";
// // import Brand4 from "../../../assets/brand4.jpeg";
// // import Brand5 from "../../../assets/brand5.jpeg";
// // import Brand6 from "../../../assets/brand6.jpeg";
// // import Brand7 from "../../../assets/brand7.jpeg";
// // import Brand8 from "../../../assets/brand8.jpeg";
// // import Brand9 from "../../../assets/brand9.jpeg";
// // import Brand10 from "../../../assets/brand10.jpeg";

// const TrustedBrands = () => {
//   const brands = [
//     { logo: logo1, name: "707" },
//     { logo: logo2, name: "CCI" },
//     { logo: logo3, name: "Digimap" },
//     { logo: logo4, name: "Digits Trading" },
//     // { logo: logo5, name: "Green" },
//     // { logo: logo6, name: "Gemilang" },
//     // { logo: logo7, name: "Burgundy" },
//     // { logo: logo8, name: "Stepout" },
//     // { logo: logo9, name: "Vidyo AI" },
//     // { logo: logo10, name: "Wheels Eye" },
//     // { logo: Brand1, name: "Brand 1" },
//     // { logo: Brand2, name: "Brand 2" },
//     // { logo: Brand3, name: "Brand 3" },
//     // { logo: Brand4, name: "Brand 4" },
//     // { logo: Brand5, name: "Brand 5" },
//     // { logo: Brand6, name: "Brand 6" },
//     // { logo: Brand7, name: "Brand 7" },
//     // { logo: Brand8, name: "Brand 8" },
//     // { logo: Brand9, name: "Brand 9" },
//     // { logo: Brand10, name: "Brand 10" },
//   ];

//   return (
//     <section className="bg-white py-12 lg:py-16 text-black overflow-hidden">
//       <div className="container text-center mx-auto px-4 mb-10 lg:mb-12">
//         <h2 className="text-xl text-backgroundPrimary md:text-2xl lg:text-3xl font-semibold mb-3 uppercase tracking-wide">
//           Trusted by leading brands
//         </h2>
//       </div>

//       {/* Infinite Marquee */}
//       <div className="overflow-hidden">
//         <div className="animate-marquee">
//           {brands?.map((brand, index) => (
//             <div
//               key={index}
//               className="h-24 flex items-center justify-center p-3 md:p-4 rounded-lg transition-all duration-300 group"
//             >
//               <img
//                 src={brand.logo}
//                 alt={`${brand.name} logo`}
//                 loading="lazy"
//                 className={`w-full h-full object-contain `}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrustedBrands;

// components/InfiniteLogoCarousel.jsx (Alternative version)

import React, { useRef } from "react";
import "./LogoCarousel.css";

import logo1 from "../../../assets/c1.png";
import logo2 from "../../../assets/c2.png";
import logo3 from "../../../assets/c3.png";
import logo4 from "../../../assets/c4.png";
import logo5 from "../../../assets/c5.png";
import logo6 from "../../../assets/c6.png";
import logo7 from "../../../assets/c7.png";
import logo8 from "../../../assets/c8.png";
import logo9 from "../../../assets/c9.png";
import logo10 from "../../../assets/c10.png";
import logo11 from "../../../assets/c11.png";
import logo12 from "../../../assets/c12.png";
import logo13 from "../../../assets/c13.png";
import logo14 from "../../../assets/c14.png";

const InfiniteLogoCarousel = () => {
  const carouselTrackRef = useRef(null);
  const brands = [
    { name: "Company 1", logo: logo1 },
    { name: "Company 2", logo: logo2 },
    { name: "Company 3", logo: logo3 },
    { name: "Company 4", logo: logo4 },
    { name: "Company 5", logo: logo5 },
    { name: "Company 6", logo: logo6 },
    { name: "Company 7", logo: logo7 },
    { name: "Company 8", logo: logo8 },
    { name: "Company 9", logo: logo9 },
    { name: "Company 10", logo: logo10 },
    { name: "Company 11", logo: logo11 },
    { name: "Company 12", logo: logo12 },
    { name: "Company 13", logo: logo13 },
    { name: "Company 14", logo: logo14 },
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="container">
      <div className="header">
        <h1>Trusted by Leading Brands</h1>
      </div>

      <div className="carousel-container">
        <div className="gradient-overlay left-gradient"></div>
        <div className="gradient-overlay right-gradient"></div>

        <div className="carousel-track" ref={carouselTrackRef}>
          {duplicatedBrands.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="logo-item">
              <div className="logo-image-container">
                <img src={brand.logo} alt={brand.name} className="logo-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoCarousel;
