"use client";

import React, { useState } from "react";
import {
  Award,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Heart,
  Shield,
  Stethoscope,
  FileText,
  HeadphonesIcon,
} from "lucide-react";

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "Quality Service",
      description:
        "NABL & NABH accredited diagnostic center with highly trained technicians and experienced radiologists ensuring accurate results and highest medical standards.",
      highlights: [
        "NABL & NABH Accredited",
        "Advanced Equipment",
        "Expert Radiologists",
        "Quality Assurance",
      ],
      color: "blue",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "On-time Delivery",
      description:
        "Guaranteed timely report delivery with 4-6 hours TAT for routine tests and 24/7 emergency services. Digital reports accessible via app/email.",
      highlights: [
        "Fast Turnaround",
        "Digital Reports",
        "Emergency Services",
        "SMS Alerts",
      ],
      color: "green",
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Transparent Pricing",
      description:
        "Clear, all-inclusive pricing with no hidden charges. Package deals available for comprehensive health checkups. Cashless insurance processing.",
      highlights: [
        "No Hidden Charges",
        "Health Packages",
        "Insurance Support",
        "EMI Options",
      ],
      color: "purple",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Patient Care & Support",
      description:
        "Compassionate care with home sample collection, dedicated patient coordinators, and post-test consultation with doctors.",
      highlights: [
        "Home Collection",
        "24/7 Support",
        "Doctor Consultation",
        "Comfort Care",
      ],
      color: "pink",
    },
  ];

  const getColorClasses = (color, type = "gradient") => {
    const colors = {
      blue: {
        gradient: "from-blue-600 to-cyan-600",
        light: "bg-blue-50",
        border: "border-blue-100",
        text: "text-blue-700",
      },
      green: {
        gradient: "from-emerald-600 to-teal-600",
        light: "bg-emerald-50",
        border: "border-emerald-100",
        text: "text-emerald-700",
      },
      purple: {
        gradient: "from-purple-600 to-indigo-600",
        light: "bg-purple-50",
        border: "border-purple-100",
        text: "text-purple-700",
      },
      pink: {
        gradient: "from-pink-600 to-rose-600",
        light: "bg-pink-50",
        border: "border-pink-100",
        text: "text-pink-700",
      },
    };

    return colors[color]?.[type] || colors.blue[type];
  };

  return (
    <section
      id="why-choose-us"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-blue-100 mb-8">
            <Shield className="w-6 h-6 text-blue-600" />
            <span className="text-blue-700 font-semibold text-lg tracking-wide">
              WHY CHOOSE OUR HOSPITAL
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Excellence in Healthcare <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              & Compassionate Care
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by thousands of patients for our commitment to medical
            excellence, timely care, and transparent healthcare services.
          </p>
        </div>

        {/* Features Grid - 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Subtle Background Highlight */}
              <div
                className={`absolute inset-0 rounded-2xl ${getColorClasses(feature.color, "light")} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div
                className={`relative bg-white rounded-2xl border-2 ${getColorClasses(feature.color, "border")} p-8 transition-all duration-300 h-full flex flex-col ${
                  hoveredIndex === index
                    ? "shadow-2xl -translate-y-2 border-opacity-50"
                    : "shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Icon with Gradient Background */}
                <div className="flex items-center mb-6">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${getColorClasses(feature.color, "gradient")} ${
                      hoveredIndex === index ? "scale-110 shadow-lg" : ""
                    } transition-all duration-300`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <div className="ml-4">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${getColorClasses(feature.color, "text")}`}
                    >
                      Feature {index + 1}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                  {feature.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-4">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle
                        className={`w-5 h-5 ${getColorClasses(feature.color, "text")} mr-3 flex-shrink-0 mt-0.5`}
                      />
                      <span className="text-gray-700 font-medium">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Border Indicator */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${getColorClasses(feature.color, "gradient")} transition-all duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Hospital Statistics */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 rounded-3xl p-10 mb-16 shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Healthcare Milestones
            </h3>
            <p className="text-blue-200 text-lg">
              Delivering excellence in patient care since 2005
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            {[
              {
                value: "18+",
                label: "Years of Trust",
                icon: <Award className="w-8 h-8" />,
              },
              {
                value: "50,000+",
                label: "Patients Served",
                icon: <Users className="w-8 h-8" />,
              },
              {
                value: "24/7",
                label: "Emergency Support",
                icon: <Stethoscope className="w-8 h-8" />,
              },
              {
                value: "99.7%",
                label: "Accuracy Rate",
                icon: <FileText className="w-8 h-8" />,
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors mx-auto">
                  <div className="text-blue-200">{stat.icon}</div>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Hospital Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <Shield className="w-10 h-10" />,
              title: "Safety First",
              description:
                "Stringent infection control protocols and sterilization",
              color: "blue",
            },
            {
              icon: <HeadphonesIcon className="w-10 h-10" />,
              title: "24/7 Helpline",
              description: "Round-the-clock medical assistance and support",
              color: "green",
            },
            {
              icon: <Heart className="w-10 h-10" />,
              title: "Patient Centric",
              description: "Personalized care plans for every patient",
              color: "pink",
            },
            {
              icon: <Sparkles className="w-10 h-10" />,
              title: "Modern Facility",
              description: "State-of-the-art medical equipment & technology",
              color: "purple",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`inline-flex p-3 rounded-xl ${getColorClasses(benefit.color, "light")} mb-4`}
              >
                <div className={getColorClasses(benefit.color, "text")}>
                  {benefit.icon}
                </div>
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12 border border-blue-100">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Experience Premium Healthcare?
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Book your appointment today and take the first step towards better
              health with our comprehensive medical services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
                <Sparkles className="w-5 h-5" />
                Book Appointment Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="text-center">
                <div className="text-gray-700 font-medium mb-1">
                  <span className="text-blue-600 font-bold">Emergency?</span>{" "}
                  Call us 24/7
                </div>
                <a
                  href="tel:9812166286"
                  className="text-2xl font-bold text-gray-900 hover:text-blue-700 transition-colors"
                >
                  +91 98121 66286
                </a>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              Walk-ins welcome | Same day appointments available | Free parking
              facility
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
