import { Github, Linkedin, GraduationCap } from 'lucide-react';

const SocialIsland = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Anand-Rj', label: 'Github' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anand-r-j', label: 'LinkedIn' },
    { icon: GraduationCap, href: 'https://scholar.google.com/citations?user=4-Lj0dsAAAAJ&hl=en', label: 'Google Scholar' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
      <div className="rounded-full border border-rule bg-paper/90 px-4 py-2 backdrop-blur-sm">
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-ink-soft transition-colors duration-300 hover:text-accent"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialIsland;
