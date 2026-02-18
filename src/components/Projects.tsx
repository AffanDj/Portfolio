const projects = [
  {
    title: "Brewsy App",
    description: "Skripsi - POS System for Coffee Shop",
    color: "bg-cyan-300 dark:bg-cyan-600",
    size: "md:col-span-2",
    link: "https://github.com/AffanDj/Skripsi-Brewsy-app"
  },
  {
    title: "Doto2 Project",
    description: "Dota 2 Information & Data Project",
    color: "bg-fuchsia-300 dark:bg-fuchsia-600",
    size: "md:col-span-1",
    link: "https://github.com/AffanDj/Doto2"
  },
  {
    title: "Personal Portfolio",
    description: "Pixel-style Portfolio with NextJS",
    color: "bg-yellow-300 dark:bg-yellow-500",
    size: "md:col-span-1",
    link: "https://github.com/AffanDj/Portfolio"
  },
  {
    title: "AIA Singapore Admin",
    description: "Admin Facing Website (Internship)",
    color: "bg-lime-400 dark:bg-lime-600",
    size: "md:col-span-2",
    link: "https://github.com/AffanDj"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl text-center mb-16 uppercase dark:text-white" data-aos="fade-up">
          Select Quest
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`pixel-border ${p.color} ${p.size} p-8 flex flex-col justify-between group cursor-pointer transition-all hover:-translate-y-1`}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div>
                <h3 className="text-xl font-black uppercase text-slate-900 dark:text-slate-100">
                  {p.title}
                </h3>
                <p className="text-[10px] mt-2 font-bold text-slate-700 dark:text-slate-200 uppercase">{p.description}</p>
              </div>
              <div className={`pixel-border bg-white dark:bg-slate-900 p-2 text-[10px] font-bold w-fit transition-all duration-300 text-slate-900 dark:text-slate-100 group-hover:!bg-yellow-400 group-hover:!text-black dark:group-hover:!bg-indigo-600 dark:group-hover:!text-white`}>
                VIEW ON GITHUB ➡
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}