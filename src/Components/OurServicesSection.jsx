import React from "react";
import { servicesData } from "../assets/global";

const OurServicesSection = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-6 flex flex-col space-y-6">
        
        {/* Heading */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our Unrivaled Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            <span className="text-[#199dea] font-semibold">
              De Solutions Android App development services
            </span>{" "}
            can be the beacon of hope you need to revitalize your business through increased digital engagement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#199dea] hover:text-white hover:shadow-2xl"
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
              <button className="flex items-center gap-2 bg-white text-[#199dea] font-semibold px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#085cc9] hover:text-white">
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
