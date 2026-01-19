import Hero from "../components/Hero";
import About from "../app/about/page";
import Services from "../app/services/page";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../app/testimonials/page";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
