"use client";

import { useState, useEffect } from "react";

const services = [
  {
    title: "Full-Body X-ray",
    image:
      "https://healthflex.plethorathemes.com/wp-content/uploads/2023/07/img17.jpg",
    benefit:
      "Comprehensive imaging for early detection of bone and organ conditions.",
    color: "text-blue-600",
    bgColor: "bg-blue-500",
    gradient: "from-blue-500 to-blue-500",
    delay: "delay-0",
  },
  {
    title: "Breast X-ray (Mammography)",
    image:
      "https://healthflex.plethorathemes.com/wp-content/uploads/2023/07/img3.jpg",
    benefit:
      "Early screening and detection of breast abnormalities and cancer.",
    color: "text-blue-600",
    bgColor: "bg-blue-500",
     gradient: "from-blue-500 to-blue-500",
    delay: "delay-100",
  },
  {
    title: "Advanced Ultrasound",
    image:
      "https://healthflex.plethorathemes.com/wp-content/uploads/2023/07/img14.jpg",
    benefit:
      "High-resolution imaging for accurate diagnosis of internal organs.",
    color: "text-blue-600",
    bgColor: "bg-blue-500",
     gradient: "from-blue-500 to-blue-500",
    delay: "delay-200",
  },
  {
    title: "Dental X-ray",
    image:
      "https://healthflex.plethorathemes.com/wp-content/uploads/2023/07/img13.jpg",
    benefit:
      "Precise dental imaging for cavity detection and oral health planning.",
    color: "text-blue-600",
    bgColor: "bg-blue-500",
       gradient: "from-blue-500 to-blue-500",
    delay: "delay-300",
  },
  {
    title: "Prenatal Ultrasound",
    image:
      "https://healthflex.plethorathemes.com/wp-content/uploads/2023/07/img11.jpg",
    benefit: "Safe fetal monitoring to ensure healthy pregnancy development.",
    color: "text-blue-600",
    bgColor: "bg-blue-500",
      gradient: "from-blue-500 to-blue-500",
    delay: "delay-400",
  },
  {
    title: "Disease Monitoring & Follow-Up",
    image:
      "https://healthflex.plethorathemes.com/wp-content/uploads/2023/07/img16.jpg",
    benefit:
      "Continuous tracking of conditions for timely medical intervention.",
    color: "text-blue-600",
    bgColor: "bg-blue-500",
      gradient: "from-blue-500 to-blue-500",
    delay: "delay-500",
  },
];

// Alternative simpler images (Unsplash - no configuration needed)
const alternativeServices = [
  {
    title: "Full-Body X-ray",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    benefit:
      "Comprehensive imaging for early detection of bone and organ conditions.",
   color: "text-blue-600",
    bgColor: "bg-blue-500",
    gradient: "from-blue-500 to-blue-500",
    delay: "delay-0",
  },
  {
    title: "Breast X-ray (Mammography)",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    benefit:
      "Early screening and detection of breast abnormalities and cancer.",
     color: "text-blue-600",
    bgColor: "bg-blue-500",
    gradient: "from-blue-500 to-blue-500",
    delay: "delay-100",
  },
  {
    title: "Advanced Ultrasound",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    benefit:
      "High-resolution imaging for accurate diagnosis of internal organs.",
     color: "text-blue-600",
    bgColor: "bg-blue-500",
    gradient: "from-blue-500 to-blue-500",
    delay: "delay-200",
  },
  {
    title: "Dental X-ray",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    benefit:
      "Precise dental imaging for cavity detection and oral health planning.",
     color: "text-blue-600",
    bgColor: "bg-blue-500",
    gradient: "from-blue-500 to-blue-500",
    delay: "delay-300",
  },
  {
    title: "Prenatal Ultrasound",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    benefit: "Safe fetal monitoring to ensure healthy pregnancy development.",
     color: "text-blue-600",
    bgColor: "bg-blue-500",
    gradient: "from-blue-500 to-blue-500",
    delay: "delay-400",
  },
  {
    title: "Disease Monitoring & Follow-Up",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    benefit:
      "Continuous tracking of conditions for timely medical intervention.",
      color: "text-blue-600",
    bgColor: "bg-blue-500",
    gradient: "from-blue-500 to-blue-500",
    delay: "delay-500",
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [useSimpleImages, setUseSimpleImages] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Use alternative services if healthflex images fail
  const displayServices = useSimpleImages ? alternativeServices : services;

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with animations */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Diagnostic Services
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Advanced imaging services designed to support early detection,
            accurate diagnosis, and effective treatment planning.
          </p>
        </div>

        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayServices.map((service, index) => (
            <div
              key={index}
              className={`relative transform transition-all duration-500 ${
                hoveredCard === index ? "scale-105 z-10" : "hover:scale-[1.03]"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 blur-xl transition-opacity duration-500 ${
                  hoveredCard === index ? "opacity-20" : ""
                }`}
              ></div>

              {/* Service Card */}
              <div
                className={`relative bg-white rounded-2xl border border-gray-200 p-6 md:p-8 h-full transform transition-all duration-500 ${
                  hoveredCard === index
                    ? "shadow-2xl border-transparent"
                    : "shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Image Container with animation */}
                <div className="relative mb-6 overflow-hidden rounded-xl group">
                  <div
                    className={`w-full h-48 bg-gradient-to-br ${service.gradient} bg-opacity-10 flex items-center justify-center relative rounded-xl transform transition-all duration-500 ${
                      hoveredCard === index ? "scale-110" : ""
                    }`}
                  >
                    {/* Regular img tag - no Next.js Image component */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredCard === index ? "scale-110" : "scale-100"
                      }`}
                      onError={() => setUseSimpleImages(true)}
                      loading="lazy"
                    />

                    {/* Overlay gradient on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 ${
                        hoveredCard === index ? "opacity-100" : ""
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Title with animation */}
                <h3 className={`text-xl font-bold text-gray-900 mb-3 text-center transform transition-all duration-300 ${hoveredCard === index ? `scale-105 ${service.color}` : "hover:text-blue-700"}`}>
                  {service.title}
                </h3>

                {/* Benefit text with fade animation */}
                <p className="text-gray-600 text-center leading-relaxed transform transition-all duration-300 hover:text-gray-800">
                  {service.benefit}
                </p>

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}