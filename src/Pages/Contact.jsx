// src/pages/Contact.jsx
import React, { useEffect } from "react";
import { assets } from "../assets/global";
import HeroSection from "../Custom Component/HeroSection";
import ContactInfo from "../Components/ContactInfo";
import ContactForm from "../Components/ContactForm";
import Locations from "../Components/Locations";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
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
  );
};

export default Contact;
