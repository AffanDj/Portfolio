import { ExternalLink } from 'lucide-react';

const projects = [
  { title: 'Brewsy POS App', desc: 'POS System built with UCD method.', link: '#', icon: '🛒' },
  { title: 'E-learning Prototype', desc: 'Figma prototype + HTML implementation.', link: '#', icon: '📚' },
  { title: 'Menu App', desc: 'Dynamic menu app with React + Firebase.', link: '#', icon: '🍽️' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-indigo-400" data-aos="fade-up">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              // Efek Stroke warna-warni tipis (menggunakan border-t-2)
              className={`bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-gray-100 dark:border-slate-800 shadow-lg hover:shadow-md hover:scale-[1.05] hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="text-5xl mb-6">{project.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-slate-400 mb-6 leading-relaxed">{project.desc}</p>
              <a
                href={project.link}
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
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