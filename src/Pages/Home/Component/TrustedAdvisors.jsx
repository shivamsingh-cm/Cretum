import React from "react";
import advisor1 from "../../../assets/trustedleading1.png";
import advisor2 from "../../../assets/trustedleading2.png";
import { CheckCircle2 } from "lucide-react";

const TrustedAdvisors = () => {
  return (
    <section className="bg-backgroundPrimary text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
          Meet our Experts & Trusted Advisors
          <br className="hidden sm:block" />
          <span className="text-gray-300 font-normal">
            for Your Growing Business
          </span>
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {/* Card 1 */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group h-[380px] sm:h-[420px] lg:h-[460px] hover:scale-[1.02] transition-transform duration-300">
          <img
            src={advisor1}
            alt="Advisor"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-backgroundPrimary/80 via-backgroundPrimary/50 to-transparent"></div>
          <div className="absolute top-0 p-5 sm:p-6 md:p-8">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
              Tangled in Tax Laws or Buried in Paperwork?
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Smart Compliance for a Safer, Stronger Business.
            </p>
          </div>
        </div>

        {/*  Card 2 - Fixed Height Issue */}
        <div className="relative flex flex-col bg-gradient-to-b from-[#4b2c85]/80 via-[#1e1630]/90 to-[#151021]/90 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 p-5 sm:p-6 md:p-8 min-h-[400px] sm:min-h-[440px] lg:h-[460px]">
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
              Personalized Solutions Designed For You
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-6">
              Choose the services according to your business needs.
            </p>
          </div>

          {/*  Scrollable / Visible Button Section */}
          <div className="flex-1 overflow-visible space-y-3 mt-auto">
            {[
              "Startup Compliance Kit",
              "CFO on Call",
              "Tax Planning & Filing",
              "Regulatory Health Check",
            ].map((service, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-start gap-3 bg-buttonBackground hover:bg-buttonBackgroundHover text-white text-xs sm:text-sm rounded-full px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center bg-white/15 rounded-full p-1.5 sm:p-2">
                  <CheckCircle2
                    size={18}
                    className="sm:size-[22px] text-white"
                  />
                </span>
                <span className="font-medium">{service}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group h-[380px] sm:h-[420px] lg:h-[460px] hover:scale-[1.02] transition-transform duration-300">
          <img
            src={advisor2}
            alt="Advisor"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-backgroundPrimary/80 via-backgroundPrimary/50 to-transparent"></div>
          <div className="absolute top-0 p-5 sm:p-6 md:p-8">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
              Advice, Anytime, Anywhere
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Expert Help, Right From the Comfort of Your Home.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto text-start space-y-4 sm:space-y-6">
        <h4 className="text-xs sm:text-sm text-purple-400 uppercase tracking-widest">
          About CRETUM
        </h4>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Cretum is a boutique financial consulting firm founded by former Big 4
          executives. We provide end-to-end solutions across Business Consulting,
          Tax & GST Advisory, Litigation, Audit, CFO Services, Accounting &
          Financial Advisory, and M&A/Transaction Advisory.
        </p>
        <button className="border border-white/30 hover:bg-white hover:text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition-all duration-300">
          Read More
        </button>
      </div>
    </section>
  );
};

export default TrustedAdvisors;




