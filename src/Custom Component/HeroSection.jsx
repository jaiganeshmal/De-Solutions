// src/components/HeroSection.jsx
import React from "react";

const HeroSection = ({ backgroundImage, heading, text }) => {
  return (
    <section
      className="relative w-full md:h-[75vh] h-[90vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {heading}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          {text}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
