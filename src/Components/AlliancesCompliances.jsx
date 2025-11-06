import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { allianceImages } from "../assets/global";


const AlliancesCompliances = () => {
  
  return (
    <section className="w-full py-10" style={{ backgroundColor: "#2E2E2E" }}>
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Alliances & Compliances
        </h1>

        {/* Slider */}
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          loop={true} // ✅ Infinite loop enabled
          grabCursor={true} // ✅ cursor 
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
          className="pb-10"
        >
          {allianceImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-28 flex items-center justify-center bg-white rounded-lg shadow-md p-3">
                <img
                  src={img}
                  alt={`alliance-${i}`}
                  className="max-h-18 object-contain"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AlliancesCompliances;
