import { Mail, PhoneCall, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Contact</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">Feel free to reach out via email:</p>
        <a
          href="mailto:affandjafar@gmail.com"
          className="pixel-border inline-flex items-center px-6 py-3 bg-white dark:bg-slate-900 font-semibold hover:-translate-y-1 hover:bg-yellow-400 dark:hover:bg-indigo-600"
        >
          <Mail className="mr-2  dark:text-white" size={20} />
          affandjafar@gmail.com
        </a>
        <a
          href=""
          className="pixel-border inline-flex items-center px-6 py-3 bg-white dark:bg-slate-900 font-semibold hover:-translate-y-1 hover:bg-yellow-400 dark:hover:bg-indigo-600"
        >
          <PhoneCall className="mr-2  dark:text-white" size={20} />
          +62-857-1930-7863
        </a>
        <a
          href="https://www.linkedin.com/in/affan-djafar-3821a4254/"
          className="pixel-border inline-flex items-center px-6 py-3 bg-white dark:bg-slate-900 font-semibold hover:-translate-y-1 hover:bg-yellow-400 dark:hover:bg-indigo-600"
        >
          <Linkedin className="mr-2  dark:text-white" size={20} />
          Affan Djafar
        </a>
      </div>
    </section>
  );
}