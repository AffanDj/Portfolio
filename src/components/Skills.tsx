import Image from 'next/image';

const skills = [
  { 
    name: 'ReactJS', 
    color: 'bg-fuchsia-300 dark:bg-fuchsia-600',
    icon: '/icons/react.svg' 
  },
  { 
    name: 'React Native', 
    color: 'bg-violet-400 dark:bg-violet-600',
    icon: '/icons/react.svg' 
  },
  { 
    name: 'Next.js', 
    color: 'bg-cyan-300 dark:bg-cyan-600',
    icon: '/icons/nextdotjs.svg' 
  },
  { 
    name: 'TypeScript', 
    color: 'bg-blue-400 dark:bg-blue-600',
    icon: '/icons/typescript.svg' 
  },
  { 
    name: 'Node.js', 
    color: 'bg-green-300 dark:bg-green-600',
    icon: '/icons/nodedotjs.svg' 
  },
  { 
    name: 'C++', 
    color: 'bg-blue-500 dark:bg-blue-700',
    icon: '/icons/cplusplus.svg' 
  },
  { 
    name: 'Java', 
    color: 'bg-red-500 dark:bg-red-700',
    icon: '/icons/openjdk.svg' 
  },
  { 
    name: 'HTML5', 
    color: 'bg-orange-400 dark:bg-orange-600',
    icon: '/icons/html5.svg' 
  },
  { 
    name: 'CSS3', 
    color: 'bg-sky-500 dark:bg-sky-700',
    icon: '/icons/css.svg' 
  },
  { 
    name: 'Tailwind', 
    color: 'bg-yellow-300 dark:bg-yellow-500',
    icon: '/icons/tailwindcss.svg' 
  },
  { 
    name: 'MySQL', 
    color: 'bg-orange-300 dark:bg-orange-500',
    icon: '/icons/mysql.svg' 
  },
  { 
    name: 'Figma', 
    color: 'bg-indigo-300 dark:bg-indigo-500',
    icon: '/icons/figma.svg' 
  },
  { 
    name: 'GitBash', 
    color: 'bg-slate-400 dark:bg-slate-600',
    icon: '/icons/git.svg' 
  },
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
            data-aos-delay={index * 50}
          >
            <div className="w-12 h-12 bg-white dark:bg-slate-900 border-4 border-black dark:border-white mb-4 flex items-center justify-center p-2 relative">
               <Image 
                  src={skill.icon} 
                  alt={skill.name}
                  width={24}
                  height={24}
                  className="dark:invert transition-all duration-300"
               />
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