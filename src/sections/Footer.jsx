export function Footer() {
  return (
    <footer
      id="kontakt"
      className="section-pad border-t border-cream/5 bg-ink py-16"
    >
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="inline-block rounded-2xl bg-cream px-4 py-3 shadow-sm shadow-black/30">
            <img
              src="/images/holzland-logo-schwarz.png"
              alt="HolzLand Wischmann"
              className="block h-9 w-auto max-w-[200px] object-contain"
            />
          </span>
          <p className="mt-5 max-w-sm text-sm text-cream/60">
            Schöner wohnen, bevor gebaut wird. Drei Böden, drei begehbare
            Showrooms, direkt im Browser erlebbar.
          </p>
        </div>
        <a
          href="mailto:info@holzland-wischmann.de"
          className="rounded-full bg-bronze px-7 py-3 font-semibold text-ink shadow-lg shadow-bronze/20 transition-transform hover:-translate-y-0.5"
        >
          Muster anfragen
        </a>
      </div>
      <p className="mt-12 text-xs text-cream/40">
        © HolzLand Wischmann , Demo gebaut von Mark Ajayi für dich.
      </p>
    </footer>
  )
}
