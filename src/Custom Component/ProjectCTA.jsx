// src/components/ProjectCTA.jsx
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ProjectCTA = ({
  heading,
  highlight,
  buttonText,
  buttonColor = "#0DACAF",
}) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-12 flex flex-col lg:flex-row justify-around items-center gap-6">
        
        {/* Left Text */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center lg:text-left">
          {heading.split(highlight)[0]}
          <span className="text-[#0DACAF]">{highlight}</span>
          {heading.split(highlight)[1]}
        </h2>

        {/* Right Button */}
        <button
          style={{ backgroundColor: buttonColor }}
          className="flex items-center gap-3 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:bg-[#0a9899] transition cursor-pointer"
        >
          {buttonText}
          <FaArrowRight className="text-lg" />
        </button>
      </div>
    </section>
  );
};

export default ProjectCTA;
