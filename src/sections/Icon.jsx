// Lightweight inline SVG icons. No extra dep, no font request.
// Stroke-based, currentColor, sized via `className`.

const paths = {
  shield: (
    <path d="M12 3l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V6l8-3z" />
  ),
  ruler: (
    <>
      <path d="M3 14l11-11 7 7-11 11z" />
      <path d="M7 18l-1-1M9 16l-1-1M11 14l-1-1M13 12l-1-1M15 10l-1-1M17 8l-1-1" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 100 18 3 3 0 002.8-4.1c-.3-.6.1-1.4.8-1.4H17a4 4 0 004-4c0-4.4-4-8-9-8z" />
      <circle cx="7.5" cy="11" r="1" />
      <circle cx="10" cy="7.5" r="1" />
      <circle cx="14" cy="7.5" r="1" />
      <circle cx="16.5" cy="11" r="1" />
    </>
  ),
  home: (
    <>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20s2-12 16-16c0 0 0 12-8 16-3 1.5-8 0-8 0z" />
      <path d="M4 20c4-4 8-7 12-9" />
    </>
  ),
}

export function Icon({ name, className = 'h-5 w-5' }) {
  const body = paths[name]
  if (!body) return null
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {body}
    </svg>
  )
}
