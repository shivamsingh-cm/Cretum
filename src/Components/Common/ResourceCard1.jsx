import React from "react";
import { useNavigate } from "react-router-dom";

const ResourceCard = ({
  image,
  title,
  description,
  date,
  readTime,
  category,
  resourceType, // Add resourceType prop
  className = "",
}) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    // Navigate based on resource type
    switch (resourceType) {
      case "Blogs":
        navigate("/blog");
        break;
      case "News":
        navigate("/news");
        break;
      case "Updates":
        navigate("/news"); 
        break;
      default:
        navigate("/resources");
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
         
         
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <span>📅</span>
            {date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Read More Button */}
        <button
          onClick={handleReadMore}
          className="w-full bg-buttonBackground text-white font-semibold py-3 rounded-xl hover:bg-buttonBackgroundHover transition-all duration-300 transform hover:scale-105 group"
        >
          <span className="flex items-center justify-center gap-2">
            Read More
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;
