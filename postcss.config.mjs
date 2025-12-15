// postcss.config.mjs

const config = {
  plugins: {
    // 1. Ganti "@tailwindcss/postcss" dengan "tailwindcss" (standar)
    'tailwindcss': {},
    // 2. Tambahkan autoprefixer (praktik terbaik)
    'autoprefixer': {},
  },
};

export default config;