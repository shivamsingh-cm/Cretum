import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
    question:
      "Does Cretum Advisory provide CFO services for startups and SMEs?",
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
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default
  const [visibleCount, setVisibleCount] = useState(4);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our services and how we can
          help your business grow.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-7xl mx-auto space-y-4">
        {faqs.slice(0, visibleCount).map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            {/* Question Button */}
            <button
              className={`w-full text-left px-6 py-4 flex justify-between items-center transition-colors duration-200 ${
                openIndex === index
                  ? "bg-gray-50"
                  : "bg-white hover:bg-gray-200"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <Minus className="text-gray-500 flex-shrink-0" size={24} />
              ) : (
                <Plus className="text-gray-500 flex-shrink-0" size={24} />
              )}
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-6 pb-4">
                <div className="w-12 h-1 bg-blue-500 rounded-full mb-4"></div>
                <p className="text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < faqs.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 2)}
            className="bg-white border-2 border-gray-300 px-8 py-3 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm"
          >
            Load More FAQs
          </button>
        </div>
      )}
    </section>
  );
};

export default FAQSection;
