import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaCheckCircle } from "react-icons/fa";
import { services } from "../assets/global";
import toast from "react-hot-toast";

const ServiceHeroSection = () => {
  const [captcha, setCaptcha] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptcha(value);
    toast.success("reCAPTCHA verified ✅");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captcha) {
      toast.error("Please verify reCAPTCHA before submitting ❌");
      return;
    }

    toast.success("Form submitted successfully 🎉");
    e.target.reset();
    setCaptcha(null);
  };

  return (
    <section className="bg-[#1B1B1B] text-white py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row md:items-start items-center gap-12">
        {/* Left Section */}
        <div className="lg:w-2/3 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Empower Your Business with <br />
            <span className="text-[#199dea]">Next-Gen Digital Solutions</span>
          </h1>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-2xl">
            At <strong>De Solutions</strong>, we deliver cutting-edge software solutions that drive real business transformation. Our expertise spans ERP systems, mobile apps, and web platforms — built to streamline operations, enhance productivity, and fuel growth.
            <br /> With innovation and quality at our core, we help you overcome challenges, unlock opportunities, and achieve meaningful digital success.
          </p>

          <ul className="space-y-3">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-base md:text-lg text-gray-200"
              >
                <FaCheckCircle className="text-[#199dea]" />
                <span className="hover:text-[#199dea] transition cursor-pointer">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section (Form) */}
        <div className="lg:w-1/3 max-w-sm bg-white text-gray-900 rounded-xl shadow-lg p-5">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Book a free <br />
            <span className="text-[#199dea]">Consultation</span>
          </h2>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First Name"
                required
                className="w-1/2 border-b border-gray-500 focus:border-[#199dea] outline-none py-1 text-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="w-1/2 border-b border-gray-500 focus:border-[#199dea] outline-none py-1 text-sm"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border-b border-gray-500 focus:border-[#199dea] outline-none py-1 text-sm"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border-b border-gray-500 focus:border-[#199dea] outline-none py-1 text-sm"
            />

            <textarea
              placeholder="Message"
              rows="2"
              className="w-full border-b border-gray-500 focus:border-[#199dea] outline-none py-1 text-sm resize-none"
            ></textarea>

            {/* reCAPTCHA */}
            <div className="scale-90 origin-left">
              <ReCAPTCHA
                sitekey="6LeYEgssAAAAAIMqF8McOSdGIODrDbpqGfoM-ZY7" // ✅ working v2 key
                onChange={handleCaptchaChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#199dea] text-white font-medium py-2 rounded-md shadow hover:bg-[#085cc9] transition text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
