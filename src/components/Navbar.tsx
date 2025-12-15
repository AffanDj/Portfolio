'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react'; // Ganti User dengan Sun dan Moon

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Inisialisasi tema dari localStorage, default ke 'light' (sesuai desain baru)
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); 

  useEffect(() => {
    // Ambil tema dari localStorage saat komponen dimuat
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      // Jika tidak ada di storage, atur tema default (light) pada HTML
      document.documentElement.classList.remove('dark');
    }
  }, []); // Hanya dijalankan sekali saat mount

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    
    // **PENTING:** Anda juga perlu merevisi global.css (di bawah) agar dark mode Anda berfungsi kembali
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 dark:bg-gray-900/90 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Nama */}
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition">
            AFFAN DJAFAR
          </Link>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition duration-150"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Theme Toggle / Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Drawer/Flyout) - Tambahkan dark mode styling di sini */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white dark:bg-gray-900 ${
          isMenuOpen ? 'max-h-96 opacity-100 py-2 border-t border-gray-100 dark:border-gray-700' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-2 px-4 pb-2">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left py-2 px-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition duration-150"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}