import React from "react";

const DigitalTransformation = () => {
  return (
    <section className="w-full min-h-[75vh] px-6 py-20 bg-gray-50 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Heading + Paragraph */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Enabling Digital Transformation through Digital Platforms
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
            Avanza Solutions has been enabling Digital Transformation for more
            than two successful decades by providing digital platforms and
            services while facilitating the needs of banking, financial
            institutions, telecommunication, insurance, government, and other
            sectors all across the globe.
          </p>
        </div>

        {/* Right Side: Button */}
        <div className="flex-shrink-0">
          <button className="bg-[#A92570] text-white font-semibold text-lg md:text-xl px-8 py-4 rounded-xl shadow-md hover:bg-[#8b1f5a] transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;
