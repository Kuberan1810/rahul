import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import portraitImg from '../assets/portrait.jpg';

export const Header: React.FC = () => {
  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-4 z-50 flex justify-center items-center px-4 w-full transition-all duration-300">
      <nav className="glass-nav flex items-center gap-2 p-1.5 md:p-2 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl">
        {/* Profile Avatar link */}
        <Link 
          to="/" 
          className="relative flex items-center justify-center group overflow-hidden rounded-full w-10 h-10 md:w-11 md:h-11 border border-black/10 transition-transform duration-300 hover:scale-105 active:scale-95"
          title="Home"
        >
          <img 
            src={portraitImg} 
            alt="Rahul" 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1 sm:gap-2 px-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm md:text-base font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-black text-white shadow-md scale-105'
                    : 'text-gray-800 hover:text-black hover:bg-black/5'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
