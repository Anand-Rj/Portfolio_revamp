import { useEffect, useRef } from 'react';

/*
  Living background: a rotating wireframe "network globe" — a sphere of
  small dots (the visible face, like a dotted world map) wrapped in a
  sparser triangulated node-and-line mesh (like a global network graphic).
  Rendered on canvas so it stays crisp at any resolution, spins
  continuously, drifts down-left then down-right as the page scrolls, and
  nodes brighten/enlarge near the cursor for a subtle interactive touch.
  Sits behind all content, ignores pointer events for clicks, and freezes
  under prefers-reduced-motion.
*/
const BackgroundFX = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const mouse = { x: -9999, y: -9999, active: false };
    let scrollProgress = 0; // 0 = top of page, 1 = bottom of page
    let smoothProgress = 0; // eased toward scrollProgress each frame

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    const updateScrollProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };
    updateScrollProgress();

    interface Pt3 {
      x: number;
      y: number;
      z: number;
      major: boolean;
    }

    // Fibonacci sphere: even distribution of points over a unit sphere.
    const fibonacciSphere = (count: number): Pt3[] => {
      const pts: Pt3[] = [];
      const golden = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = golden * i;
        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;
        pts.push({ x, y, z, major: false });
      }
      return pts;
    };

    const dust = fibonacciSphere(1100);
    const nodes = fibonacciSphere(42).map((p) => ({ ...p, major: true }));

    // Precompute a sparse edge list connecting each major node to its
    // nearest few neighbors, for the triangulated wireframe look.
    const edges: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      const dists: { j: number; d: number }[] = [];
      for (let j = 0; j < nodes.length; j++) {
        if (i === j) continue;
        const a = nodes[i];
        const b = nodes[j];
        const d = (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2;
        dists.push({ j, d });
      }
      dists.sort((a, b) => a.d - b.d);
      for (let k = 0; k < 3; k++) {
        const pair: [number, number] = [i, dists[k].j];
        const exists = edges.some(
          (e) => (e[0] === pair[0] && e[1] === pair[1]) || (e[0] === pair[1] && e[1] === pair[0]),
        );
        if (!exists) edges.push(pair);
      }
    }

    let raf = 0;
    let t = 0;
    const tiltX = -0.45; // fixed tilt so the "north pole" leans back, like the reference art

    const style = getComputedStyle(document.documentElement);
    const accent = style.getPropertyValue('--accent').trim() || '228 76% 53%';

    const rotate = (p: Pt3, theta: number) => {
      // rotate around Y (spin), then tilt around X (fixed lean)
      const cosT = Math.cos(theta);
      const sinT = Math.sin(theta);
      const x1 = p.x * cosT + p.z * sinT;
      const z1 = -p.x * sinT + p.z * cosT;
      const y1 = p.y;

      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      return { x: x1, y: y2, z: z2 };
    };

    const project = (p: { x: number; y: number; z: number }, cx: number, cy: number, R: number) => ({
      x: cx + p.x * R,
      y: cy - p.y * R,
      z: p.z,
    });

    // Scroll-driven path: starts upper-right, drifts down-left as the
    // page scrolls through its first half, then drifts back down-right
    // through the second half — a gentle "V" sweep across the viewport.
    const START = { xf: 0.72, yf: 0.4 };
    const MID = { xf: 0.24, yf: 0.68 };
    const END = { xf: 0.8, yf: 0.86 };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const centerFor = (progress: number) => {
      let xf: number;
      let yf: number;
      if (progress <= 0.5) {
        const localT = progress / 0.5;
        xf = lerp(START.xf, MID.xf, localT);
        yf = lerp(START.yf, MID.yf, localT);
      } else {
        const localT = (progress - 0.5) / 0.5;
        xf = lerp(MID.xf, END.xf, localT);
        yf = lerp(MID.yf, END.yf, localT);
      }
      return { cx: width * xf, cy: height * yf };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      smoothProgress += (scrollProgress - smoothProgress) * 0.08;
      const { cx, cy } = centerFor(smoothProgress);
      const R = Math.min(width, height) * 0.42;

      const theta = t * 0.05;

      const projNodes = nodes.map((p) => project(rotate(p, theta), cx, cy, R));
      const projDust = dust.map((p) => project(rotate(p, theta), cx, cy, R));

      // wireframe edges (both hemispheres, faint)
      ctx.lineWidth = 1;
      for (const [i, j] of edges) {
        const a = projNodes[i];
        const b = projNodes[j];
        const avgZ = (a.z + b.z) / 2;
        const alpha = avgZ > 0 ? 0.16 + avgZ * 0.14 : 0.05;
        ctx.strokeStyle = `hsl(${accent} / ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // dust: dense small dots on the front-facing hemisphere (dotted "landmass" texture)
      for (let i = 0; i < projDust.length; i++) {
        const p = projDust[i];
        if (p.z < -0.05) continue;
        const near = mouse.active && Math.hypot(p.x - mouse.x, p.y - mouse.y) < 70;
        const depth = (p.z + 1) / 2;
        const alpha = (0.18 + depth * 0.55) * (near ? 1.5 : 1);
        const size = (0.7 + depth * 0.9) * (near ? 1.6 : 1);
        ctx.fillStyle = `hsl(${accent} / ${Math.min(alpha, 0.95).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // major nodes: larger dots at wireframe intersections
      for (let i = 0; i < projNodes.length; i++) {
        const p = projNodes[i];
        const near = mouse.active && Math.hypot(p.x - mouse.x, p.y - mouse.y) < 90;
        const depth = (p.z + 1) / 2;
        const alpha = 0.35 + depth * 0.55;
        const size = (2 + depth * 2.4) * (near ? 1.6 : 1);
        ctx.fillStyle = `hsl(${accent} / ${(near ? Math.min(alpha + 0.2, 1) : alpha).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      t += 0.15;
      raf = requestAnimationFrame(draw);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      const { cx, cy } = centerFor(scrollProgress);
      const R = Math.min(width, height) * 0.42;
      const projNodes = nodes.map((p) => project(rotate(p, 0.4), cx, cy, R));
      const projDust = dust.map((p) => project(rotate(p, 0.4), cx, cy, R));

      ctx.lineWidth = 1;
      for (const [i, j] of edges) {
        const a = projNodes[i];
        const b = projNodes[j];
        const avgZ = (a.z + b.z) / 2;
        const alpha = avgZ > 0 ? 0.16 + avgZ * 0.14 : 0.05;
        ctx.strokeStyle = `hsl(${accent} / ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      for (let i = 0; i < projDust.length; i++) {
        const p = projDust[i];
        if (p.z < -0.05) continue;
        const depth = (p.z + 1) / 2;
        ctx.fillStyle = `hsl(${accent} / ${Math.min(0.18 + depth * 0.55, 0.95).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.7 + depth * 0.9, 0, Math.PI * 2);
        ctx.fill();
      }
      for (let i = 0; i < projNodes.length; i++) {
        const p = projNodes[i];
        const depth = (p.z + 1) / 2;
        ctx.fillStyle = `hsl(${accent} / ${(0.35 + depth * 0.55).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 + depth * 2.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduceMotionQuery.matches) {
        drawStatic();
      } else {
        raf = requestAnimationFrame(draw);
      }
    };
    start();

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onMouseLeave = () => {
      mouse.active = false;
    };
    const onScroll = () => {
      updateScrollProgress();
      if (reduceMotionQuery.matches) drawStatic();
    };
    const onResize = () => {
      setSize();
      updateScrollProgress();
    };
    const onMotionPrefChange = () => start();

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    reduceMotionQuery.addEventListener('change', onMotionPrefChange);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      reduceMotionQuery.removeEventListener('change', onMotionPrefChange);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-paper">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default BackgroundFX;
