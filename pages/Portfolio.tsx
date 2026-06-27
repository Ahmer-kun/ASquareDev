import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { setSEO } from '../utils/seo';

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
  tags: string[];
  image: string;
  content: {
    heading?: string;
    text: string;
  }[];
}

const Portfolio: React.FC = () => {
  const { blogId } = useParams<{ blogId?: string }>();
  const navigate = useNavigate();
  const [view, setView] = useState<'Projects' | 'Blogs'>('Projects');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

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
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
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
      id: 'tutorial-hell-to-production',
      title: 'From Tutorial Hell to 10 Production Apps: My Self-Taught Path',
      date: 'April 2026',
      excerpt: 'How I stopped watching and started building. The real story of going from zero to 10 deployed applications as a self-taught developer.',
      category: 'Personal Journey',
      tags: ['career', 'learning', 'beginner'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
      content: [
        {
          heading: "The Beginning: Zero Knowledge, Infinite Confusion",
          text: "I started like everyone else. Opened a code editor for the first time, watched a 'JavaScript in One Hour' video, and thought I was making progress. The first month was pure chaos. I did not understand why my code broke. I did not understand why copying from Stack Overflow sometimes worked and sometimes didn't. I just knew I wanted to build things. The reality was harsh. Tutorials made everything look easy. The instructor typed, and magic happened. When I tried alone, nothing worked. I spent two weeks stuck on a simple to-do app. Two weeks. Looking back, that was my first real test. Most people quit there. I did not."
        },
        {
          heading: "The Tutorial Trap",
          text: "Tutorials are dangerous. Not because they are bad, but because they create the illusion of competence. You watch someone build an e-commerce site in four hours. You follow along. You type the same code. At the end, you have a working project. You feel good. You feel smart. Then you close the video and try to build something on your own. Blank screen. No idea where to start. That is the tutorial trap. I fell into it hard. I completed 15+ online courses. I watched 200+ hours of YouTube. I had certificates from FreeCodeCamp, Coursera, and Udemy. But when someone asked me to build a simple CRUD app from scratch, I froze. The knowledge was there somewhere, but I could not access it. I knew syntax but not structure. I knew functions but not flow. I knew React but not why React worked the way it did."
        },
        {
          heading: "The Breaking Point",
          text: "The breaking point came in month four. I had applied to 30 internships. Zero responses. My portfolio was full of tutorial clones. A Twitter clone. A Netflix clone. A WhatsApp clone. All from tutorials. All identical to thousands of other portfolios. A senior developer messaged me on LinkedIn. He said something I never forgot: 'Your GitHub is a graveyard of other people's code. Build something that fails on your own. Then fix it. Then show me that.' That message hurt. But it was true. I deleted everything. Every tutorial project. Every copied repository. Every certificate that meant nothing. I decided to start from zero and build only original projects. No tutorials. No hand-holding. Just me, documentation, and a lot of debugging."
        },
        {
          heading: "Project One: The Ugly Weather App",
          text: "My first real project was ugly. Really ugly. A weather app that took five days to build. The CSS was broken. The API calls failed half the time. The error handling was non-existent. But I built it alone. No tutorial. No starter code. Just the documentation and my brain. I remember the moment the temperature finally appeared on screen. I almost cried. It was 2 AM. The design was terrible. But that data came from an actual API, through my code, to that screen. No YouTuber typed those lines. I did. That feeling is what started everything. I deployed it on Vercel. The URL was embarrassing. I shared it anyway. Three people visited. Two were my friends. One was my mother. I did not care. It was mine."
        },
        {
          heading: "The Numbers: 10 Projects in 12 Months",
          text: "After that first project, I set a rule. One project per month minimum. No exceptions. Some months I built two. Some months I struggled to finish one. But I never broke the streak. Here is what 12 months produced: Two full-stack MERN applications. One Chrome extension. Three frontend-only projects. One blockchain prototype. One real-time chat engine. One hospital website for a local clinic. One portfolio (the one you are on right now). The quality improved with each project. Project one was ugly. Project five looked professional. Project ten actually got used by real people. The hospital website I built for a local clinic now serves 200+ patients per month. A real client. Real money. Real impact. That does not happen from tutorials."
        },
        {
          heading: "What Actually Worked",
          text: "Three strategies saved me. First, building in public. I shared every project on LinkedIn and Twitter. Not for attention. For accountability. When people expect something, you deliver. Second, fixing my own bugs. I stopped copy-pasting errors into Google. I read the error message. I traced the stack trace. I used debugger statements. The first few times took hours. But after ten bugs, I got faster. After fifty bugs, I became dangerous. Third, contributing to open source. Small fixes at first. A typo in documentation. A missing semicolon. Then bigger fixes. A broken test. A performance improvement. Each pull request taught me how real codebases work. How real teams communicate. How real software is built."
        },
        {
          heading: "What I Learned About Learning",
          text: "Learning to code is not about intelligence. It is about tolerance for frustration. The people who succeed are not the smartest. They are the ones who can sit with a bug for six hours without quitting. They are the ones who break something, fix it, break it again, and laugh. I learned that mistakes are not failures. They are data. Every red screen teaches you something. Every 'undefined is not a function' error is a lesson in JavaScript fundamentals. Every CORS error is a lesson in how the web actually works. I stopped fearing errors. I started celebrating them. An error means you are trying something new. No errors means you are staying safe. Staying safe means you are not growing."
        },
        {
          heading: "Advice for Other Freshers",
          text: "Stop watching. Start building. Delete your tutorial projects. They are not helping you. Build something ugly. Build something broken. Build something that embarrasses you. Then fix it. Then show it to someone. Get feedback. Feel the shame. Improve. Repeat. Do not compare your month three to someone's year five. Compare yourself to yesterday. Did you write one line of code? That is progress. Did you fix one bug? That is progress. Did you deploy something? That is winning. The market does not care about your certificates or your course completion rates. The market cares about what you can build. Show them. Not with words. With deployed, working, accessible applications. That is your real resume."
        },
        {
          heading: "Where I Am Now",
          text: "Today, I have 10 production applications. Some are good. Some are okay. None are perfect. I still get stuck. I still debug for hours. I still question if I belong in this industry. But I also get messages from people who use my software. I get interview calls. I get freelance clients. I get paid for writing code. That was impossible to imagine 12 months ago. The journey from tutorial hell to production apps is not a straight line. It is a series of failures, recoveries, and small wins. If you are stuck in tutorial hell right now, close the video. Open a blank project. Type something. Break something. Fix something. Deploy something. That is the only path."
        }
      ]
    },
    {
      id: 'journey-mern-web3',
      title: 'Mastering the Convergence: My Journey into MERN & Web3',
      date: 'September 2025',
      excerpt: 'How I bridged the gap between traditional full-stack development and the decentralized web through intensive project building.',
      category: 'Personal Journey',
      tags: ['web3', 'fullstack', 'learning'],
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
      tags: ['technical', 'css', 'frontend'],
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
      tags: ['career', 'mindset'],
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
      id: 'chrome-extensions-mv3-architecture',
      title: 'Under the Hood: How Chrome Extensions Actually Work in MV3',
      date: 'February 2026',
      excerpt: 'A technical breakdown of Manifest V3 architecture — service workers, content scripts, and the messaging system that ties it all together.',
      category: 'Technical Deep-Dive',
      tags: ['technical', 'chrome', 'extension'],
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
    },
    {
      id: 'building-ai-chatbot-nodejs',
      title: 'From Zero to AI: Building a Chatbot with Node.js & the OpenAI API',
      date: 'March 2026',
      excerpt: 'A practical, no-fluff guide to integrating a real LLM into your Node.js backend — from API setup to streaming responses in a React frontend.',
      category: 'Tutorial / How-To',
      tags: ['technical', 'ai', 'tutorial'],
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
    }
  ];

  const activeBlog = blogId ? blogs.find((b) => b.id === blogId) ?? null : null;

  useEffect(() => {
    if (activeBlog) {
      setSEO({
        title: `${activeBlog.title} | A² Dev Blog`,
        description: activeBlog.excerpt,
        path: `/portfolio/${activeBlog.id}`,
        image: activeBlog.image,
      });
      window.scrollTo(0, 0);
    }
    // The /portfolio (no post) case is handled by the route-level SEOHandler
    // in App.tsx, so we don't need an else branch here.
  }, [activeBlog]);

  // Helper function to get section-specific images based on blog id and section index
  const getSectionImage = (blogId: string, sectionIndex: number): string => {
    const imageMap: Record<string, Record<number, string>> = {
      'tutorial-hell-to-production': {
        0: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1200',
        1: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=1200',
        2: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=1200',
        3: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
        4: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        5: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
        6: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
        7: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
        8: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
      },
      'journey-mern-web3': {
        0: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
        1: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200',
        2: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
        3: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200',
      },
      'tailwind-game-changer': {
        0: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200',
        1: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
        2: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200',
      },
      'building-projects-fresher': {
        0: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
        1: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
        2: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200',
      },
      'chrome-extensions-mv3-architecture': {
        0: 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?auto=format&fit=crop&q=80&w=1200',
        1: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200',
        2: 'https://images.unsplash.com/photo-1633356122104-3b6017f58a0a?auto=format&fit=crop&q=80&w=1200',
        3: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
        4: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1200',
      },
      'building-ai-chatbot-nodejs': {
        0: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=1200',
        1: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
        2: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=1200',
        3: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200',
        4: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200',
      },
    };
    
    const blogImages = imageMap[blogId];
    if (blogImages && blogImages[sectionIndex]) {
      return blogImages[sectionIndex];
    }
    
    const fallbackMap: Record<string, string> = {
      'tutorial-hell-to-production': 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1200',
      'journey-mern-web3': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
      'tailwind-game-changer': 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200',
      'building-projects-fresher': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
      'chrome-extensions-mv3-architecture': 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?auto=format&fit=crop&q=80&w=1200',
      'building-ai-chatbot-nodejs': 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=1200',
    };
    
    return fallbackMap[blogId] || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200';
  };

  // Get all unique tags from blogs
  const allTags = Array.from(new Set(blogs.flatMap(blog => blog.tags)));

  // Filter blogs by selected tag
  const filteredBlogs = selectedTag 
    ? blogs.filter(blog => blog.tags.includes(selectedTag))
    : blogs;

  if (activeBlog) {
    return (
      <article className="min-h-screen bg-[#050505] pt-32 pb-32 animate-fadeIn">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <button 
            onClick={() => navigate('/portfolio')}
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
            <aside className="lg:col-span-3 space-y-12">
               <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-600">Author</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center font-black text-xs">A²</div>
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
                  
                  {/* Add image between sections, not after the last one */}
                  {i < activeBlog.content.length - 1 && (
                    <div className="pt-8">
                      <div className="aspect-[16/9] overflow-hidden rounded-lg border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                        <img 
                          src={getSectionImage(activeBlog.id, i)} 
                          alt={`Illustration for ${section.heading || 'section'}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </section>
              ))}
              
              <footer className="pt-20 border-t border-white/5">
                <div className="p-16 border border-white/5 bg-white/[0.01] flex flex-col md:flex-row justify-between items-center gap-12">
                  <div className="text-center md:text-left space-y-4">
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white">Let's build together.</h3>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Liked this article? Let's discuss your next project.</p>
                  </div>
                  <button 
                    onClick={() => { navigate('/portfolio'); window.scrollTo(0, 0); }}
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
              onClick={() => {
                setView('Projects');
                setSelectedTag(null);
              }}
              aria-pressed={view === 'Projects'}
              className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] border transition-all ${view === 'Projects' ? 'bg-white text-black border-white' : 'border-white/10 text-slate-500 hover:text-white'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => {
                setView('Blogs');
                setSelectedTag(null);
              }}
              aria-pressed={view === 'Blogs'}
              className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] border transition-all ${view === 'Blogs' ? 'bg-white text-black border-white' : 'border-white/10 text-slate-500 hover:text-white'}`}
            >
              Blogs
            </button>
          </nav>
        </div>
      </header>

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
          <div className="space-y-12">
            {/* Tag Filter Bar */}
            <div className="flex flex-wrap gap-3 pb-8 border-b border-white/10">
              <button
                onClick={() => setSelectedTag(null)}
                className={`text-[10px] font-black uppercase tracking-wider px-4 py-2 transition-all ${
                  selectedTag === null 
                    ? 'bg-blue-500 text-white' 
                    : 'border border-white/10 text-slate-400 hover:border-white/30'
                }`}
              >
                All
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`text-[10px] font-black uppercase tracking-wider px-4 py-2 transition-all ${
                    selectedTag === tag 
                      ? 'bg-blue-500 text-white' 
                      : 'border border-white/10 text-slate-400 hover:border-white/30'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Blog List */}
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-500 text-sm uppercase tracking-widest">No blogs found with this tag</p>
                <button 
                  onClick={() => setSelectedTag(null)}
                  className="mt-4 text-blue-500 text-[10px] font-black uppercase tracking-wider hover:underline"
                >
                  Clear filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-12">
                {filteredBlogs.map((blog) => (
                  <article 
                    key={blog.id} 
                    onClick={() => navigate(`/portfolio/${blog.id}`)}
                    className="group border border-white/5 hover:bg-white/[0.02] transition-all flex flex-col lg:flex-row items-stretch cursor-pointer overflow-hidden"
                  >
                    <div className="lg:w-1/3 aspect-video lg:aspect-auto overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    </div>
                    <div className="flex-1 p-12 lg:p-16 flex flex-col justify-center space-y-6">
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2 items-center">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">{blog.category} • {blog.date}</span>
                          {blog.tags.map(tag => (
                            <span key={tag} className="text-[8px] font-black uppercase tracking-wider text-slate-500 border border-white/10 px-2 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>
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
          </div>
        )}
      </section>

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