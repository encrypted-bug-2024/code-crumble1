import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#141414] fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/project-images/codecrumblelogo.png"
                alt="Code Crumble"
                className="h-10 w-auto"
              />
              <span className="text-white font-bold text-xl tracking-tight">
                Code Crumble
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/services" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">
                Services
              </Link>
              <a 
                href="https://work.codecrumble.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium"
              >
                Portfolio
              </a>
              <Link to="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <a 
                href="https://blog.codecrumble.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium"
              >
                Blog
              </a>
              <a 
                href="https://resources.codecrumble.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-[#141414] hover:bg-gray-100 px-4 py-2 rounded-full text-base font-medium ml-4 transition-colors duration-200"
              >
                Resources
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#141414]">
          <Link to="/services" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Services
          </Link>
          <a 
            href="https://work.codecrumble.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            Portfolio
          </a>
          <Link to="/about" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            About
          </Link>
          <a 
            href="https://blog.codecrumble.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            Blog
          </a>
          <a 
            href="https://products.codecrumble.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-[#141414] hover:bg-gray-100 block px-3 py-2 rounded-full text-base font-medium mt-4 transition-colors duration-200"
          >
            Resources
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
