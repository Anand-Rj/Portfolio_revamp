import { useNavigate, useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import SocialIsland from '@/components/SocialIsland';
import { blogPosts, type BlogPost } from '@/data/blog';

const fmtFull = (d: string) =>
  new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
const fmtShort = (d: string) =>
  new Date(d).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

const PostView = ({ post, onBack }: { post: BlogPost; onBack: () => void }) => (
  <article className="mx-auto max-w-2xl px-5 pt-28 pb-24 md:px-8 md:pt-36">
    <button onClick={onBack} className="link-underline mb-12 text-sm text-ink-soft hover:text-ink">
      ← All writing
    </button>

    <p className="eyebrow mb-5">
      {fmtFull(post.date)} · {post.readTime}
    </p>
    <h1 className="font-display text-3xl font-light leading-[1.12] tracking-tight text-ink md:text-[2.6rem]">
      {post.title}
    </h1>

    {post.cover && (
      <figure className="mt-10">
        <img src={post.cover} alt="" className="w-full border border-rule" />
        {post.coverCaption && (
          <figcaption className="mt-2 text-xs text-ink-faint">{post.coverCaption}</figcaption>
        )}
      </figure>
    )}

    <div className="mt-10 space-y-6">
      {post.content.split('\n\n').map((para, i) => (
        <p key={i} className="text-[1.05rem] leading-[1.75] text-ink/90">
          {para}
        </p>
      ))}
    </div>

    {post.link && (
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline mt-10 inline-block text-sm font-medium text-accent"
      >
        {post.linkLabel ?? 'Read more'} ↗
      </a>
    )}

    <div className="mt-12 flex flex-wrap gap-x-4 gap-y-1 border-t border-rule pt-6 font-mono text-xs text-ink-faint">
      {post.tags.map((t) => (
        <span key={t}>#{t.toLowerCase().replace(/\s+/g, '-')}</span>
      ))}
    </div>
  </article>
);

const Blog = () => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const activeId = params.get('post');
  const active = blogPosts.find((p) => p.id === activeId);

  if (active) {
    return (
      <div className="relative z-10 min-h-screen">
        <Navigation />
        <SocialIsland />
        <PostView post={active} onBack={() => setParams({})} />
      </div>
    );
  }

  return (
    <div className="relative z-10 min-h-screen">
      <Navigation />
      <SocialIsland />

      <main className="mx-auto max-w-3xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
        <button
          onClick={() => navigate('/')}
          className="link-underline mb-12 text-sm text-ink-soft hover:text-ink"
        >
          ← Home
        </button>

        <header className="mb-16 max-w-xl">
          <h1 className="font-display text-4xl font-light tracking-tight text-ink md:text-5xl">
            Writing
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Notes on systems, data, and the occasional thing I built and had to
            explain out loud.
          </p>
        </header>

        <ul>
          {blogPosts.map((post) => (
            <li key={post.id}>
              <button
                onClick={() => setParams({ post: post.id })}
                className="group grid w-full grid-cols-[1fr] gap-2 border-t border-rule py-8 text-left md:grid-cols-[7rem_1fr] md:gap-8"
              >
                <span className="font-mono text-[13px] text-ink-faint md:pt-1">{fmtShort(post.date)}</span>
                <div>
                  <h2 className="font-display text-2xl font-normal leading-snug text-ink transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 font-mono text-xs text-ink-faint">{post.readTime}</p>
                </div>
              </button>
            </li>
          ))}
          <li className="border-t border-rule" />
        </ul>
      </main>
    </div>
  );
};

export default Blog;
