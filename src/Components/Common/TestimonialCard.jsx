import React from "react";

const TestimonialCard = ({ image, name, role, title, description }) => {
  return (
    <div className="bg-[#3124461A] backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg text-left flex flex-col hover:scale-[1.02] transition-transform duration-300">
      {/* User Info */}
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4 border border-white/20"
          loading="lazy"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>

      {/* Testimonial Content */}
      <h3 className="text-base md:text-lg font-semibold  mb-2">
        {title}
      </h3>
      <p className=" text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default TestimonialCard;
