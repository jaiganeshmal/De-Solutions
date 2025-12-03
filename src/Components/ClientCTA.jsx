import React from "react";
import { Link } from "react-router-dom";

const ClientCTA = () => {
  return (
    <section className="bg-[#199dea] py-10 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Work With Us?
      </h2>

      <p className="mb-6 text-lg">
        Let’s build something amazing for your business.
      </p>

      <Link to='/contact'
        className="bg-white text-[#199dea] px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition"
      >
        Contact Us
      </Link>
    </section>
  );
};

export default ClientCTA;
