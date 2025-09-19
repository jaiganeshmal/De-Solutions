import React from "react";
import { assets } from "../assets/global";

const processes = [
  {
    id: 1,
    icon: assets.image86,
    title: "Application",
    description:
      "Submit your application through our website. Your application is being read by real humans.",
  },
  {
    id: 2,
    icon: assets.image87,
    title: "Interview",
    description:
      "Let us get familiar with your competencies and experience in the field.",
  },
  {
    id: 3,
    icon: assets.image88,
    title: "Offer",
    description:
      "Congratulations! You have made it. Sign the agreement and you are on-board with us.",
  },
];

const RecruitmentProcess = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Recruitment Process
        </h2>

        {/* Sub text */}
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          De Solutions aims to build high-quality software while also fostering
          an enjoyable work environment that allows everyone the opportunity to
          reach their highest potential.
        </p>

        {/* Process Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {processes.map((item) => (
            <div
              key={item.id}
              className="relative bg-white shadow-md rounded-md  p-8 text-center group overflow-hidden"
            >
              {/* Animated Border */}
              <span className="absolute inset-0 rounded-md pointer-events-none">
                {/* Top Line */}
                <span className="absolute top-0 left-0 h-[2px] w-0 bg-[#0DACAF] 
                  transition-none group-hover:w-full  group-hover:transition-all duration-500 "></span>

                {/* Right Line */}
                <span className="absolute top-0 right-0 w-[2px] h-0 bg-[#0DACAF] 
                  transition-none group-hover:h-full group-hover:transition-all duration-500 delay-200"></span>

                {/* Bottom Line */}
                <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#0DACAF] 
                  transition-none group-hover:w-full group-hover:transition-all duration-500 delay-400"></span>

                {/* Left Line */}
                <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#0DACAF] 
                  transition-none group-hover:h-full group-hover:transition-all duration-500 delay-600"></span>
              </span>

              {/* Icon */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-20 h-20 mx-auto object-contain mb-6"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitmentProcess;
