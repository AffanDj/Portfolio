const skills = [
  { name: 'ReactJS', color: 'bg-fuchsia-300 dark:bg-fuchsia-600' },
  { name: 'Next.js', color: 'bg-cyan-300 dark:bg-cyan-600' },
  { name: 'TypeScript', color: 'bg-blue-400 dark:bg-blue-600' },
  { name: 'Node.js', color: 'bg-green-300 dark:bg-green-600' },
  { name: 'Tailwind', color: 'bg-yellow-300 dark:bg-yellow-500' },
  { name: 'MySQL', color: 'bg-orange-300 dark:bg-orange-500' },
  { name: 'Figma', color: 'bg-indigo-300 dark:bg-indigo-500' },
  { name: 'Git/GitHub', color: 'bg-slate-300 dark:bg-slate-500' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <h2 className="text-2xl text-center mb-16 uppercase tracking-widest dark:text-white" data-aos="fade-up">
        My Power-Ups
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className={`pixel-border ${skill.color} p-6 flex flex-col items-center hover:-translate-y-1 transition-transform`}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
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