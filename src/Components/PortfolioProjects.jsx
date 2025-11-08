// src/components/PortfolioProjects.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // list icon
import { projects } from "../assets/global";

const PortfolioProjects = () => {
    return (
        <section className="bg-white py-10">
            <div className="container mx-auto px-6 space-y-10">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={` flex flex-col lg:flex-row items-center gap-10 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Left Section */}
                        <div className="lg:w-1/2 space-y-4">
                            {/* Logo */}
                            <img
                                src={project.logo}
                                alt={project.title}
                                className="w-32 h-20 object-contain"
                                loading="lazy"
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
                                        <FaCheckCircle className="text-[#199dea]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button className="bg-[#199dea] text-white px-6 py-2 rounded-md mt-4 font-medium hover:bg-[#085cc9] transition">
                                Learn More
                            </button>
                        </div>

                        {/* Right Section */}
                        <div className="lg:w-1/2">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-xl shadow-lg w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioProjects;
