import React, { useEffect, useState } from 'react';
import './ClientSlider.css';

const ClientSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c6321b65339cf85dc92367_Securens%20Testimonial%20Desktop%20(1).png',
    'https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c6321b1d4ea8cda48ff09e_Mediwave%20Testimonial%20Desktop%20(1).png',
    'https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c6321b65339cf85dc9236a_DaMensch%20Testimonial%20Desktop%20(1).png',
    'https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c632d969d907b557180563_Orient%20Testimonial%20Desktop%20(1).png',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handleRadioChange = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="client-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`slide ${currentSlide === index ? 'active' : ''}`}
        />
      ))}
      <div className="radio-controls">
        {images.map((_, index) => (
          <input
            key={index}
            type="radio"
            name="slider-control"
            className="radio"
            checked={currentSlide === index}
            onChange={() => handleRadioChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientSlider;
