import React from "react";
import { assets } from "../assets/global";

const clientLogos = [
    assets.image135,
    assets.image136,
    assets.image141,
    assets.image143,
    assets.image145,
    assets.image146,
    assets.image147,
    assets.image149,
    assets.image150,
    assets.image152,
    assets.image153,
    assets.image156,
    assets.image162,
    assets.image167,
    assets.image169,
    assets.image172,
    assets.image174,
    assets.image175,
    assets.image176,
    assets.image177,

];

const ClientLogosSection = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-8">
                    Trusted by Worldwide Brands
                </h2>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {clientLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="groupbg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md p-6 flex justify-center items-center h-32 cursor-pointer transition-all hover:shadow-xl hover:bg-white hover:-translate-y-1 duration-300"
                        >
                            <img
                                src={logo}
                                className="max-h-14 object-contain opacity-80 group-hover:opacity-100 transform group-hover:scale-[1.08] transition-all duration-300"
                                alt={`Client Logo ${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogosSection;
