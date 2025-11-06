// import React, { useState, useEffect } from "react";
// import Gstcafeatur1 from '../../assets/gstcafeatur1.png'
// import Gstcafeatur2 from '../../assets/gstcafeatur2.png'
// import Gstcafeatur3 from '../../assets/gstcafeatur3.png'
// import Gstcafeatur4 from '../../assets/gstcafeatur4.png'

// const featuresData = [
//   {
//     title: "Enhance customer experience",
//     desc: "Transform your store with solutions that delight customers",
//     img: Gstcafeatur1,
//     btn: false,
//   },
//   {
//     title: "Boost operational efficiency",
//     desc: "Streamline your business processes with smart automation",
//     img: Gstcafeatur2,
//     btn: true,
//   },
//   {
//     title: "Real-time analytics",
//     desc: "Get instant insights into your business performance",
//     img: Gstcafeatur3,
//     btn: false,
//   },
//   {
//     title: "Secure transactions",
//     desc: "Enterprise-grade security for all your financial operations",
//     img: Gstcafeatur4,
//     btn: false,
//   },
//   {
//     title: "Advanced Reporting",
//     desc: "Comprehensive reports for better decision making",
//     img: Gstcafeatur1,
//     btn: true,
//   },
//   {
//     title: "Multi-platform Support",
//     desc: "Access your data from any device, anywhere",
//     img: Gstcafeatur2,
//     btn: false,
//   },
//   {
//     title: "Automated Compliance",
//     desc: "Stay compliant with automated tax calculations",
//     img: Gstcafeatur3,
//     btn: false,
//   },
//   {
//     title: "Customer Support",
//     desc: "24/7 expert support for all your queries",
//     img: Gstcafeatur4,
//     btn: true,
//   },
// ];

// const Features = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   // Calculate total slides - each slide shows 4 items (2 rows of 2)
//   const itemsPerSlide = 4;
//   const totalSlides = Math.ceil(featuresData.length / itemsPerSlide);
  
//   // Auto slide every 4 seconds
//   useEffect(() => {
//     if (totalSlides > 1) {
//       const interval = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % totalSlides);
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [totalSlides]);

//   const handleDotClick = (index) => {
//     setCurrentSlide(index);
//   };

//   // Get items for current slide
//   const getSlideItems = (slideIndex) => {
//     const startIndex = slideIndex * itemsPerSlide;
//     return featuresData.slice(startIndex, startIndex + itemsPerSlide);
//   };

//   return (
//     <section className="w-full bg-backgroundPrimary py-20 text-black">
//       <div className="max-w-[1200px] mx-auto px-5">

//         {/* Section Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-medium mb-3 text-white">Features</h2>
//           <p className="text-gray-300 max-w-[600px] font-normal mx-auto text-base">
//             We combine deep tax expertise with cutting-edge technology to deliver a seamless GST experience that transforms compliance into strategic advantage.
//           </p>
//         </div>

//         {/* Carousel Container with fixed height */}
//         <div className="relative overflow-hidden h-[680px] bg-backgroundPrimary">
//           {/* Slides Container with proper stacking */}
//           <div 
//             className="h-full "
//             style={{
//               transform: `translateY(-${currentSlide * 680}px)`,
//               transition: "transform 2s ease-in-out"
//             }}
//           >
//             {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//               <div 
//                 key={slideIndex}
//                 className="w-full h-[680px] flex flex-col justify-center"
//               >
//                 <div className="space-y-6">
//                   {getSlideItems(slideIndex).reduce((rowPairs, _, index, array) => {
//                     if (index % 2 === 0) {
//                       rowPairs.push(array.slice(index, index + 2));
//                     }
//                     return rowPairs;
//                   }, []).map((row, rowIndex) => (
//                     <div 
//                       key={rowIndex} 
//                       className={`flex flex-col lg:flex-row gap-6 ${rowIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
//                     >
//                       {/* 70% Width Card */}
//                       <FlipCard 
//                         card={row[0]}
//                         cardIndex={slideIndex * itemsPerSlide + rowIndex * 2}
//                         widthClass="lg:w-[70%]"
//                       />
                      
//                       {/* 30% Width Card - Only if row has second item */}
//                       {row[1] && (
//                         <FlipCard 
//                           card={row[1]}
//                           cardIndex={slideIndex * itemsPerSlide + rowIndex * 2 + 1}
//                           widthClass="lg:w-[30%]"
//                         />
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Slider Dots - Only show if more than 4 items */}
//         {totalSlides > 1 && (
//           <div className="flex justify-center gap-3 mt-12">
//             {Array.from({ length: totalSlides }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleDotClick(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentSlide 
//                     ? 'bg-buttonBackground scale-125' 
//                     : 'bg-gray-500 hover:bg-gray-400'
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         .perspective {
//           perspective: 1000px;
//         }
//         .preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>
//   );
// };

// // Flip Card Component
// const FlipCard = ({ card, cardIndex, widthClass }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (
//     <div 
//       className={`${widthClass} h-80 rounded-xl overflow-hidden relative group cursor-pointer perspective`}
//       onMouseEnter={() => setIsFlipped(true)}
//       onMouseLeave={() => setIsFlipped(false)}
//     >
//       <div className={`relative w-full h-full preserve-3d transition-transform duration-700 ${
//         isFlipped ? 'rotate-y-180' : ''
//       }`}>
//         {/* Front of card */}
//         <div className="absolute w-full h-full backface-hidden">
//           <img
//             src={card.img}
//             alt={card.title}
//             className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
//           />
//           <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between">
//             <div>
//               <h3 className="text-2xl font-normal">{card.title}</h3>
//               <p className="text-sm mt-1 font-normal">{card.desc}</p>
//             </div>
//             {card.btn && (
//               <button className="mt-4 px-4 py-2 rounded-full bg-white  transition text-sm font-medium w-fit">
//                 Talk to our GST Expert
//               </button>
//             )}
//           </div>
//         </div>
        
//         {/* Back of card (flipped content) */}
//         <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-buttonBackground to-purple-600 rounded-xl flex items-center justify-center p-6">
//           <div className="text-white text-center">
//             <h3 className="text-xl font-bold mb-3">{card.title}</h3>
//             <p className="text-sm opacity-90 mb-4">{card.desc}</p>
//             {card.btn && (
//               <button className="px-6 py-2 rounded-lg bg-white text-buttonBackground hover:bg-gray-100 transition text-sm font-medium">
//                 Learn More
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;


import React from 'react'
import Verticals from './Components/Verticals'
import GstHeroSection from './Components/GstHeroSection'
import TrustedBrands from '../../Pages/Home/Component/TrustedBrands'
import VerticalsAndChallenges from './Components/VerticalsAndChallenges'
import ThreeStepApproach from './Components/ThreeStepApproach'
import ThreeStepApproachRightImage from './Components/ThreeStepApproachRightImage'
import FAQ from '../../Pages/Home/Component/FaqSection'
import CtaBanner from '../../Pages/Home/Component/CtaBanner'
import Resources from '../../Pages/Home/Component/Resources'
import Testimonial from '../../Pages/Home/Component/Testimonials'
import Features from './Components/Features'
import ExperienceStats from './Components/ExperienceStats'
import ThreeStepApproach1 from './Components/ThreeStepApproach1'
function Main() {
  return (
    <>
    <GstHeroSection/>
    <TrustedBrands/>
    <VerticalsAndChallenges />
    <ExperienceStats/>
    <Verticals/>
    
    <Features/>
    <ThreeStepApproach1/>
    <ThreeStepApproach/>
    <ThreeStepApproachRightImage/>
    <Testimonial />
    
    
    <Resources/>
    <FAQ/>
    <CtaBanner/>
  
    </>
  )
}

export default Main