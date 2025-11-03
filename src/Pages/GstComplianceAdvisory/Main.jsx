import React from "react";

const featuresData = [
  {
    title: "Enhance customer experience",
    desc: "Transform your store with solutions that delight customers",
    img: "/images/feature1.jpg",
    btn: false,
  },
  {
    title: "Enhance customer experience",
    desc: "Transform your store with solutions that delight customers",
    img: "/images/feature2.jpg",
    btn: true,
  },
  {
    title: "Enhance customer experience",
    desc: "Transform your store with solutions that delight customers",
    img: "/images/feature3.jpg",
    btn: false,
  },
  {
    title: "Enhance customer experience",
    desc: "Transform your store with solutions that delight customers",
    img: "/images/feature4.jpg",
    btn: false,
  },
];

const Features = () => {
  return (
    <section className="w-full bg-backgroundPrimary py-20 text-white">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3">Features</h2>
          <p className="text-gray-300 max-w-[600px] mx-auto text-sm">
            We combine deep tax expertise with cutting-edge technology to deliver a seamless GST experience that transforms compliance into strategic advantage.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuresData.map((card, i) => (
            <div
              key={i}
              className="bg-backgroundSecondary rounded-xl overflow-hidden relative group cursor-pointer"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-all duration-500"
              />

              <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{card.desc}</p>
                </div>

                {card.btn && (
                  <button className="mt-4 px-4 py-2 rounded-lg bg-buttonBackground hover:bg-buttonBackgroundHover transition text-sm font-medium w-fit">
                    Talk to our GST Expert
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-2 h-2 bg-buttonBackground rounded-full"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Features;
