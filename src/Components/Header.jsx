import React from "react";
import { assets } from "../assets/global";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={assets.header_img}
        preload="none"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:justify-start justify-end h-full text-white px-4 sm:px-8 md:px-16 pb-16 md:pb-24 pt-24">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug md:leading-[1.2] text-left sm:text-center md:text-left">
          Top Rated <br />
          <span className="text-[#0DACAF]">
            App Cross Platform App Web
          </span>
          <br />
          Development <br />
          Company
        </h1>

        <p className="max-w-2xl mt-4 sm:mt-6 text-base sm:text-lg text-gray-200 text-left sm:text-center md:text-left">
          Our app developers are glad to state that they are always accessible
          to meet and discuss project requirements and progress.
        </p>

        <div className="mt-6 flex sm:justify-center md:justify-start">
          <button className="flex items-center gap-2 bg-[#0DACAF] px-6 py-3 rounded-md text-white font-medium hover:bg-[#099597] transition">
            Let's Work Together
            <MdKeyboardArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
