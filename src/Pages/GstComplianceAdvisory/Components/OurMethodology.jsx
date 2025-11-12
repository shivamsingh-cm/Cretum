import {
  FaBuilding,
  FaCheckCircle,
  FaClipboardCheck,
  FaLifeRing,
} from "react-icons/fa";

const OurMethodology = () => {
  const features = [
    {
      icon: <FaBuilding className="text-4xl text-buttonBackground" />,
      title: "Expert-Led",
      description:
        "Our seasoned GST professionals ensure accuracy and compliance, bringing clarity to complex tax frameworks.",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-buttonBackground" />,
      title: "Tech-Powered",
      description:
        "AI-driven tools automate reconciliation, detect discrepancies, and boost ITC utilization with 99.8% precision.",
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-buttonBackground" />,
      title: "Results-Focused",
      description:
        "₹250Cr+ in refunds, 98% audit success rate, and 15–20% higher ITC recovery — measurable outcomes, not promises.",
    },
  ];

  return (
    <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Our Methodology
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-12 text-sm md:text-lg font-normal leading-relaxed">
          We combine deep tax expertise with cutting-edge technology to deliver
          a seamless GST experience that transforms compliance into strategic
          advantage.
        </p>

        {/* Features Section */}
        <div className="relative flex flex-col md:flex-row justify-center md:justify-between items-center gap-12 md:gap-12">
          {features?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 relative max-w-[290px]"
            >
              {/* Icon */}
              <div className="bg-purple-900/30 p-5 rounded-full shadow-lg flex items-center justify-center">
                {item?.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white">
                {item?.title}
              </h3>

              {/* Description */}
              <p className="text-white text-base font-normal leading-relaxed">
                {item?.description}
              </p>

              {/* Curved Dotted Connector (only for md+ screens & non-last items) */}
              {index < features.length - 1 && (
                <div className="hidden md:block absolute top-9 right-[-90px] w-32 h-16">
                  <svg
                    viewBox="0 0 100 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M0,25 C25,0 75,50 100,25"
                      stroke="#A855F7"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      fill="transparent"
                    />
                  </svg>
                  <span className="absolute right-[-8px] top-[20px] text-purple-400 text-lg font-bold">
                    &gt;
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMethodology;
