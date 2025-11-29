'use client';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Hero() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 120,
          interactivity: { events: { onHover: { enable: true, mode: 'repulse' } } },
          particles: {
            color: { value: '#3b82f6' },
            links: { color: '#3b82f6', distance: 150, enable: true, opacity: 0.5, width: 1 },
            move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, speed: 2 },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      <div className="text-center z-10 max-w-4xl" data-aos="fade-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Hi, I'm Affan Djafar
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Computer Science graduate from Binus University — passionate in web development, UI/UX, and building modern digital experiences.
        </p>
        <a
          href="#about"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Explore My Work ↓
        </a>
      </div>
    </section>
  );
}