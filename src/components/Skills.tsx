import { Code, Palette, Database, GitBranch } from 'lucide-react'; // Lucide icons

const skills = [
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Code },
  { name: 'TailwindCSS', icon: Palette },
  { name: 'JavaScript', icon: Code },
  { name: 'Firebase', icon: Database },
  { name: 'Figma', icon: Palette },
  { name: 'SQL', icon: Database },
  { name: 'Git', icon: GitBranch },
  { name: 'UI/UX Design', icon: Palette },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-400" data-aos="fade-up">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass p-6 rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <skill.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}