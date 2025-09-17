import React from "react";
import { assets } from "../assets/global";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={assets.header_img}
          autoPlay
          loop
          muted
          playsInline // for iOS autoplay
          
        />

        {/* Overlay (optional) */}
        <div className="absolute inset-0 bg-black/0 bg-opacity-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-end h-full text-white md:p-10 p-6 ">
          <h1 className="text-3xl md:text-6xl leading-16 font-bold">
            Top Rated <br />
            <span className="text-[#0DACAF]">
              App Cross Platform App Web
            </span>{" "}
            <br />
            Development <br />
            Company
          </h1>
          <p className="max-w-2xl mt-6">
            Our app developers are glad to state that they are always accessible
            to meet and discuss project requirements and progress.
          </p>
          <button className="flex items-center  bg-[#0DACAF] px-6 py-3 text-white/90 hover:text-white cursor-pointer mt-6 rounded-md">
            Let's Work Together
            <MdKeyboardArrowRight className="size-6 text-white/80 hover:text-white cursor-pointer" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
