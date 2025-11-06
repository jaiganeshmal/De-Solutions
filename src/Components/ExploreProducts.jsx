// src/components/ExploreProducts.jsx
import React from "react";
import { Link } from "react-router-dom";

const ExploreProducts = () => {
  return (
    <section className="w-full py-14" style={{ backgroundColor: "#EEEEEE" }}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side - Heading & Paragraph */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Explore Our Products
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Our Product Portfolio comprises 35+ digitalized products, platforms, and services, revolutionizing industries worldwide.
          </p>
        </div>

        {/* Right Side - Button */}
        <div className="md:w-1/3 flex justify-start md:justify-end">
          <Link
            to="/products"
            className="bg-[#0DACAF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0DACAF] transition"
          >
            Explore More
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ExploreProducts;
