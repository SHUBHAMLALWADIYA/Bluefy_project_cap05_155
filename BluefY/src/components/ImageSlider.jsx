import React, { useState, useEffect } from 'react';
import "../componentsCSS/ImageSlider.css"

const ImageSlider = ({ images }) => {
 

  
  const welcomeText = "Welcome to Our Store!";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);





  const goToPrevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };



  return (
    <div className="slider-container">
    <button className="slider-left" onClick={goToPrevImage}>
      &lt;
    </button>
    <button className="slider-right" onClick={goToNextImage}>
      &gt;
    </button>
    <img
      src={images[currentImageIndex]}
      alt={`Image ${currentImageIndex}`}
      className="slider-image"
    />
    <div className="overlay">
      <h2>{welcomeText}</h2>
      <div className="buttons">
        <button className="shop-now-btn">Shop Now</button>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
  );
};





export default ImageSlider;



