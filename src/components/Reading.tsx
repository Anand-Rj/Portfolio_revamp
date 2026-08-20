/*
  "Reading" — books on the shelf and on the desk. Update as the stack changes.
  Placeholder list — swap in your own current reads.
*/

import { getAssetPath } from '@/utils/pathUtils';

interface Book {
  title: string;
  author: string;
  current?: boolean;
}

const books: Book[] = [
  { title: 'Deep Learning', author: 'Ian Goodfellow, Yoshua Bengio, Aaron Courville' },
  { title: 'Designing Machine Learning Systems', author: 'Chip Huyen', current: true },
  { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann' },
];

const Reading = () => {
  return (
    <section id="reading" className="mx-auto max-w-5xl px-5 pb-20 md:px-8 md:pb-28">
      <div className="mb-10 flex items-baseline justify-between border-b border-rule pb-4">
        <h2 className="font-mono text-sm tracking-wider text-ink-faint">reading</h2>
        <span className="font-mono text-[13px] text-ink-faint">on the desk &amp; the shelf</span>
      </div>

      <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center md:gap-10">
        <figure className="mx-auto w-48 self-center md:mx-0 md:w-56 lg:w-64">
          <img
            src={getAssetPath('/minime-reading-sit.webp')}
            alt="Illustrated mini-me of Anand sitting cross-legged and reading"
            loading="lazy"
            className="w-full object-contain drop-shadow-[0_18px_22px_rgba(35,31,27,0.18)]"
            style={{ aspectRatio: '1 / 1' }}
          />
          <figcaption className="mt-2 hidden border-t border-rule pt-2 text-center font-mono text-[11px] text-ink-faint md:block">
            learning between builds
          </figcaption>
        </figure>

        <ul className="grid gap-x-10 gap-y-5 lg:grid-cols-2">
          {books.map((book) => (
            <li
              key={book.title}
              className="flex items-baseline justify-between gap-4 border-b border-rule/60 pb-4"
            >
            <div className="min-w-0">
              <h3 className="font-display text-lg font-medium leading-snug text-ink">
                {book.title}
              </h3>
              <p className="mt-0.5 font-mono text-[13px] text-ink-soft">{book.author}</p>
            </div>
            {book.current && (
              <span className="flex flex-shrink-0 items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-green">
                <span className="h-1.5 w-1.5 rounded-full bg-green" /> reading
              </span>
            )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reading;
