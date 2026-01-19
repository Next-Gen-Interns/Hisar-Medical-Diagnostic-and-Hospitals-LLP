import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Heart,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About & Services", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <Youtube size={20} />,
      href: "https://youtube.com",
      label: "YouTube",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Medical Cross Pattern Overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M80,40 L120,40 L120,80 L160,80 L160,120 L120,120 L120,160 L80,160 L80,120 L40,120 L40,80 L80,80 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16">
        {/* Top Section - CTA Banner */} 

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                HISAR MEDICAL DIAGNOSTIC & HOSPITALS LLP
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Your trusted partner in diagnostic imaging and healthcare
                services in Hisar and surrounding areas.
              </p>

              {/* Stats */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Award className="text-cyan-400" size={18} />
                  <span className="text-gray-300">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="text-cyan-400" size={18} />
                  <span className="text-gray-300">24/7 Emergency Services</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-semibold mb-3 text-gray-400">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              Our Services
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                Full Body X-ray
              </li>
              <li className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                Mammography
              </li>
              <li className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                Ultrasound Scan
              </li>
              <li className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                ECG & Pathology
              </li>
              <li className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                Cancer Screening
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="flex-shrink-0" size={18} />
                </div>
                <div>
                  <a
                    href="tel:9812166286"
                    className="text-gray-300 hover:text-cyan-400 transition-colors block"
                  >
                    9812166286
                  </a>
                  <a
                    href="tel:8168031685"
                    className="text-gray-300 hover:text-cyan-400 transition-colors block"
                  >
                    8168031685
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="flex-shrink-0" size={18} />
                </div>
                <a
                  href="mailto:info@hisarmedical.com"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  info@hisarmedical.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <MapPin className="flex-shrink-0" size={18} />
                </div>
                <span className="text-gray-300 leading-relaxed">
                  Hisar Medical Diagnostic Center,
                  <br />
                  Hisar, Haryana - 125001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} HISAR MEDICAL DIAGNOSTIC & HOSPITALS
              LLP. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <Link
                href="/privacy-policy"
                className="hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/terms"
                className="hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
