"use client";

import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    question: "Do I need any preparation before diagnostic tests?",
    answer:
      "Some tests may require fasting or specific preparation. Our team will inform you clearly at the time of booking.",
  },
  {
    question: "How long does it take to receive reports?",
    answer:
      "Most diagnostic reports are available within 24 to 48 hours, depending on the type of test.",
  },
  {
    question: "Is there any age limit for imaging tests?",
    answer:
      "No specific age limit applies. Tests are conducted based on medical advice and patient safety guidelines.",
  },
  {
    question: "Do you accept health insurance?",
    answer:
      "Yes, we accept selected insurance providers. Please contact our reception for confirmation before your visit.",
  },
  {
    question: "Are diagnostic procedures safe?",
    answer:
      "Yes, all procedures follow strict safety standards and are performed using modern, well-maintained equipment.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Clear answers to common questions about our diagnostic services and procedures.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg transition-all duration-300 ${
                  openIndex === index 
                    ? 'shadow-2xl ring-2 ring-blue-200' 
                    : 'hover:shadow-xl'
                }`}
              >
                <button
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between cursor-pointer focus:outline-none group"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 pr-4">
                    {faq.question}
                  </span>
                  <div className="relative flex-shrink-0">
                    {/* Plus/Minus icon */}
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      {/* Horizontal line (always visible for both plus and minus) */}
                      <div className={`absolute h-0.5 w-4 bg-gray-600 transition-all duration-300 group-hover:bg-blue-500 ${
                        openIndex === index ? 'bg-blue-600 group-hover:bg-blue-700' : ''
                      }`} />
                      
                      {/* Vertical line (only shows for plus icon when closed) */}
                      <div className={`absolute w-0.5 h-4 bg-gray-600 transition-all duration-300 group-hover:bg-blue-500 ${
                        openIndex === index ? 'opacity-0 rotate-90 scale-0' : ''
                      }`} />
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className={`border-l-4 pl-6 ${
                      openIndex === index 
                        ? 'border-blue-500' 
                        : 'border-transparent'
                    }`}>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}