// ImageSlider.js
import React, { useState } from "react";
import "../componentsCSS/RecomandedProducts.css";

const RecomandedProducts = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 4));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(images.length - 4, prevIndex + 4));
  };

  return (
    <div>
      <div className="recButtonsDiv">
        <button className="recButtons" onClick={handlePrevClick}>&lt;</button>
        <button className="recButtons" onClick={handleNextClick}>&gt;</button>
      </div>
      <div className="image-slider-container">
        <div className="image-slider">
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <div key={index} className="image-block">
              <img src={image} alt={`Product ${index + currentIndex + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecomandedProducts;
