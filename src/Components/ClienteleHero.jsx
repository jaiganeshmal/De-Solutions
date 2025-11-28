import React from "react";

const ClienteleHero = () => {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#111] to-[#199dea]/30 opacity-90"></div>

      {/* Glow Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#199dea] opacity-20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-white opacity-10 blur-[150px] rounded-full"></div>

      <div className="relative container mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight opacity-100">
          Our{" "}
          <span className="bg-gradient-to-r from-[#199dea] to-[#5bbdfa] text-transparent bg-clip-text">
            Clientele
          </span>
        </h1>

        {/* Sub-text */}
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg md:text-xl leading-relaxed opacity-100">
          We collaborate with global brands to deliver powerful, scalable, and
          innovative digital solutions that drive real business success.
        </p>

      </div>
    </section>
  );
};

export default ClienteleHero;
