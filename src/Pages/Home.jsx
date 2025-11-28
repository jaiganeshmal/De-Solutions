import React, { useEffect, lazy, Suspense } from "react";
import Loader from "../Components/loader";

// Lazy load heavy components
const Header = lazy(() => import("../Components/Header"));
const DigitalTransformation = lazy(() => import("../Components/DigitalTransformation"));
const GlobalImpact = lazy(() => import("../Components/GlobalImpact"));
const DigitalSuite = lazy(() => import("../Components/DigitalSuite"));
const AlliancesCompliances = lazy(() => import("../Components/AlliancesCompliances"));
const ContactUs = lazy(() => import("../Components/ContactUs"));



const Home = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <DigitalTransformation />
        <GlobalImpact />
        <DigitalSuite />
        <AlliancesCompliances />
        <ContactUs />
      </Suspense>
    </>
  );
};

export default Home;
