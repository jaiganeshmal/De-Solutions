import React from "react";
import { assets } from "../assets/global";
import { FaArrowRight } from "react-icons/fa"; // react-icons se arrow

const HireDevelopers = () => {
  // Images list (from global.js)
  const devIcons = [
    assets.image89,
    assets.image90,
    assets.image91,
    assets.image92,
    assets.image93,
    assets.image94,
    assets.image95,
    assets.image96,
    assets.image97,
    assets.image98,
    assets.image99,
    assets.image100,
  ];

  return (
    <section className="bg-[#1B1B1B] py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
            Hire Developers For{" "}
            <span className="text-[#0DACAF]">Custom IT Projects</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
            Our team of skilled and experienced developers specializes in
            creating tailored IT solutions that perfectly align with your
            business requirements. From software development to web
            applications, mobile apps, database management, and more, we have
            the expertise to deliver innovative solutions that meet your unique
            needs.
          </p>

          <button className="inline-flex items-center gap-3 bg-[#0DACAF] hover:bg-[#0a9798] text-white px-6 py-3 rounded-lg font-medium text-lg transition duration-300">
            Get Consultation
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side (Scrollable Box) */}
        <div className="bg-[#242424] rounded-2xl shadow-lg p-6 max-h-[400px] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-3 gap-6">
            {devIcons.map((icon, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl flex items-center justify-center p-6 shadow-md"
              >
                <img
                  src={icon}
                  alt={`icon-${idx}`}
                  className="w-16 h-16 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireDevelopers;
