// src/pages/Industries.jsx
import React from "react";
import IndustriesHeroSection from "../Components/IndustriesHeroSection";
import ServiceInfoSection from "../Components/ServiceInfoSection";
import IndustriesGrid from "../Components/IndustriesGrid";
import ProjectCTA from "../Custom Component/ProjectCTA";
import TechPartnersSection from "../Components/TechPartnersSection";
import TopRankedSection from "../Components/TopRankedSection";
import ClientsSection from "../Components/ClientsSection";

const Industries = () => {
  return (
    <>
      <IndustriesHeroSection /> 
      <ServiceInfoSection />
      <IndustriesGrid />
      <ProjectCTA heading="Hire a Dedicated Developer" highlight="Dedicated Developer" buttonText="Let's Work Together"  />
      <TechPartnersSection />
      <TopRankedSection />
      <ProjectCTA heading="We Promise. We Deliver." highlight="We Deliver." buttonText="Let's Work Together"  />
      <ClientsSection />
    </>
  );
};

export default Industries;
