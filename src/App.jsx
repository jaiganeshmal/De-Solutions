import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Components/loader";
const Navbar = React.lazy(() => import("./Components/Navbar"));
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Services = React.lazy(() => import("./Pages/Services"));
const Industries = React.lazy(() => import("./Pages/Industries"));
const Career = React.lazy(() => import("./Pages/Career"));
const Portfolio = React.lazy(() => import("./Pages/Portfolio"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const SocialLinks = React.lazy(() => import("./Components/SocialLinks"));
const Footer = React.lazy(() => import("./Components/Footer"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/career" element={<Career />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
        <SocialLinks />
      </BrowserRouter>
    </>
  );
};

export default App;
