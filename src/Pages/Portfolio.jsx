// src/pages/PortfolioPage.jsx
import React, { useEffect } from "react";
import HeroSection from "../Custom Component/HeroSection";
import { assets } from "../assets/global";
import PortfolioProjects from "../Components/PortfolioProjects";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        heading="Our Portfolio"
        text="Discover the innovative projects we have delivered to transform businesses across industries."
        backgroundImage={assets.image30} // background image tum apne hisaab se change kar sakte ho
      />
      <PortfolioProjects />


    </>
  );
};

export default Portfolio;
