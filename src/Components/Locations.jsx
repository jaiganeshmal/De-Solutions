// src/components/Locations.jsx
import React from "react";
import { locations } from "../assets/global";

const Locations = () => {
  return (
    <section className="bg-[#F9FAFB] py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Our Global Offices
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 ">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col "
            >
              {/* Image with hover effect */}
              <div className="overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.title}
                  className="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {loc.title}
                </h3>
                <p className="text-sm text-gray-600 flex-grow">{loc.address}</p>

                {/* Button */}
                <a
                  href={loc.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-center bg-[#0DACAF] text-white px-4 py-2 rounded-lg shadow hover:bg-[#0c9698] transition"
                >
                  View on Map
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
