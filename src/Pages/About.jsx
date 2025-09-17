import React from "react";
import HeroSection from "../Custom Component/HeroSection";
import { assets } from "../assets/global";
import AboutContent from "../Components/AboutContent";
import AtAGlance from "../Components/AtAGlance";
import CeoMessage from "../Components/CeoMessage";
import ExploreProducts from "../Components/ExploreProducts";
import ContactUs from "../Components/ContactUs";

const About = () => {
  return (
    <>
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
    </>
  );
};

export default About;
