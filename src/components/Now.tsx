/*
  "Now" — a living section. Update the entries as things change.
  Keep it factual: only what you're actually doing.
*/

interface Thread {
  title: string;
  note: string;
  href?: string;
}

const threads: Thread[] = [
  {
    title: 'Focused on Hygrivix',
    note: 'Currently working on developing Hygrivix — building and launching AI applications as a solopreneur, funded in part by a $1,000 pre-seed award from Startup Wildcats.',
  },
  {
    title: 'Sunedrion, shipped',
    note: 'The multi-agent LLM Council for Diversified Botanics is live and in production, orchestrating multiple LLMs to analyze cross-functional data and support leadership decisions.',
  },
  {
    title: 'Publishing research',
    note: 'Presenting and publishing work spanning precision agriculture UAVs (IEEE Xplore), medical imaging (IRJET), and generative AI for research applications.',
  },
];

const Now = () => {
  return (
    <section id="now" className="border-y border-rule bg-paper-deep/50">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex items-baseline justify-between border-b border-rule pb-4">
          <h2 className="font-mono text-sm tracking-wider text-ink-faint">now</h2>
          <span className="font-mono text-sm text-accent-2">mid 2026</span>
        </div>

        <ol>
          {threads.map((thread, i) => (
            <li
              key={thread.title}
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-rule py-7 md:grid-cols-[2.5rem_1fr_2fr] md:gap-x-10"
            >
              <span className="font-mono text-sm text-accent md:pt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-xl font-medium text-ink">
                {thread.href ? (
                  <a
                    href={thread.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline hover:text-accent"
                  >
                    {thread.title} ↗
                  </a>
                ) : (
                  thread.title
                )}
              </h3>
              <p className="col-start-2 mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft md:col-start-3 md:mt-0">
                {thread.note}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Now;
