import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./Components/scrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ScrollToTop /> 
  </>
);
