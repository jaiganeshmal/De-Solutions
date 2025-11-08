// src/pages/Career.jsx
import React, { useEffect, lazy, Suspense } from "react";
import { assets } from "../assets/global";
import Loader from "../Components/loader";

// ✅ Lazy imports
const HeroSection = lazy(() => import("../Custom Component/HeroSection"));
const RecruitmentProcess = lazy(() => import("../Components/RecruitmentProcess"));
const CareerApplication = lazy(() => import("../Components/CareerApplication"));
const HireDevelopers = lazy(() => import("../Components/HireDevelopers"));
const OurPerks = lazy(() => import("../Components/OurPerks"));
const WhyChoose = lazy(() => import("../Components/WhyChoose"));
const FeaturesSection = lazy(() => import("../Components/FeaturesSection"));

const Career = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <HeroSection
        heading={
          <>
            Join Our Team & <br />
            <span className="text-[#199dea]">Shape the Future</span>
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
    </Suspense>
  );
};

export default Career;
