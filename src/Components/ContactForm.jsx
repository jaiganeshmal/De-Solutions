import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [captcha, setCaptcha] = useState(null);

  const handleCaptcha = (value) => {
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

    // Reset form
    e.target.reset();
    setCaptcha(null);
  };

  return (
    <section className="bg-[#F9FAFB] py-10">
      <div className="container mx-auto w-[90%] md:w-[80%] bg-white p-10 rounded-2xl shadow-lg">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          Have Question? Write a Message
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
          We will catch you as early as we receive the message
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Name */}
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="border-b border-gray-300 focus:border-[#199dea] focus:outline-none py-3"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="border-b border-gray-300 focus:border-[#199dea] focus:outline-none py-3"
          />

          {/* Mobile Number */}
          <input
            type="text"
            placeholder="Enter mobile number"
            className="border-b border-gray-300 focus:border-[#199dea] focus:outline-none py-3"
          />

          {/* Services Dropdown */}
          <select
            className="border-b border-gray-300 focus:border-[#199dea] focus:outline-none py-3 bg-transparent"
            defaultValue=""
          >
            <option value="" disabled>
              Choose a service
            </option>
            <option>Mobile Apps Development</option>
            <option>AR & VR Apps Development</option>
            <option>Strategic Design Consultancy</option>
            <option>Mobile App QA and Testing</option>
            <option>Web Portal Development</option>
            <option>Connected Devices</option>
          </select>

          {/* Company Name */}
          <input
            type="text"
            placeholder="Enter company name"
            className="border-b border-gray-300 focus:border-[#199dea] focus:outline-none py-3"
          />

          {/* Subject */}
          <input
            type="text"
            placeholder="Enter subject"
            className="border-b border-gray-300 focus:border-[#199dea] focus:outline-none py-3"
          />

          {/* Message (Full Width) */}
          <textarea
            rows="4"
            placeholder="Enter your message"
            className="border-b border-gray-300 focus:border-[#199dea] focus:outline-none py-3 resize-none md:col-span-2"
          ></textarea>

          {/* Captcha */}
          <div className="md:col-span-2 flex justify-start">
            <ReCAPTCHA
              sitekey="6LeYEgssAAAAAIMqF8McOSdGIODrDbpqGfoM-ZY7" // ✅ your working v2 site key
              onChange={handleCaptcha}
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-start">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#199dea] text-white px-6 py-3 rounded-lg shadow hover:bg-[#085cc9] transition"
            >
              Submit <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
