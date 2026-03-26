import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const skills = [
    { name: 'React Development', icon: 'fab fa-react', color: 'text-sky-400' },
    { name: 'Node.js & Express', icon: 'fab fa-node-js', color: 'text-green-400' },
    { name: 'Web3 & Blockchain', icon: 'fas fa-link', color: 'text-indigo-400' },
    { name: 'MongoDB Database', icon: 'fas fa-database', color: 'text-emerald-400' },
    { name: 'Modern JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
    { name: 'Responsive UI/CSS', icon: 'fab fa-css3-alt', color: 'text-blue-400' },
  ];

  return (
    <div className="space-y-32 mb-20">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-32 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 space-y-10 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded border border-white/10 bg-white/5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Fresher Developer • &lt; 1 Year Exp</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tighter text-white uppercase">
            IDEAS TO <br />
            <span className="text-blue-500 italic">REALITY</span> <br />
            IN CODE.
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
            I am Ahmer Amir, a passionate MERN & Web3 developer. I build functional, decentralized, and high-performance web applications with a focus on modern security and clean code.
          </p>
          
          <nav className="flex flex-col sm:flex-row items-center gap-6 pt-4 justify-center md:justify-start">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-blue-500 hover:text-white transition-all">
              Start Project
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-10 py-4 border border-white/10 hover:border-white/40 text-white font-black uppercase text-xs tracking-widest transition-all">
              See My Projects
            </Link>
          </nav>
        </div>

        <div className="flex-1 w-full max-w-lg">
          <figure className="relative glass-effect p-2 rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800" 
              alt="Muhammad Ahmer - A² Dev Full Stack Programming" 
              className="rounded-md w-full grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <figcaption className="absolute bottom-6 left-6 p-6 glass-effect border border-white/10 rounded-sm">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-1">MERN & Web3 Specialist</p>
              <p className="text-sm font-bold text-white uppercase tracking-tighter">Growing Every Day</p>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* Expertise Grid */}
      <section className="max-w-7xl mx-auto px-6" aria-labelledby="tech-stack-heading">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 id="tech-stack-heading" className="text-3xl md:text-5xl font-black tracking-tighter uppercase">My Stack</h2>
            <div className="h-1 w-24 bg-blue-500" aria-hidden="true"></div>
          </div>
          <p className="text-slate-400 max-w-md text-sm font-medium">
            Building robust and scalable applications using the best modern technologies from MERN to Web3.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {skills.map((skill) => (
            <article key={skill.name} className="border border-white/5 p-12 hover:bg-white/[0.02] transition-all group">
              <i className={`${skill.icon} ${skill.color} text-3xl mb-8 opacity-60 group-hover:opacity-100 transition-opacity`} aria-hidden="true"></i>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4 group-hover:text-blue-500 transition-colors">{skill.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Implementation based on industry best practices and self-taught expertise through project work.
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="bg-white/5 py-24" aria-labelledby="why-choose-me-heading">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-20">
          <div className="flex-1">
            <h2 id="why-choose-me-heading" className="text-4xl font-black tracking-tight mb-8">WHY CHOOSE ME?</h2>
            <div className="space-y-8">
              {[
                { t: 'Modern Standards', d: 'I build using the latest React 19 and ES6+ features for better performance and maintainability.' },
                { t: 'Decentralized Vision', d: 'Applying blockchain principles to create more secure and transparent digital environments.' },
                { t: 'Direct Accountability', d: 'As a solo developer, I am your single point of contact for everything from logic to UI.' }
              ].map(item => (
                <div key={item.t} className="flex gap-6">
                  <div className="mt-1 w-5 h-5 border border-blue-500 flex-shrink-0" aria-hidden="true"></div>
                  <div>
                    <h3 className="font-bold text-white text-lg uppercase tracking-wider mb-2">{item.t}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-px bg-white/10">
             {[
               { n: '10+', l: 'Projects Built' },
               { n: '0-1', l: 'Year Experience' },
               { n: '24/7', l: 'Live Availability' },
               { n: 'Web3', l: 'Ready' }
             ].map(stat => (
               <div key={stat.l} className="bg-[#050505] p-10 text-center">
                 <p className="text-4xl font-black text-white mb-2">{stat.n}</p>
                 <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">{stat.l}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
