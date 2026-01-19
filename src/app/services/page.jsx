import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  Heart,
  Stethoscope,
  Activity,
  Brain,
  Bone,
  Check,
  ArrowRight,
  Phone,
  Calendar,
  Shield,
  Clock,
  Users,
  Award,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <X className="w-8 h-8" />,
      title: "X-Ray Services",
      description: "High-quality digital X-ray with quick results",
      details: [
        "Full Body X-Ray",
        "Chest X-Ray",
        "Orthopedic X-Ray",
        "Emergency X-Ray",
      ],
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Mammography",
      description: "Breast cancer screening with advanced technology",
      details: [
        "3D Mammography",
        "Breast Ultrasound",
        "Early Detection",
        "Women Specialists",
      ],
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Ultrasound",
      description: "Complete ultrasound services for all needs",
      details: [
        "Abdominal Scan",
        "Pelvic Ultrasound",
        "Pregnancy Scan",
        "Color Doppler",
      ],
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "ECG & Cardiac",
      description: "Heart health monitoring and testing",
      details: [
        "12-Lead ECG",
        "Stress Test",
        "Holter Monitoring",
        "Cardiac Screening",
      ],
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neurology Tests",
      description: "Specialized neurological examinations",
      details: [
        "Nerve Conduction",
        "EEG Tests",
        "Brain Mapping",
        "Expert Analysis",
      ],
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Bone className="w-8 h-8" />,
      title: "Orthopedic Imaging",
      description: "Bone and joint imaging services",
      details: [
        "Joint X-Ray",
        "Spine Imaging",
        "Fracture Detection",
        "Sports Injury",
      ],
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Equipment",
      description: "FDA approved modern machines",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced radiologists",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Reports",
      description: "Same day results",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Service",
      description: "10+ years experience",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Diagnostic Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Advanced diagnostic imaging services with modern technology and
            expert care
          </p>
        </div>

        {/* Services Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Service Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Service Details */}
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Choose Our Diagnostic Center
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready for Your Diagnostic Test?
            </h3>
            <p className="text-gray-600">
              Book your appointment today or call us for emergency services.
              We're here to provide accurate and timely diagnostic services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment Online
            </Link>

            <div className="text-center">
              <p className="text-gray-600 mb-2">Or call us directly</p>
              <a
                href="tel:9812166286"
                className="inline-flex items-center justify-center gap-3 text-blue-600 font-semibold text-lg"
              >
                <Phone className="w-5 h-5" />
                9812166286
              </a>
            </div>
          </div>

          <p className="text-gray-500 mt-8 text-sm">
            Open Monday to Saturday: 8:00 AM - 8:00 PM | Sunday: 9:00 AM - 2:00
            PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
