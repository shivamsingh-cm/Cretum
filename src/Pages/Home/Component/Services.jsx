import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Accounting & Reporting Consulting",
    description:
      "Our ARC practice partners with finance functions to extend your team’s capabilities. Drawing from a global talent pool with expertise in both finance and technology, we provide the necessary skills and resources to help you execute your plans Our Tech Consulting practice focuses on solving business problems holistically by integrating our deep domain knowledgeOur Tech Consulting practice focuses on solving business.",
  },
  {
    id: 2,
    title: "Governance, Risk & Compliance",
    description:
      "We assist clients to navigate the complex governance, risk, and compliance landscape. We design and implement effective GRC frameworks,Our Tech Consulting practice focuses on solving business problems holistically by integrating our deep domain knowledgeOur Tech Consulting practice focuses on solving business problems holistically by integrating our deep domain knowledge improving risk resilience and operational effectiveness.",
  },
  {
    id: 3,
    title: "Sustainability & Climate Consulting",
    description:
      "Our SCC practice helps clients in Our Tech Consulting practice focuses on solving business problems holistically by integrating our deep domain knowledgeOur Tech Consulting practice focuses on solving business problems holistically by integrating our deep domain knowledge Climate Action Planning, Carbon Accounting, and ESG. We help organizations achieve global sustainability goals while meeting compliance requirements efficiently.",
  },
  {
    id: 4,
    title: "Tech Consulting",
    description:
      "Our Tech Consulting practice focuses on solving business problems holistically by integrating our deep domain knowledge Our Tech Consulting practice focuses on solving business problems holistically by integrating our deep domain knowledgeOur Tech Consulting practice focuses on solving business problems holistically by integrating our deep domain knowledge in finance, risk, and sustainability with advanced technology knowledge.",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const getCardStyle = (index) => {
    const total = services.length;
    const leftIndex = (activeIndex - 1 + total) % total;
    const rightIndex = (activeIndex + 1) % total;

    // if (index === activeIndex)
    //   return "z-30 scale-100 translate-x-0 opacity-100";
    // if (index === leftIndex)
    //   return "z-20 scale-90 -translate-x-[80%] opacity-80";
    // if (index === rightIndex)
    //   return "z-20 scale-90 translate-x-[80%] opacity-80";
    // return "opacity-0 hidden md:block";

      // Show only the active card on small screens
      if (index === activeIndex)
        return "z-30 scale-100 translate-x-0 opacity-100";
      
      // Show side cards only on large screens
      if (index === leftIndex)
        return "hidden lg:block z-20 scale-90 -translate-x-[80%] opacity-80";
      if (index === rightIndex)
        return "hidden lg:block z-20 scale-90 translate-x-[80%] opacity-80";
      
      return "opacity-0 hidden md:block";

  };

  return (
    <section className="bg-backgroundPrimary text-white p-7   overflow-hidden ">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32  lg:gap-56 items-center">

        {/* LEFT SECTION - UPDATED DESIGN */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Services</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative p-5 rounded-xl cursor-pointer transition-all duration-500 ease-out ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-backgroundPrimaryDark/30 to-backgroundPrimaryDark/40 border-l-4 border-buttonBackground transform scale-[1.02] shadow-lg"
                    : "bg-white/5 hover:bg-white/10 border-l-2 border-transparent hover:border-purple-400"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center space-x-4">
                  <span className={`text-lg font-medium transition-colors duration-300 flex-1 ${
                    index === activeIndex
                      ? "text-white font-semibold"
                      : "text-gray-300 group-hover:text-white"
                  }`}>
                    {service.title}
                  </span>
                </div>
                
                
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION — CARD CAROUSEL WITH INCREASED HEIGHT */}
        <div className="relative flex items-center justify-center h-[500px] sm:h-[540px]">
          {services.map((service, index) => {
            const total = services.length;
            const leftIndex = (activeIndex - 1 + total) % total;
            const rightIndex = (activeIndex + 1) % total;
            const isActive = index === activeIndex;
            const isLeft = index === leftIndex;
            const isRight = index === rightIndex;

            return (
              <div
                key={service.id}
                className={`absolute rounded-2xl transition-all duration-700 ease-in-out transform shadow-2xl overflow-hidden 
                ${getCardStyle(index)} 
                ${
                  isActive
                    ? "bg-white w-full max-w-md p-4 md:p-4 lg:p-8"
                    : "bg-pink-100 w-[70%] sm:w-[60%] max-w-sm p-6 h-[460px] sm:h-[350px]"
                }`}
              >
                <div className="relative h-full flex flex-col justify-between">
                  {/* BACK CARD ICONS — CLICKABLE */}
                  {isLeft && (
                    <button
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#8E1AFF] p-1.5 rounded-full shadow-md transition"
                    >
                      <ChevronLeft size={22} />
                    </button>
                  )}
                  {isRight && (
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#8E1AFF] p-1.5 rounded-full shadow-md transition"
                    >
                      <ChevronRight size={22} />
                    </button>
                  )}

                  {/* CARD CONTENT */}
                  <div>
                    <h3
                      className={`${
                        isActive ? "text-[#38126C]" : "text-[#8E1AFF]"
                      } text-lg md:text-xl font-semibold mb-3`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-gray-700 ${
                        isActive ? "text-base" : "text-sm line-clamp-6"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button className="text-[#8E1AFF] font-semibold flex items-center gap-2 text-sm md:text-base">
                      Explore More <span className="text-[#8E1AFF]">➜</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* MAIN NAV BUTTONS — CENTER OVERLAY */}
          <div className="absolute flex justify-between items-center w-full max-w-md px-4 top-1/2 -translate-y-1/2 z-40">
            <button
              onClick={handlePrev}
              className="bg-white text-[#1B122C] p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={handleNext}
              className="bg-white text-[#1B122C] p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;










