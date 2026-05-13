import React from 'react';
import { Link } from 'react-router-dom';

const Resume: React.FC = () => {
  const skills = {
    Languages:  ['JavaScript', 'Solidity'],
    Frontend:   ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Redux', 'Tailwind CSS'],
    Backend:    ['Node.js', 'Express.js', 'REST API'],
    Database:   ['MongoDB', 'SQL'],
    Blockchain: ['Ethereum', 'Web3.js', 'Smart Contracts', 'MetaMask'],
    Security:   ['JWT', 'Role-Based Access Control'],
    Tools:      ['Git', 'GitHub', 'Postman', 'Wireshark', 'Vite'],
    OS:         ['Windows', 'Linux'],
  };

  const experience = [
    {
      title: 'Marketing Intern',
      company: 'BariTechSol',
      period: 'Aug 2025 – Sep 2025',
      points: [
        'Contributed to front-end tasks using HTML, CSS, and JavaScript.',
        'Revamped 5+ social media campaigns — achieved 15% increase in engagement.',
        'Conducted keyword research and applied SEO fundamentals to content strategy.',
        'Tracked website traffic using Google Analytics and Search Console.',
      ],
    },
  ];

  const projects = [
    {
      name: 'MediCheck',
      desc: 'Pharmaceutical supply chain tracking system using Ethereum smart contracts and MongoDB.',
      stack: 'Node.js · Express · MongoDB · Solidity · Web3.js · JWT',
      link: 'https://medicheck-eight.vercel.app/',
    },
    {
      name: 'Midway Hospital',
      desc: 'Responsive healthcare website with appointment booking and Google Maps integration.',
      stack: 'React.js · Vite · Tailwind CSS',
      link: 'https://midway-green.vercel.app/',
    },
    {
      name: 'A-Square Dev Portfolio',
      desc: 'Personal developer portfolio with EmailJS contact form, SEO-optimised and deployed on Vercel.',
      stack: 'Next.js · React · Tailwind CSS · EmailJS',
      link: 'https://a-square-dev.vercel.app/',
    },
    {
      name: 'Quick QR Generator',
      desc: 'Privacy-first, fully client-side QR code generator with PNG export.',
      stack: 'React · TypeScript · Tailwind CSS · QRCode lib',
      link: 'https://qr-code-generator-custodes.vercel.app/',
    },
    {
      name: 'Snatchd',
      desc: 'Chrome extension that reverse-engineers any webpage into clean developer-ready code.',
      stack: 'Chrome MV3 · JavaScript · DOM API · JSZip',
      link: 'https://github.com/Ahmer-kun',
    },
  ];

  const certifications = [
    { name: 'IBM Full Stack JavaScript Developer', issuer: 'IBM' },
    { name: 'Certified in Cybersecurity (CC)',      issuer: 'ISC2' },
    { name: 'Google IT Support Professional',       issuer: 'Google' },
  ];

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 text-blue-500 font-black uppercase text-[10px] tracking-[0.3em] mb-6">
                <span className="w-8 h-px bg-blue-500"></span>
                <span>Resume / CV</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">
                My <span className="text-blue-500">Profile</span>
              </h1>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => window.print()}
                className="px-6 py-3 border border-white/10 text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white/5 transition-all flex items-center gap-3"
              >
                <i className="fas fa-print"></i>
                Print
              </button>
              <a
                href="/Muhammad_Ahmer_CV.pdf"
                download="Muhammad_Ahmer_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all flex items-center gap-3"
              >
                <i className="fas fa-download"></i>
                Download PDF
              </a>
            </div>
          </div>

          {/* Info strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10 bg-white/[0.02]">
            {[
              { label: 'Name',         value: 'Muhammad Ahmer',             color: 'text-white' },
              { label: 'Location',     value: 'Karachi, Pakistan (UTC+5)',   color: 'text-white' },
              { label: 'Email',        value: 'muhammadahmer1qw2@gmail.com', color: 'text-white' },
              { label: 'Availability', value: 'Open for Opportunities',      color: 'text-emerald-400' },
            ].map(({ label, value, color }) => (
              <div key={label} className="p-6">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-2">{label}</p>
                <p className={`${color} font-bold tracking-tight text-sm`}>{value}</p>
              </div>
            ))}
          </div>
        </header>

        {/* ── Summary ── */}
        <section className="mb-20">
          <SectionTitle>Summary</SectionTitle>
          <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
            Computer Science undergraduate at Iqra University specialising in Full-Stack (MERN) and Blockchain
            development. Experienced building RESTful APIs, JWT-secured backends, and Ethereum smart contract
            integrations. Strong cybersecurity foundations, 5 production apps shipped, and a bias for clean,
            scalable code.
          </p>
        </section>

        {/* ── Skills ── */}
        <section className="mb-20">
          <SectionTitle>Technical Skills</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="border border-white/10 p-5 bg-white/[0.02]">
                <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500 mb-3">{cat}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(s => (
                    <span key={s} className="text-[10px] font-bold text-slate-300 bg-white/5 px-2 py-1">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="mb-20">
          <SectionTitle>Experience</SectionTitle>
          {experience.map((job, i) => (
            <div key={i} className="border-l-2 border-blue-500/30 pl-8">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-wider text-white">{job.title}</h3>
                  <p className="text-blue-500 font-bold text-sm uppercase tracking-widest mt-1">{job.company}</p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-white/5 px-4 py-2">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2">
                {job.points.map((p, j) => (
                  <li key={j} className="text-slate-400 text-sm flex items-start gap-3">
                    <span className="text-blue-500 mt-1 shrink-0">▸</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ── Projects ── */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black uppercase tracking-widest text-white border-l-4 border-blue-500 pl-6">
              Projects
            </h2>
            <Link
              to="/portfolio"
              className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors flex items-center gap-2"
            >
              View All <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 p-6 bg-white/[0.02] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all group flex flex-col gap-3"
              >
                <h3 className="text-sm font-black uppercase tracking-wider text-white group-hover:text-blue-500 transition-colors">
                  {p.name}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-1">{p.desc}</p>
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{p.stack}</p>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 flex items-center gap-1 mt-1">
                  Live Demo <i className="fas fa-arrow-right text-[8px]"></i>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Education & Certifications ── */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <section>
            <SectionTitle>Education</SectionTitle>
            <div className="border border-white/10 p-6 bg-white/[0.02]">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-black uppercase tracking-wider text-white">BSc Computer Science</h3>
                <span className="text-[10px] font-black text-blue-500 shrink-0 ml-4">2022 – 2026</span>
              </div>
              <p className="text-slate-400 text-sm font-bold mb-1">Iqra University, Karachi</p>
              <p className="text-slate-600 text-[10px] uppercase tracking-widest">MERN · Blockchain · Cybersecurity</p>
            </div>
          </section>

          <section>
            <SectionTitle>Certifications</SectionTitle>
            <div className="space-y-4">
              {certifications.map((c, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div>
                    <p className="text-white font-bold text-sm">{c.name}</p>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-0.5">{c.issuer}</p>
                  </div>
                  <i className="fas fa-certificate text-blue-500 shrink-0 ml-4"></i>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Links ── */}
        <section className="mb-20">
          <SectionTitle>Links</SectionTitle>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'LinkedIn',  url: 'https://www.linkedin.com/in/muhammad-ahmer-b88485283/', icon: 'fab fa-linkedin' },
              { label: 'GitHub',    url: 'https://github.com/Ahmer-kun',                          icon: 'fab fa-github' },
              { label: 'Portfolio', url: 'https://a-square-dev.vercel.app/',                       icon: 'fas fa-globe' },
            ].map(({ label, url, icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-white/10 px-6 py-4 bg-white/[0.02] text-white hover:border-blue-500/50 hover:text-blue-400 transition-all group"
              >
                <i className={`${icon} text-blue-500`}></i>
                <span className="font-black uppercase text-[10px] tracking-[0.25em]">{label}</span>
                <i className="fas fa-arrow-right text-[8px] text-slate-600 group-hover:text-blue-400 transition-colors"></i>
              </a>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-white/10 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-12 border border-white/10 bg-white/[0.02]">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">
                Ready to discuss opportunities
              </h3>
              <p className="text-slate-500 text-sm">
                Open to junior developer roles, freelance builds, and full-time positions
              </p>
            </div>
            <Link
              to="/contact"
              className="px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all shrink-0"
            >
              Contact Me
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-8 border-l-4 border-blue-500 pl-6">
    {children}
  </h2>
);

export default Resume;