import React from "react";
import { assets } from "../assets/global";
import { FaDownload } from "react-icons/fa"; // Download icon

const WhyChoose = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-gray-800">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
            Why Choose{" "}
            <span className="text-[#0DACAF]">De Solutions</span> As Your{" "}
            <span className="text-[#0DACAF]">Development Partner</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
            De Solutions has been working in the software development field since
            2016. We have worked with 300+ businesses. Moreover, De Solutions has
            its own play store where we have 50+ different apps and software,
            which most development companies don't have. De Solutions has its own
            50+ certified developers and designers team that helps you convert
            the idea into reality.
          </p>

          <button className="inline-flex items-center gap-3 bg-[#0DACAF] hover:bg-[#0c9698] text-white px-6 py-3 rounded-lg font-medium text-lg transition duration-300 shadow-md">
            Download Company Profile
            <FaDownload className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src={assets.image107}
            alt="Company Profile"
            className="w-full max-w-md rounded-2xl shadow-lg object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
