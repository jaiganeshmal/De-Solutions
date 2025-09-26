// src/pages/PortfolioPage.jsx
import React, { useEffect, lazy, Suspense } from "react";
import { assets } from "../assets/global";
import Loader from "../Components/loader";

// ✅ Lazy imports
const HeroSection = lazy(() => import("../Custom Component/HeroSection"));
const PortfolioProjects = lazy(() => import("../Components/PortfolioProjects"));

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <>
        {/* Hero Section */}
        <HeroSection
          heading="Our Portfolio"
          text="Discover the innovative projects we have delivered to transform businesses across industries."
          backgroundImage={assets.image30} // ✅ apne hisaab se change kar sakte ho
        />

        {/* Projects */}
        <PortfolioProjects />
      </>
    </Suspense>
  );
};

export default Portfolio;
