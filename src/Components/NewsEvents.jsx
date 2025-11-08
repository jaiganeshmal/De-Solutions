import React from "react";
import { assets } from "../assets/global";
import { Link } from "react-router-dom";

const NewsEvents = () => {
  const newsData = [
    {
      img: assets.image27,
      title: "AI Agents are Transforming Banking Sector in 2025",
    },
    {
      img: assets.image28,
      title:
        "How AI Agents in Banking Will Transform the Industry Faster Than You Think",
    },
    {
      img: assets.image29,
      title:
        "De Solutions Forms Strategic Partnership with Reem Finance to Elevate Fusion Banking",
    }
  ];
   scm,n fgvfdc

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10">
          News & Events
        </h1>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Left Side Large Image */}
          <div className="w-full lg:w-[60%] relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src={newsData[0].img}
              alt="news-left"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-left transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-white text-base md:text-lg font-medium">
                {newsData[0].title}
              </p>
            </div>
          </div>

          {/* Right Side 2 Images */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            {newsData.slice(1).map((item, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={item.img}
                  alt={`news-${i}`}
                  className="w-full h-[40vh] lg:h-[39vh] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 text-left transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm md:text-base font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-[#0DACAF] text-white font-medium px-8 py-3 rounded-lg shadow-md hover:bg-[#085cc9] transition"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default NewsEvents;
