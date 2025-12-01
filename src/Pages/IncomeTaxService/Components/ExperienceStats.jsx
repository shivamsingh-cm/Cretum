import { useEffect, useRef, useState } from "react";

const ExperienceStats = () => {
  const stats = [
    {
      number: "20-30",
      label: "Reduction in Tax-Related Penalties",
      suffix: "%",
    },
    {
      number: 40,
      label: "Turnaround for ITR Filing & Notice Handling",
      suffix: "%",
    },
    { number: 50, label: "Businesses Trust Our Income Tax Team", suffix: "+" },
    {
      number: 99,
      label: "Accuracy in Tax Filings & Documentation",
      suffix: "%",
    },
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
      className=" py-16 px-6 md:px-12 lg:px-20"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold">
          Driven by Expertise. Powered by Precision.
        </h2>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-center border-y border-gray-300 py-8 sm:py-10 ">
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

    // For range numbers like "20-30", don't animate
    if (typeof number === "string" && number.includes("-")) {
      setCount(number);
      return;
    }

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
    <div className="px-2">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-purple-400 mb-2 sm:mb-3 lg:mb-4">
        {typeof number === "string" && number.includes("-") ? number : count}
        {suffix}
      </h3>
      <p className="text-xs sm:text-sm lg:text-base text-gray-500 uppercase tracking-wide leading-tight sm:leading-relaxed">
        {label}
      </p>
    </div>
  );
};

export default ExperienceStats;
