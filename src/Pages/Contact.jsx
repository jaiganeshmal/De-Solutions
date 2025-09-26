// src/pages/Contact.jsx
import React, { useEffect, lazy, Suspense } from "react";
import { assets } from "../assets/global";
import Loader from "../Components/loader";

// ✅ Lazy imports
const HeroSection = lazy(() => import("../Custom Component/HeroSection"));
const ContactInfo = lazy(() => import("../Components/ContactInfo"));
const ContactForm = lazy(() => import("../Components/ContactForm"));
const Locations = lazy(() => import("../Components/Locations"));

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div className="w-full">
        {/* Hero Section */}
        <HeroSection
          heading="Contact Us"
          text="Contact our tech professionals, and together let's lead the world towards digital disruption."
          backgroundImage={assets.image40}
        />

        <ContactInfo />
        <ContactForm />
        <Locations />
      </div>
    </Suspense>
  );
};

export default Contact;
