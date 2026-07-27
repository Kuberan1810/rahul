import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900 flex flex-col font-sans relative selection:bg-[#E2F163] selection:text-black">
      {/* Sticky Glassy Header Nav Bar */}
      <Header />

      {/* Main Routed Page Content */}
      <main className="flex-1 w-full relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;