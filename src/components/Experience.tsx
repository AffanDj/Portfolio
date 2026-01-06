import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Full Stack Developer (Internship)",
    company: "Tech Solutions Inc.",
    date: "Feb 2024 - Jul 2024",
    desc: "Developed and maintained web applications using React and Node.js. Optimized database queries which improved performance by 30%.",
    icon: Briefcase,
  },
  {
    title: "Computer Science Student",
    company: "Binus University",
    date: "2020 - 2024",
    desc: "Focused on Software Engineering and UI/UX. Graduated with honors. Active in various tech organizations.",
    icon: GraduationCap,
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white" data-aos="fade-up">
          Experience
        </h2>

        {/* Container Garis Vertikal */}
        <div className="relative border-l-2 border-indigo-500/30 dark:border-slate-800 ml-4 md:ml-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-8 relative" data-aos="fade-up" data-aos-delay={index * 100}>
              
              {/* Bulatan Ikon (Dot) */}
              <div className="absolute -left-[50px] top-0 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 flex items-center justify-center z-10 shadow-sm">
                <exp.icon size={18} className="text-indigo-600 dark:text-indigo-400" />
              </div>

              {/* Kartu Konten */}
              <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400 font-medium">
                  <Calendar size={14} />
                  <span className="text-xs">{exp.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {exp.title}
                </h3>
                
                <p className="text-indigo-600 dark:text-indigo-300 font-medium mb-4">
                  {exp.company}
                </p>
                
                <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-sm">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}