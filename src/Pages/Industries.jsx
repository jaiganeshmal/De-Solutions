// src/pages/Industries.jsx
import React, { useEffect, lazy, Suspense } from "react";
import Loader from "../Components/loader";

// ✅ Lazy imports
const IndustriesHeroSection = lazy(() => import("../Components/IndustriesHeroSection"));
const ServiceInfoSection = lazy(() => import("../Components/ServiceInfoSection"));
const IndustriesGrid = lazy(() => import("../Components/IndustriesGrid"));
const ProjectCTA = lazy(() => import("../Custom Component/ProjectCTA"));
const TechPartnersSection = lazy(() => import("../Components/TechPartnersSection"));
const TopRankedSection = lazy(() => import("../Components/TopRankedSection"));
const ClientsSection = lazy(() => import("../Components/ClientsSection"));

const Industries = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <>
        <IndustriesHeroSection />
        <ServiceInfoSection />
        <IndustriesGrid />

        <ProjectCTA
          heading="Hire a Dedicated Developer"
          highlight="Dedicated Developer"
          buttonText="Let's Work Together"
        />

        <TechPartnersSection />
        <TopRankedSection />

        <ProjectCTA
          heading="We Promise. We Deliver."
          highlight="We Deliver."
          buttonText="Let's Work Together"
        />

        <ClientsSection />
      </>
    </Suspense>
  );
};

export default Industries;
