"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Star,
  Quote,
  Heart,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
} from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [newFeedback, setNewFeedback] = useState({
    name: "",
    role: "Patient",
    content: "",
    rating: 5,
  });

  // Dynamic testimonials data - in real app, this would come from API
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Patient",
      content:
        "Excellent service and accurate reports. The staff is very cooperative and the facility is hygienic.",
      rating: 5,
      avatar: "RK",
      date: "2024-01-15",
      verified: true,
    },
    {
      id: 2,
      name: "Sunita Sharma",
      role: "Patient",
      content:
        "Got my mammography done here. Very professional approach and early detection helped in timely treatment.",
      rating: 5,
      avatar: "SS",
      date: "2024-01-10",
      verified: true,
    },
    {
      id: 3,
      name: "Dr. Amit Gupta",
      role: "Referring Doctor",
      content:
        "Reliable diagnostic center with accurate reporting. I regularly refer my patients here.",
      rating: 5,
      avatar: "AG",
      date: "2024-01-05",
      verified: true,
    },
    {
      id: 4,
      name: "Priya Singh",
      role: "Patient",
      content:
        "Very satisfied with the ultrasound service. The technician was very gentle and explained everything clearly.",
      rating: 5,
      avatar: "PS",
      date: "2023-12-28",
      verified: true,
    },
    {
      id: 5,
      name: "Vikram Mehta",
      role: "Patient",
      content:
        "Got my full body checkup done. The process was smooth and reports were delivered on time.",
      rating: 5,
      avatar: "VM",
      date: "2023-12-20",
      verified: true,
    },
  ]);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  // Auto-play every 2 seconds (2000 milliseconds)
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 2000); // Changed from 4000 to 2000

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial, testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();

    // In real app, this would be an API call
    const newTestimonial = {
      id: testimonials.length + 1,
      name: newFeedback.name,
      role: newFeedback.role,
      content: newFeedback.content,
      rating: newFeedback.rating,
      avatar: newFeedback.name
        .split(" ")
        .map((n) => n[0])
        .join(""),
      date: new Date().toISOString().split("T")[0],
      verified: false, // Admin would verify after review
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setNewFeedback({
      name: "",
      role: "Patient",
      content: "",
      rating: 5,
    });
    setShowFeedbackForm(false);

    // Show success message
    alert("Thank you for your feedback! It will be visible after review.");
  };

  // If no testimonials, show empty state
  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-600">
            No testimonials yet
          </h3>
          <p className="text-gray-500 mt-2">
            Be the first to share your experience!
          </p>
          <button
            onClick={() => setShowFeedbackForm(true)}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Share Your Experience
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            PATIENT FEEDBACK
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from patients who trusted us with their health
          </p>
        </div>

        {/* Main Content with Slider and Cards */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Left Column - Main Slider */}
          <div className="lg:w-2/3">
            <div className="relative">
              {/* Main Testimonial Card (Slider) */}
              <div
                className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-lg overflow-hidden"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote className="w-32 h-32 text-blue-400" />
                </div>

                <div className="relative z-10">
                  {/* Rating and Verification Badge */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentIndex]?.rating || 5)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 text-yellow-400 fill-current"
                          />
                        ),
                      )}
                    </div>
                    {testimonials[currentIndex]?.verified && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                        Verified Patient
                      </span>
                    )}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-2xl md:text-3xl text-gray-800 text-center italic leading-relaxed mb-12 max-w-3xl mx-auto">
                    "{testimonials[currentIndex]?.content || ""}"
                  </p>

                  {/* Patient Info */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {testimonials[currentIndex]?.avatar || "US"}
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900">
                          {testimonials[currentIndex]?.name || "User"}
                        </h4>
                        <div className="flex items-center gap-4">
                          <p className="text-gray-600">
                            {testimonials[currentIndex]?.role || "Patient"}
                          </p>
                          <span className="text-gray-400 text-sm">
                            {testimonials[currentIndex]?.date || ""}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={prevTestimonial}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-6 h-6 text-blue-600" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Progress Bar (2 seconds) */}
                <div className="mt-12">
                  <div className="h-2 bg-white/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-2000"
                      style={{
                        animation: isAutoPlaying
                          ? "progress 2s linear infinite"
                          : "none",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Dots Navigation (without numbers) */}
              <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`group ${
                      currentIndex === index
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-75"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentIndex === index
                          ? "bg-blue-600 scale-125"
                          : "bg-gray-300 group-hover:bg-gray-400"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Feedback Form/Cards */}
          <div className="lg:w-1/3">
            {showFeedbackForm ? (
              /* Feedback Form */
              <div className="bg-white rounded-2xl p-6 border border-blue-200 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Share Your Experience
                </h3>
                <form onSubmit={handleSubmitFeedback}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={newFeedback.name}
                        onChange={(e) =>
                          setNewFeedback({
                            ...newFeedback,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        You are a
                      </label>
                      <select
                        value={newFeedback.role}
                        onChange={(e) =>
                          setNewFeedback({
                            ...newFeedback,
                            role: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Patient">Patient</option>
                        <option value="Referring Doctor">Doctor</option>
                        <option value="Healthcare Professional">
                          Healthcare Professional
                        </option>
                        <option value="Family Member">Family Member</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rating
                      </label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() =>
                              setNewFeedback({ ...newFeedback, rating: star })
                            }
                            className="text-2xl"
                          >
                            <Star
                              className={`w-6 h-6 ${star <= newFeedback.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Feedback
                      </label>
                      <textarea
                        required
                        value={newFeedback.content}
                        onChange={(e) =>
                          setNewFeedback({
                            ...newFeedback,
                            content: e.target.value,
                          })
                        }
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Share your experience..."
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Submit Feedback
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowFeedbackForm(false)}
                        className="px-4 py-3 text-gray-600 hover:text-gray-800"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              /* Latest Testimonials Cards */
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    Latest Reviews
                  </h3>
                  <button
                    onClick={() => setShowFeedbackForm(true)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                  >
                    + Add Review
                  </button>
                </div>

                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex gap-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      {testimonial.verified && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                          ✓
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      "{testimonial.content.substring(0, 100)}..."
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                          <span className="font-bold text-blue-600 text-sm">
                            {testimonial.avatar}
                          </span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </h5>
                          <p className="text-xs text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">
                        {testimonial.date}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="pt-4">
                  <button
                    onClick={() => setShowFeedbackForm(true)}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Share Your Experience
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">
                {testimonials.length}+
              </div>
              <div className="text-blue-100">Patient Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Would Recommend</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Have questions about your experience? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:9812166286"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Call for Feedback: 9812166286
            </a>
            <button
              onClick={() => setShowFeedbackForm(true)}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Write a Review
            </button>
          </div>
        </div>

        {/* Animation Styles */}
        <style jsx>{`
          @keyframes progress {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;
