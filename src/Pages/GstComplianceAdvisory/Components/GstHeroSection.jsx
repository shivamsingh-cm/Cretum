import React from "react";
import heroImg from "../../../assets/gstservicebg.png";

export default function GstHeroSection() {
  return (
    <section className="relative bg-backgroundPrimary text-white min-h-screen overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* LEFT CONTENT */}
        <div className="px-6 md:px-12 lg:pl-24 flex flex-col justify-center z-10 relative">
          <p className="text-sm font-medium tracking-widest text-buttonBackground uppercase mb-4">
            GST-Compliance-and-Advisory
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium  mb-6">
            End-to-End GST Compliance, Advisory & Automation All in One Place
          </h1>

          <p className="text-lg font-normal text-white mb-8 max-w-lg">
            From maximizing ITC to handling audits and notices — our expert team
            ensures your GST is always under control.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-buttonBackground hover:bg-buttonBackgroundHover rounded-full text-base font-medium transition">
              Book a Free GST Review
            </button>

            <button className="px-6 py-3 border border-buttonBackground hover:bg-buttonBackgroundHover hover:text-white rounded-full text-sm font-medium transition">
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE — EDGE TO EDGE */}
        <div className="relative w-full h-full">
          <img
            src={heroImg}
            alt="GST Advisory"
            className="absolute top-0 right-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

