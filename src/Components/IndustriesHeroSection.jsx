// src/components/IndustriesHeroSection.jsx
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaCheckCircle } from "react-icons/fa";

const IndustriesHeroSection = () => {
  const services = [
    "Strategic roadmap planning",
    "Process automation implementation",
    "Strategic roadmap planning",
    "Process automation implementation",
  ];

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <section className="bg-[#1B1B1B] text-white py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row md:items-start items-center gap-12">
        
        {/* Left Section */}
        <div className="lg:w-2/3 space-y-8">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Transform Business <br />
            <span className="text-[#0DACAF]">Growth with</span> <br />
            <span className="text-[#0DACAF]">Revolutionary Services</span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-2xl">
            Our unwavering commitment to innovation and customer satisfaction
            drives us to deliver transformative services that effectively
            address the ever-evolving demands of businesses in the digital
            world, ensuring exceptional results and driving impactful
            transformations.
          </p>

          {/* Services List */}
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-base md:text-lg text-gray-200"
              >
                <FaCheckCircle className="text-[#0DACAF]" />
                <span className="hover:text-[#0DACAF] transition cursor-pointer">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section (Form) */}
        <div className="lg:w-1/4 max-w-sm bg-white text-gray-900 rounded-xl shadow-lg p-5">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Book a free <br />
            <span className="text-[#0DACAF]">Consultation</span>
          </h2>

          <form className="space-y-3">
            {/* First + Last Name */}
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border-b border-gray-500 focus:border-[#0DACAF] outline-none py-1 text-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border-b border-gray-500 focus:border-[#0DACAF] outline-none py-1 text-sm"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-500 focus:border-[#0DACAF] outline-none py-1 text-sm"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border-b border-gray-500 focus:border-[#0DACAF] outline-none py-1 text-sm"
            />

            <textarea
              placeholder="Message"
              rows="2"
              className="w-full border-b border-gray-500 focus:border-[#0DACAF] outline-none py-1 text-sm resize-none"
            ></textarea>

            {/* reCAPTCHA */}
            <div className="scale-90 origin-left">
              <ReCAPTCHA
                sitekey="your_site_key_here"
                onChange={handleCaptchaChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0DACAF] text-white font-medium py-2 rounded-md shadow hover:bg-[#0a9899] transition text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHeroSection;
