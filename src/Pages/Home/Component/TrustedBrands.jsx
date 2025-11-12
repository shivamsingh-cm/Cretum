import logo1 from "../../../assets/707.png";
import logo2 from "../../../assets/CCI.png";
import logo3 from "../../../assets/Digimap.png";
import logo4 from "../../../assets/DigitsTrading.png";
import logo5 from "../../../assets/Green.png";
import logo6 from "../../../assets/Gemilang.png";
import logo7 from "../../../assets/Burgundy.png";
import logo8 from "../../../assets/Stepout.avif";
import logo9 from "../../../assets/vidyoai.png";
import logo10 from "../../../assets/wheelseye.svg";

const TrustedBrands = () => {
  const brands = [
    { logo: logo1, name: "707" },
    { logo: logo2, name: "CCI" },
    { logo: logo3, name: "Digimap" },
    { logo: logo4, name: "Digits Trading" },
    { logo: logo7, name: "Burgundy" },
    { logo: logo5, name: "Green" },
    { logo: logo6, name: "Gemilang" },
    { logo: logo8, name: "Stepout" },
    { logo: logo9, name: "Vidyo AI" },
    { logo: logo10, name: "Wheels Eye" },
  ];

  return (
    <section className="bg-backgroundPrimary py-12 lg:py-16 text-white overflow-hidden">
      {/* Heading with improved semantics */}
      <div className="container text-center mx-auto px-4 mb-10 lg:mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 uppercase tracking-wide">
          Trusted by leading brands
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* First scrolling row */}
        <div className="flex animate-scroll mb-6 md:mb-8">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-32 md:w-40 lg:w-48 px-4 md:px-6 h-20 md:h-24 flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center p-3 md:p-4  rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  className="w-full h-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
