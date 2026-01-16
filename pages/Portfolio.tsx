<<<<<<< HEAD
// pages/Portfolio.tsx
=======

>>>>>>> 2b0783926fc911fdbde151820668dd6cb99ea0fd
import React, { useState, useEffect } from 'react';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}

interface Blog {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
  content: {
    heading?: string;
    text: string;
  }[];
}

const Portfolio: React.FC = () => {
  const [view, setView] = useState<'Projects' | 'Blogs'>('Projects');
  const [activeBlog, setActiveBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (activeBlog) {
      document.title = `${activeBlog.title} | A² Dev Blog`;
      window.scrollTo(0, 0);
    } else {
      document.title = "Projects & Portfolio | A² Dev";
    }
  }, [activeBlog]);

  const projects: Project[] = [
    {
      title: 'MediCheck',
      category: 'Blockchain / Web3',
      description: 'A decentralized medical record system built for transparency and security, allowing users to control their healthcare data.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      tech: ['Solidity', 'React', 'Ethers.js', 'Node.js'],
      link: 'https://medicheck-eight.vercel.app/'
    },
    {
      title: 'A² E-Store',
      category: 'Full Stack',
      description: 'A full-featured e-commerce platform built with MERN stack, featuring secure checkout and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
      tech: ['MongoDB', 'Express', 'React', 'Node'],
      link: 'https://github.com/Ahmer-kun'
    },
    {
      title: 'DevFlow Tasker',
      category: 'Frontend',
      description: 'A productivity application focused on developer workflows with local persistence and intuitive UI.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Tailwind', 'Context API'],
      link: 'https://github.com/Ahmer-kun'
    },
    {
      title: 'Pulse Chat Engine',
      category: 'Full Stack',
      description: 'Real-time communication tool using Socket.io for instant data synchronization and secure messaging.',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
      tech: ['Node.js', 'Socket.io', 'React'],
      link: 'https://github.com/Ahmer-kun'
    }
  ];

  const blogs: Blog[] = [
    {
      id: 'journey-mern-web3',
      title: 'Mastering the Convergence: My Journey into MERN & Web3',
      date: 'June 2024',
      excerpt: 'How I bridged the gap between traditional full-stack development and the decentralized web through intensive project building.',
      category: 'Personal Journey',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200',
      content: [
        {
          heading: "The Foundation of Full Stack",
          text: "The transition from standard web development to the world of decentralized applications (dApps) was one of the most challenging and rewarding phases of my career. It started with a curiosity about how data can be truly owned by the user, rather than stored on a centralized server. Learning the MERN stack provided the foundation. Understanding how Node.js communicates with MongoDB and how React can handle complex state was essential."
        },
        {
          heading: "The Web3 Paradigm Shift",
          text: "Adding Web3 into the mix required a massive shift in mindset. Suddenly, I wasn't just making API calls; I was interacting with immutable smart contracts on the blockchain. Every action had a cost (gas), and every state change was permanent. This realization forced me to write cleaner, more optimized code. You can't just 'hotfix' a deployed smart contract—perfection is required from day one."
        },
        {
          heading: "Real-World Application: MediCheck",
          text: "Building MediCheck was the culmination of this learning. I realized that blockchain isn't just a trend—it's a tool for transparency. Integrating Ethers.js with a React frontend to allow users to securely access their medical history without a middleman was the goal. My advice to anyone starting out: build projects that solve real trust issues. The combination of MongoDB for off-chain metadata and Ethereum for on-chain proof is a powerful architectural pattern."
        },
        {
          heading: "The Future of My Development",
          text: "Moving forward, I'm focusing on Layer 2 scaling solutions and high-performance React patterns. The goal is to make the Web3 experience as seamless as Web2. As a fresher, I'm hungry to keep pushing these boundaries and building tools that make the internet a more decentralised, secure place."
        }
      ]
    },
    {
      id: 'tailwind-game-changer',
      title: 'The Utility-First Revolution: Why Tailwind CSS is a Game Changer',
      date: 'May 2024',
      excerpt: 'An in-depth look at how utility-first CSS transformed my workflow from slow design-iterations to rapid, high-fidelity UI engineering.',
      category: 'Technical Analysis',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200',
      content: [
        {
          heading: "Solving the Naming Nightmare",
          text: "Style management in large-scale React applications has always been a point of friction. Traditional CSS or even SASS often leads to bloated files and naming collisions. That's where Tailwind CSS changed everything for me. With a utility-first approach, I stopped worrying about naming my classes 'container-main-v2-final-fixed' and started focusing on building the UI. It feels like writing CSS at the speed of thought."
        },
        {
          heading: "Consistency by Constraint",
          text: "The constraints provided by the default Tailwind theme ensure that the spacing, typography, and colors remain consistent throughout the app. Instead of picking arbitrary hex codes or pixel values, I work within a proven system. This leads to a much more professional finish with significantly less effort. In my A² Dev portfolio, every single pixel is positioned using Tailwind's robust grid and flexbox utilities."
        },
        {
          heading: "Performance and Purging",
          text: "One of the biggest misconceptions about Tailwind is that it makes your CSS files huge. In reality, because of the JIT (Just-In-Time) compiler, the final CSS bundle only includes the utilities you actually use. This results in incredibly small and fast-loading websites, which is critical for both user experience and SEO rankings."
        }
      ]
    },
    {
      id: 'building-projects-fresher',
      title: 'The "Build or Die" Mentality: Projects vs Tutorials',
      date: 'April 2024',
      excerpt: 'Why watching tutorials can lead to the "illusion of competence" and how building real-world software is the only way to grow.',
      category: 'Career Insights',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
      content: [
        {
          heading: "Escaping Tutorial Hell",
          text: "As a fresher in the tech industry, the most common hurdle is the 'experience trap.' How do you get experience without a job, and how do you get a job without experience? The answer is simple: build. Build things that actually work. Watching tutorials is a great way to start, but you don't truly learn until you break something. Tutorial hell is a real place where you feel competent but can't build a project from a blank screen."
        },
        {
          heading: "The Power of Debugging",
          text: "When I built the Pulse Chat Engine, I spent hours debugging socket connections. Those hours—frustrating as they were—taught me more about networking, latency, and concurrency than any 10-minute video ever could. Real learning happens in the terminal, reading documentation, and understanding why a specific line of code failed."
        },
        {
          heading: "Curating a Meaningful Portfolio",
          text: "Don't just follow a tutorial to make a clone. Take an idea, even a small one, and try to implement it from scratch. Your GitHub profile should be a graveyard of experiments and a museum of your best work. That's what employers are actually looking for—proof of curiosity, the ability to solve problems, and a 'Build or Die' mentality that ensures you never stop learning."
        }
      ]
    }
  ];

  if (activeBlog) {
    return (
      <article className="min-h-screen bg-[#050505] pt-32 pb-32 animate-fadeIn">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <button 
            onClick={() => setActiveBlog(null)}
            className="group flex items-center gap-4 text-slate-500 hover:text-white transition-colors"
            aria-label="Back to Portfolio"
          >
            <i className="fas fa-arrow-left text-sm group-hover:-translate-x-1 transition-transform"></i>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Portfolio</span>
          </button>

          <header className="space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 block">
                {activeBlog.category} • {activeBlog.date}
              </span>
              <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9] max-w-4xl">
                {activeBlog.title}
              </h1>
            </div>
            
            <figure className="w-full aspect-[21/9] overflow-hidden border border-white/10 glass-effect">
               <img 
                 src={activeBlog.image} 
                 alt={`${activeBlog.title} Featured Image`} 
                 className="w-full h-full object-cover"
               />
            </figure>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar info for SEO/UX */}
            <aside className="lg:col-span-3 space-y-12">
               <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-600">Author</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center font-black text-xs">AA</div>
                    <div>
                      <p className="text-sm font-bold text-white uppercase">Ahmer Amir</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Full Stack Dev</p>
                    </div>
                  </div>
               </div>
               <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-600">Share</h4>
                  <div className="flex gap-4">
                    <button className="w-10 h-10 border border-white/5 flex items-center justify-center hover:bg-blue-600 transition-all"><i className="fab fa-twitter"></i></button>
                    <button className="w-10 h-10 border border-white/5 flex items-center justify-center hover:bg-blue-600 transition-all"><i className="fab fa-linkedin"></i></button>
                  </div>
               </div>
            </aside>

            {/* Content Body */}
            <div className="lg:col-span-9 space-y-16">
              {activeBlog.content.map((section, i) => (
                <section key={i} className="space-y-6">
                  {section.heading && (
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white border-l-4 border-blue-600 pl-6">
                      {section.heading}
                    </h2>
                  )}
                  <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
                    {section.text}
                  </p>
                </section>
              ))}
              
              <footer className="pt-20 border-t border-white/5">
                <div className="p-16 border border-white/5 bg-white/[0.01] flex flex-col md:flex-row justify-between items-center gap-12">
                  <div className="text-center md:text-left space-y-4">
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white">Let's build together.</h3>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Liked this article? Let's discuss your next project.</p>
                  </div>
                  <button 
                    onClick={() => {setActiveBlog(null); window.scrollTo(0, 0);}}
                    className="px-12 py-6 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all shadow-2xl shadow-blue-600/10"
                  >
                    Back to Portfolio
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] pb-32">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-blue-500 font-black uppercase text-[10px] tracking-[0.3em]">
              <span className="w-8 h-px bg-blue-500" aria-hidden="true"></span>
              <span>Selected Works</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase leading-none">
              {view === 'Projects' ? <>My <br /><span className="text-blue-600">Projects</span></> : <>My <br /><span className="text-blue-600">Insights</span></>}
            </h1>
          </div>
          
          <nav className="flex gap-4 mb-4" aria-label="Content view toggle">
            <button 
              onClick={() => setView('Projects')}
              aria-pressed={view === 'Projects'}
              className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] border transition-all ${view === 'Projects' ? 'bg-white text-black border-white' : 'border-white/10 text-slate-500 hover:text-white'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => setView('Blogs')}
              aria-pressed={view === 'Blogs'}
              className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] border transition-all ${view === 'Blogs' ? 'bg-white text-black border-white' : 'border-white/10 text-slate-500 hover:text-white'}`}
            >
              Blogs
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6" aria-label={view === 'Projects' ? "Portfolio Projects" : "Blog Posts"}>
        {view === 'Projects' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {projects.map((project, index) => (
              <article key={project.title} className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative overflow-hidden aspect-[16/10] bg-zinc-900 mb-8 border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={project.image} alt={`${project.title} Project Screenshot - A² Dev`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 opacity-40"></div>
                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-[8px] font-black uppercase tracking-widest bg-black/60 backdrop-blur-md text-white border border-white/10 px-3 py-1.5">{t}</span>
                      ))}
                    </div>
                  </div>
                </a>
                <div className="space-y-4">
                  <h2 className="text-2xl font-black uppercase tracking-widest text-white group-hover:text-blue-500 transition-colors">{project.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-lg">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-white border-b border-white/20 pb-1 hover:border-blue-500 transition-all">
                    View Project <i className="fas fa-arrow-right ml-2 text-blue-500" aria-hidden="true"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12">
            {blogs.map((blog) => (
              <article 
                key={blog.id} 
                onClick={() => setActiveBlog(blog)}
                className="group border border-white/5 hover:bg-white/[0.02] transition-all flex flex-col lg:flex-row items-stretch cursor-pointer overflow-hidden"
              >
                <div className="lg:w-1/3 aspect-video lg:aspect-auto overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="flex-1 p-12 lg:p-16 flex flex-col justify-center space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">{blog.category} • {blog.date}</span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-blue-500 transition-colors leading-[0.9]">{blog.title}</h2>
                  </div>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">{blog.excerpt}</p>
                  <div className="flex items-center gap-6 pt-4">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white border-b border-white/20 pb-1 group-hover:border-blue-500 transition-all">Read Full Article</span>
                     <i className="fas fa-long-arrow-alt-right text-xl text-blue-600 group-hover:translate-x-4 transition-all" aria-hidden="true"></i>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pt-48" aria-labelledby="github-cta-heading">
        <div className="border border-white/10 p-16 md:p-24 flex flex-col items-center text-center space-y-8">
          <h2 id="github-cta-heading" className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Check my latest <span className="text-blue-500 italic">commits</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
            I'm consistently pushing updates and learning new things on GitHub.
          </p>
          <a href="https://github.com/Ahmer-kun" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all">
            Visit My GitHub
          </a>
        </div>
      </section>
    </main>
  );
};

<<<<<<< HEAD
export default Portfolio;
=======
export default Portfolio;
>>>>>>> 2b0783926fc911fdbde151820668dd6cb99ea0fd
