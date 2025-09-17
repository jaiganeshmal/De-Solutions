// src/components/CeoMessage.jsx
import React from "react";
import { assets } from "../assets/global";

const CeoMessage = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10 md:items-start items-center">
        
        {/* Left Side - Image & Info */}
        <div className="flex flex-col items-center md:items-start md:w-2/5">
          <div className="w-full md:size-80 h-auto border border-black shadow-lg rounded overflow-hidden mb-4">
            <img
              src={assets.image33}
              alt="CEO"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
            Ansar Abbas
          </h3>
          <p className="text-gray-600 font-medium">CEO, De Solutions</p>
        </div>

        {/* Right Side - Message */}
        <div className="flex flex-col md:w-3/5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            CEO MESSAGE
          </h2>

          <p className="text-gray-700 text-lg mb-4">
            Avanza Solutions, for more than two decades, has successfully pursued innovative strategies and cutting-edge approaches to enable an e-infrastructure, reshaping the core functions of the digital universe. The world is embracing the trends set by modernization expeditiously, influencing organizations globally; Avanza Solutions furnishes these organizations by powering their systems, operations, and processes via next-gen technologies, e-solutions, and digital platforms.
          </p>

          <p className="text-gray-700 text-lg mb-4">
            Our collective focus on the vision to enrich everyday life with people-centric innovation gives us the ability to work in close collaboration across units and organizations to create synergies that ultimately develop exceptional products.
          </p>

          <p className="text-gray-700 text-lg mb-4">
            Avanza Solutions' mission is to steer companies worldwide into the digital portal by developing and deploying an infinite number of hi-tech solutions using innovative and agile integration techniques.
          </p>

          {/* Bold line */}
          <p className="text-gray-900 text-lg font-bold mt-4">
            "Revolution can be achieved by virtue and harmony."
          </p>
        </div>

      </div>
    </section>
  );
};

export default CeoMessage;
