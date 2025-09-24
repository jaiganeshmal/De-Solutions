// src/components/ClientsSection.jsx
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import img from "../assets/img/logo.png"
import img1 from "../assets/img/logo1.png"
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        text: "Working with De Solutions has been a fantastic experience from start to finish. They developed a stunning eCommerce mobile app tailored to my business needs, and I’m beyond pleased with the final result. The team was not only highly skilled but also incredibly attentive, offering valuable guidance throughout the project. The app is sleek, easy to use, and performs flawlessly. While we did encounter a few small delays, De Solutions did a great job of keeping me informed. I’m extremely satisfied and would definitely recommend De Solutions.",
        name: "Mark DePeters",
        location: "United States",
    },
    {
        text: "I hired De Solutions to develop a custom mobile app for my business. The service was professional, and the team was communicative throughout the project. The quality of the app was impressive, featuring a sleek design and smooth functionality. Most importantly, they delivered great value for the price. Highly recommend them for anyone looking for top-notch app development services!",
        name: "Digi Divine",
        location: "Los Angeles",
    },
    {
        text: "Working with De Solutions was a fantastic experience. They partnered with us on an AR furniture app, a custom e-commerce website, and a mobile game. Their professionalism, expertise, and flexibility were evident throughout. They quickly grasped our requirements, offering great ideas to enhance our concepts. Communication was excellent, and the final products exceeded expectations.",
        name: "DigiTroopers",
        location: "USA",
    },
    {
        text: "Working with De Solutions was a fantastic experience! They delivered a high-quality product that exceeded my expectations, with impressive attention to detail and innovative features. The team was professional, responsive, and committed to bringing my vision to life.",
        name: "Oluwasegun Adefisoye",
        location: "Nigeria",
    },
    {
        text: "Working with De Solutions has been a game-changer for us. Their professional and innovative team understood our vision perfectly and developed a mobile app that transformed how our clients engage with us. From browsing properties to scheduling viewings, everything is seamless now!",
        name: "Juan",
        location: "Infinity Works",
    },
    {
        text: "I’m Keifer Ninonuevo from Sunlife! I wanted to share my experience with De Solutions. They crafted a web app for us, and the entire process was seamless. The team was not only professional but also really attentive to our needs. The end result is outstanding—easy to use and has greatly streamlined our workflow.",
        name: "Keifer Ninonuevo",
        location: "Sun Life",
    },
    {
        text: "De Solutions has been an incredible mobile app development partner. From the start, they understood our vision and delivered a sleek, user-friendly app on time. Their expertise in design and functionality greatly improved customer engagement.",
        name: "Futurealiti Digital",
        location: "USA",
    },
];

const ClientsSection = () => {
    return (
        <section className="bg-[#1B1B1B] py-20 md:py-24 text-white">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center space-y-10 md:space-y-12">
                <div className="space-y-2">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center leading-snug">
                        What Our <span className="text-[#0DACAF]">Clients</span> Say About{" "}
                        <span className="text-[#0DACAF]">De Solutions</span>
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
                             transition-all duration-300 h-full min-h-[380px] md:min-h-[420px]"
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
                                        <img src={img} alt="" className="w-20" />
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
