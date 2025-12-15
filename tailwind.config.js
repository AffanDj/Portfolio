// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // HARUS ADA
  darkMode: 'class', 
  
  content: [
    // Pastikan path ini benar untuk App Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Anda bisa menambahkan custom styling di sini
    },
  },
  plugins: [],
}