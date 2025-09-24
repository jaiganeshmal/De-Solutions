import React from "react";
import { assets } from "../assets/global";

const features = [
  {
    id: 1,
    img: assets.image108,
    title: "Team Scalability",
    desc: "Boost your team with domain specialists whenever required",
  },
  {
    id: 2,
    img: assets.image109,
    title: "Quick Time to Market",
    desc: "Streamlined delivery is intended to achieve efficiency on time.",
  },
  {
    id: 3,
    img: assets.image110,
    title: "Cost Saving",
    desc: "Get experienced and competent developers at a reasonable price.",
  },
  {
    id: 4,
    img: assets.image111,
    title: "Skilled Resources",
    desc: "Get access to skilled mobile gaming experts with domain knowledge.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-40 h-40 md:w-48 md:h-48 mx-auto object-contain mb-6"
                loading="lazy"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
