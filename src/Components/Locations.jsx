// src/components/Locations.jsx
import React from "react";
import { assets } from "../assets/global";

const locations = [
  {
    image: assets.image35,
    title: "California, USA",
    address: "3415 S Sepulveda Blvd, Los Angeles, CA, USA",
    mapLink:
      "https://www.google.com/maps/place/3415+S+Sepulveda+Blvd,+Los+Angeles,+CA",
  },
  {
    image: assets.image36,
    title: "Montana, USA",
    address: "1001 S Main St, Kalispell, MT 59901, USA",
    mapLink:
      "https://www.google.com/maps/place/1001+S+Main+St,+Kalispell,+MT+59901",
  },
  {
    image: assets.image37,
    title: "Riyadh, KSA",
    address: "Floor 3, Building 7264, Ibn Al Fourat, Riyadh, KSA",
    mapLink: "https://www.google.com/maps/place/Riyadh,+Saudi+Arabia",
  },
  {
    image: assets.image38,
    title: "Dubai, UAE",
    address: "Level 23, Boulevard Plaza, Downtown Dubai, UAE",
    mapLink: "https://www.google.com/maps/place/Dubai,+UAE",
  },
  {
    image: assets.image39,
    title: "Karachi, PAK",
    address: "Suite # 309, Tariq Centre, Tariq Rd, Karachi, PAK",
    mapLink:
      "https://www.google.com/maps/place/Tariq+Centre,+Tariq+Rd,+Karachi",
  },
];

const Locations = () => {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Global Offices
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image with hover effect */}
              <div className="overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.title}
                  className="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-110"
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
                  className="mt-4 inline-block text-center bg-[#0DACAF] text-white px-4 py-2 rounded-lg shadow hover:bg-[#0a9899] transition"
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
