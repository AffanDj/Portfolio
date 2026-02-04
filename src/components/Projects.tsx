// Projects.tsx

// Ganti hex code dengan class Tailwind yang punya versi dark
const projects = [
  {
    title: "Brewsy POS",
    color: "bg-cyan-300 dark:bg-cyan-600",
    size: "md:col-span-2"
  },
  {
    title: "E-Learning",
    color: "bg-fuchsia-300 dark:bg-fuchsia-600",
    size: "md:col-span-1"
  },
  {
    title: "Menu App",
    color: "bg-yellow-300 dark:bg-yellow-500",
    size: "md:col-span-1"
  },
  {
    title: "Next Project",
    color: "bg-lime-400 dark:bg-lime-600",
    size: "md:col-span-2"
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
            <div
              key={i}
              className={`pixel-border ${p.color} ${p.size} p-8 flex flex-col justify-between group cursor-pointer transition-all hover:-translate-y-1`}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <h3 className="text-xl font-black uppercase text-slate-900 dark:text-slate-100">
                {p.title}
              </h3>
              <div className={`pixel-border bg-white dark:bg-slate-900 p-2 text-[10px] font-bold w-fit transition-all duration-300 text-slate-900 dark:text-slate-100 group-hover:!bg-yellow-400 group-hover:!text-black dark:group-hover:!bg-indigo-600 dark:group-hover:!text-white`}>
                VIEW DETAILS ➡
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}