import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/services' },
    { name: 'Projects', path: '/portfolio' },
    { name: 'Resume', path: '/resume' },
    { name: 'Connect', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg py-3 border-b border-white/5' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight flex items-center space-x-2">
          <div className="w-9 h-9 border border-blue-500/30 rounded flex items-center justify-center">
            <span className="text-blue-500 text-xs font-black italic">A²</span>
          </div>
          <span className="text-white">A² <span className="text-blue-500 italic">Dev</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-widest font-bold transition-colors hover:text-blue-500 ${
                location.pathname === link.path ? 'text-blue-500' : 'text-slate-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-6 py-2.5 border border-blue-500 text-blue-500 rounded text-xs font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all">
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm uppercase tracking-widest font-bold ${
                location.pathname === link.path ? 'text-blue-500' : 'text-slate-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-4 bg-blue-600 text-white rounded text-center font-bold text-xs uppercase tracking-widest"
          >
            Start Project
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;