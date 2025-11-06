import React from "react";
import { perks } from "../assets/global";

const OurPerks = () => {

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Our Perks
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Since loving your job doesn’t pay your expenses, here are some amazing perks offered by De Solutions.
        </p>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk, idx) => (
            <div
              key={idx}
              className="perk-box relative bg-white p-8 rounded-xl shadow-md text-center transition duration-300"
            >
              <img
                src={perk.icon}
                alt={perk.title}
                className="w-16 h-16 mx-auto mb-6 object-contain"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {perk.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {perk.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPerks;
