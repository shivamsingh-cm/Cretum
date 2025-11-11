import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

import DiagnoseImg from "../../../assets/gstserviceleftbgimage.jpg";
import OptimizeImg from "../../../assets/gstserviceleftbgimage.jpg"; 
import SustainImg from "../../../assets/gstserviceleftbgimage.jpg";

export default function ThreeStepApproach1() {
  const [activeIndex, setActiveIndex] = useState(null);

  const steps = [
    {
      title: "Diagnose",
      description:
        "Comprehensive assessment of your current GST position, identifying risks and opportunities.",
      image: DiagnoseImg,
    },
    {
      title: "Optimize",
      description:
        "Implement smart automation, process improvements, and credit optimization strategies.",
      image: OptimizeImg,
    },
    {
      title: "Sustain",
      description:
        "Ongoing monitoring, compliance support, and proactive insights to stay ahead of regulatory changes.",
      image: SustainImg,
    },
  ];

  // Default image if no accordion open
  const defaultImage = DiagnoseImg;
  const currentImage = activeIndex !== null ? steps[activeIndex].image : defaultImage;

  return (
    <section className="w-full bg-backgroundPrimary text-white py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[600px] overflow-hidden rounded-xl">
          <img
            key={currentImage}
            src={currentImage}
            loading="lazy"
            alt="3 Step Approach"
            className="w-full h-full object-cover rounded-xl transition-all duration-500 ease-in-out"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center max-w-[520px]">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Our Unique 3-Step Approach
          </h2>

          <p className="text-white text-sm leading-relaxed mb-8">
            Unlike traditional GST service providers who focus solely on compliance,
            our approach transforms GST from a burden into a strategic advantage for your business.
          </p>

          {/* Accordion */}
          <div className="space-y-3">
            {steps.map((step, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={i}
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  className={`p-5 rounded-xl cursor-pointer transition-all duration-300 border border-white/20 ${
                    isActive
                      ? "bg-[#241A3E]"
                      : "bg-[#1A122F] hover:bg-[#241A3E]"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">{step.title}</h3>
                    {isActive ? (
                      <Minus className="w-5 h-5 text-[#7A3EFF]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#7A3EFF]" />
                    )}
                  </div>

                  {isActive && (
                    <p className="text-white/90 text-sm mt-3 leading-relaxed">
                      {step.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

