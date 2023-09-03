'use client';
import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const slideStyles = {
    transform: `translateX(-${currentSlide * 100}%)`,
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={slideStyles}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full"
          />
        ))}
      </div>
      {/* Adjust the position and opacity of the navigation buttons */}
      <div className="flex justify-between absolute inset-y-0 left-0 right-0 top-1/2 transform -translate-y-1/2">
        <button
          type="button"
          className={`bg-gray-500 p-2 rounded-full shadow-md opacity-50 hover:opacity-100 transition-opacity`}
          aria-label="next button"
          onClick={prevSlide}
        >
          &lt; {/* Left arrow symbol */}
        </button>
        <button
          type="button"
          className={`bg-gray-500 p-2 rounded-full shadow-md opacity-50 hover:opacity-100 transition-opacity`}
          aria-label="next button"
          onClick={nextSlide}
        >
          &gt; {/* Right arrow symbol */}
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
