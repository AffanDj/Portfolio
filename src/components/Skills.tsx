import { Code, Palette, Database, GitBranch } from 'lucide-react';

const skills = [
  { name: 'React', icon: Code, url: 'https://react.dev' },
  { name: 'Next.js', icon: Code, url: 'https://nextjs.org' },
  { name: 'TailwindCSS', icon: Palette, url: 'https://tailwindcss.com' },
  { name: 'JavaScript', icon: Code, url: 'https://en.wikipedia.org/wiki/JavaScript' },
  { name: 'Firebase', icon: Database, url: 'https://firebase.google.com' },
  { name: 'Figma', icon: Palette, url: 'https://help.figma.com' },
  { name: 'SQL', icon: Database, url: 'https://en.wikipedia.org/wiki/SQL' },
  { name: 'Git', icon: GitBranch, url: 'https://git-scm.com' },
  { 
    name: 'UI/UX Design', 
    icon: Palette, 
    links: [
      { label: 'UI Docs', url: 'https://en.wikipedia.org/wiki/User_interface_design' },
      { label: 'UX Docs', url: 'https://en.wikipedia.org/wiki/User_experience_design' }
    ] 
  },
];

export default function Skills() {
  const cardStyles = "bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:scale-[1.05] hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 flex flex-col items-center group cursor-pointer";

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white" data-aos="fade-up">
          Skills
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            // JIKA SKILL MEMILIKI SINGLE URL (KARTU BIASA)
            if (skill.url) {
              return (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardStyles}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <skill.icon className="w-10 h-10 mb-4 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500 transition-colors" />
                  <h3 className="font-semibold text-gray-800 dark:text-slate-200">{skill.name}</h3>
                  <span className="text-[10px] text-gray-400 dark:text-slate-500 mt-2 opacity-0 group-hover:opacity-100 hover:text-indigo-500 dark:hover:text-indigo-400 transition-opacity">
                    Docs ↗
                  </span>
                </a>
              );
            }

            // JIKA SKILL MEMILIKI MULTIPLE LINKS (UI/UX)
            return (
              <div
                key={skill.name}
                className={cardStyles}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <skill.icon className="w-10 h-10 mb-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="font-semibold text-gray-800 dark:text-slate-200">{skill.name}</h3>
                
                {/* Bagian link yang hanya muncul saat hover, tampilannya polos seperti Docs ↗ */}
                <div className="flex gap-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.links?.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-gray-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}