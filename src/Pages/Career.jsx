import React, { useEffect } from "react";
import { assets } from "../assets/global";
import HeroSection from "../Custom Component/HeroSection";
import RecruitmentProcess from "../Components/RecruitmentProcess";
import CareerApplication from "../Components/CareerApplication";
import HireDevelopers from "../Components/HireDevelopers";
import OurPerks from "../Components/OurPerks";
import WhyChoose from "../Components/WhyChoose";
import FeaturesSection from "../Components/FeaturesSection";

const Career = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      <HeroSection
        heading={
          <>
            Join Our Team & <br />
            <span className="text-[#0DACAF]">Shape the Future</span>
          </>
        }
        text="At De Solutions, we believe in empowering talent and building a culture of innovation. Join us to create impactful solutions, grow your skills, and be part of a team that’s shaping tomorrow’s digital world."
        backgroundImage={assets.image30}
      />
      <RecruitmentProcess />
      <CareerApplication />
      <HireDevelopers />
      <OurPerks />
      <WhyChoose />
      <FeaturesSection />
    </>
  );
};

export default Career;
