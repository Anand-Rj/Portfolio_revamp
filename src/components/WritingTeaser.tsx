import { useNavigate } from 'react-router-dom';
import { blogPosts } from '@/data/blog';
import { getAssetPath } from '@/utils/pathUtils';

const Writing = () => {
  const navigate = useNavigate();
  const recent = blogPosts.slice(0, 2);

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  return (
    <section id="writing" className="border-y border-rule bg-paper-deep/50">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <header className="mb-10 flex items-baseline justify-between border-b border-rule pb-4">
              <h2 className="font-mono text-sm tracking-wider text-ink-faint">dispatches</h2>
              <button
                onClick={() => navigate('/blog')}
                className="link-underline font-mono text-[13px] text-ink-soft hover:text-ink"
              >
                all posts ↗
              </button>
            </header>

            <ul>
              {recent.map((post) => (
                <li key={post.id}>
                  <button
                    onClick={() => navigate(`/blog?post=${post.id}`)}
                    className="group grid w-full grid-cols-[1fr] gap-1 border-b border-rule py-7 text-left md:grid-cols-[7rem_1fr] md:gap-8"
                  >
                    <span className="font-mono text-[13px] text-ink-faint md:pt-1">{fmt(post.date)}</span>
                    <div className="max-w-2xl">
                      <h3 className="font-display text-xl font-normal leading-snug text-ink transition-colors group-hover:text-accent md:text-2xl">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                        {post.excerpt}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <figure className="mx-auto w-48 flex-shrink-0 rounded-[1.75rem] border border-rule/70 bg-gradient-to-b from-paper to-paper-deep/60 p-3 shadow-[0_18px_42px_rgba(35,31,27,0.11)] md:mx-0 md:w-56 lg:w-64">
            <div className="overflow-hidden rounded-[1.2rem] bg-paper/60">
              <img
                src={getAssetPath('/presentation-project-wins-clean.webp')}
                alt="Illustrated mini-me of Anand presenting his data scientist project wins on a display board"
                loading="lazy"
                className="w-full object-contain drop-shadow-[0_16px_20px_rgba(35,31,27,0.16)]"
                style={{ aspectRatio: '4 / 5' }}
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Writing;
