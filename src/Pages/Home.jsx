import React, { useEffect } from "react";
import Header from "../Components/Header";
import DigitalTransformation from "../Components/DigitalTransformation";
import GlobalImpact from "../Components/GlobalImpact";
import DigitalSuite from "../Components/DigitalSuite";
import AlliancesCompliances from "../Components/AlliancesCompliances";
import NewsEvents from "../Components/NewsEvents";
import ContactUs from "../Components/ContactUs";

const Home = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      <Header />
      <DigitalTransformation />
      <GlobalImpact />
      <DigitalSuite />
      <AlliancesCompliances />
      <NewsEvents />
      <ContactUs />
    </>
  );
};

export default Home;
