import React, { useState, useEffect } from 'react';
import './slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/Screenshot (338).png",
    "/images/Screenshot (339).png",
    "/images/Screenshot (340).png"
  ];

  // Automatically go to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleRadioChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
        <div className="image-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div className="image-slide" key={index}>
              <img src={image} alt={`slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="next-btn" onClick={nextSlide}>&#10095;</button>
      </div>
      <div className="radio-buttons">
        {images.map((_, index) => (
          <input
            type="radio"
            key={index}
            checked={currentIndex === index}
            onChange={() => handleRadioChange(index)}
            className="radio-btn"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
