// src/components/FAQSection.jsx
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "../assets/global";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-tight mb-6">
          Frequently Asked <br />
          <span className="text-[#199dea]">Questions</span>
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-gray-100 text-gray-900 rounded-xl shadow-md"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg hover:text-[#199dea] transition"
              >
                {faq.question}
                <FaChevronDown
                  className={`ml-2 transform transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180 text-[#199dea]" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-500 ${
                  openIndex === idx ? "max-h-[1000px] pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
