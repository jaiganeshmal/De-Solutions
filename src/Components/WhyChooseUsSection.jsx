// src/components/WhyChooseUsSection.jsx
import React from "react";
import { featuresData } from "../assets/global";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-[#1B1B1B] py-10 text-white">
      <div className="container mx-auto px-6 flex flex-col space-y-6">

        {/* Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Why Choose <span className="text-[#199dea]">De Solutions</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            We help you make the most of Android's unique features by combining them with the latest tech like Augmented Reality, Virtual Reality, Mixed Reality, and Blockchain.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex flex-col items-center text-center text-gray-900 transition-all duration-300 hover:bg-[#199dea] hover:text-white cursor-pointer"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
