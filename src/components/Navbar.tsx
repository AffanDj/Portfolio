'use client';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  // Cek tema saat pertama kali load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-b-4 border-slate-900 dark:border-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href='' className="font-pixel text-5xl font-bold tracking-tighter">AD.</a>

        <div className="flex items-center gap-4 md:gap-8 font-bold text-[10px] md:text-sm uppercase text-slate-900 dark:text-slate-100">
          <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Work</a>
          <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
          {/* Tombol toggle tetap sama */}
          <button
            onClick={toggleTheme}
            className="pixel-card p-2 bg-yellow-400 dark:bg-indigo-600 active:translate-y-1 transition-all cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <Sun size={18} className="text-slate-900" />
            ) : (
              <Moon size={18} className="text-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}