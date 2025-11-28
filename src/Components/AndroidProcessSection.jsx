import React from "react";
import { processData } from "../assets/global";

const AndroidProcessSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6 flex flex-col space-y-10">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="text-[#199dea]">Android</span> App Development Process
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            De Solutions provides clients with a simple, agile process for Android app development, guided by a results-focused approach
          </p>
        </div>

        {/* Process Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processData.map((step, idx) => (
            <div
              key={idx}
              className="relative border border-gray-100 bg-white rounded-xl p-6 shadow-lg overflow-hidden cursor-pointer group transform transition-all duration-500 hover:scale-105"
            >
              {/* Animated Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#199dea] to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0 rounded-xl"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center group-hover:text-white transition-colors duration-300">
                {/* Number Circle */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#199dea] text-white font-bold text-lg mb-4 shadow-md">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-800 group-hover:text-white text-sm md:text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AndroidProcessSection;
