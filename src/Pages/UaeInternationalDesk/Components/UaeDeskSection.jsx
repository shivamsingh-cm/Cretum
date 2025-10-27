import React from "react";
import { FaBuilding, FaCheckCircle, FaClipboardCheck, FaLifeRing } from "react-icons/fa";

const UaeDeskSection = () => {
  const features = [
    {
      icon: <FaBuilding className="text-4xl text-buttonBackground" />,
      title: "Business Setup & Structure",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-buttonBackground" />,
      title: "Tax & VAT Compliance",
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-buttonBackground" />,
      title: "Audit & Internal Controls",
    },
    {
      icon: <FaLifeRing className="text-4xl text-buttonBackground" />,
      title: "Ongoing Support",
    },
  ];

  return (
    <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center  rounded-lg p-8 md:p-12 relative">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Why Choose Our UAE Desk
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Expanding your business to the UAE requires strategic structuring, compliance, 
          and accurate financial governance. Our UAE Desk offers end-to-end business setup 
          and tax services, ensuring you stay compliant and confident while focusing on growth.
        </p>

        {/* Features with dotted arrows */}
        <div className="relative flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 relative">
              <div className="bg-purple-900/30 p-5 rounded-full relative z-10">
                {item.icon}
              </div>
              <p className="text-sm md:text-base text-gray-200 w-40">{item.title}</p>

              {/* Add curved dotted connector except last */}
              {index < features.length - 1 && (
                <div className="hidden md:block absolute top-0 left-[65%] w-36 h-16">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0,25 C25,0 75,50 100,25"
                      stroke="#A855F7"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      fill="transparent"
                    />
                  </svg>

                  {/* text arrow at end */}
                  <span className="absolute right-[-4px] top-[24px] text-purple-400 text-lg font-bold">
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

export default UaeDeskSection;

