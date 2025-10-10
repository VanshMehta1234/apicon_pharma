import React, { useState, useEffect } from 'react';

const RotatingBackgroundHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Your 3 background images
  const backgroundImages = [
    '/assets/images/lab-image-laptop.jpg',
    '/assets/images/lab-image2.jpeg', 
    '/assets/images/lab-image3.avif'
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Handle manual dot click
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Handle previous image
  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
  };

  // Handle next image
  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Rotating Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      ))}

      {/* Overlay gradient for better text readability if needed */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />

      {/* Left Arrow Button */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 z-10 backdrop-blur-sm"
        aria-label="Previous image"
      >
        <svg 
          className="w-5 h-5 md:w-6 md:h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 z-10 backdrop-blur-sm"
        aria-label="Next image"
      >
        <svg 
          className="w-5 h-5 md:w-6 md:h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingBackgroundHero;
