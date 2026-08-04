/*
  Subtle living background: a faint dot grid fading toward the top and one
  slow-drifting cobalt glow. Sits behind all content, ignores pointer events,
  and goes still under prefers-reduced-motion.
*/
const BackgroundFX = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <div className="absolute inset-0 bg-grid" />
  </div>
);

export default BackgroundFX;
