
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time for UTC+5
  const utc5Time = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Karachi',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).format(time);

  return (
    <footer className="bg-black py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link to="/" className="text-xl font-bold tracking-tight flex items-center space-x-2">
              <div className="w-8 h-8 border border-blue-500/30 rounded flex items-center justify-center">
                <span className="text-blue-500 text-xs font-black italic">A²</span>
              </div>
              <span className="text-white">A² Dev</span>
            </Link>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-loose">
              High-potential MERN & Web3 developer building high-performance web applications. One dev, no compromises.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/Ahmer-kun" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-500 transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-ahmer-b88485283/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-500 transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com/Ahmer-kun" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-500 transition-colors">
                <i className="fas fa-globe text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-8 text-white uppercase text-[10px] tracking-[0.3em]">Core Skills</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <li><Link to="/services" className="hover:text-white transition-colors">React & Frontend</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Node & Backend</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Web3 & Blockchain</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Database Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-white uppercase text-[10px] tracking-[0.3em]">Quick Links</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <li><Link to="/" className="hover:text-white transition-colors">Homepage</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">My Work</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Connect</Link></li>
              <li><a href="https://github.com/Ahmer-kun" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-white uppercase text-[10px] tracking-[0.3em]">Live Status</h4>
            <div className="p-6 bg-white/[0.02] border border-white/5 space-y-4">
               <div className="flex items-center justify-between">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Availability</span>
                 <span className="flex items-center text-[10px] font-bold uppercase tracking-widest text-emerald-500">
                   <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse mr-2"></span>
                   Online
                 </span>
               </div>
               <div className="flex items-center justify-between">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Local Time</span>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-white">{utc5Time}</span>
               </div>
               <div className="flex items-center justify-between">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Timezone</span>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 font-black">UTC+5</span>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
            © {new Date().getFullYear()} A² Dev (Muhammad Ahmer). Built for Performance.
          </p>
          <div className="flex items-center space-x-2 text-slate-700 text-[10px] font-black uppercase tracking-widest">
            <span>Powered by</span>
            <span className="text-white">MERN & WEB3</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
