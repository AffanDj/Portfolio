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
        <h2 className="text-4xl font-bold mb-12 text-gray-900" data-aos="fade-up">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <skill.icon className="w-10 h-10 mx-auto mb-4 text-indigo-600" />
              <h3 className="font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}