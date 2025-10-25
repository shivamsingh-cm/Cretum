import React, { useState } from "react";
import BackgroundImage from "../../../assets/HomePagec.png";
import Modal from "../../../Components/ScheduleCall/Modal";
import ScheduleCallForm from "../../../Components/ScheduleCall/ScheduleCallForm";

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); 
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center bg-cover bg-center"
      style={{
        
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-backgroundPrimary via-backgroundPrimary/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl pl-4 md:pl-12 lg:pl-20 pr-4 text-start text-white">
        {/* Small Tag */}
        <div className="mb-6">
          <span className=" bg-white/10 text-sm md:text-base text-gray-200 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1">
            Trusted By 500+ Businesses • Led by Former Big 4 Experts Since 2017
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Focus on your vision, <br />
          We handle finance and <br />
          compliance seamlessly.
        </h1>

        {/* Paragraph */}
        <p className="text-gray-300 max-w-xl mb-8 text-sm md:text-base">
          Comprehensive GST, tax, advisory, and compliance services designed to
          streamline operations and accelerate your business growth.
        </p>

        {/* CTA Button */}
        <button 
          onClick={()=> setIsModalOpen(true)}
          className="bg-gradient-to-r from-buttonBackground to-buttonBackground/80 hover:from-buttonBackgroundHover hover:to-buttonBackgroundHover/80 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300">
          Schedule a Call
        </button>
      </div>

       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ScheduleCallForm onSubmit={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default Hero;

// import React, { useState, useEffect } from "react";
// import Modal from "../../../Components/ScheduleCall/Modal";
// import ScheduleCallForm from "../../../Components/ScheduleCall/ScheduleCallForm";

// const Hero = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   // ✅ Use image from public folder for better caching
//   const imageUrl = "/image/HomePage.png";

//   // ✅ Preload image for faster display
//   useEffect(() => {
//     const img = new Image();
//     img.src = imageUrl;
//     img.onload = () => setImageLoaded(true);
//   }, [imageUrl]);

//   return (
//     <section
//       className={`relative w-full min-h-[90vh] flex items-center bg-cover bg-center transition-opacity duration-700 ${
//         imageLoaded ? "opacity-100" : "opacity-0"
//       }`}
//       style={{
//         backgroundImage: `url(${imageUrl})`,
//       }}
//     >
//       {/* ✅ Subtle blur + dark overlay for readability */}
//        <div className="absolute inset-0 bg-gradient-to-r from-backgroundPrimary via-backgroundPrimary/80 to-transparent"></div>

//       {/* ✅ Content */}
//       <div className="relative z-10 max-w-4xl pl-4 md:pl-12 lg:pl-20 pr-4 text-start text-white">
//         {/* Tagline */}
//         <div className="mb-6">
//           <span className="bg-white/10 text-sm md:text-base text-gray-200 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1">
//             Trusted By 500+ Businesses • Led by Former Big 4 Experts Since 2017
//           </span>
//         </div>

//         {/* Heading */}
//         <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
//           Focus on your vision, <br />
//           We handle finance and <br />
//           compliance seamlessly.
//         </h1>

//         {/* Paragraph */}
//         <p className="text-gray-200 max-w-xl mb-8 text-sm md:text-base drop-shadow-md">
//           Comprehensive GST, tax, advisory, and compliance services designed to
//           streamline operations and accelerate your business growth.
//         </p>

//         {/* Button */}
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-gradient-to-r from-buttonBackground to-buttonBackground/80 hover:from-buttonBackgroundHover hover:to-buttonBackgroundHover/80 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300"
//         >
//           Schedule a Call
//         </button>
//       </div>

//       {/* Modal */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <ScheduleCallForm onSubmit={() => setIsModalOpen(false)} />
//       </Modal>
//     </section>
//   );
// };

// export default Hero;








