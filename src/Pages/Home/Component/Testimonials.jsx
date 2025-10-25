import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "../../../Components/Common/TestimonialCard";
import user1 from "../../../assets/trustedleading1.png";
import user2 from "../../../assets/trustedleading1.png";
import user3 from "../../../assets/trustedleading1.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: "1",
      image: user1,
      name: "Mark Johnson",
      role: "Homeowner",
      title: "Quick and Reliable Service",
      description:
        "I recently had an emergency plumbing issue, and this plumber provided quick and reliable service. Highly recommend!",
    },
    {
      id: "2",
      image: user2,
      name: "Sarah Kim",
      role: "Property Manager",
      title: "Honest and Transparent Pricing",
      description:
        "They explained the pricing upfront and provided a detailed breakdown of the costs.",
    },
    {
      id: "3",
      image: user3,
      name: "Jennifer Smith",
      role: "Business Owner",
      title: "Efficient and Thorough Work",
      description:
        "They diagnosed the problem carefully and resolved it quickly. Excellent service!",
    },
    {
      id: "4",
      image: user1,
      name: "Michael Brown",
      role: "Homeowner",
      title: "Reliable and Friendly",
      description:
        "Fantastic service from start to finish. I’ll definitely use them again.",
    },
    {
      id: "5",
      image: user2,
      name: "Olivia Lee",
      role: "Landlord",
      title: "Professional and Efficient",
      description:
        "Very professional service with clear communication and great results.",
    },
    {
      id: "6",
      image: user3,
      name: "Daniel Scott",
      role: "Restaurant Owner",
      title: "Quick and Effective",
      description:
        "They got the job done faster than expected without cutting corners.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);


  useEffect(() => {
    if (activeIndex >= testimonials.length - (cardsPerView - 1)) {

    setActiveIndex(0)
    } else if (activeIndex < 0) {
    
    setActiveIndex(testimonials.length - cardsPerView)
    }
  }, [activeIndex, testimonials.length, cardsPerView]);

  
  const nextSlide = () => setActiveIndex((prev) => prev + 1);
  const prevSlide = () => setActiveIndex((prev) => prev - 1);

  
  const totalWidth = (testimonials.length * 100) / cardsPerView;

  return (
    <section className="bg-[#F8F6F0] py-16 px-4 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-purple-400 text-sm font-medium mb-2">💬 Testimonial</p>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Don’t Just Take Our Word For It
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${totalWidth}%`,
            transform: `translateX(-${(activeIndex * 100) / testimonials.length}%)`,
          }}
        >
          {testimonials?.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / testimonials?.length}%` }}
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

    
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-purple-600 p-2 rounded-full shadow-md hover:bg-purple-100 transition"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-purple-600 p-2 rounded-full shadow-md hover:bg-purple-100 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;







