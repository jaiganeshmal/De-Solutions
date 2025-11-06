// src/components/IndustriesGrid.jsx
import React from "react";
import { industries } from "../assets/global";

const IndustriesGrid = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-3">
          Our Industries
        </h2>

        {/* Sub Text */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6 text-base md:text-lg">
          De Solutions Android App development services are the light of hope for
          you to reshape your business with more digital traction.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
            >
              {/* Image */}
              <img
                src={industry.img}
                alt={industry.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/60 transition"></div>

              {/* Title */}
              <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold text-center px-2">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
