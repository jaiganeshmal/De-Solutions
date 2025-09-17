import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaPhoneAlt, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  const items = [
    {
      icon: <FaFacebookMessenger size={20} />,
      label: "Message",
      to: "/contact", // <-- navigate to contact page
      type: "internal",
      bg: "bg-[#0084FF] hover:bg-[#006FD6]",
    },
    {
      icon: <FaPhoneAlt size={20} />,
      label: "Call",
      href: "tel:+923001234567",
      type: "external",
      bg: "bg-[#4A4A4A] hover:bg-black",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      label: "LinkedIn",
      href: "https://linkedin.com/",
      type: "external",
      bg: "bg-[#0A66C2] hover:bg-[#004182]",
    },
    {
      icon: <FaWhatsapp size={20} />,
      label: "WhatsApp",
      href: "https://wa.me/923001234567",
      type: "external",
      bg: "bg-[#25D366] hover:bg-[#1DA851]",
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
      {items.map((item, index) =>
        item.type === "internal" ? (
          <Link
            key={index}
            to={item.to}
            className={`group relative flex items-center p-3 rounded-full shadow-md text-white transition-all duration-300 ${item.bg}`}
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-9 h-9 rounded-full">
              {item.icon}
            </div>

            {/* Label */}
            <span className="absolute right-14 bg-black/80 text-white text-sm px-2 py-1 rounded-md opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        ) : (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center p-3 rounded-full shadow-md text-white transition-all duration-300 ${item.bg}`}
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-9 h-9 rounded-full">
              {item.icon}
            </div>

            {/* Label */}
            <span className="absolute right-14 bg-black/80 text-white text-sm px-2 py-1 rounded-md opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
              {item.label}
            </span>
          </a>
        )
      )}
    </div>
  );
};

export default SocialLinks;
