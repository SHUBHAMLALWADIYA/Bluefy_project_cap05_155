import React from 'react';
import ImageSlider from './ImageSlider';
import image1 from '../images/image1.jpeg'
import image2 from '../images/image2.jpeg'
import image3 from '../images/image3.jpeg'
import image4 from '../images/image4.jpeg'
import image5 from '../images/image5.jpeg'

const Slider = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5
    // Add more image URLs as needed
  ];
  

  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
};

export default Slider;
