import React from 'react';
import { Link } from 'react-router-dom';

const Resume: React.FC = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'Responsive Design'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Socket.io'],
    database: ['MongoDB', 'Mongoose', 'PostgreSQL (basic)'],
    web3: ['Ethers.js', 'Smart Contract Integration', 'DApp Architecture', 'Blockchain Basics'],
    tools: ['Git/GitHub', 'Vite', 'npm', 'VS Code', 'Chrome DevTools', 'Postman']
  };

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Karachi',
      year: '2021 - 2025',
      details: 'CGPA: 3.4/4.0 | Focus on Web Development and Database Systems'
    },
    {
      degree: 'Intermediate in Computer Science',
      institution: 'Government College',
      year: '2019 - 2021',
      details: 'Grade: A | Major subjects: Computer Science, Mathematics, Physics'
    }
  ];

  const experience = [
    {
      title: 'Freelance Full Stack Developer',
      company: 'Self-Employed',
      period: '2024 - Present',
      achievements: [
        'Built 10+ web applications for clients using MERN stack',
        'Developed custom Chrome extension with Manifest V3 architecture',
        'Implemented responsive designs achieving 95+ Lighthouse scores',
        'Managed end-to-end project delivery from requirements to deployment'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'Remote Internship',
      period: '2024',
      achievements: [
        'Assisted in building internal dashboard for company metrics',
        'Fixed 20+ bugs across existing React applications',
        'Collaborated with senior devs using Git workflow',
        'Wrote technical documentation for API endpoints'
      ]
    }
  ];

  const certifications = [
    { name: 'Full Stack Web Development', issuer: 'FreeCodeCamp', year: '2024' },
    { name: 'Blockchain Basics', issuer: 'Coursera', year: '2024' },
    { name: 'TypeScript Fundamentals', issuer: 'Microsoft Learn', year: '2024' }
  ];

  const achievements = [
    'Built MediCheck - Decentralized medical record system',
    'Created Snatchd - Chrome extension for DOM extraction',
    'Completed 10+ production-ready projects in 12 months',
    'Active contributor to open source documentation'
  ];

  const languages = [
    { name: 'English', level: 'Professional Working' },
    { name: 'Urdu', level: 'Native' }
  ];

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
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
            
            {/* Print and Download Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={() => window.print()}
                className="px-6 py-3 border border-white/10 text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white/5 transition-all flex items-center gap-3"
              >
                <i className="fas fa-print"></i>
                Print
              </button>
              <button 
                onClick={() => alert('PDF download feature coming soon')}
                className="px-6 py-3 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all flex items-center gap-3"
              >
                <i className="fas fa-download"></i>
                Download PDF
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 border border-white/10 bg-white/[0.02]">
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-2">Name</p>
              <p className="text-white font-bold uppercase tracking-tight">Muhammad Ahmer</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-2">Location</p>
              <p className="text-white font-bold uppercase tracking-tight">Karachi, Pakistan (UTC+5)</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-2">Availability</p>
              <p className="text-emerald-500 font-bold uppercase tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Open for opportunities
              </p>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-20">
          <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-8 border-l-4 border-blue-500 pl-6">
            Professional Summary
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
            MERN Stack and Web3 developer with a strong foundation in building responsive web applications 
            and decentralized solutions. Self-taught with 10+ production projects completed. Passionate about 
            clean code, performance optimization, and continuous learning. Seeking junior developer role 
            where I can contribute to real-world projects and grow alongside experienced engineers.
          </p>
        </section>

        {/* Skills Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-8 border-l-4 border-blue-500 pl-6">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="border border-white/10 p-8 bg-white/[0.02]">
                <h3 className="text-lg font-black uppercase tracking-widest text-blue-500 mb-6">
                  {category.toUpperCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="text-xs font-bold uppercase tracking-wider text-slate-300 bg-white/5 px-3 py-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-8 border-l-4 border-blue-500 pl-6">
            Work Experience
          </h2>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-blue-500/30 pl-8">
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
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start gap-3">
                      <span className="text-blue-500 mt-1">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-8 border-l-4 border-blue-500 pl-6">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="border border-white/10 p-8 bg-white/[0.02]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-black uppercase tracking-wider text-white">{edu.degree}</h3>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">{edu.year}</span>
                </div>
                <p className="text-slate-400 font-bold text-sm mb-3">{edu.institution}</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Achievements */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-8 border-l-4 border-blue-500 pl-6">
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div>
                    <p className="text-white font-bold uppercase tracking-tight">{cert.name}</p>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest">{cert.issuer}</p>
                  </div>
                  <span className="text-blue-500 text-[10px] font-black">{cert.year}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-8 border-l-4 border-blue-500 pl-6">
              Key Achievements
            </h2>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-slate-400 text-sm flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Languages & Additional Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-8 border-l-4 border-blue-500 pl-6">
              Languages
            </h2>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white font-bold uppercase tracking-tight">{lang.name}</span>
                  <span className="text-slate-500 text-[10px] uppercase tracking-widest">{lang.level}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-8 border-l-4 border-blue-500 pl-6">
              Interests
            </h2>
            <div className="flex flex-wrap gap-3">
              {['Open Source', 'Blockchain Technology', 'UI/UX Design', 'Tech Writing', 'Problem Solving'].map(interest => (
                <span key={interest} className="text-xs font-bold uppercase tracking-wider text-slate-300 border border-white/10 px-4 py-2">
                  {interest}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="border-t border-white/10 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-12 border border-white/10 bg-white/[0.02]">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">Ready to discuss opportunities</h3>
              <p className="text-slate-500 text-sm">Available for junior developer roles and freelance projects</p>
            </div>
            <Link to="/contact" className="px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all">
              Contact Me
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Resume;