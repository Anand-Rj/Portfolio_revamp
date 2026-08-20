import { getAssetPath } from '@/utils/pathUtils';

const links = [
  { label: 'Email', href: 'mailto:anandr@arizona.edu' },
  { label: 'GitHub', href: 'https://github.com/Anand-Rj' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anand-r-j' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=4-Lj0dsAAAAJ&hl=en' },
];

const ContactFooter = () => {
  return (
    <footer id="contact" className="mx-auto max-w-5xl px-5 pt-24 pb-16 md:px-8 md:pt-32">
      <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
        <figure className="mx-auto w-48 flex-shrink-0 self-center md:mx-0 md:w-56 lg:w-64">
          <img
            src={getAssetPath('/minime-celebrating.webp')}
            alt="Illustrated mini-me of Anand jumping with arms raised"
            loading="lazy"
            className="w-full object-contain drop-shadow-[0_18px_22px_rgba(35,31,27,0.18)]"
            style={{ aspectRatio: '1 / 1' }}
          />
          <figcaption className="mt-2 hidden border-t border-rule pt-2 text-center font-mono text-[11px] text-ink-faint md:block">
            always up for a chat
          </figcaption>
        </figure>

        <div>
          <p className="mb-6 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-accent">get in touch</p>
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-ink md:text-6xl">
            Working on something in data science or applied AI?
            <span className="text-accent"> Let&apos;s talk.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Machine learning, generative AI, data platforms, APIs, agentic AI,
            and AI platforms. Based in Tucson AZ, and open to remote
            collaboration.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[13px]">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="link-underline text-ink hover:text-accent"
              >
                {l.label.toLowerCase()} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-2 border-t border-rule pt-6 font-mono text-[11px] text-ink-faint md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} anand ramaswamy jayshree</span>
        <span>space grotesk · jetbrains mono · built with curiosity</span>
      </div>
    </footer>
  );
};

export default ContactFooter;
