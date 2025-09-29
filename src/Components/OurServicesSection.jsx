// src/components/OurServicesSection.jsx
import React from "react";
import { assets } from "../assets/global"; // image42 - image46

const servicesData = [
  {
    icon: assets.image42,
    title: "Android App Development",
    description: "Our Android app developers leverage cutting-edge technologies to create native applications with robust and flexible architecture.",
  },
  {
    icon: assets.image43,
    title: "iOS App Development",
    description: "We focus on crafting comprehensive iOS mobile applications that are dependable, able to grow with your needs, and work seamlessly across iPhone, iPad, Apple TV, and Apple Watch.",
  },
  {
    icon: assets.image44,
    title: "Cross-Platform App Development",
    description: "We develop apps that work on multiple platforms and devices, saving you cash by needing just one set of code and getting your product out there faster.",
  },
  {
    icon: assets.image45,
    title: "E-Commerce App Development",
    description: "Our e-commerce app development services help with designing, developing, and evolving web-based software. Count on us to build web apps that are effective, efficient, and easy to use.",
  },
  {
    icon: assets.image46,
    title: "Web App Development",
    description: "Our web app development team is here to help you with every step of creating online software, from the initial design to ongoing improvements. We're committed to building web apps that work well, are efficient, and are a breeze to use.",
  },
];

const OurServicesSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 flex flex-col space-y-12">
        
        {/* Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our Unrivaled Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            <span className="text-[#0DACAF] font-semibold">
              De Solutions Android App development services
            </span>{" "}
            can be the beacon of hope you need to revitalize your business through increased digital engagement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#0DACAF] hover:text-white hover:shadow-2xl"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 hover:text-white text-sm md:text-base mb-4 max-w-xs">
                {service.description}
              </p>
              <button className="flex items-center gap-2 bg-white text-[#0DACAF] font-semibold px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#0c9698] hover:text-white">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
