import React from "react";

const AboutContent = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6 text-center max-w-5xl">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight inline-block relative">
          Digitalizing Businesses for 2 Decades
          <span className="block w-36 h-1 bg-[#199dea] mx-auto mt-3 rounded-full"></span>
        </h2>

        {/* Paragraphs */}
        <p className=" text-gray-700 text-lg md:text-xl leading-relaxed text-left md:text-center md:px-8 mt-6 ">
          Founded in 2018 by experienced consultants, DE Solutions brings over a decade of expertise in software development, project management, training, and support services. Our mission is to empower small and medium businesses through automation and innovative digital solutions.With hundreds of successful implementations, we help startups and established enterprises strengthen business processes using modern technologies like ERP systems, web and mobile apps, social media, and digital marketing.Our flexible, user-friendly solutions are designed to meet evolving business needs—enabling faster decisions, smarter controls, and sustainable growth. Backed by a dedicated team, we deliver high-quality, cost-effective services on time, while continuously improving through client feedback and technology upgrades.
        </p>
      </div>
    </section>
  );
};

export default AboutContent;
