import { useEffect, useRef, useState } from 'react';
import { getAssetPath } from '@/utils/pathUtils';

/*
  ToyBoxSpin — a flat, two-sided rotating card (CSS 3D flip), not a boxed
  cuboid. It flips between the real portrait and the boxed "AI Engineer"
  figure as the section scrolls past. Rotation is driven directly by
  scroll progress, so scrolling down spins it forward and scrolling back
  up unwinds it the same way — no separate up/down logic needed.
*/

const FRONT_SRC = '/Anand_Portrait_web.jpg';
const BACK_SRC = '/toybox-front.jpg';

const ToyBoxSpin = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [spin, setSpin] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    let raf = 0;

    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;

      if (reducedMotion.current) {
        setSpin(0);
        return;
      }

      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;

      // Two full turns across the scroll runway: front → back → front → back.
      setSpin(progress * 720);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden bg-paper">
        <p className="eyebrow mb-8">the ai engineer, boxed</p>

        <div
          className="relative"
          style={{
            width: 'clamp(200px, 26vw, 300px)',
            aspectRatio: '4 / 5',
            perspective: '1600px',
          }}
        >
          <div
            className="relative h-full w-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${spin}deg)`,
            }}
          >
            <div
              className="absolute inset-0 overflow-hidden border border-rule bg-white shadow-sm"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <img
                src={getAssetPath(FRONT_SRC)}
                alt="Anand Ramaswamy Jayshree"
                loading="eager"
                className="h-full w-full bg-white object-cover object-top"
              />
            </div>
            <div
              className="absolute inset-0 overflow-hidden border border-rule bg-white shadow-sm"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <img
                src={getAssetPath(BACK_SRC)}
                alt="AI Engineer action figure box, front panel"
                loading="lazy"
                className="h-full w-full bg-white object-contain"
              />
            </div>
          </div>
        </div>

        <p className="mt-8 font-mono text-[11px] text-ink-faint">
          scroll to rotate ↕
        </p>
      </div>
    </section>
  );
};

export default ToyBoxSpin;
