import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How can Cretum Advisory help my startup or business?",
    answer:
      "We provide end-to-end support including company registration, GST compliance, financial consulting, CFO services, and regulatory compliance to help your business thrive.",
  },
  {
    question: "Do I need a CA firm if I already have an in-house accountant?",
    answer:
      "Yes, a CA firm can provide strategic financial insights, audit support, and compliance expertise that complements your in-house accounting team.",
  },
  {
    question: "Does Cretum Advisory provide CFO services for startups and SMEs?",
    answer:
      "Absolutely! We offer fractional CFO services to help startups and SMEs manage cash flow, budgeting, and financial strategy effectively.",
  },
  {
    question: "Can you help with international expansion?",
    answer:
      "Yes, we assist with cross-border compliance, entity setup, and international tax planning to simplify your global growth journey.",
  },
  {
    question: "Do you handle income tax and GST filing for individuals?",
    answer:
      "Yes, we offer complete tax planning and filing support for individuals, professionals, and businesses.",
  },
  {
    question: "How experienced is the Cretum Advisory team?",
    answer:
      "Our team consists of ex-Big 4 professionals and financial experts with over a decade of experience across industries.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium">
          Frequently Asked Questions
        </h2>
      </div>

      {/* All FAQ List show */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.slice(0, visibleCount).map((faq, index) => (
          <div
            key={index}
            className="border-b border-white/10 pb-4 cursor-pointer transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question Row open and close button  */}
            <div className="flex justify-between items-center py-3">
              <h3 className="text-sm md:text-base font-normal text-gray-200 hover:text-white transition">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <ChevronUp className="text-gray-400" size={20} />
              ) : (
                <ChevronDown className="text-gray-400" size={20} />
              )}
            </div>

            {/* Answer here show  */}
            {openIndex === index && (
              <p className="text-gray-400 text-base md:text-lg font-normal leading-relaxed mt-1">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < faqs.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 2)}
            className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default FAQSection;
