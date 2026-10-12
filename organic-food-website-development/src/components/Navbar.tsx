import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className={`h-8 w-8 ${scrolled ? 'text-green-600' : 'text-green-400'}`} />
            <span className={`text-xl font-bold font-serif ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Samruddhi Gruh Udyog
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition-all flex items-center gap-2"
            >
              <Phone size={18} />
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-900' : 'text-white'} hover:text-green-500`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full py-4 border-t">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-6 py-3 text-gray-800 hover:bg-green-50 hover:text-green-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="px-6 py-4">
            <a
              href="#contact"
              className="w-full bg-green-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-700 transition-all flex justify-center items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} />
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
