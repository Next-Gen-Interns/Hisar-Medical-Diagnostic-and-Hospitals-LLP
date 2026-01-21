"use client";

import AboutPage from "@/components/about/about";
import AboutBusinessSection from "@/components/about/AboutBusinessSection";
import ContactSection from "@/components/about/ContactSection";
import FaqSection from "@/components/about/FaqSection";
import ProcessSection from "@/components/about/ProcessSection";
import ServicesSection from "@/components/about/ServicesSection";

const page = () => {
  return (
    <div>
      <AboutPage/>
      <AboutBusinessSection/>
      <ServicesSection/>
      <ProcessSection/>
      <FaqSection/>
      <ContactSection/>
    </div>
  )
}

export default page