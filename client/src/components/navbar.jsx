import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            ANIL DJ & EVENTS
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-yellow-400">Home</a>
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`md:hidden px-4 pb-4 space-y-2 bg-black text-sm font-medium transform transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 max-h-screen' : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'
        }`}
      >
        <a href="#home" onClick={handleLinkClick} className="block hover:text-yellow-400">Home</a>
        <a href="#services" onClick={handleLinkClick} className="block hover:text-yellow-400">Services</a>
        <a href="#gallery" onClick={handleLinkClick} className="block hover:text-yellow-400">Gallery</a>
        <a href="#contact" onClick={handleLinkClick} className="block hover:text-yellow-400">Contact</a>
      </div>
    </nav>
  );
}