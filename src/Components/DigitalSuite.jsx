import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/global";

const DigitalSuite = () => {
  const products = [
    {
      image: assets.image7,
      title: "Digital Banking Platform",
      desc: "It is a combination of internet, mobile, corporate, and digital banking that, through emerging technologies, revolutionizes the whole banking experience.",
      link: "/products/digital-banking",
      btnLink: "/learn/digital-banking",
    },
    {
      image: assets.image8,
      title: "A CRM/CEM Platform",
      desc: "An AI-powered platform that creates an e-interactive customer journey and provides diverse business development opportunities while embracing a paperless environment.",
      link: "/products/crm-cem",
      btnLink: "/learn/crm-cem",
    },
    {
      image: assets.image9,
      title: "Enterprise Middleware",
      desc: "A centralized platform that seamlessly integrates between applications and handles all communications, requests, and operations while providing extensive customizable opportunities.",
      link: "/products/middleware",
      btnLink: "/learn/middleware",
    },
    {
      image: assets.image10,
      title: "Internet & Mobile Banking Platform",
      desc: "Automating your banking experiences from all customer touchpoints via a flexible and interactive user journey that digitalizes your interbank processes and functions.",
      link: "/products/internet-mobile-banking",
      btnLink: "/learn/internet-mobile-banking",
    },
    {
      image: assets.image11,
      title: "Multichannel Switch",
      desc: "A switch that administers multiple transactions and operations by connecting to POS, CDM, ATM, and other terminals/controllers faultlessly in a secured environment.",
      link: "/products/multichannel-switch",
      btnLink: "/learn/multichannel-switch",
    },
    {
      image: assets.image12,
      title: "Card Production System",
      desc: "A platform that facilitates and produces Debit cards, Prepaid cards, Virtual cards, EMV cards, Loyalty cards, along with many others while maintaining security and customer loyalty.",
      link: "/products/card-production",
      btnLink: "/learn/card-production",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-full mx-auto text-center px-4 md:px-8">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Suite of Digital Products and Platforms
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
          By identifying the industry standards, we aim to automate businesses
          via digital experience and people centric innovation.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[60%] h-full object-contain group-hover:scale-105 transition-transform duration-300 mx-auto"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm flex-grow">{item.desc}</p>

                {/* Button */}
                <Link
                  to={item.btnLink}
                  className="mt-5 inline-block bg-[#0DACAF] text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-[#0c9698] transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read More
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalSuite;
