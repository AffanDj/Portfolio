export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl px-6" data-aos="zoom-out" data-aos-duration="1000">
        <div className="pixel-card p-8 md:p-12 bg-white dark:bg-slate-900 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 dark:bg-indigo-600 border-l-4 border-b-4 border-slate-900 dark:border-white -mr-16 -mt-16 rotate-45" />

          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase leading-none dark:text-white">
            Affan <br />
            <span className="text-indigo-600 dark:text-yellow-400">Djafar</span>
          </h1>

          <p className="mb-10 text-slate-600 dark:text-slate-300">
            Computer Science Graduate. Specialize in building functional and
            visually striking digital products with modern technologies.
          </p>

          <div className="flex flex-wrap gap-6">
            <a href="#experience" className="pixel-card bg-yellow-400 dark:bg-indigo-600 px-6 py-3 text-white font-bold uppercase text-sm md:text-base inline-block hover:-translate-y-1 transition-all">
              Explore Work
            </a>
            <a href="#contact" className="pixel-card px-6 py-3 font-bold uppercase text-sm md:text-base inline-block hover:-translate-y-1 transition-all">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}