import { Mail, PhoneCall, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-4">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white uppercase tracking-tighter">
          Contact Me
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:affandjafar@gmail.com"
            className="pixel-border inline-flex items-center px-6 py-3 bg-white dark:bg-slate-900 font-bold uppercase hover:-translate-y-1 hover:bg-yellow-400 dark:hover:bg-indigo-600 transition-all"
          >
            <Mail className="mr-3" size={20} />
            Email
          </a>
          
          <a
            href="https://wa.me/6285719307863"
            target="_blank"
            className="pixel-border inline-flex items-center px-6 py-3 bg-white dark:bg-slate-900 font-bold uppercase hover:-translate-y-1 hover:bg-green-400 dark:hover:bg-green-600 transition-all"
          >
            <PhoneCall className="mr-3" size={20} />
            WhatsApp
          </a>
          
          <a
            href="https://www.linkedin.com/in/affan-djafar-3821a4254/"
            target="_blank"
            className="pixel-border inline-flex items-center px-6 py-3 bg-white dark:bg-slate-900 font-bold uppercase hover:-translate-y-1 hover:bg-blue-400 dark:hover:bg-blue-600 transition-all"
          >
            <Linkedin className="mr-3" size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}