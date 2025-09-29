import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/global";

const GlobalImpact = () => {
  const stats = [
    { icon: assets.image2, value: 350, label: "Customers", suffix: "+" },
    { icon: assets.image3, value: 45, label: "Countries", suffix: "+" },
    { icon: assets.image4, value: 500, label: "Product Deployments", suffix: "+" },
    { icon: assets.image5, value: 700, label: "Interactions Everyday", suffix: "M" },
    { icon: assets.image6, value: 500, label: "Professionals", suffix: "+" },
  ];

  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-cover text-white py-20 px-6 relative"
      style={{
        backgroundImage: `url(${assets.image1})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          De Solutions Global Impact
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          For over 2 decades, De Solutions has empowered organizations
          globally to adopt digital transformation. Over this period, De
          Solutions has evolved into an innovative technology powerhouse.
        </p>

        {/* Stats Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((item, index) => (
            <StatBox
              key={index}
              icon={item.icon}
              value={item.value}
              label={item.label}
              suffix={item.suffix}
              startCount={startCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ✅ Counter Box Component
const StatBox = ({ icon, value, label, suffix, startCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

    let start = 0;
    const duration = 2000; // 2s
    const increment = value / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [startCount, value]);

  return (
    <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 h-48">
      <img src={icon} alt="" className="w-14 h-14 mb-4" loading="lazy" />
      <h2 className="text-3xl md:text-4xl font-extrabold">
        {count}
        {suffix}
      </h2>
      <p className="mt-2 text-base md:text-lg">{label}</p>
    </div>
  );
};

export default GlobalImpact;
