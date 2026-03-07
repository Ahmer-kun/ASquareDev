// pages/Portfolio.tsx
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
      category: 'FullStack / Blockchain / Web3',
      description: 'A decentralized medical record system built for transparency and security, allowing users to control their healthcare data.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      tech: ['Solidity', 'React', 'Ethers.js', 'Node.js'],
      link: 'https://medicheck-eight.vercel.app/'
    },
    {
      title: 'Quick QR Generator',
      category: 'Frontend',
      description: 'A free, modern, and easy-to-use QR code generator built with React and Tailwind CSS. Turn any URL or text into scannable QR codes and download as high-quality PNG images. Fully client-side with privacy-first approach.',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'QRCode Library', 'SVG'],
      link: 'https://qr-code-generator-custodes.vercel.app/'
},
    {
      title: 'Midway Hospital Website',
      category: 'Frontend',
      description: 'A simple, responsive, and modern hospital website designed to display hospital details, departments, doctors, services, and contact information. Features a clean, user-friendly interface with appointment forms and Google Maps integration.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      link: 'https://midway-green.vercel.app/'
},

    
    {
      title: 'Pulse Chat Engine',
      category: 'Full Stack',
      description: 'Real-time communication tool using Socket.io for instant data synchronization and secure messaging.',
      "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
      tech: ['Node.js', 'Socket.io', 'React'],
      link: 'https://github.com/Ahmer-kun'
    },

    {
      title: 'Snatchd',
      category: 'Chrome Extension / Developer Tool',
      description: 'A Chrome Extension that reverse-engineers any webpage into clean, developer-friendly code. Extracts rendered DOM, computes used-only CSS, collects assets, detects layout structure, and exports a downloadable ZIP with index.html, styles.css, and design tokens.',
      image: 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?auto=format&fit=crop&q=80&w=800',
      tech: ['Chrome MV3', 'JavaScript', 'DOM API', 'CSS Extraction', 'JSZip'],
      link: 'https://github.com/Ahmer-kun'
    },
  ];

  const blogs: Blog[] = [
    {
      id: 'journey-mern-web3',
      title: 'Mastering the Convergence: My Journey into MERN & Web3',
      date: 'September 2025',
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
      date: 'October 2025',
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
      date: 'December 2025',
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
    },
    {
  id: 'building-ai-chatbot-nodejs',
  title: 'From Zero to AI: Building a Chatbot with Node.js & the OpenAI API',
  date: 'March 2026',
  excerpt: 'A practical, no-fluff guide to integrating a real LLM into your Node.js backend — from API setup to streaming responses in a React frontend.',
  category: 'Tutorial / How-To',
  image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=1200',
  content: [
    {
      heading: "Why Node.js is Perfect for AI Integration",
      text: "Most LLM tutorials throw you into Python territory. But if you're already living in the JavaScript ecosystem, there's no reason to switch. Node.js with the official OpenAI SDK gives you everything you need — non-blocking I/O for streaming tokens, Express for routing, and a clean async/await pattern that keeps your code readable. The setup is minimal, the feedback loop is fast, and you can wire it directly to your existing React frontend without context-switching languages."
    },
    {
      heading: "Setting Up the Backend",
      text: "Start by initializing a Node.js project and installing two packages: express and openai. Create a POST route at /api/chat that accepts a messages array from the client — this is the conversation history. Inside the handler, instantiate the OpenAI client using your API key stored in a .env file (never hardcode it). Call openai.chat.completions.create() with your chosen model, the messages array, and a system prompt that defines your chatbot's personality. For an intermediate setup, gpt-4o-mini hits the sweet spot between capability and cost. Return the assistant's reply as JSON and you have a functioning AI endpoint in under 30 lines."
    },
    {
      heading: "Streaming: The Feature That Changes Everything",
      text: "A chatbot that waits 5 seconds before dumping a wall of text feels broken. Streaming fixes this. Set stream: true in your OpenAI call, then pipe the response chunks directly to the client using res.write(). On the React side, use the Fetch API with a ReadableStream reader to process each chunk as it arrives and append it to your state in real-time. The result is that typewriter effect users expect from modern AI tools. It's a small architectural change that makes your app feel production-grade. One gotcha: make sure to set the Content-Type header to text/event-stream and handle the stream's done signal to close the connection cleanly."
    },
    {
      heading: "Managing Conversation History",
      text: "LLMs are stateless — they have no memory between calls. Every request must include the full conversation history for the model to maintain context. In React, keep a messages state array and push each new user message and assistant reply into it before every API call. This is the messages array you send to the backend. Be mindful of token limits: very long conversations will eventually exceed the model's context window. A practical solution is to slice the last N messages (say, the most recent 20) before sending, or summarize older turns using a separate API call. This keeps costs predictable and latency low as conversations grow."
    },
    {
      heading: "Deploying & What Comes Next",
      text: "Once your chatbot works locally, deploying is straightforward. Host your Node.js backend on Railway or Render with your OPENAI_API_KEY set as an environment variable, and your React frontend on Vercel. For a more serious project, consider adding rate limiting with express-rate-limit to protect your API key from abuse, and a simple auth layer so only your users can trigger completions. From here, the rabbit hole goes deep — function calling lets your LLM trigger real actions in your app, RAG (Retrieval-Augmented Generation) lets it answer questions about your own data, and fine-tuning lets you shape its personality. But this foundation is all you need to start shipping AI-powered features today."
    }
  ]
},
    {
  id: 'chrome-extensions-mv3-architecture',
  title: 'Under the Hood: How Chrome Extensions Actually Work in MV3',
  date: 'February 2026',
  excerpt: 'A technical breakdown of Manifest V3 architecture — service workers, content scripts, and the messaging system that ties it all together.',
  category: 'Technical Deep-Dive',
  image: 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?auto=format&fit=crop&q=80&w=1200',
  content: [
    {
      heading: "MV3: Why Google Rewrote the Rules",
      text: "Manifest V3 wasn't just a version bump — it was a fundamental rethinking of how extensions interact with the browser. The old Manifest V2 model allowed persistent background pages: long-lived JavaScript environments that could hold state, run timers, and intercept network requests with near-unlimited power. Google pulled the plug on this model citing security and performance concerns. MV3 replaced persistent background pages with service workers, swapped blocking webRequest for declarativeNetRequest, and tightened Content Security Policy across the board. For developers, this meant relearning assumptions that had held true for a decade. Understanding why these changes happened is the key to writing extensions that don't fight the platform."
    },
    {
      heading: "The Three Worlds of an Extension",
      text: "Every Chrome Extension operates across three distinct execution contexts that cannot directly access each other's memory. First is the Service Worker — the brain of your extension. It runs in the background, listens for browser events like tab updates or icon clicks, and coordinates everything. It has no access to the DOM whatsoever. Second are Content Scripts — JavaScript files injected into web pages that can read and manipulate the DOM of any site you have permission for. They run in an isolated world, meaning they share the page's DOM but not its JavaScript variables. Third is the Extension Page context — your popup, options page, or side panel. This is where your UI lives. These three worlds communicate exclusively through Chrome's message passing API, and understanding this boundary is the single most important concept in extension development."
    },
    {
      heading: "Service Workers: Ephemeral by Design",
      text: "The biggest adjustment coming from MV2 is accepting that service workers are intentionally short-lived. Chrome will terminate your service worker after roughly 30 seconds of inactivity and spin it back up only when an event fires. This means you cannot store state in global variables — the next time your service worker wakes up, that data is gone. The correct solution is chrome.storage.local or chrome.storage.session for persisting state between activations. This ephemeral design is actually what makes MV3 more performant — extensions no longer silently consume memory and CPU in the background 24/7. Design your service worker as a pure event handler: wake up, process the event, persist anything important, go back to sleep."
    },
    {
      heading: "The Messaging System",
      text: "Since your three execution contexts can't share memory, Chrome provides a structured messaging API to wire them together. For one-off messages, chrome.runtime.sendMessage() from a content script or popup triggers a chrome.runtime.onMessage listener in the service worker. For long-lived connections — say, streaming data from a content script — chrome.runtime.connect() opens a persistent port between two contexts. The pattern that trips up most developers is trying to send a message before the receiver is ready. Always set up your onMessage listeners before sending, and handle the case where sendMessage returns undefined because no listener responded. When building something like Snatchd, the content script does the heavy DOM work and sends the extracted data as a message payload to the service worker, which then packages and triggers the download. Clean separation of concerns, enforced by architecture."
    },
    {
      heading: "Permissions, manifest.json & Shipping",
      text: "Your manifest.json is the contract between your extension and the browser. Every API you want to use — tabs, storage, scripting, activeTab — must be declared upfront in the permissions array. MV3 introduced host_permissions as a separate key, which means users see a clearer breakdown of what sites your extension can touch versus what browser APIs it can call. Request the minimum permissions necessary — the Chrome Web Store review team flags over-permissioned extensions, and users are increasingly permission-aware. For content script injection, prefer the scripting.executeScript() API over static content_scripts declarations when you only need to inject on demand. When you're ready to ship, run chrome://extensions in developer mode, load your unpacked folder, and test every message passing path manually. The gap between 'works locally' and 'passes Chrome Web Store review' is almost always a permissions issue or a CSP violation hiding in your code."
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

export default Portfolio;
