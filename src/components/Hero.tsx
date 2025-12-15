'use client';
import React from 'react'; // Tambahkan import React jika belum ada

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center z-10 max-w-4xl" data-aos="fade-up">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white"> 
          Hi, I'm Affan Djafar
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Computer Science graduate from Binus University — passionate in web development, UI/UX, and building modern digital experiences.
        </p>
        <a
          href="#about"
          className="inline-flex items-center px-8 py-4 bg-indigo-600 dark:bg-indigo-700 text-white font-semibold rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300"
        >
          Explore My Work ↓
        </a>
      </div>
    </section>
  );
}