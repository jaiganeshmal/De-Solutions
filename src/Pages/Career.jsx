import React from "react";
import { assets } from "../assets/global";
import HeroSection from "../Custom Component/HeroSection";
import RecruitmentProcess from "../Components/RecruitmentProcess";
import CareerApplication from "../Components/CareerApplication";

const Career = () => {
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
    </>
  );
};

export default Career;
