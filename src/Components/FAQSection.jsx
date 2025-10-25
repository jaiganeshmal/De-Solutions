// src/components/FAQSection.jsx
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How can I hire ERP and mobile app developers from De Solutions?",
    answer:
      "You can easily hire our expert developers through a quick consultation. We’ll understand your requirements and assign the right team for your ERP or app project.",
  },
  {
    question: "Will you assist in launching our mobile app or ERP system?",
    answer:
      "Yes, we offer full deployment support — from server setup to Play Store uploads and ERP installation on your preferred environment.",
  },
  {
    question:
      "How does De Solutions stay updated with the latest ERP and app development trends?",
    answer:
      "Our team continuously adopts new technologies and frameworks to ensure every solution is modern, secure, and performance-driven..",
  },
  {
    question:
      "Why should my company invest in ERP and mobile app services?",
    answer:
      "ERP systems and mobile apps streamline your business processes, improve productivity, and offer real-time data access for better decision-making.",
  },
  {
    question: "How much does it cost to develop an ERP or mobile app?",
    answer:
      "Costs vary depending on features, integrations, and complexity. We provide flexible packages suited for startups to enterprise-level needs.",
  },
  {
    question: "Will I receive ongoing support after project delivery?",
    answer:
      "Absolutely! De Solutions provides long-term maintenance, technical support, and version upgrades even after deployment.",
  },
  {
    question: "Which tools and technologies do you use for ERP and mobile app development?",
    answer:
      "We use cutting-edge technologies like PHP, Laravel, Flutter, React Native, and MySQL to build reliable and scalable systems.",
  },
  {
    question:
      "How do you allocate resources for ERP and mobile app projects?",
    answer:
      "We assign dedicated project managers and developers who focus exclusively on your project, ensuring timely delivery and quality results.",
  },
  {
    question:
      "Will my project details remain confidential?",
    answer:
      "Yes, we sign NDA agreements with every client to protect all confidential and business information shared with us.",
  },
  {
    question:
      "What process do you follow for ERP and app development?",
    answer:
      "Our process includes requirement analysis, design, development, testing, deployment, and continuous support for seamless delivery.",
  },
  {
    question: "Why choose De Solutions for ERP and mobile app development?",
    answer:
      "Because we combine innovation, experience, and technology to deliver customized digital solutions that empower your business growth.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-snug mb-12">
          Frequently Asked <br />
          <span className="text-[#0DACAF]">Questions</span>
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
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg hover:text-[#0DACAF] transition"
              >
                {faq.question}
                <FaChevronDown
                  className={`ml-2 transform transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180 text-[#0DACAF]" : ""
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
