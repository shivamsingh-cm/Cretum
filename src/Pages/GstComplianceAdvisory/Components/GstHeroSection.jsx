import React from "react";
import heroImg from "../../../assets/gstservicebg.png";

export default function GstHeroSection() {
  return (
    <section className="w-full bg-[#0D0620] text-white">
      <div className="max-w-[1200px]  mx-auto grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div className="px-5 py-16 flex flex-col justify-center">
          <p className="text-sm tracking-widest text-[#A5A1B2] uppercase mb-4">
            GST Compliance and Advisory
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            End-to-End GST Compliance, Advisory & Automation All in One Place
          </h1>

          <p className="text-base text-[#C5C2CF] mb-8 max-w-lg">
            From maximizing ITC to handling audits and notices — our expert team
            ensures your GST is always under control.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-[#7A3EFF] hover:bg-[#692fe0] rounded-full text-sm font-medium transition">
              Book a Free GST Review
            </button>

            <button className="px-6 py-3 border border-[#7A3EFF] hover:bg-[#7A3EFF] hover:text-white rounded-full text-sm font-medium transition">
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-64 sm:h-80 md:h-full lg:h-auto pr-0 mr-0">
          <img
            src={heroImg}
            alt="GST Advisory"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
