import React from "react";
import { useNavigate } from "react-router-dom";

const DigitalTransformation = () => {
  let navigate = useNavigate()
  return (
    <section className="w-full min-h-[75vh] px-6 py-10 bg-gray-50 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Heading + Paragraph */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Driving Digital Transformation with Smart ERP & Digital Platforms
          </h1>
          <p className="mt-3 text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
            At De Solutions, we empower businesses through advanced ERP systems and digital platforms, tailored to meet the evolving needs of banking, finance, telecom, insurance, government, and more. With over two decades of experience, we deliver scalable, secure, and future-ready solutions worldwide.
          </p>
        </div>

        {/* Right Side: Button */}
        <div className="flex-shrink-0">
          <button
          onClick={()=> navigate('/services')} 
          className="bg-[#199dea] text-white font-semibold text-lg md:text-xl px-8 py-4 rounded-xl shadow-md hover:bg-[#085cc9] transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;
