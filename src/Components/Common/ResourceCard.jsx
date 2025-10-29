import React from "react";

const ResourceCard = ({ image, title }) => {
  return (
    <div className="bg-white/5 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-white text-xl font-normal md:text-2xl  leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ResourceCard;
