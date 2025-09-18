// src/components/TopRankedSection.jsx
import React from "react";
import Slider from "react-slick";
import { assets } from "../assets/global"; // image57 - image67
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
  { icon: assets.image57, title: "Top Mobile App Development Companies 2021", description: "Top mobile app development company in California" },
  { icon: assets.image58, title: "Top Website Design Agencies", description: "Best Website Design Agency Award" },
  { icon: assets.image59, title: "Top AR/VR Development Company", description: "De Solutions | Top AR/VR Development Company In Saudi Arabia" },
  { icon: assets.image60, title: "De Solutions among top 8 software development companies", description: "Expertise lists De Solutions as top software development company" },
  { icon: assets.image61, title: "Upcity.com names De Solutions as a top mobile app company", description: "De Solutions - a leader in mobile app development" },
  { icon: assets.image62, title: "De Solutions named among top mobile app development companies", description: "Top app firm listed De Solutions in top mobile app development companies" },
  { icon: assets.image63, title: "Top iOS App Development Company in the US", description: "De Solutions among 30 top iOS app developers in USA 2021" },
  { icon: assets.image64, title: "De Solutions Named Among Top Software Companies", description: "A leading software company in Sept 2021" },
  { icon: assets.image65, title: "De Solutions among top blockchain companies", description: "ITFirms top-rated AppsNation App developers" },
];

const TopRankedSection = () => {
  const settings = {
    dots: true,       // Show dots
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,    // Remove arrows
    arrows: false,          // arrows true karo agar use karna hai
    pauseOnHover: false,   // ✅ hover par autoplay stop nahi hoga
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-[#1B1B1B] py-24 text-white">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-12">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center">
          ranked as #1 <span className="text-[#0DACAF]">android app</span> development company
        </h2>

        {/* Slider */}
        <div className="w-4/5">
          <Slider {...settings}>
            {sliderData.map((item, idx) => (
              <div key={idx} className="px-3 flex h-full">
                <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-lg transition-all duration-300 cursor-pointer flex-1 h-[360px]">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-28 h-28 mb-4 object-contain"
                  />
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TopRankedSection;
