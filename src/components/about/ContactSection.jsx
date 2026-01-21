"use client";

import {
  Phone,
  Mail,
  MapPin,
  Upload,
  Send,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    videoFile: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredField, setHoveredField] = useState(null);

  const contactInfo = {
    phone: "+91 9812166286",
    email: "info@hisarmedical.com",
    address: "SCF 79, Red Square Market, Hisar – 125001, Haryana",
    mapEmbedUrl:
      "https://www.google.com/maps?q=SCF%2079%20Red%20Square%20Market%20Hisar%20125001&output=embed",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      videoFile: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.message
      ) {
        alert("Please fill in all required fields");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert("Please enter a valid email address");
        return;
      }

      const phoneRegex = /^[6-9]\d{9}$/;
      const cleanPhone = formData.phone.replace(/\D/g, "");
      if (!phoneRegex.test(cleanPhone)) {
        alert("Please enter a valid Indian phone number");
        return;
      }

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        videoFile: null,
      });

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Contact Us
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our medical experts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* LEFT: Contact Form */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg md:rounded-xl shadow-sm">
                  <Send className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Fill In the Form
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 md:space-y-6 flex-grow flex flex-col"
              >
                <div className="space-y-5 md:space-y-6 flex-grow">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Full Name "
                    required
                    className="w-full px-4 sm:px-5 py-3 border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder-gray-500 bg-white text-sm md:text-base shadow-sm hover:shadow-md"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address "
                      required
                      className="w-full px-4 sm:px-5 py-3 border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder-gray-500 bg-white text-sm md:text-base shadow-sm hover:shadow-md"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number "
                      required
                      className="w-full px-4 sm:px-5 py-3 border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder-gray-500 bg-white text-sm md:text-base shadow-sm hover:shadow-md"
                    />
                  </div>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message "
                    rows={3}
                    required
                    className="w-full px-4 sm:px-5 py-3 border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder-gray-500 bg-white text-sm md:text-base resize-none shadow-sm hover:shadow-md"
                  />

                  <div className="group">
                    <label className="flex flex-col items-center justify-center w-full p-4 sm:p-5 border-2 border-dashed border-gray-300 rounded-xl md:rounded-2xl cursor-pointer bg-gray-50 hover:bg-blue-50 transition-all group-hover:border-blue-400 shadow-sm hover:shadow-md">
                      <div className="p-2 sm:p-3 bg-blue-500 rounded-full mb-2 sm:mb-3 shadow-md">
                        <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base text-center">
                        {formData.videoFile
                          ? formData.videoFile.name
                          : "Upload Medical Video"}
                      </span>
                      <span className="text-xs text-gray-500 mt-1 text-center">
                        MP4, AVI, MOV • Max 100MB
                      </span>
                      <input
                        type="file"
                        accept="video/mp4,video/x-m4v,video/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-3 md:py-4 px-6 rounded-xl md:rounded-2xl font-semibold text-white transition-all cursor-pointer overflow-hidden shadow-lg hover:shadow-xl mt-auto ${
                    isSubmitting || isSubmitted
                      ? "bg-green-500 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: Contact Info - Compact Version with Shadows */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 h-full flex flex-col">
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-gray-600">
                  Reach out to us through any channel
                </p>
              </div>

              <div className="space-y-4 md:space-y-5 mb-6 md:mb-8 flex-grow">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-shadow h-fit">
                  <div className="p-2 bg-blue-500 rounded-lg shadow-md">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900">
                      {contactInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl shadow-sm hover:shadow-md transition-shadow h-fit">
                  <div className="p-2 bg-emerald-500 rounded-lg shadow-md">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl shadow-sm hover:shadow-md transition-shadow h-fit">
                  <div className="p-2 bg-amber-500 rounded-lg shadow-md">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Address</p>
                    <p className="font-medium text-gray-900 text-sm">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-red-100 rounded-lg shadow-sm">
                      <MapPin className="w-4 h-4 text-red-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">Our Location</h4>
                  </div>
                  <div className="relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={contactInfo.mapEmbedUrl}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full border-0"
                      title="Clinic Location"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
