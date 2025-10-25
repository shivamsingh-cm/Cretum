import React, { useEffect, useRef, useState } from "react";

const ExperienceStats = () => {
  const stats = [
    { number: 500, label: "Happy Clients", suffix: "+" },
    { number: 7, label: "Years Excellence", suffix: "+" },
    { number: 3, label: "Global Offices", suffix: "" },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-2xl font-semibold">
          Driven by Experience. Backed by Trust.
        </h2>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center border-y border-white/10 py-10">
        {stats.map((item, index) => (
          <StatCard
            key={index}
            number={item.number}
            label={item.label}
            suffix={item.suffix}
            animate={visible}
          />
        ))}
      </div>
    </section>
  );
};

const StatCard = ({ number, label, suffix, animate }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const increment = number / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [animate, number]);

  return (
    <div>
      <h3 className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
        {count}
        {suffix}
      </h3>
      <p className="text-sm md:text-base text-gray-300 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
};

export default ExperienceStats;
