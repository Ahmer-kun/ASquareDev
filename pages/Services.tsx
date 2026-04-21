
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const serviceList = [
    {
      title: 'MERN Engineering',
      desc: 'I build end-to-end web applications with optimized backends and pixel-perfect frontends using the modern MERN stack.',
      icon: 'fas fa-layer-group',
      features: ['React & Hooks', 'Node/Express', 'MongoDB Modeling']
    },
    {
      title: 'Web3 & Blockchain',
      desc: 'Developing decentralized solutions and integrating smart contracts into modern web applications.',
      icon: 'fas fa-link',
      features: ['Smart Contract Integration', 'DApp Architecture', 'Blockchain Security']
    },
    {
      title: 'Frontend Mastery',
      desc: 'Crafting responsive and interactive user interfaces using React and modern CSS frameworks like Tailwind.',
      icon: 'fas fa-desktop',
      features: ['Tailwind CSS', 'Responsive Design', 'Component Architecture']
    },
    {
      title: 'Backend Logic',
      desc: 'Building robust server-side logic and RESTful APIs with Node.js to handle complex application data.',
      icon: 'fas fa-server',
      features: ['REST API Design', 'Express Middleware', 'JWT Auth']
    },
    {
      title: 'Modern JavaScript',
      desc: 'Utilizing ES6+ features to write clean, efficient, and scalable JavaScript code for modern browsers.',
      icon: 'fab fa-js',
      features: ['ES6+ Syntax', 'Asynchronous JS', 'Modular Patterns']
    },
    {
      title: 'Database Design',
      desc: 'Modeling and managing NoSQL databases with MongoDB to ensure data integrity and efficient retrieval.',
      icon: 'fas fa-database',
      features: ['Schema Design', 'Mongoose Integration', 'CRUD Mastery']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 space-y-32">
      <header className="pt-20 space-y-8">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase text-white leading-none">Skills</h1>
        <div className="h-2 w-32 bg-blue-600" aria-hidden="true"></div>
        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed font-medium">
          I've mastered the essential pillars of web development to deliver high-quality, scalable digital solutions as Ahmer Amir (A² Dev).
        </p>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-1" aria-label="Detailed Skills Grid">
        {serviceList.map((service) => (
          <article key={service.title} className="border border-white/5 p-12 hover:bg-white/[0.02] transition-all group flex flex-col min-h-[400px]">
            <div className="mb-10 text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity">
              <i className={`${service.icon} text-4xl`} aria-hidden="true"></i>
            </div>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6 group-hover:text-blue-500 transition-colors">{service.title}</h2>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed flex-grow">{service.desc}</p>
            <ul className="space-y-4">
              {service.features.map(f => (
                <li key={f} className="text-[10px] font-bold uppercase tracking-widest text-slate-300 flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 mr-3" aria-hidden="true"></div> {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="space-y-16" aria-labelledby="collaboration-heading">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
          <h2 id="collaboration-heading" className="text-4xl font-black uppercase tracking-tighter">Work With Me</h2>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Open for roles and projects</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {[
            { n: 'Full-Time Junior', p: 'Remote / Hybrid', d: 'Ready to join a team and contribute to large-scale application development.' },
            { n: 'Project Build', p: 'Fixed Price', d: 'Starting from scratch? I will build your MVP or custom web solution end-to-end.' },
            { n: 'DApp Development', p: 'Consultation', d: 'Need help integrating blockchain into your existing web infrastructure?' }
          ].map((item) => (
            <article key={item.n} className="bg-[#050505] p-12 space-y-6 hover:bg-blue-600/5 transition-all cursor-default">
              <h3 className="text-xl font-black uppercase tracking-widest">{item.n}</h3>
              <p className="text-blue-500 text-sm font-bold uppercase tracking-[0.2em]">{item.p}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
              <Link to="/contact" className="inline-block pt-6 text-xs font-black uppercase tracking-widest text-white hover:text-blue-500 transition-colors">
                Start Inquiry <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;