import React from "react";
import { Link } from "react-router-dom";
import { products } from "../assets/global";

const DigitalSuite = () => {

  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="max-w-full mx-auto text-center px-4 md:px-8">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
          Suite of Digital Products and Platforms
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
          By identifying the industry standards, we aim to automate businesses
          via digital experience and people centric innovation.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[60%] h-full object-contain group-hover:scale-105 transition-transform duration-300 mx-auto"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm flex-grow">{item.desc}</p>

                {/* Button */}
                {/* <Link
                  to={item.btnLink}
                  className="mt-5 inline-block bg-[#0DACAF] text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-[#0c9698] transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read More
                </Link> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalSuite;
