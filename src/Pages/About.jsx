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
        text="We are a team of passionate innovators, helping businesses grow with modern
              digital solutions. Our expertise in technology, design, and strategy enables us
              to deliver platforms that empower industries and create value for customers."
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
