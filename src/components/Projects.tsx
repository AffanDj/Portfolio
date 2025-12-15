import { ExternalLink } from 'lucide-react'; // Lucide icon

const projects = [
  {
    title: 'Brewsy POS App',
    desc: 'POS System built with UCD method — questionnaire, prototyping, development, evaluation.',
    link: '#',
    icon: '🛒', // Keep emoji or replace with Lucide if preferred
  },
  {
    title: 'E-learning Platform Prototype',
    desc: 'Figma prototype + HTML implementation with UI/UX focus.',
    link: '#',
    icon: '📚',
  },
  {
    title: 'Menu App (React + Firebase)',
    desc: 'Dynamic menu app with category scroll, Firebase data, and AI-generated UI integration.',
    link: '#',
    icon: '🍽️',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900" data-aos="fade-up">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white p-8 rounded-xl border-t-4 border-indigo-600 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="text-5xl mb-6">{project.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.desc}</p>
              <a
                href={project.link}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold hover:underline"
              >
                View Project <ExternalLink className="ml-2" size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}