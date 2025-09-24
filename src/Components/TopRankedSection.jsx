// src/components/TopRankedSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { assets } from "../assets/global"; // image57 - image67
import "swiper/css";
import "swiper/css/pagination";

const sliderData = [
  { icon: assets.image57, title: "Top Mobile App Development Companies 2021", description: "Top mobile app development company in California" },
  { icon: assets.image58, title: "Top Website Design Agencies", description: "Best Website Design Agency Award" },
  { icon: assets.image59, title: "Top AR/VR Development Company", description: "De Solutions | Top AR/VR Development Company In Saudi Arabia" },
  { icon: assets.image60, title: "De Solutions among top 8 software development companies", description: "Expertise lists De Solutions as top software development company" },
  { icon: assets.image61, title: "Upcity.com names De Solutions as a top mobile app company", description: "De Solutions - a leader in mobile app development" },
  { icon: assets.image62, title: "De Solutions named among top mobile app development companies", description: "Top app firm listed De Solutions in top mobile app development companies" },
  { icon: assets.image63, title: "Top iOS App Development Company in the US", description: "De Solutions among 30 top iOS app developers in USA 2021" },
  { icon: assets.image64, title: "De Solutions Named Among Top Software Companies", description: "A leading software company in Sept 2021" },
  { icon: assets.image65, title: "De Solutions among top blockchain companies", description: "ITFirms top-rated De Solutions App developers" },
];

const TopRankedSection = () => {
  return (
    <section className="bg-[#1B1B1B] py-24 text-white">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-12">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-snug">
          Ranked As #1 <span className="text-[#0DACAF]">Android App</span> Development Company
        </h2>

        {/* Swiper Slider */}
        <div className="w-full md:w-4/5">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              1280: { slidesPerView: 3 }, // desktop
              1024: { slidesPerView: 3 }, // laptop
              768: { slidesPerView: 2 },  // tablet & mobile
              420: { slidesPerView: 1 },  // tablet & mobile
            }}
          >
            {sliderData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 h-[380px]">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-24 h-24 md:w-28 md:h-28 mb-6 object-contain"
                    loading="lazy"
                  />
                  <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TopRankedSection;
