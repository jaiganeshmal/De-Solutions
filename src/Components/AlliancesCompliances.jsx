import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { assets } from "../assets/global";

const AlliancesCompliances = () => {
  // 26 images global.js से
  const allianceImages = [
    assets.image13, assets.image14, assets.image15,
    assets.image16, assets.image17, assets.image18,
    assets.image19, assets.image20, assets.image21,
    assets.image22, assets.image23, assets.image24,
    assets.image25, assets.image26,
  ];

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#2E2E2E" }}>
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-10">
          Alliances & Compliances
        </h1>

        {/* Slider */}
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          loop={true} // ✅ Infinite loop enabled
          grabCursor={true} // ✅ cursor hand banega
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
          className="pb-10"
        >
          {allianceImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-24 flex items-center justify-center bg-white rounded-lg shadow-md p-3">
                <img
                  src={img}
                  alt={`alliance-${i}`}
                  className="max-h-16 object-contain"
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
