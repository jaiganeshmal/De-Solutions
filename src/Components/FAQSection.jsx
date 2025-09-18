// src/components/FAQSection.jsx
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How can I hire Android app developers from De Solutions?",
    answer:
      "Employing the best Android developers can help you create an exceptional app that stands out and brings in a good profit. Developers must know Android SDKs, APIs, databases, and business logic to deliver an app that meets your needs.",
  },
  {
    question: "Will you assist me to upload my Android app on the Play Store?",
    answer:
      "We see getting your Android app onto Google Play as a key piece of our overall Android app development puzzle. At De Solutions, we've mastered the art of launching Android apps on the Play Store while following their rules.",
  },
  {
    question:
      "How De Solutions meet the current trends in native Android app development?",
    answer:
      "De Solutions boasts a team of tech enthusiasts always eager to expand their knowledge. This passion fuels their drive for constant improvement, ensuring they stay updated with the latest advancements in Android development.",
  },
  {
    question:
      "What should I pay attention to while looking for Android application developers?",
    answer:
      "Developers need to be proficient in syntax, frameworks, concurrency, SDKs, APIs, Android Studio, and databases. They should also understand your business logic to deliver an app that fully meets your requirements.",
  },
  {
    question: "Why your company might need Android application services?",
    answer:
      "Businesses favor Android apps as they help connect with a vast customer base, drive sales, enhance reputation, and build loyal customers. An Android app can transform how your business engages with clients.",
  },
  {
    question: "How much does it cost to make an Android App?",
    answer:
      "The cost varies depending on app complexity, APIs, and screens. A basic app might cost around $5,000 or more, while advanced apps cost higher depending on features and integrations.",
  },
  {
    question: "Will I be getting any support after project completion?",
    answer:
      "We offer free 3-month support and maintenance after delivery, ensuring your app runs smoothly by fixing issues based on user feedback.",
  },
  {
    question: "Which tools and technologies do you use?",
    answer: `At De Solutions, our developers utilize cutting-edge tools:

Mobile Frontend
- Native (Java/Kotlin), Xamarin, Ionic, React Native

OS & SDKs
- Android OS, Android Studio, Google Fit SDK, ARCore, Android Auto

Platforms
- AWS, Azure, GCP, Firebase, Kubernetes, AppCenter

Others
- Google Assistant, VR, ML Kit, Analytics`,
  },
  {
    question:
      "How do you allocate the resources for my app development in Android?",
    answer:
      "We dive deep into your company, competitors, and audience to allocate resources effectively. This ensures your app does its job and gives you a competitive edge.",
  },
  {
    question:
      "Will we sign an NDA to keep my Android app idea confidential?",
    answer:
      "Yes! A Non-Disclosure Agreement (NDA) safeguards your ideas and prevents them from being copied or disclosed to competitors.",
  },
  {
    question:
      "What process do you follow for Android app development?",
    answer:
      "We use an agile approach: gather requirements → plan → design → build → test → launch → support. This ensures fast and transparent development.",
  },
  {
    question: "Why choose De Solutions for Android app development?",
    answer:
      "We offer free consultation, 50+ Android experts, flexible hiring, ongoing technical assistance, 100% transparency, and 3-month post-launch support.",
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
