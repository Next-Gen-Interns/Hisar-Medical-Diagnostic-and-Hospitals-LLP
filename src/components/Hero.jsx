"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Shield,
  Award,
  Clock,
  ChevronRight,
  Sparkles,
  Zap,
  HeartPulse,
  Stethoscope,
  UserCheck,
} from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [pulse, setPulse] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const heroWords = ["Diagnostic", "Imaging", "Healthcare", "Wellness"];

  const hospitalImages = [
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80",
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
    "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
  ];

  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Advanced X-ray Technology",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      text: "Expert Radiologists",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Same Day Reports",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <HeartPulse className="w-5 h-5" />,
      text: "24/7 Emergency",
      color: "from-blue-700 to-blue-800",
    },
  ];

  // Image slider effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % hospitalImages.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(imageInterval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % heroWords.length);
      setPulse(true);
      setTimeout(() => setPulse(false), 300);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hospital Background Images with Slider Effect */}
      <div className="absolute inset-0">
        {/* Hospital Images Slideshow */}
        {hospitalImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0">
              {/* Using Next.js Image component for optimized images */}
              <Image
                src={img}
                alt={`Hospital background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
                quality={100}
              />
            </div>
            {/* Dark Overlay for better text readability - Adjusted for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
          </div>
        ))}

        {/* Subtle Pattern Overlay - Reduced opacity */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] bg-[size:40px_40px]"></div>
        </div>
      </div>

      {/* Pulse Effect */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-blue-400/20 ${pulse ? "animate-ping" : ""}`}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-lg border border-blue-500/30 px-6 py-3 rounded-full mb-8 animate-fade-in">
              <Sparkles className="text-blue-300 animate-spin-slow" size={20} />
              <span className="text-blue-300 font-semibold">
                10+ Years of Trusted Healthcare
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Comprehensive
              <span className="block mt-2">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                    {heroWords[currentWord]}
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 animate-width"></div>
                </span>
              </span>
              <span className="block mt-2 text-white">Services in Hisar</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              <span className="text-blue-300 font-semibold">
                Early detection saves lives
              </span>{" "}
              – Specialized breast, full-body X-ray, and advanced ultrasound
              services with cutting-edge technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-sm text-white mt-1">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  5000+
                </div>
                <div className="text-sm text-white mt-1">Patients Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-white mt-1">Emergency</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-sm text-white mt-1">Accuracy</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden shadow-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Zap className="animate-pulse" size={20} />
                  Book Appointment Now
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>

              <a
                href="tel:9812166286"
                className="group flex items-center justify-center gap-3 bg-white/20 backdrop-blur-lg text-white border-2 border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/30 hover:border-white/50 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  <Phone
                    className="relative text-green-400 group-hover:text-green-300"
                    size={20}
                  />
                </div>
                <span>Emergency Call</span>
              </a>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-3 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                >
                  <div
                    className={`bg-gradient-to-r ${feature.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <span className="text-white group-hover:text-blue-100 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {hospitalImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage
                ? "bg-blue-500 w-8 shadow-lg shadow-blue-500/50"
                : "bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes width {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        @keyframes scanLines {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(40px);
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-width {
          animation: width 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
