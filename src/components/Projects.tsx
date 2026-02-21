import { Lock } from 'lucide-react';

const projects = [
  {
    title: "Brewsy App",
    description: "Skripsi - POS System for Coffee Shop",
    color: "bg-cyan-300 dark:bg-cyan-600",
    size: "md:col-span-2",
    link: "https://github.com/AffanDj/Skripsi-Brewsy-app",
    isPrivate: false
  },
  {
    title: "Doto2 Project",
    description: "Dota 2 Information & Data Project",
    color: "bg-fuchsia-300 dark:bg-fuchsia-600",
    size: "md:col-span-1",
    link: "https://github.com/AffanDj/Doto2",
    isPrivate: false
  },
  {
    title: "Personal Portfolio",
    description: "Pixel-style Portfolio with NextJS",
    color: "bg-yellow-300 dark:bg-yellow-500",
    size: "md:col-span-1",
    link: "https://github.com/AffanDj/Portfolio",
    isPrivate: false
  },
  {
    title: "AIA Singapore Admin",
    description: "Admin Facing Website (Internship Project)",
    color: "bg-lime-400 dark:bg-lime-600",
    size: "md:col-span-2",
    link: "#",
    isPrivate: true
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl text-center mb-16 uppercase dark:text-white" data-aos="fade-up">
          Select Quest
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[180px] gap-6">
          {projects.map((p, i) => {
            const CardTag = p.isPrivate ? 'div' : 'a';
            
            return (
              <CardTag
                key={i}
                href={p.isPrivate ? undefined : p.link}
                target={p.isPrivate ? undefined : "_blank"}
                rel={p.isPrivate ? undefined : "noopener noreferrer"}
                className={`pixel-border ${p.color} ${p.size} p-6 flex flex-col justify-between group transition-all 
                  ${p.isPrivate ? 'cursor-not-allowed grayscale-[0.5]' : 'hover:-translate-y-1 cursor-pointer'}`}
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-black uppercase text-slate-900 dark:text-slate-100 leading-tight">
                      {p.title}
                    </h3>
                    {p.isPrivate && <Lock size={16} className="text-slate-800 dark:text-slate-200" />}
                  </div>
                  <p className="text-[10px] mt-1 font-bold text-slate-700 dark:text-slate-200 uppercase opacity-80">
                    {p.description}
                  </p>
                </div>
                
                <div className={`pixel-border bg-white dark:bg-slate-900 p-2 text-[10px] font-bold w-fit transition-all duration-300 text-slate-900 dark:text-slate-100 
                  ${p.isPrivate 
                    ? 'opacity-50' 
                    : 'group-hover:!bg-yellow-400 group-hover:!text-black dark:group-hover:!bg-indigo-600 dark:group-hover:!text-white'}`}
                >
                  {p.isPrivate ? "CONFIDENTIAL ACCESS 🔒" : "VIEW ON GITHUB ➡"}
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
}