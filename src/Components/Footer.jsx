import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { navItems } from "../assets/global";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#141414] via-[#1f1f1f] to-[#141414] text-gray-300 py-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-5 tracking-wide">
            De Solutions
          </h2>
          <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
            Driving innovation through next-generation digital transformation. At De Solutions, we collaborate with businesses to create impactful, future-ready digital experiences. Let’s shape the future together. 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div>
          {/* <h3 className="text-lg font-semibold text-white mb-5 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#199dea] after:mt-2"> */}
          <h3 className="text-lg font-semibold text-white mb-5 ">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm grid grid-cols-2">
            {
              navItems.map((value, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={value.to}
                      className="hover:text-[#199dea] transition duration-300"
                    >
                      {value.label}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍  Office No:G-06 EOBI Building Awami markaz share-e-faisal Karachi</li>
            <li>📞 +92 3009296413</li>
            <li>📞 UAN: +92 21 34528723</li>
            <li>✉️ sales@de2solutions.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 ">
            Follow Us
          </h3>
          <div className="flex gap-4">
            {[
              { Icon: FaFacebookF, link: "https://www.facebook.com/de2solutions#" },
              { Icon: FaTwitter, link: "#" },
              { Icon: FaLinkedinIn, link: "https://www.linkedin.com/company/de-solutions" },
              { Icon: FaInstagram, link: "#" },
            ].map(({ Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-[#199dea] hover:border-[#199dea] transition duration-300 transform hover:scale-110 shadow-md"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">De Solutions</span>. All Rights Reserved.
      </div>
    </footer >
  );
};

export default Footer;
