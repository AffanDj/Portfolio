import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-10">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12" data-aos="zoom-out">

        <div className="flex-1 w-full">
          <div className="pixel-card p-8 md:p-12 bg-white dark:bg-slate-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 dark:bg-indigo-600 border-l-4 border-b-4 border-slate-900 dark:border-white -mr-12 -mt-12 rotate-45" />

            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase leading-none dark:text-white">
              Affan <br />
              <span className="text-indigo-600 dark:text-indigo-400">Djafar</span>
            </h1>

            <p className="mb-10 text-slate-600 dark:text-slate-400 max-w-md">
              Computer Science Graduate. Specialize in building functional and visually
              striking digital products with modern technologies.
            </p>

            <div className="flex gap-4">
              <a href='/#about' className="pixel-border bg-yellow-400 dark:bg-indigo-600 text-white px-6 py-2 hover:-translate-y-1 transition-colors uppercase text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Explore Work
              </a>
              <a href='/#contact' className="pixel-border bg-white dark:bg-slate-800 px-6 py-2 hover:-translate-y-1 dark:hover:bg-slate-700 transition-colors uppercase text-sm font-bold dark:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 relative group">
          <div className="absolute inset-0 bg-slate-900 dark:bg-white translate-x-4 translate-y-4 -z-10 transition-colors duration-300" />
          <div className="pixel-border bg-white dark:bg-slate-900 p-4 pb-8 rotate-3 group-hover:rotate-0 transition-all duration-300 w-[280px] md:w-[320px]">
            <div className="aspect-[1/1] relative mini-grid bg-slate-50 dark:bg-slate-800 border-4 border-slate-900 dark:border-white overflow-hidden mb-6">
              <Image
                src="/IMG_2948.jpg"
                alt="Affan Real Version"
                fill
                className="object-contain object-bottom transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                priority
              />
              <Image
                src="/IMG_5118.png"
                alt="Affan Pixel Art"
                fill
                className="object-contain object-bottom transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                priority
              />

            </div>
            <div className="flex justify-between items-center px-1">
              <p className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest">
                AFFAN_01.PNG
              </p>
              <div className="w-3 h-3 bg-yellow-400 dark:bg-indigo-600 border-2 border-slate-900 dark:border-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}