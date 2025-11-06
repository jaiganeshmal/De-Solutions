import React from "react";
import { assets } from "../assets/global";
import { FaDownload } from "react-icons/fa"; // Download icon

const WhyChoose = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-3">
            Why Partner with {" "}
            <span className="text-[#0DACAF]">De Solutions</span> <br /> for Your {" "}
            <span className="text-[#0DACAF]">Software Development Needs</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-xl">
            De Solutions has been a trusted name in software development since 2016. With a portfolio of over 300 successful projects, we bring deep industry experience and a results-driven approach. Our unique advantage lies in our proprietary app store, featuring 50+ in-house developed applications—something that sets us apart from other development firms.
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
