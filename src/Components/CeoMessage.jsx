// src/components/CeoMessage.jsx
import React from "react";
import { assets } from "../assets/global";

const CeoMessage = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10 md:items-start items-center">
        
        {/* Left Side - Image & Info */}
        <div className="flex flex-col items-center md:items-start md:w-2/5">
          <div className="w-full md:size-80 h-auto border border-black shadow-lg rounded overflow-hidden mb-4">
            <img
              src={assets.image33}
              alt="CEO"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
            Ansar Abbas
          </h3>
          <p className="text-gray-600 font-medium">CEO, De Solutions</p>
        </div>

        {/* Right Side - Message */}
        <div className="flex flex-col md:w-3/5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            CEO MESSAGE
          </h2>

          <p className="text-gray-700 text-lg mb-3">
            <strong>For over two decades, De Solutions has championed innovation through strategic foresight and cutting-edge technologies, laying the foundation for a robust e-infrastructure that redefines the core of the digital landscape. </strong> <br />
            As the world rapidly adapts to the accelerating pace of modernization, De Solutions empowers organizations globally by transforming their systems, operations, and processes through next-generation technologies, digital solutions, and intelligent platforms.
          </p>

          <p className="text-gray-700 text-lg mb-3">
            Driven by a shared vision to enhance everyday life through people-centric innovation, we foster deep collaboration across teams and partners — creating synergies that lead to the development of truly exceptional, forward-thinking products.
          </p>

          <p className="text-gray-700 text-lg mb-3">
            Our mission is clear: <strong> to guide businesses around the world into the digital future </strong> by engineering and deploying limitless high-tech solutions, powered by agile integration methodologies and cutting-edge innovation.
          </p>

          {/* Bold line */}
          <p className="text-gray-900 text-lg font-bold">
            "Revolution can be achieved by virtue and harmony."
          </p>
        </div>

      </div>
    </section>
  );
};

export default CeoMessage;
