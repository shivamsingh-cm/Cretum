import React from "react";
import logo1 from "../../../assets/aeris.svg";
import logo2 from "../../../assets/beatroute-logo.png";
import logo3 from "../../../assets/Chargeup-logo.webp";
import logo4 from "../../../assets/classplus.png";
import logo5 from "../../../assets/convosight_logo.jpeg";
import logo6 from '../../../assets/ideaforge-logo.jpeg';
import logo7 from '../../../assets/leverage.svg';
import logo8 from '../../../assets/Stepout.avif';
import logo9 from '../../../assets/vidyoai.png';
import logo10 from '../../../assets/wheelseye.svg'

const TrustedBrands = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

  return (
    <section className="bg-backgroundPrimary py-12 text-center text-white overflow-hidden">
      {/* Heading  */}
      <h2 className="text-xl md:text-2xl font-semibold mb-8">
        Trusted by leading brands
      </h2>

      {/* Infinite Scroll Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll space-x-12 group-hover:[animation-play-state:paused]">
          {/* Duplicate the logos for infinite effect */}
          {[...logos, ...logos]?.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 md:w-40 lg:w-48 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                loading="lazy"
                className="w-full object-contain opacity-80 hover:opacity-100 transition duration-300 h-[20%]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;




