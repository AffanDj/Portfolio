const missionHistory = [
  {
    level: "LV1",
    period: "2020 - 2025",
    title: "Bachelor in Computer Science",
    company: "BINUS UNIVERSITY",
    description: "Graduated with 3.21 GPA. Focused on Software Engineering, Problem Solving, and building efficient web applications."
  },
  {
    level: "LV2",
    period: "2023 - 2024",
    title: "Full Stack Developer Intern",
    company: "AIA SINGAPORE",
    description: "Developed front-end admin-facing websites using NextJS and TypeScript. Optimized features and refactored code for better performance."
  },
  {
    level: "LV3",
    period: "2026 - Present",
    title: "Host Live",
    company: "KOOLPOP HUB BY EGOGO",
    description: "Driving product sales for premium brands like DJI and Garmin through interactive live streaming and content strategy."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl text-center mb-16 uppercase italic dark:text-white" data-aos="fade-down">
          Mission History
        </h2>
        <div className="relative border-l-4 border-black dark:border-white border-dashed ml-4 md:ml-10">
          {missionHistory.map((item, idx) => (
            <div key={idx} className="mb-12 ml-10 relative" data-aos="fade-left" data-aos-delay={idx * 200}>
              <div className="absolute -left-[64px] top-0 w-12 h-12 bg-[#FFFF00] dark:bg-[#E5E500] border-4 border-black dark:border-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <span className="text-black font-bold text-sm">{item.level}</span>
              </div>

              <div className="pixel-card p-6 bg-white dark:bg-slate-900">
                <span className="text-[10px] bg-yellow-400 dark:bg-indigo-600 text-black dark:text-white px-2 py-1 mb-2 border-1 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] inline-block">
                  {item.period}
                </span>
                <h3 className="text-lg font-bold mt-2 dark:text-white">{item.title}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase">{item.company}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}