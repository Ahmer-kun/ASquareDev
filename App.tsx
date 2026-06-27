// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { setSEO } from './utils/seo';

const baseTitle = "A² Dev | Ahmer Amir";

// Per-route SEO data. Individual blog posts (/portfolio/:blogId) set their
// own title/description/canonical inside Portfolio.tsx, since their content
// is dynamic — this handler skips those paths so it doesn't fight with them.
const routeMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: `${baseTitle} - Full Stack Developer`,
    description: "Portfolio of Ahmer Amir (A² Dev), a Full Stack MERN and Web3 developer specializing in React, Node.js, and blockchain-powered applications.",
  },
  "/services": {
    title: `${baseTitle} - Skills & Expertise`,
    description: "Explore the technical skills and development services offered by Ahmer Amir, including React, Node.js, MongoDB, and Web3 development.",
  },
  "/portfolio": {
    title: `${baseTitle} - Projects & Portfolio`,
    description: "Browse full-stack, frontend, and blockchain projects built by Ahmer Amir, plus technical articles on modern web development.",
  },
  "/contact": {
    title: `${baseTitle} - Contact & Hiring`,
    description: "Get in touch with Ahmer Amir to discuss your next web or blockchain development project.",
  },
  "/resume": {
    title: `${baseTitle} - Resume / CV`,
    description: "View the resume and CV of Ahmer Amir, a Full Stack MERN and Web3 developer.",
  },
};

const SEOHandler: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Individual blog post pages manage their own SEO tags in Portfolio.tsx.
    if (location.pathname.startsWith('/portfolio/')) return;

    const meta = routeMeta[location.pathname] || routeMeta['/'];
    setSEO({ ...meta, path: location.pathname });
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <SEOHandler />
      <div className="flex flex-col min-h-screen relative overflow-x-hidden">
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full z-[-1]"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full z-[-1]"></div>
        
        <Navbar />
        
        <main id="main-content" className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:blogId" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
};

export default App;