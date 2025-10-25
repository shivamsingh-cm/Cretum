import React, { useState } from "react";
import Modal from "../../../Components/ScheduleCall/Modal";
import ScheduleCallForm from "../../../Components/ScheduleCall/ScheduleCallForm";
const CtaBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  
  return (
    <section className="relative bg-[#9b5de5] overflow-hidden text-center text-white py-20 px-6 md:px-12">
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0">
        {/* Left curved shape */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 border-r border-white/20 rounded-r-[50%]" />
        {/* Right curved shape */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 border-l border-white/20 rounded-l-[50%]" />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#a46cf0]/30 to-[#8c4ad8]/30 opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-snug">
          Join hundreds of Indian SMEs  <br className="hidden md:block" />
          expanding confidently in the UAE.
        </h2>
        <button 
          onClick={()=> setIsModalOpen(true)}
          className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-sm">
          Schedule a Call
        </button>
      </div>

       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ScheduleCallForm onSubmit={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default CtaBanner;
