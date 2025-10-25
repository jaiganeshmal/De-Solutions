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
        text: "De Solutions provided us with a powerful ERP system that optimized our event management and supply chain operations. Their deep understanding of business workflows helped us achieve greater efficiency and accuracy across departments.",
        name: "United Catering",
        location: "United States",
    },
    {
        text: "The ERP solution developed by De Solutions transformed our daily operations. From inventory management to financial tracking, the system has brought transparency and precision to our entire workflow.",
        name: "Anwar and Sons",
        location: "Los Angeles",
    },
    {
        text: "De Solutions delivered a customized ERP solution perfectly aligned with our healthcare operations. The system ensures accurate record-keeping and streamlined administrative management, enhancing our overall productivity.",
        name: "KMED",
        location: "USA",
    },
    {
        text: "Our distribution processes became seamless after implementing the ERP system designed by De Solutions. Their professional team provided exceptional support and ensured flawless system integration.",
        name: "Kunhar Distribution",
        location: "Nigeria",
    },
    {
        text: "We appreciate De Solutions for providing an ERP platform that enhanced our production tracking and reporting efficiency. Their professional team ensured smooth implementation and excellent post-deployment support.",
        name: "Fatima Board And Paper Mill",
        location: "Infinity Works",
    },
    {
        text: "De Solutions’ ERP solution helped us manage our consultancy workflows more effectively. The system’s flexibility and data insights have improved our client handling and resource management capabilities.",
        name: "Techno Consultant",
        location: "Sun Life",
    },
    {
        text: "Partnering with De Solutions for ERP development has been a game changer. Their robust software enhanced our operations, reduced manual errors, and offered real-time visibility into our business performance.",
        name: "Dcan Company",
        location: "USA",
    },
    {
        text: "De Solutions built a tailored ERP system that optimized our food processing operations. The solution provided better control over inventory and ensured smoother coordination between departments.",
        name: "Ashi Food",
        location: "USA",
    },
    {
        text: "The ERP platform by De Solutions perfectly fits our manufacturing and sales workflow. It brought precision and automation, helping us scale our operations with ease.",
        name: "Salani Spice and Food",
        location: "USA",
    },
    {
        text: "De Solutions implemented an intelligent ERP system that simplified our entire management process. Their professionalism and after-sale support are highly commendable.",
        name: "Maria Enterprises",
        location: "USA",
    },
    {
        text: "Our production and supply operations became more efficient with the ERP solution from De Solutions. The system’s detailed reporting and automation have reduced delays and improved decision-making.",
        name: "Kausar Masla",
        location: "USA",
    },
    {
        text: "De Solutions designed a reliable ERP system that connected all our departments under one unified platform. The solution enhanced coordination and improved production efficiency remarkably.",
        name: "KKS Food Private Limited",
        location: "USA",
    },
    {
        text: "The ERP solution provided by De Solutions streamlined our booking and client management system. Their work has enhanced our operational accuracy and overall service delivery.",
        name: "Alboshi Travel",
        location: "USA",
    },
    {
        text: "De Solutions developed an ERP system tailored to our travel business needs. The solution simplified scheduling, customer data management, and reporting, improving overall workflow efficiency.",
        name: "Imam Travel",
        location: "USA",
    },
    {
        text: "With De Solutions’ ERP implementation, we achieved better production tracking and financial control. Their professional team delivered quality results with precision and reliability.",
        name: "Stylo Plastic",
        location: "USA",
    },
    {
        text: "De Solutions provided us with a scalable ERP system that optimized our manufacturing processes. Their commitment to quality and innovation is truly impressive.",
        name: "Ava Plastic",
        location: "USA",
    },
    {
        text: "The ERP solution by De Solutions has enhanced our trading operations through better inventory and sales management. Their system ensures transparency and real-time insights.",
        name: "Atco Traders",
        location: "USA",
    },
    {
        text: "De Solutions implemented a sophisticated ERP platform that allowed us to manage operations more effectively. Their professional approach ensured smooth execution and user satisfaction.",
        name: "Rox Centers",
        location: "USA",
    },
    {
        text: "Our collaboration with De Solutions resulted in a high-performing ERP solution that supports our trading and distribution functions seamlessly. Excellent service and timely delivery.",
        name: "Ahad Traders",
        location: "USA",
    },
    {
        text: "The ERP system built by De Solutions helped us manage sales, inventory, and financial data under one platform. Their technical expertise truly enhanced our business operations.",
        name: "Friends Electronics",
        location: "USA",
    },
    {
        text: "De Solutions implemented an ERP solution that streamlined our production planning and order tracking. Their professionalism and innovation brought great results.",
        name: "Famous Embroidery",
        location: "USA",
    },
    {
        text: "De Solutions provided a comprehensive ERP solution that enhanced our accounting and operations management. Their professional support ensured a smooth transition to automation.",
        name: "Ziauddin Ahmed & Company Pvt Ltd",
        location: "USA",
    },
    {
        text: "Our project management became more efficient with De Solutions’ ERP system. It improved resource allocation, budgeting, and progress tracking across our construction sites.",
        name: "Asra Construction",
        location: "USA",
    },
    {
        text: "De Solutions developed an ERP platform that helped us centralize our operations. Their expert team delivered a system that improved workflow and operational control.",
        name: "UCRAVE",
        location: "USA",
    },
    {
        text: "We appreciate De Solutions for designing a strong ERP system that supports our trading processes. The solution has enhanced visibility, accuracy, and overall productivity.",
        name: "National Trading Company",
        location: "USA",
    },
    {
        text: "De Solutions implemented an ERP solution that streamlined our corporate operations. Their professional handling and post-launch support were exceptional.",
        name: "SCANZS Pvt Limited",
        location: "USA",
    },
    {
        text: "The ERP software by De Solutions revolutionized how we manage inventory and finances. Their professionalism and timely delivery made the entire process seamless.",
        name: "Ramzan Trading",
        location: "USA",
    },
    {
        text: "Our collaboration with De Solutions resulted in an ERP system that enhanced transparency and control over our business processes. Their technical excellence is commendable.",
        name: "Redox",
        location: "USA",
    },
    {
        text: "De Solutions delivered a robust ERP system that improved project tracking and overall workflow. Their team showed great dedication and technical expertise.",
        name: "Buildamatic Pvt Limited",
        location: "USA",
    },
    {
        text: "De Solutions implemented a well-structured ERP solution that improved our production monitoring and order tracking processes. Excellent service and continuous support.",
        name: "Nordic Cable Pvt Limited",
        location: "USA",
    },
    {
        text: "We are highly satisfied with De Solutions’ ERP software. It streamlined our inventory management and order processing, enabling smoother operations.",
        name: "Muslim Trading Company",
        location: "USA",
    },
    {
        text: "De Solutions developed a customized ERP system that optimized our production and delivery processes. Their expertise helped us maintain high efficiency and accuracy.",
        name: "Frozen Halal Foods",
        location: "USA",
    },
    {
        text: "The ERP system delivered by De Solutions provided complete visibility across our departments. Their professional approach ensured high-quality implementation.",
        name: "NCB International",
        location: "USA",
    },
    {
        text: "De Solutions designed a reliable ERP platform that strengthened our accounting and operational management. Their commitment to excellence truly stands out.",
        name: "M. Ashraf & Co.",
        location: "USA",
    },
    {
        text: "We appreciate De Solutions for providing an efficient ERP system tailored to our travel business. Their solution has enhanced booking management and customer service processes.",
        name: "MGM Travel",
        location: "USA",
    },
    {
        text: "The ERP platform by De Solutions helped us manage events, reservations, and billing with great ease. Their professionalism and attention to detail were remarkable.",
        name: "Redisson Banquets",
        location: "USA",
    },
    {
        text: "De Solutions provided us with a high-performing ERP system that simplified event coordination and client management. Their solutions are both efficient and user-friendly.",
        name: "Skyloft Banquets",
        location: "USA",
    },
    {
        text: "De Solutions delivered a robust ERP system that improved our internal management processes. Their technical expertise and dedication made implementation effortless.",
        name: "Capri International Pvt Limited",
        location: "USA",
    },
    {
        text: "Our industrial operations became more efficient thanks to the ERP software developed by De Solutions. Their expert team ensured seamless system integration.",
        name: "ERCON Industries Pvt Limited",
        location: "USA",
    },
    {
        text: "De Solutions’ ERP solution helped us gain better control over our production and supply chain. Their professionalism and attention to quality are highly commendable.",
        name: "Hiba Food",
        location: "USA",
    },
    {
        text: "De Solutions implemented an ERP platform that optimized our agricultural data management and operations. Their work has significantly improved our decision-making process.",
        name: "M/S Neelum Seeds",
        location: "USA",
    },
    {
        text: "De Solutions developed an ERP solution that helped us streamline our business workflows. Their commitment to innovation and professionalism is impressive.",
        name: " Zarie",
        location: "USA",
    },
    {
        text: "The ERP system delivered by De Solutions enhanced our organizational efficiency and reporting accuracy. Their team’s performance and dedication are exceptional.",
        name: "Landmark",
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
