// src/components/ClientsSection.jsx
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,          // arrows true karo agar use karna hai
        pauseOnHover: false,   // ✅ hover par autoplay stop nahi hoga
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 1 } },
        ],
    };

    const [maxHeight, setMaxHeight] = useState(0);
    const cardRefs = useRef([]);

    // Calculate max height once all cards are rendered
    useEffect(() => {
        if (cardRefs.current.length) {
            const heights = cardRefs.current.map((ref) =>
                ref ? ref.offsetHeight : 0
            );
            setMaxHeight(Math.max(...heights));
        }
    }, []);

    return (
        <section className="bg-[#1B1B1B] py-24 text-white">
            <div className="container mx-auto px-6 flex flex-col items-center space-y-12">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-snug">
                    What Our <span className="text-[#0DACAF]">Clients</span> Say About{" "}
                    <span className="text-[#0DACAF]">De Solutions</span>
                </h2>

                {/* Subheading */}
                <p className="text-lg md:text-xl font-bold text-center">
                    Over 1200+ Satisfied Clients and Growing
                </p>

                {/* Slider */}
                <div className="w-11/12 md:w-4/5">
                    <Slider {...settings}>
                        {testimonials.map((item, idx) => (
                            <div key={idx} className="px-4 flex mb-4">
                                <div
                                    ref={(el) => (cardRefs.current[idx] = el)}
                                    style={{ height: maxHeight || "auto" }}
                                    className="bg-white text-gray-800 rounded-xl p-8 shadow-lg 
                             flex flex-col justify-between hover:shadow-2xl 
                             transition-all duration-300 w-full"
                                >
                                    {/* Testimonial text */}
                                    <p className="text-sm md:text-base leading-relaxed mb-6">
                                        {item.text}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between mt-auto">
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.name}</h4>
                                            <p className="text-sm text-gray-600">{item.location}</p>
                                        </div>
                                        <FaQuoteRight className="text-[#0DACAF] text-2xl" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
