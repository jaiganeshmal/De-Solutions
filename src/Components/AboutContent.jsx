// src/components/AboutContent.jsx
import React from "react";

const AboutContent = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center max-w-5xl">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight inline-block relative">
          Digitalizing Businesses for 2 Decades
          <span className="block w-24 h-1 bg-[#0DACAF] mx-auto mt-4 rounded-full"></span>
        </h2>

        {/* Paragraphs */}
        <div className="mt-10 flex flex-col gap-6 text-gray-700 text-lg md:text-xl leading-relaxed text-left md:text-center">
          <p className="md:px-8">
            Founded in 2018 by experienced consultants, DE Solutions brings over a decade of expertise in software development, project management, training, and support services. Our mission is to empower small and medium businesses through automation and innovative digital solutions.With hundreds of successful implementations, we help startups and established enterprises strengthen business processes using modern technologies like ERP systems, web and mobile apps, social media, and digital marketing.Our flexible, user-friendly solutions are designed to meet evolving business needs—enabling faster decisions, smarter controls, and sustainable growth. Backed by a dedicated team, we deliver high-quality, cost-effective services on time, while continuously improving through client feedback and technology upgrades.
          </p>

          {/* <p className="md:px-8">
            Carrying the vision of people-centric innovation and automation, 
            De Solutions has furnished multiple organizations worldwide with its 
            digital solutions, including Banking, Finance, Telecommunication, 
            Insurance, Pharmaceuticals, Government sectors, and others.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
