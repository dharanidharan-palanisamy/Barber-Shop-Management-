import React from "react";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import "./Home.css"
const App = () => {
  return (
    <div>
      <div className="image-slider">
        <img
          src="./assets/images/home 1.jpg"
          alt="Hair Cutting & Fitting 1"
          className="slider-image"
        />
        <img
          src="./assets/images/home 2.jpg"
          alt="Hair Cutting & Fitting 2"
          className="slider-image"
        />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
