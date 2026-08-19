import { getAssetPath } from '@/utils/pathUtils';

const SCHOLAR_URL = 'https://scholar.google.com/citations?user=4-Lj0dsAAAAJ&hl=en';

const PORTRAIT_SRC = '/Anand_Portrait_new.webp';

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="mx-auto max-w-5xl px-5 pt-36 pb-20 md:px-8 md:pt-44 md:pb-28"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
        <div className="animate-rise">
          <p className="eyebrow mb-6">Data scientist / Tucson AZ</p>

          <h1 className="font-display text-4xl font-semibold leading-[1.04] text-ink sm:text-5xl md:text-[3.7rem]">
            I build machine learning and generative AI systems that turn
            <span className="text-accent"> data into decisions.</span>
          </h1>

          <button
            onClick={() => scrollTo('about')}
            className="mt-7 inline-flex items-center gap-2.5 border border-rule bg-paper-deep/40 px-4 py-2 font-mono text-[13px] transition-colors hover:border-green"
          >
            <span className="flex items-center gap-1.5 text-green">
              <span className="h-1.5 w-1.5 rounded-full bg-green" /> currently
            </span>
            <span className="text-ink">developing Hygrivix</span>
          </button>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            M.S. in Information Science from the University of Arizona. I've
            worked across data engineering, computer vision, and LLM systems,
            from multi-agent decision intelligence platforms to clinical and
            agricultural AI research, with publications in IEEE Xplore and
            IRJET along the way.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 font-mono text-[13px]">
            <button
              onClick={() => scrollTo('work')}
              className="bg-ink px-4 py-2.5 text-paper transition-colors hover:bg-accent"
            >
              see the work →
            </button>
            <button
              onClick={() => scrollTo('now')}
              className="border border-rule px-4 py-2.5 text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              what i&apos;m on now
            </button>
            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-rule px-4 py-2.5 text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              google scholar ↗
            </a>
          </div>
        </div>

        <div className="animate-rise order-first md:order-none" style={{ animationDelay: '120ms' }}>
          <figure className="w-48 border border-rule bg-paper-deep/50 p-2 shadow-sm md:w-60">
            <div
              className="relative overflow-hidden bg-white"
              style={{ aspectRatio: '4 / 5' }}
            >
              <img
                src={getAssetPath(PORTRAIT_SRC)}
                alt="Anand Ramaswamy Jayshree"
                loading="eager"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-2 flex items-start gap-1.5 border-t border-rule pt-2 font-mono text-[11px] leading-relaxed text-ink-faint">
              <span className="text-accent">↳</span>
              <span>anand ramaswamy jayshree<br />data scientist / ai engineer</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
