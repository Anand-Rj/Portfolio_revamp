/* Personal monogram: a cobalt tile with a mono "arj". */
const Monogram = ({ size = 30 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="32" height="32" rx="7" fill="hsl(var(--accent))" />
    <text
      x="16"
      y="17"
      dominantBaseline="central"
      textAnchor="middle"
      fontFamily="'JetBrains Mono', ui-monospace, monospace"
      fontSize="11"
      fontWeight="600"
      letterSpacing="-0.5"
      fill="hsl(var(--paper))"
    >
      arj
    </text>
  </svg>
);

export default Monogram;
