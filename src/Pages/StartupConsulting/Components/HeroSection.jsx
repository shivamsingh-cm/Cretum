import IncomeTaxBackground from "../../../assets/incomtaxbg.jpeg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Background Image */}
      <img
        src={IncomeTaxBackground}
        alt="Income tax background"
        className="absolute inset-0 w-full h-full object-cover block"
        style={{ objectPosition: "center" }}
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-backgroundPrimary via-backgroundPrimary/80 to-transparent"></div>

      {/* Content Wrapper (Same alignment as HeroSection) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl">
          {/* Sub Title */}
          <p className="text-sm tracking-widest text-purple-300 mb-3">
            INCOME TAXATION SERVICES
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-5">
            End-to-End Startup Consulting Solutions for Founders and
            Fast-Growing Teams
          </h1>

          {/* Description */}
          <p className="text-gray-300 max-w-xl mb-6 text-sm sm:text-base md:text-lg">
            One place for everything-company setup, compliance, funding
            readiness, valuations, tax planning, and growth advisory.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-full text-sm font-medium shadow-lg transition">
              Book a Free Consultation Now
            </button>

            <button className="border border-gray-400 hover:border-white px-6 py-3 rounded-full text-sm font-medium transition">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
