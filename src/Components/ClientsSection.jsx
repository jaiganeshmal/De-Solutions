// src/components/ClientsSection.jsx
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
// import img1 from "../assets/img/logo1.png"
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../assets/global";

const ClientsSection = () => {
    return (
        <section className="bg-[#1B1B1B] py-10 text-white">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center space-y-6 ">
                <div className="space-y-2">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center leading-snug">
                        What Our <span className="text-[#199dea]">Clients</span> Say About{" "}
                        <span className="text-[#199dea]">De Solutions</span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-base md:text-xl font-bold text-center">
                        Over 1200+ Satisfied Clients and Growing
                    </p>
                </div>

                {/* Swiper Slider */}
                <div className="w-full md:w-4/5 relative">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        spaceBetween={24}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 },
                            1536: { slidesPerView: 3 },
                        }}
                        loop={true}
                        speed={600}
                        className="pb-12" // ✅ dots ke liye neeche space
                    >
                        {testimonials.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div
                                    className="bg-white text-gray-800 rounded-xl p-6 md:p-8 shadow-lg 
                             flex flex-col justify-between hover:shadow-2xl 
                             transition-all duration-300 h-full min-h-[360px] "
                                >
                                    {/* Testimonial text */}
                                    <p className="text-sm md:text-base leading-relaxed mb-6 overflow-hidden">
                                        {item.text}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between mt-auto">
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.name}</h4>
                                            <p className="text-sm text-gray-600">{item.location}</p>
                                        </div>
                                        <img src='https://res.cloudinary.com/dy2ddzcoq/image/upload/v1762248355/logo_zzuyxp.png' alt="" className="w-20" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
