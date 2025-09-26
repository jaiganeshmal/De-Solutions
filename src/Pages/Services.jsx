import React, { useEffect, lazy, Suspense } from "react";
import Loader from "../Components/loader";

// ✅ Lazy imports
const ServiceHeroSection = lazy(() => import("../Components/ServiceHeroSection"));
const ServiceInfoSection = lazy(() => import("../Components/ServiceInfoSection"));
const OurServicesSection = lazy(() => import("../Components/OurServicesSection"));
const ProjectCTA = lazy(() => import("../Custom Component/ProjectCTA"));
const WhyChooseUsSection = lazy(() => import("../Components/WhyChooseUsSection"));
const AndroidProcessSection = lazy(() => import("../Components/AndroidProcessSection"));
const TechPartnersSection = lazy(() => import("../Components/TechPartnersSection"));
const TopRankedSection = lazy(() => import("../Components/TopRankedSection"));
const ClientsSection = lazy(() => import("../Components/ClientsSection"));
const FAQSection = lazy(() => import("../Components/FAQSection"));

const Services = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <>
        <ServiceHeroSection />
        <ServiceInfoSection />
        <OurServicesSection />
        <ProjectCTA
          heading="Let's Start a New Project Together"
          highlight="New Project"
          buttonText="Inquire Now"
        />
        <WhyChooseUsSection />
        <AndroidProcessSection />
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
        <FAQSection />
      </>
    </Suspense>
  );
};

export default Services;
