import { useState } from "react";
import BackgroundImage from "../../../assets/HomePagec.webp";
import MobileBackgroundImage from "../../../assets/mobileBg.webp";
import Modal from "../../../Components/ScheduleCall/Modal";
import ScheduleCallForm from "../../../Components/ScheduleCall/ScheduleCallForm";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[100vh] sm:min-h-[90vh] flex items-center py-16 px-4 md:px-12 lg:px-20">
      {/*  Mobile Background Image */}
      <img
        src={MobileBackgroundImage}
        loading="lazy"
        alt="Hero background mobile"
        className="absolute inset-0 w-full h-full object-cover sm:hidden"
      />

      {/*  Desktop / Tablet Background Image */}
      <img
        src={BackgroundImage}
        alt="Hero background desktop"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover hidden sm:block"
        style={{ objectPosition: "center" }}
      />

      {/*  Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-backgroundPrimary via-backgroundPrimary/80 to-transparent"></div>

      {/*  Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-white">
        <div className="max-w-4xl text-start">
          {/* Tagline */}
          <div className="mb-6">
            {/* Mobile Version */}
            <span className="bg-white/10 text-sm font-semibold text-gray-200 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 block sm:hidden text-center">
              Trusted By 500+ Businesses •
              <br />
              Led by Former Big 4 Experts
            </span>

            {/* Desktop Version */}
            <span className="hidden sm:inline-block bg-white/10 text-sm md:text-sm font-semibold text-gray-200 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1">
              Trusted By 500+ Businesses • Led by Former Big 4 Experts Since
              2017
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-medium leading-tight mb-6">
            Focus on your vision, <br />
            We handle finance and <br />
            compliance seamlessly.
          </h1>

          {/* Description */}
          <p className="text-gray-300 max-w-xl mb-8 text-sm md:text-lg font-normal">
            Comprehensive GST, tax, advisory, and compliance services designed
            to streamline operations and accelerate your business growth.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-buttonBackground to-buttonBackground/80 hover:from-buttonBackgroundHover hover:to-buttonBackgroundHover/80 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Schedule a Call
          </button>
        </div>
      </div>

      {/*  Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ScheduleCallForm onSubmit={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default Hero;



