// components/ScrollToTop.tsx
import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
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
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full transition-all duration-300 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-900/50' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <i className="fas fa-arrow-up text-white text-xl" aria-hidden="true"></i>
    </button>
  );
};

export default ScrollToTop;