const skills = [
  { name: 'React', color: 'bg-fuchsia-300 dark:bg-fuchsia-600' }, // Magenta
  { name: 'Next.js', color: 'bg-cyan-300 dark:bg-cyan-600' }, // Cyan
  { name: 'Tailwind', color: 'bg-yellow-300 dark:bg-yellow-500' }, // Yellow
  { name: 'JS', color: 'bg-lime-400 dark:bg-lime-600' }, // Neon Green
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <h2 className="text-2xl text-center mb-16 uppercase tracking-widest" data-aos="fade-up">
        My Power-Ups
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className={`pixel-border ${skill.color} p-6 flex flex-col items-center`}
            data-aos="zoom-in"
            data-aos-delay={index * 100} // Ini bikin animasi muncul satu-satu
          >
            <div className="w-12 h-12 bg-white dark:bg-slate-900 border-4 border-black dark:border-white mb-4 flex items-center justify-center">
               <span className="text-black dark:text-white font-bold">#</span>
            </div>
            <h3 className="text-[10px] text-black dark:text-white text-center leading-relaxed font-bold">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}