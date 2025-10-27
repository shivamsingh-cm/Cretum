

import React, { useState } from "react";
import RandomImage from '../../../assets/randomblog.jpg'
const services = [
  {
    id: 1,
    title: "VAT & Corporate Tax Compliance",
    description:
      "Ensure accurate VAT registration, filing, and refunds while adhering to UAE’s tax laws.",
    image: RandomImage,
  },
  {
    id: 2,
    title: "Accounting & Bookkeeping",
    description:
      "Comprehensive accounting support tailored to your business needs and UAE regulations.",
    image: RandomImage,
  },
  {
    id: 3,
    title: "Business Setup Advisory",
    description:
      "Get expert guidance to establish your business seamlessly in the UAE market.",
    image: RandomImage,
  },
  {
    id: 4,
    title: "Audit & Assurance",
    description:
      "Reliable audit services ensuring transparency, compliance, and trustworthiness.",
    image: RandomImage,
  },
  {
    id: 5,
    title: "Payroll & HR Solutions",
    description:
      "Streamline your payroll processes and HR operations with our tailored solutions.",
    image: RandomImage,
  },
  {
    id: 6,
    title: "Corporate Advisory",
    description:
      "Strategic insights and advisory to help your business grow and stay compliant.",
    image: RandomImage,
  },
];

export default function OurService() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="min-h-screen text-white bg-backgroundPrimary p-6 sm:p-10 md:p-14 lg:p-16">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-center text-2xl font-semibold mb-10">
          Our Core Services
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-shrink-0 w-full md:w-full px-2"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-backgroundSecondary rounded-lg overflow-hidden p-4 md:p-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover rounded-md"
                  />
                  <div className="text-left px-4 md:px-8">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-sm md:text-base">
                      {service.description}
                    </p>
                    <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-center items-center gap-4 mt-4 text-white text-lg font-medium">
            <button
              onClick={prevSlide}
              className="px-3 py-1 bg-purple-700 rounded hover:bg-purple-800 transition"
            >
              &lt;-
            </button>
            <span>
              {currentIndex + 1} / {services.length}
            </span>
            <button
              onClick={nextSlide}
              className="px-3 py-1 bg-purple-700 rounded hover:bg-purple-800 transition"
            >
              -&gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

