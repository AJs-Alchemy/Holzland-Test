import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import clsx from 'clsx'
import { gsap } from '../lib/gsap'
import { floors } from '../constants'
import { Icon } from './Icon'

const SWATCH_NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><filter id='n'><feTurbulence baseFrequency='1.4' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0.6 0 0 0 0 0.4 0 0 0 0 0.2 0 0 0 0.7 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"

// The "Vergleichsraum": one persistent splat embed plus swatch tabs at the top
// of the right info column. Click a swatch -> iframe key changes -> new floor
// in the same room. iframe key={active.id} forces a clean re-mount.
export function SalesTwin() {
  const root = useRef(null)
  const [activeId, setActiveId] = useState(floors[0].id)
  const active = floors.find((f) => f.id === activeId) || floors[0]

  useGSAP(
    () => {
      gsap.from('.sales-twin-tail', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
      gsap.from('.sales-twin-frame', {
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
    },
    { scope: root },
  )

  return (
    <section
      id="sales-twin"
      ref={root}
      className="section-pad relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-bronze/10 blur-[160px]" />
      </div>

      <div className="relative">
        <div className="mb-12 max-w-3xl">
          <p className="sales-twin-tail mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-bronze">
            Der Vergleichsraum
          </p>
          <h2 className="sales-twin-tail text-4xl font-bold leading-tight text-cream sm:text-5xl">
            Gleicher Raum, drei Böden.
            <br />
            Per Klick gewechselt.
          </h2>
          <p className="sales-twin-tail mt-5 text-lg text-cream/65">
            Wie der Konfigurator bei Apple oder Porsche, nur für Bodenbeläge.
            Dein Kunde klickt oben einen anderen Boden, sieht ihn live im
            selben Raum, vergleicht die Daten direkt nebenan. Kein Wechseln
            zwischen Browser-Tabs.
          </p>
        </div>

        <article
          className={clsx(
            'sales-twin-frame relative grid overflow-hidden rounded-[2.5rem] border border-cream/10 bg-ink-soft',
            'shadow-2xl shadow-black/40 lg:grid-cols-[1.25fr_1fr]',
          )}
        >
          <div className="relative bg-black">
            <div className="aspect-[16/11] w-full lg:aspect-auto lg:h-full lg:min-h-[600px]">
              <iframe
                key={active.id}
                src={active.splatUrl}
                title={`Vergleichsraum: ${active.name}`}
                className="h-full w-full border-0"
                allow="fullscreen; xr-spatial-tracking"
              />
            </div>
            <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-ink/70 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-cream/80 backdrop-blur">
              Vergleichsraum
            </div>
          </div>

          <div className="flex flex-col p-8 sm:p-10 lg:p-12">
            <div role="tablist" aria-label="Boden auswählen">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-cream/45">
                Boden auswählen
              </p>
              <div className="mt-4 flex flex-wrap items-start gap-x-5 gap-y-3">
                {floors.map((f) => {
                  const isActive = f.id === activeId
                  return (
                    <button
                      key={f.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveId(f.id)}
                      className="group flex w-[92px] flex-col items-center text-center focus:outline-none"
                    >
                      <span
                        className={clsx(
                          'relative grid place-items-center rounded-full transition-all duration-300',
                          isActive
                            ? 'h-[58px] w-[58px] ring-2 ring-bronze ring-offset-2 ring-offset-ink-soft'
                            : 'h-[50px] w-[50px] ring-1 ring-cream/15 group-hover:ring-cream/40',
                        )}
                      >
                        <span
                          className="block h-full w-full rounded-full shadow-inner shadow-black/40"
                          style={{ background: f.swatch }}
                        />
                        <span
                          className="pointer-events-none absolute inset-0 rounded-full opacity-40 mix-blend-overlay"
                          style={{
                            backgroundImage: SWATCH_NOISE,
                            backgroundSize: '60px 60px',
                          }}
                        />
                      </span>
                      <span
                        className={clsx(
                          'mt-2.5 text-[0.7rem] font-semibold leading-tight transition-colors',
                          isActive
                            ? 'text-cream'
                            : 'text-cream/60 group-hover:text-cream',
                        )}
                      >
                        {f.name}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-cream/10 pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-bronze">
                {active.subtitle}
              </p>
              <h3 className="mt-3 text-3xl font-bold leading-tight text-cream sm:text-4xl">
                {active.name}
              </h3>
              <p className="mt-3 text-2xl font-semibold text-bronze">
                {active.price}
              </p>

              <ul className="mt-7 space-y-4">
                {active.props.map((p) => (
                  <li key={p.label} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-bronze/30 bg-bronze/10 text-bronze">
                      <Icon name={p.icon} className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cream/45">
                        {p.label}
                      </p>
                      <p className="mt-0.5 text-sm text-cream/90">{p.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-bronze px-6 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Muster für {active.name} anfragen
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
