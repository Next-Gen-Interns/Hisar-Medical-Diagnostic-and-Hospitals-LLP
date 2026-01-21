"use client";

import Image from "next/image";


export default function AboutPage() {
  return (
    <section className="about-banner">
      {/* Background Image */}
      <Image
        src="/slider.jpg"
        alt="Medical Team"
        fill
        priority
        className="about-banner-img"
      />

      {/* Grey slanted strip */}
      <div className="about-banner-strip"></div>

      {/* White About box */}
      <div className="about-banner-box">
        <h1>About Us</h1>
        <p>Committed to Early Detection & Comprehensive Diagnostic Care</p>
      </div>
    </section>
  );
}
