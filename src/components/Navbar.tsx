'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUp, Home, User, Layers, Mail } from 'lucide-react';

export default function FloatingWidgetNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show scroll-to-top button on mobile
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Layers size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Home size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> }
  ];

  return (
    <>
      {/* MAIN FLOATING MENU (same as before) */}
      <div
        className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3"
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
      >
        {/* Popup items */}
        <div className={`flex flex-col items-end gap-3 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}>
          {navItems.map(({ id, label, icon }, i) => (
            <a
              key={id}
              href={`#${id}`}
              style={{ transitionDelay: isOpen ? `${i * 80}ms` : "0ms" }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl shadow-lg
                bg-white/10 backdrop-blur-xl border border-white/20
                text-white hover:text-blue-300 hover:bg-white/20 transition-all
                scale-95 hover:scale-100 hover:shadow-blue-500/30 hover:shadow-[0_0_15px]"
              onClick={() => isMobile && setIsOpen(false)}
            >
              {icon}
              <span className="font-medium">{label}</span>
            </a>
          ))}
        </div>

        {/* Main button: Desktop = scroll to top; Mobile = toggle */}
        <button
          onClick={() => {
            if (isMobile) {
              setIsOpen(!isOpen);
            } else {
              scrollToTop();
            }
          }}
          className="relative p-4 rounded-full text-white
            bg-gradient-to-br from-blue-500 to-blue-700 shadow-xl transition-all 
            hover:scale-110 active:scale-95
            hover:shadow-blue-500/30 hover:shadow-[0_0_20px]
            backdrop-blur-md border border-white/20 cursor-pointer"
        >
          <span className={`absolute inset-0 rounded-full blur-xl transition-opacity
            ${isOpen ? "opacity-70 bg-blue-600/40" : "opacity-0"}`} />

          <span className="relative z-10">
            {!isMobile && (isOpen ? <ArrowUp size={24} /> : <Menu size={24} />)}
            {isMobile && (isOpen ? <X size={24} /> : <Menu size={24} />)}
          </span>
        </button>
      </div>
      {isMobile && (
        <button
          onClick={scrollToTop}
          className={`
      fixed right-6 z-[250] p-3 rounded-full bg-blue-600 text-white shadow-xl 
      backdrop-blur-md border border-white/20 active:scale-90
      transition-all duration-300
      ${showScrollTop
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-6 pointer-events-none"}
    `}
          style={{ bottom: "6.2rem" }}   // same position as before but adjustable
        >
          <ArrowUp size={20} />
        </button>
      )}

    </>
  );
}
