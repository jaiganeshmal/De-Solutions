// src/components/ContactInfo.jsx
import React from "react";
import { assets } from "../assets/global";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={assets.image34}
            alt="Contact"
            className="w-full max-w-lg aspect-[4/5] object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Right Side - Contact Details */}
        <div className="flex flex-col gap-8">
          {/* Phone */}
          <div className="bg-[#0DACAF] text-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaPhone className="w-7 h-7" />
              <h3 className="text-2xl font-semibold">Phone:</h3>
            </div>
            <p className="text-base opacity-90">
              Assistance hours: Monday – Friday, 9 AM to 5 PM
            </p>
            <p className="text-2xl font-bold mt-3">+92 3088005965</p>
          </div>

          {/* Email */}
          <div className="bg-[#0DACAF] text-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaEnvelope className="w-7 h-7" />
              <h3 className="text-2xl font-semibold">Email:</h3>
            </div>
            <p className="text-base opacity-90">
              Our support team will get back to you in 24-h during standard
              business hours.
            </p>
            <p className="text-2xl font-bold mt-3">sales@de2solutions.com</p>
          </div>

          {/* Social Links */}
          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-semibold mb-5 text-[#0DACAF]">
              Follow Us:
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#EAFFFD] px-6 py-5 rounded-lg hover:bg-[#d5f7f4] transition"
              >
                <FaFacebook className="text-blue-600 w-7 h-7" />
                <span className="text-lg font-medium">Facebook</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#EAFFFD] px-6 py-5 rounded-lg hover:bg-[#d5f7f4] transition"
              >
                <FaInstagram className="text-pink-600 w-7 h-7" />
                <span className="text-lg font-medium">Instagram</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#EAFFFD] px-6 py-5 rounded-lg hover:bg-[#d5f7f4] transition"
              >
                <FaLinkedin className="text-blue-700 w-7 h-7" />
                <span className="text-lg font-medium">LinkedIn</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
