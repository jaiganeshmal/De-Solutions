// src/components/ServiceInfoSection.jsx
import React from "react";
import { assets } from "../assets/global"; // global JS se image import

const ServiceInfoSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-stretch gap-16">

        {/* Left Section (Image) */}
        <div className="lg:w-1/2 flex justify-center items-center relative">
          <div className="relative w-full max-w-[90%] h-[400px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={assets.image41}
              alt="Service Illustration"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Section (Text) */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-3 relative">
          {/* Heading with Shadow */}
          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight relative z-10">
              Scale-Up With Our <br />
              <span className="text-[#199dea] relative z-10">Services</span>
            </h2>
            {/* Shadow text behind */}
            <span className="absolute top-0 left-0 text-[5rem] md:text-[7rem] lg:text-[8rem] font-extrabold text-gray-200 opacity-40 select-none z-0">
              Services
            </span>
          </div>

          {/* Paragraphs */}
          <div className="space-y-3">
            <p className="text-gray-900 font-semibold text-sm md:text-base lg:text-base leading-relaxed">
              Snag an Android app that's truly worth your while – boasting an attractive user interface, impressive responsiveness and functionality, packed with features, and built for scalability.
            </p>

            <p className="text-gray-700 font-medium text-sm md:text-base lg:text-base leading-relaxed">
              Get this: Android owns a whopping 88% of the world's smartphone market, and Google's Android OS is the brains behind over 2 billion smart devices. De Solutions is riding this wave with a top-tier team of Android developers – think of them as Android sorcerers – dedicated to conjuring up your cutting-edge, one-of-a-kind Android app.
            </p>

            <p className="text-gray-700 font-medium text-sm md:text-base lg:text-base leading-relaxed">
              De Solutions is an Android app development company that uses data and analytics as its guiding principles to build high-quality applications. We help startups, SMBs, and large corporations succeed with exceptional Android apps. Our team ensures a seamless user experience across all devices.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceInfoSection;
