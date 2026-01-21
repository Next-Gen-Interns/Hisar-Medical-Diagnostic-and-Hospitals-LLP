"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    title: "Book Appointment",
    description:
      "Schedule your diagnostic appointment easily through our support team.",
    image: "https://cdn-icons-png.flaticon.com/512/5996/5996831.png", // Calendar/phone appointment icon
    color: "text-blue-600",
    bgColor: "bg-blue-500",
  },
  {
    title: "Visit Center & Registration",
    description:
      "Complete a quick registration process upon arrival at our facility.",
    image: "https://cdn-icons-png.flaticon.com/512/3059/3059518.png",
    color: "text-blue-600",
    bgColor: "bg-blue-500",
  },
  {
    title: "Imaging & Screening",
    description:
      "Undergo advanced imaging and screening using modern diagnostic equipment.",
    image: "https://cdn-icons-png.flaticon.com/512/3059/3059505.png",
    color: "text-blue-600",
    bgColor: "bg-blue-500",
  },
  {
    title: "Report & Consultation",
    description:
      "Receive accurate reports followed by expert consultation and guidance.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135677.png", // Medical report/doctor consultation icon
    color: "text-blue-600",
    bgColor: "bg-blue-500",
  },
];

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white mb-[-50px]">
      <div className="max-w-7xl mx-auto">
        {/* Header - REMOVED animation classes */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A simple and transparent diagnostic process designed for patient
            comfort and accuracy.
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Step Card - REMOVED animation classes */}
                <div className="bg-white rounded-xl border border-gray-200 p-8 text-center h-full transform transition-all duration-500 hover:shadow-xl hover:border-blue-300 relative overflow-hidden">
                  {/* Number Circle */}
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative">
                    <div className="absolute inset-0 rounded-full bg-blue-500 opacity-100"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <span className="relative z-10 text-white font-bold group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </span>
                  </div>

                  {/* Image Container - FIXED: Same size for all images */}
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110 overflow-hidden p-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-12 h-12 object-contain transform transition-transform duration-500 group-hover:scale-125"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/48/cccccc/666666?text=${step.title.charAt(0)}`;
                      }}
                    />
                  </div>

                  {/* Content - REMOVED animation classes */}
                  <div className="transform transition-all duration-500 group-hover:translate-y-[-4px]">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 transform transition-all duration-300 group-hover:text-blue-500">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 transform transition-all duration-300 group-hover:text-gray-800">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom border - REMOVED animation classes */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet View - Timeline */}
        <div className="lg:hidden">
          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-500"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative pl-16 pb-10 last:pb-0 transform transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
                onTouchStart={() => setHoveredStep(index)}
                onTouchEnd={() => setHoveredStep(null)}
              >
                {/* Timeline dots */}
                <div className="absolute left-6 top-7 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full z-10"></div>

                {/* Step Card */}
                <div className="bg-white rounded-lg border border-gray-200 p-5 transform transition-all duration-300 hover:shadow-lg hover:border-blue-300">
                  <div className="flex items-start gap-4">
                    {/* Mobile Image - FIXED: Same size for all images */}
                    <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-10 h-10 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://via.placeholder.com/32/cccccc/666666?text=${step.title.charAt(0)}`;
                        }}
                      />
                    </div>

                    <div className="flex-1">
                      {/* Number and Title */}
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 bg-blue-50 text-blue-600 text-sm rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm">
                        {step.description}
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