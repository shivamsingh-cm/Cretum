import React from "react";
import stepImg from "../../../assets/gstserviceleftbgimage.jpg";

export default function ThreeStepApproach1() {
  return (
    <section className="w-full bg-[#0D0620] text-white py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT IMAGE INSIDE CONTAINER */}
        <div className="w-full h-[380px] sm:h-[450px] lg:h-[600px]">
          <img
            src={stepImg}
            alt="3 Step Approach"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center max-w-[520px]">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Our Unique 3-Step Approach
          </h2>

          <p className="text-[#C5C2CF] text-sm leading-relaxed mb-8">
            Unlike traditional GST service providers who focus solely on compliance,
            our approach transforms GST from a burden into a strategic advantage for your business.
          </p>

          {/* Accordion */}
          <div className="space-y-3">
            {["Diagnose", "Optimize", "Sustain"].map((step, i) => (
              <div
                key={i}
                className="bg-[#1A122F] p-5 rounded-xl cursor-pointer hover:bg-[#241A3E] transition"
              >
                <h3 className="font-medium">{step}</h3>

                {i === 0 && (
                  <p className="text-[#C5C2CF] text-sm mt-2">
                    Comprehensive assessment of your current GST position,
                    identifying risks and opportunities.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
