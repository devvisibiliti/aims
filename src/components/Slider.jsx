import React, { useState, useEffect, useRef, memo } from 'react';

const slides = [
  { id: 1, image: '/images/slide1.jpg', caption: 'Quality Solutions' },
  { id: 2, image: '/images/slide2.jpg', caption: 'Trusted Partner' },
  { id: 3, image: '/images/slide3.jpg', caption: 'Innovative Products' },
];

const Slide = memo(({ slide, active }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-700 ${
      active ? 'opacity-100 z-10' : 'opacity-0 z-0'
    }`}
    aria-hidden={!active}
  >
    <img
      src={slide.image}
      srcSet={`${slide.image}?w=400 400w, ${slide.image}?w=800 800w`}
      sizes="(max-width: 640px) 400px, 800px"
      alt={slide.caption}
      className="w-full h-full object-cover"
      draggable={false}
    />
    <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 text-xs sm:text-xl font-semibold text-white bg-black bg-opacity-50 px-2 py-1 sm:p-2 rounded">
      {slide.caption}
    </div>
  </div>
));

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  // Touch/swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prevSlide();
    else if (diff < -50) nextSlide();
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full h-48 sm:h-64 md:h-96 overflow-hidden rounded-lg shadow-lg select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Image Slider"
    >
      {slides.map((slide, idx) => (
        <Slide key={slide.id} slide={slide} active={idx === current} />
      ))}
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-1 sm:p-2 hover:bg-opacity-70 focus:outline-none z-20"
        aria-label="Previous Slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-1 sm:p-2 hover:bg-opacity-70 focus:outline-none z-20"
        aria-label="Next Slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full ${current === idx ? 'bg-white' : 'bg-gray-400 bg-opacity-60'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
