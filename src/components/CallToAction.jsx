import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Diagnostic Appointment Today
          </h2>
          <p className="text-xl text-blue-600 font-medium mb-8">
            Early Detection Saves Lives
          </p>

          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>

          <p className="text-gray-600 mt-8 text-sm">
            Call 9812166286 for immediate assistance
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
