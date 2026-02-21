import { Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#e2e8f0] dark:bg-[#4d4d4d] text-slate-900 dark:text-white py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <a
          href="/CV_ATS_FRIENDLY_AFFAN_2026.pdf"
          download
          className="pixel-border inline-flex items-center px-6 py-2 bg-yellow-400 dark:bg-indigo-600 text-slate-900 font-black text-xs uppercase hover:scale-105 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]"
        >
          <Download className="mr-2" size={16} />
          Download CV
        </a>

        <div className="w-full border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-[8px] tracking-[0.2em] opacity-60 uppercase font-bold">
          <p className='font-press-start'>• © 2026 Affan Djafar • Jakarta</p>
          <p className='font-press-start'>Built with Next.js & Coffee</p>
        </div>
      </div>
    </footer>
  );
}