"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Users,
  Shield,
  Heart,
  Target,
  Sparkles,
  ArrowRight,
  Calendar,
  FileText,
  Stethoscope,
  Microscope,
  Brain,
  X,
  Radio,
  AlertCircle,
  CheckCircle,
  Hospital,
  MapPin,
  Clock,
  Phone,
  Activity,
  Eye,
  ChevronRight,
} from "lucide-react";

const About = () => {
  const [activeStat, setActiveStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isStatHovered, setIsStatHovered] = useState(false);
  const statsCardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Handle click outside to remove active state
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        statsCardRef.current &&
        !statsCardRef.current.contains(event.target)
      ) {
        setActiveStat(0); // Reset to first stat
        setIsStatHovered(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const stats = [
    {
      value: "10+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />,
      description: "A decade of specialized experience in diagnostic imaging",
    },
    {
      value: "5000+",
      label: "Patients Served",
      icon: <Users className="w-6 h-6" />,
      description: "Trusted by thousands in Hisar and surrounding villages",
    },
    {
      value: "24/7",
      label: "Emergency Support",
      icon: <Shield className="w-6 h-6" />,
      description: "Round-the-clock emergency diagnostic services",
    },
    {
      value: "99.5%",
      label: "Accuracy Rate",
      icon: <Target className="w-6 h-6" />,
      description: "Unmatched accuracy in diagnostic reports",
    },
  ];

  const keyFeatures = [
    {
      text: "10+ years of experience in diagnostic imaging",
      icon: <Award className="w-5 h-5" />,
      color: "text-blue-600 bg-blue-50",
    },
    {
      text: "Advanced X-ray & ultrasound machines",
      icon: <Radio className="w-5 h-5" />,
      color: "text-green-600 bg-green-50",
    },
    {
      text: "Early cancer detection through advanced imaging",
      icon: <AlertCircle className="w-5 h-5" />,
      color: "text-red-600 bg-red-50",
    },
    {
      text: "Focus on women's health & cancer screening",
      icon: <Heart className="w-5 h-5" />,
      color: "text-pink-600 bg-pink-50",
    },
    {
      text: "Expert radiologists & technicians",
      icon: <Stethoscope className="w-5 h-5" />,
      color: "text-purple-600 bg-purple-50",
    },
    {
      text: "Same day report delivery",
      icon: <Calendar className="w-5 h-5" />,
      color: "text-amber-600 bg-amber-50",
    },
  ];

  const specializations = [
    {
      title: "Women's Health Screening",
      description:
        "Specialized mammography & ultrasound for early breast cancer detection",
      icon: <Heart className="w-8 h-8" />,
      color: "from-blue-500 ",
      bgColor: "bg-blue-50",
      services: [
        "Breast Ultrasound",
        "Mammography",
        "Pelvic Scan",
        "Pap Smear",
      ],
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cancer Diagnostics",
      description:
        "Early detection of various cancers through advanced imaging",
      icon: <Activity className="w-8 h-8" />,
      color: "from-blue-500",
      bgColor: "bg-blue-50",
      services: [
        "Biopsy Guidance",
        "Tumor Markers",
        "PET-CT Referral",
        "Follow-up Scans",
      ],
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Advanced X-ray & Ultrasound",
      description: "High-resolution imaging for accurate diagnosis",
      icon: <Radio className="w-8 h-8" />,
      color: "from-blue-500",
      bgColor: "bg-blue-50",
      services: [
        "Digital X-ray",
        "Color Doppler",
        "3D/4D Ultrasound",
        "Portable Scanning",
      ],
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const services = [
    {
      name: "Digital X-ray",
      description: "High-resolution digital radiography for bones and chest",
      icon: <X className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ultrasound Scanning",
      description: "Advanced ultrasound for abdominal and pelvic organs",
      icon: <Eye className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Cancer Screening",
      description: "Early detection programs for various cancers",
      icon: <AlertCircle className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Women's Health",
      description: "Comprehensive screening for women's health issues",
      icon: <Heart className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const handleStatClick = (index) => {
    setActiveStat(index);
    setIsStatHovered(true);
  };

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Hero Section with Hospital Building Image */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-blue-200 px-6 py-2 rounded-full mb-6 shadow-sm">
                <Hospital className="text-blue-600" size={18} />
                <span className="text-blue-700 font-semibold text-sm">
                  ABOUT HISAR MEDICAL DIAGNOSTIC
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Serving Hisar & Surrounding Villages with{" "}
                <span className="text-blue-600">Advanced Diagnostics</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HISAR MEDICAL DIAGNOSTIC & HOSPITALS LLP serves Hisar and
                surrounding villages with advanced diagnostic facilities. Our
                focus is early detection of cancers and other serious diseases
                through state-of-the-art X-ray and ultrasound technology.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about-services"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:gap-3 hover:shadow-lg"
                >
                  Read More About Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Book Appointment
                  <Calendar className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Hospital Building Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop"
                alt="Hisar Medical Diagnostic & Hospitals LLP Building"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">
                    Hisar Medical Diagnostic & Hospitals LLP
                  </span>
                </div>
                <p className="text-blue-100">
                  Serving Hisar and surrounding villages since 2013
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Diagnostic Center?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine advanced technology with expert care to provide
              accurate and timely diagnoses
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}
                >
                  {feature.icon}
                </div>
                <p className="text-gray-800 font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Stats with Team Photo */}
          <div
            className={`space-y-8 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Stats Card with Team Image */}
            <div
              ref={statsCardRef}
              className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
                <Image
                  src="https://images.unsplash.com/photo-1516549655669-df65c2d4e677?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Medical Team"
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              <div className="relative">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">
                    Our Journey in Healthcare
                  </h3>
                  <p className="text-blue-200">
                    Trusted by the community for over a decade
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      onClick={() => handleStatClick(index)}
                      onMouseEnter={() => setIsStatHovered(true)}
                      onMouseLeave={() => setIsStatHovered(false)}
                      className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                        activeStat === index && isStatHovered
                          ? "bg-white/20 transform scale-105"
                          : "bg-white/10 hover:bg-white/15"
                      }`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-3 p-3 rounded-lg bg-white/10">
                          {stat.icon}
                        </div>
                        <div className="text-3xl font-bold mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-blue-200">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Active Stat Description - FIXED: Only show when stat is clicked/hovered */}
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm transition-all duration-300">
                  <p className="text-lg font-semibold mb-2">
                    {stats[activeStat]?.label}
                  </p>
                  <p className="text-blue-100">
                    {stats[activeStat]?.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Target className="text-blue-600" />
                Our Diagnostic Services
              </h3>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {service.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Facility Images & Contact */}
          <div
            className={`space-y-8 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Facility Interior Images */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Hospital className="text-blue-600" />
                Our Modern Facility
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="X-ray Room Interior"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Ultrasound Room"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Waiting Area"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Reception Area"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Our state-of-the-art facility is equipped with the latest
                diagnostic technology and designed for patient comfort and
                privacy.
              </p>
            </div>

            {/* Location & Contact Card with Map Image */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="text-blue-600" />
                Visit Our Diagnostic Center
              </h3>

              <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Location Map - Hisar Medical Diagnostic"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-700">
                      Hisar Medical Diagnostic & Hospitals LLP, Hisar, Haryana
                    </p>
                    <p className="text-sm text-gray-500">
                      Serving Hisar and surrounding villages
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Timings</p>
                    <p className="text-gray-700">Mon-Sun: 8:00 AM - 10:00 PM</p>
                    <p className="text-sm text-gray-500">
                      Emergency services: 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Contact</p>
                    <p className="text-gray-700">+91 99999 99999</p>
                    <p className="text-sm text-gray-500">
                      For appointments & inquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Specializations Section with Images */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Specializations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced diagnostic services focusing on early detection and
              preventive healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={spec.image}
                    alt={spec.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${spec.color}`}
                    >
                      <div className="text-white">{spec.icon}</div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {spec.title}
                  </h4>
                  <p className="text-gray-600 mb-6">{spec.description}</p>

                  {/* Services List */}
                  <div className="space-y-2 mb-8">
                    {spec.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Showcase with Equipment Images */}
        <div className=" bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">
                State-of-the-Art Technology
              </h2>
              <p className="text-blue-100 mb-6">
                We use the latest digital X-ray and ultrasound equipment to
                ensure the highest quality imaging for accurate diagnosis and
                early detection of diseases.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Radio className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Digital X-ray</p>
                    <p className="text-sm text-blue-200">
                      Minimal radiation exposure
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Ultrasound</p>
                    <p className="text-sm text-blue-200">
                      High-resolution imaging
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">AI Software</p>
                    <p className="text-sm text-blue-200">
                      Advanced imaging analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Safety</p>
                    <p className="text-sm text-blue-200">
                      ISO certified procedures
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Equipment Image */}
            <div className="relative h-64 lg:h-full rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56"
                alt="Advanced Medical Equipment at Hisar Medical Diagnostic"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
