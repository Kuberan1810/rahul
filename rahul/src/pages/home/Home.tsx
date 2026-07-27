import React from 'react';
import { Download, MapPin, Mail } from 'lucide-react';
import portraitImg from '../../assets/portrait.jpg';

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-between px-4 py-8 overflow-hidden select-none">
      
      {/* Background Typography Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none z-0">
        <h1 className="text-[18vw] font-black tracking-tighter text-black leading-none whitespace-nowrap uppercase">
          AX VOS AX VOS
        </h1>
      </div>

      {/* Top Header Information & Greeting */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4 max-w-2xl mt-4">
        {/* Email Pill Badge */}
        <a 
          href="mailto:rahulrajanvasudevan@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E2F163] text-black font-semibold text-xs md:text-sm shadow-sm hover:scale-105 transition-transform duration-200"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>rahulrajanvasudevan@gmail.com</span>
        </a>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 flex items-center gap-3">
          <span>👋</span>
          <span>Hi, I'm Rahul!</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 font-medium tracking-wide">
          UI/UX developers & Frontend Engineers
        </p>
      </div>

      {/* Central Portrait Hero Image Card */}
      <div className="relative z-10 my-8 max-w-md w-full flex flex-col items-center">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 group transition-all duration-500 hover:shadow-3xl max-w-[340px] md:max-w-[380px] aspect-[4/5]">
          <img 
            src={portraitImg} 
            alt="Rahul - UI/UX Developer" 
            className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white p-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E2F163]">Portfolio Highlight</span>
            <h3 className="text-lg font-bold">Crafting Digital Experiences</h3>
          </div>
        </div>
      </div>

      {/* Bottom Actions Bar (Download CV & Location) */}
      <div className="relative z-10 w-full max-w-2xl flex flex-wrap items-center justify-between gap-4 px-4 py-3 bg-white/70 backdrop-blur-md rounded-2xl border border-white/80 shadow-lg">
        {/* Download CV Button */}
        <button 
          onClick={() => alert('Downloading Rahul\'s CV...')}
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-black text-white font-semibold text-sm hover:bg-gray-800 transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
        >
          <div className="p-1 rounded-md bg-[#E2F163] text-black">
            <Download className="w-4 h-4" />
          </div>
          <span>Download CV</span>
        </button>

        {/* Location Badge */}
        <div className="flex items-center gap-2 text-gray-700 font-medium text-xs md:text-sm">
          <MapPin className="w-4 h-4 text-red-500 animate-bounce" />
          <span>Chennai, TN, IND</span>
        </div>
      </div>

    </div>
  );
};

export default Home;
