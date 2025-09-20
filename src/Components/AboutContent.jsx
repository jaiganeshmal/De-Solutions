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
            Since 2000, Avanza Solutions has been empowering organizations across 
            the globe to adopt digital transformation via next-gen and hi-tech 
            innovative digital platforms and services. Being supreme and 
            ever-evolving, Avanza serves as a digital hub of innovation and 
            digitalization where technologies like Customer Experience, Artificial 
            Intelligence, Blockchain, Channel Banking, Smart City applications, 
            Business Automation, and Cognitive platforms are developed, deployed, 
            and integrated daily.
          </p>

          <p className="md:px-8">
            Carrying the vision of people-centric innovation and automation, 
            Avanza has furnished multiple organizations worldwide with its 
            digital solutions, including Banking, Finance, Telecommunication, 
            Insurance, Pharmaceuticals, Government sectors, and others.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
