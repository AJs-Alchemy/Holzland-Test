import { navLinks } from '../constants'

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="section-pad flex items-center justify-between border-b border-cream/5 bg-ink/75 py-4 backdrop-blur-md">
        <a href="#" className="flex items-center">
          <span className="block rounded-xl bg-cream px-3 py-2 shadow-sm shadow-black/30">
            <img
              src="/images/holzland-logo-schwarz.png"
              alt="HolzLand Wischmann"
              className="block h-6 w-auto max-w-[150px] object-contain sm:h-7"
            />
          </span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-cream/65 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#kontakt"
          className="rounded-full bg-bronze px-5 py-2 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
        >
          Muster anfragen
        </a>
      </nav>
    </header>
  )
}
