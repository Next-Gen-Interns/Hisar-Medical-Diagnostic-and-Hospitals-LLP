import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="relative container mx-auto px-3 pt-16 sm:pt-20">
      <div className="relative h-[300px] rounded-2xl overflow-hidden mb-12">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1550831106-0994fe8abcfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
          alt="Expert Team of Radiologists"
          fill
          priority
          className="object-cover object-[70%]"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/55 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="pl-12 sm:pl-16 max-w-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Expert Team of Radiologists
            </h3>

            <p className="text-blue-100 mb-6">
              Our experienced team of radiologists and technicians are dedicated
              to providing accurate diagnoses with compassionate care.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Meet Our Team
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
