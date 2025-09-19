// src/components/PortfolioProjects.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // list icon
import { assets } from "../assets/global";

const projects = [
    {
        id: 1,
        logo: assets.image80,
        tags: ["UI/UX Design", "Mobile App Development"],
        title: "Mover Web",
        description:
            "At Mover App, our mission is clear, revolutionize the moving experience. With a steadfast commitment to innovation, we've crafted a seamless platform that bridges the gap between customers and reliable moving professionals. Our dedication to excellence ensures that every interaction, from booking to the final move-in, is smooth, efficient, and stress-free. Join us as we transform the way people move, one seamless connection at a time.",
        list: ["Riders Management", "Promotions", "Nearby Courier", "Track Order"],
        image: assets.image83,
    },
    {
        id: 2,
        logo: assets.image81,
        tags: ["UI/UX Design", "Mobile App Development"],
        title: "Mover App",
        description:
            "Develop a comprehensive mobile application designed to optimize the moving experience by facilitating efficient order management and customer engagement. The app aims to provide seamless real-time tracking of movers, an intuitive interface for profile customization, and direct feedback channels to improve service quality. Additionally, it seeks to incorporate membership and subscription features to offer value-added services and promotions, thereby enhancing customer loyalty and operational transparency in the moving industry.",
        list: ["Order Management", "Track Order", "Membership &", "Nearby Courier"],
        image: assets.image84,
    },
    {
        id: 3,
        logo: assets.image82,
        tags: ["UI/UX Design", "Mobile App Development"],
        title: "Gym Web",
        description:
            "Gymnasium emerges as the definitive application dedicated to offering a comprehensive guide for enhancing physical health and overall well-being. This platform excels by integrating innovative tools and expert insights designed to empower users on their journey toward optimal fitness and wellness. Engage with Gymnasium to transform your health through structured guidance and supportive community features. Whether you're starting your fitness journey or aiming to reach new goals, Gymnasium provides the tools and support you need to succeed. From personalized workout plans to expert nutritional advice and real-time progress tracking, it's your all-in-one companion for achieving and maintaining a healthier lifestyle.",
        list: [
            "Content Management",
            "User Management",
            "Promotions",
            "Bookings Management",
        ],
        image: assets.image85,
    },
];

const PortfolioProjects = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 space-y-20">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Left Section */}
                        <div className="lg:w-1/2 space-y-6">
                            {/* Logo */}
                            <img
                                src={project.logo}
                                alt={project.title}
                                className="w-32 h-32 object-contain"
                            />

                            {/* Tags */}
                            <div className="flex flex-col gap-3">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-[#1B1B1B] text-white text-sm px-4 py-2 rounded-md font-medium w-fit inline-flex"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>


                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                {project.title}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed text-base">
                                {project.description}
                            </p>

                            {/* List */}
                            <ul className="space-y-2">
                                {project.list.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-2 text-gray-700 text-base"
                                    >
                                        <FaCheckCircle className="text-[#0DAAAD]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button className="bg-[#1B1B1B] text-white px-6 py-2 rounded-md mt-4 font-medium hover:bg-[#0DAAAD] transition">
                                Learn More
                            </button>
                        </div>

                        {/* Right Section */}
                        <div className="lg:w-1/2">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-xl shadow-lg w-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioProjects;
