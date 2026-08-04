import { useEffect, useState } from 'react';
import Monogram from './Monogram';

/* First-load splash: monogram + mono wordmark + a cobalt load bar. Fades out. */
const Loader = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const finish = () => setDone(true);
    const timer = window.setTimeout(finish, 950);
    window.addEventListener('load', finish);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('load', finish);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-paper transition-opacity duration-500 ${
        done ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <Monogram size={44} />
        <div className="font-mono text-xs text-ink-faint">
          anand ramaswamy jayshree<span className="cursor-blink">_</span>
        </div>
        <div className="h-px w-36 overflow-hidden bg-rule">
          <div className="loadbar h-full w-full bg-accent" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
