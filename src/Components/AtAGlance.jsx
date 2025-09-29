// src/components/AtAGlance.jsx
import React, { useState } from "react";
import { assets } from "../assets/global";

const AtAGlance = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="w-full relative flex flex-col items-center justify-center text-center text-white"
      style={{
        height: "60vh",
        backgroundImage: `url(${assets.image32})`, // ✅ Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          De Solutions at a Glance
        </h2>

        {/* Short Paragraph */}
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Explore how De Solutions empowers businesses worldwide with innovative digital platforms and next-gen technology solutions.
        </p>

        {/* Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#0DACAF] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0c9698] shadow-lg transform hover:scale-105 transition duration-300"
        >
          Discover Avanza
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full relative p-4">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-700 font-bold text-2xl hover:text-gray-900"
            >
              &times;
            </button>

            {/* YouTube Video */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
                title="De Solutions Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AtAGlance;
