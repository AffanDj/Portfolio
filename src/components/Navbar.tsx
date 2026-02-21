'use client';
import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-b-4 border-slate-900 dark:border-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-bold text-2xl tracking-tighter dark:text-white">AD.</a>
          <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase text-slate-900 dark:text-slate-100">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {link.name}
              </a>
            ))}
            <button onClick={toggleTheme} className="pixel-border p-2 bg-yellow-400 dark:bg-indigo-600 active:translate-y-1 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {theme === 'light' ? <Sun size={18} /> : <Moon size={18} className="text-white" />}
            </button>
          </div>
          <div className="flex md:hidden items-center gap-3">
            <button onClick={toggleTheme} className="pixel-border p-2 bg-yellow-400 dark:bg-indigo-600 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {theme === 'light' ? <Sun size={18} /> : <Moon size={18} className="text-white" />}
            </button>
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="pixel-border p-2 bg-white dark:bg-slate-900 text-white dark:text-black"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        <div ref={menuRef} className={`absolute top-[76px] right-0 left-0 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-b-4 border-slate-900 dark:border-white transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'} md:hidden`}>
          <div className="flex flex-col items-center py-6 gap-6 font-bold uppercase text-slate-900 dark:text-white">
            {navLinks.map((link) => (
              <a

                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg active:text-indigo-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}