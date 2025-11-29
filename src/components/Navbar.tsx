'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Lucide icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* <div className="font-bold text-xl text-blue-400">A</div> */}
          <img src="/Affan_Logo.png" alt="Logo_Affan" width={80} height={20}/>
          <div className="hidden md:flex space-x-8">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden glass mt-2 rounded-lg p-4" data-aos="fade-in">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="block py-2 text-gray-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}