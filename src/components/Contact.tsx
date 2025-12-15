import { Mail } from 'lucide-react'; // Lucide icon

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Contact</h2>
        <p className="text-lg text-gray-600 mb-6">Feel free to reach out via email:</p>
        <a
          href="mailto:affandjafar@gmail.com"
          className="inline-flex items-center px-6 py-3 bg-indigo-50 border border-indigo-200 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-100 hover:border-indigo-300 transition-all duration-300"
        >
          <Mail className="mr-2 text-indigo-500" size={20} />
          affandjafar@gmail.com
        </a>
      </div>
    </section>
  );
}