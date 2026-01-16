// components/ScrollToTop.tsx
import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Initial check
    toggleVisibility();
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Always render button but control opacity
  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-8 right-8 z-[9999] p-4 rounded-full transition-all duration-300 scroll-top-btn ${
        isVisible 
          ? 'opacity-100 translate-y-0 bg-blue-600 hover:bg-blue-700 animate-fade-in-up' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      style={{ 
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      <i className="fas fa-arrow-up text-white text-xl" aria-hidden="true"></i>
    </button>
  );
};

export default ScrollToTop;