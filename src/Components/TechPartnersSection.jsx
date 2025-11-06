// src/components/TechPartnersSection.jsx
import React from "react";
import { partnersData } from "../assets/global";



const TechPartnersSection = () => {
  return (
    <section className="bg-[#1B1B1B] py-10">
      <div className="container mx-auto px-6 flex flex-col space-y-8">
        
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            We Partner With The{" "}
            <span className="text-[#42BABC]">World's Technology</span> Leaders
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnersData.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={partner.icon}
                alt={partner.title}
                className="w-44 h-44 mb-4 object-contain"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold">{partner.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechPartnersSection;
