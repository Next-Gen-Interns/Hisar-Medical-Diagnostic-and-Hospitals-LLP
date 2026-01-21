"use client";

import { useState, useEffect, useRef } from "react";
import { Target, Eye, Heart, Shield } from "lucide-react";

export default function AboutBusinessSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with animation */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600">
              Hisar Medical
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Diagnostic & Hospitals LLP
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content with animations */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:shadow-xl hover:translate-y-[-4px]">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Who We Are
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-700 font-bold">
                    HISAR MEDICAL DIAGNOSTIC & HOSPITALS LLP
                  </strong>{" "}
                  is a healthcare-focused organization committed to delivering
                  accurate, timely, and advanced diagnostic services.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  With years of experience in medical diagnostics and patient
                  care, our goal is to support early detection and effective
                  treatment planning.
                </p>
              </div>

              {/* Highlighted statement with animation */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500 transform transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-center gap-4">
                  <Heart className="w-8 h-8 text-red-500" />
                  <p className="text-xl font-bold text-gray-900">
                    Early detection{" "}
                    <span className="text-blue-600">saves lives</span>
                  </p>
                </div>
                <p className="text-gray-700 mt-2">
                  Our team continuously educates patients and communities about
                  the importance of preventive screenings to reduce the risk of
                  late-stage diseases.
                </p>
              </div>
            </div>

            {/* Stats section */}
          </div>

          {/* Right Cards */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Mission Card */}
            <div className="group relative transform transition-all duration-500 hover:scale-[1.02]">
              <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 transform transition-all duration-500 group-hover:shadow-2xl group-hover:border-blue-200">
                <div className="flex items-start gap-4 md:gap-6 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 transform transition-all duration-300 group-hover:text-blue-700">
                      Our Mission
                    </h3>
                  </div>
                </div>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed transform transition-all duration-300 group-hover:text-gray-900">
                  To provide high-quality diagnostic services that enable early
                  detection, accurate diagnosis, and better healthcare outcomes
                  for every patient.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative transform transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500"></div>

              <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 transform transition-all duration-500 group-hover:shadow-2xl group-hover:border-emerald-200">
                <div className="flex items-start gap-4 md:gap-6 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Eye className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 transform transition-all duration-300 group-hover:text-blue-700">
                      Our Vision
                    </h3>
                  </div>
                </div>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed transform transition-all duration-300 group-hover:text-gray-900">
                  To become a trusted leader in diagnostic healthcare by
                  promoting awareness, prevention, and timely treatment of
                  diseases through advanced medical technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
