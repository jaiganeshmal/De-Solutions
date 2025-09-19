// src/components/IndustriesGrid.jsx
import React from "react";
import { assets } from "../assets/global";


const industries = [
  { img: assets.image68, title: "Advertising" },
  { img: assets.image69, title: "Automative and Transport" },
  { img: assets.image70, title: "E-commerce and Retail" },
  { img: assets.image71, title: "Education" },
  { img: assets.image72, title: "Financial Software Development" },
  { img: assets.image73, title: "Gaming and Leisure" },
  { img: assets.image74, title: "Healthcare and Life Science" },
  { img: assets.image75, title: "Media and Entertainment" },
  { img: assets.image76, title: "Real Estate and Property" },
  { img: assets.image77, title: "Software and High Tech" },
  { img: assets.image78, title: "Sports Teams and Leagues" },
  { img: assets.image79, title: "Travel and Hospitality" },
];

const IndustriesGrid = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
          Our Industries
        </h2>

        {/* Sub Text */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg">
          AppsNation Android App development services are the light of hope for
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
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition"></div>

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
