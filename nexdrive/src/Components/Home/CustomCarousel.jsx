import React, { useState } from 'react';
import './CustomCarousel.css';
import download from "../../assets/download.png";
import doordash from "../../assets/doordash.png";
import rentcar from "../../assets/rentcar.png"
const slides = [
  {
    id: 1,
    logoSrc: download,
    heading: 'Stephanie Moorie  President',
    content: 'We have seen an 81% reduction in collisions. We are now installing Nauto in all of our vehicles after the unbelievable results.',
  },
  {
    id: 2,
    logoSrc: doordash,
    heading: "Tony Xu, CEO",
    content: 'Dash cams protect drivers and ensure safer deliveries, improving trust and reliability.',
  },
  {
    id: 3,
    logoSrc: rentcar,
    heading: "John Doe, President",
    content: 'Dash cams provide safety, monitor vehicle use, and protect customers from unforeseen incidents.',
  },
];

function CustomCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <div className="carousel-logo-container">
          <img src={slides[currentSlide].logoSrc} alt="Logo" className="carousel-logo" />
        </div>
        
        <p className="carousel-content">{slides[currentSlide].content}</p>
        <h2 className="carousel-heading">{slides[currentSlide].heading}</h2>
      </div>
      
      <button className="carousel-nav left" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="carousel-nav right" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
}

export default CustomCarousel;
