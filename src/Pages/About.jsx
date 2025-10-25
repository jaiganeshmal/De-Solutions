// src/pages/About.jsx
import React, { useEffect, lazy, Suspense } from "react";
import { assets } from "../assets/global";
import Loader from "../Components/loader";

// ✅ Lazy imports
const HeroSection = lazy(() => import("../Custom Component/HeroSection"));
const AboutContent = lazy(() => import("../Components/AboutContent"));
const AtAGlance = lazy(() => import("../Components/AtAGlance"));
const CeoMessage = lazy(() => import("../Components/CeoMessage"));
const ExploreProducts = lazy(() => import("../Components/ExploreProducts"));
const ContactUs = lazy(() => import("../Components/ContactUs"));

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <HeroSection
        backgroundImage={assets.image31} // koi bhi about related image
        heading="About De Solutions"
        text="We are a team of forward-thinking innovators dedicated to helping businesses thrive through cutting-edge digital solutions. With deep expertise in technology, design, and strategy, we create powerful platforms that drive industry transformation and deliver meaningful value to our clients."
      />
      <AboutContent />
      <AtAGlance />
      <CeoMessage />
      <ExploreProducts />
      <ContactUs />
    </Suspense>
  );
};

export default About;
