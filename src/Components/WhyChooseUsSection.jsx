// src/components/WhyChooseUsSection.jsx
import React from "react";
import { assets } from "../assets/global"; // image47 - image52

const featuresData = [
  {
    icon: assets.image47,
    title: "Free Mobile App Consultation",
    description: "De Solutions offers you the chance to chart your path to success without spending a dime.",
  },
  {
    icon: assets.image48,
    title: "50+ Expert Android Developers",
    description: "Unlock your full potential by teaming up with the world's top Android developers.",
  },
  {
    icon: assets.image49,
    title: "Flexible Hiring Models",
    description: "De Solutions offers personalized pricing packages, making it accessible to everyone, no matter the size of your business or the industry you're in.",
  },
  {
    icon: assets.image50,
    title: "24/7 Technical Support",
    description: "Don't stress, our tech team is there for you around the clock to sort out any problems you might have with the app.",
  },
  {
    icon: assets.image51,
    title: "100% Transparency",
    description: "We prioritize customer satisfaction above all else, maintaining transparency with our clients to foster trust in our app.",
  },
  {
    icon: assets.image52,
    title: "3-Months Free Support After Delivery",
    description: "For three months following the app's release, we provide complimentary support to maintain its stability and proper functioning.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-[#1B1B1B] py-24 text-white">
      <div className="container mx-auto px-6 flex flex-col space-y-12">
        
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Why Choose <span className="text-[#0DACAF]">De Solutions</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            We help you make the most of Android's unique features by combining them with the latest tech like Augmented Reality, Virtual Reality, Mixed Reality, and Blockchain.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex flex-col items-center text-center text-gray-900 transition-all duration-300 hover:bg-[#0DACAF] hover:text-white cursor-pointer"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
