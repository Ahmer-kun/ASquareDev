// App.tsx
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const TitleHandler: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const baseTitle = "A² Dev | Ahmer Amir";
    const routeTitles: Record<string, string> = {
      "/": `${baseTitle} - Full Stack Developer`,
      "/services": `${baseTitle} - Skills & Expertise`,
      "/portfolio": `${baseTitle} - Projects & Portfolio`,
      "/contact": `${baseTitle} - Contact & Hiring`,
      "/resume": `${baseTitle} - Resume / CV`,
    };
    document.title = routeTitles[location.pathname] || baseTitle;
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <TitleHandler />
      <div className="flex flex-col min-h-screen relative overflow-x-hidden">
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full z-[-1]"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full z-[-1]"></div>
        
        <Navbar />
        
        <main id="main-content" className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
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