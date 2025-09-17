import React from "react";
import { assets } from "../assets/global";
import { FaEnvelope, FaPhoneAlt, FaHandshake } from "react-icons/fa";

const ContactUs = () => {
  const contactData = [
    {
      icon: <FaEnvelope className="text-3xl text-[#A92570]" />,
      title: "Contact Us",
      subtitle: "Reach out to us",
      detail: "For more details",
    },
    {
      icon: <FaPhoneAlt className="text-3xl text-[#A92570]" />,
      title: "Call Us",
      subtitle: "+92 3088005965",
      detail: "UAN: +92-21-111-282-692",
    },
    {
      icon: <FaHandshake className="text-3xl text-[#A92570]" />,
      title: "Partner with Us",
      subtitle: "Let's innovate",
      detail: "Together",
    },
  ];

  return (
    <section
      className="w-full py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${assets.image30})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-12 leading-relaxed">
          Contact our tech professionals, and together let's lead the world
          towards digital disruption via multiple digital modes of communication
          and implementation techniques
        </p>

        {/* Contact Boxes */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white/90 text-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-500 cursor-pointer"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-base mb-1">{item.subtitle}</p>
              <p className="text-sm text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
