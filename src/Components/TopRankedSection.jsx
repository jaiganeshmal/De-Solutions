import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { sliderData } from "../assets/global";

const TopRankedSection = () => {
  return (
    <section className="bg-[#1B1B1B] py-10 text-white">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-8">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-snug">
          Ranked As #1 <span className="text-[#199dea]">Android App</span> Development Company
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
