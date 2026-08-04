import { Github, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Anand-Rj', label: 'GitHub' },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
            Let's work together
            <span className="text-4xl">.</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing.
          </p>

          <a
            href="mailto:anandr@arizona.edu"
            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            <Mail size={20} />
            anandr@arizona.edu
          </a>

          <div className="flex justify-center gap-4 pt-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-4 bg-slate-900 rounded-full hover:bg-slate-800 transition-all duration-300 hover:scale-110 text-white"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
