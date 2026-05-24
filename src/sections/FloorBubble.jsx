import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import clsx from 'clsx'
import { gsap } from '../lib/gsap'
import { Icon } from './Icon'

// Wide bubble per floor. Always iframe LEFT, info card RIGHT (no alternating).
// Badge in the top-left corner of the splat reads "Digitaler Showroom NN".
export function FloorBubble({ floor, index }) {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from(root.current, {
        opacity: 0,
        y: 48,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: root.current, start: 'top 85%' },
      })
    },
    { scope: root },
  )

  return (
    <article
      ref={root}
      className={clsx(
        'relative grid overflow-hidden rounded-[2.5rem] border border-cream/10 bg-ink-soft',
        'shadow-2xl shadow-black/30 lg:grid-cols-[1.25fr_1fr]',
      )}
    >
      <div className="relative bg-black">
        <div className="aspect-[16/11] w-full lg:aspect-auto lg:h-full lg:min-h-[520px]">
          <iframe
            src={floor.splatUrl}
            title={`Gaussian Splat: ${floor.name}`}
            className="h-full w-full border-0"
            allow="fullscreen; xr-spatial-tracking"
            loading="lazy"
          />
        </div>
        <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-ink/70 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-cream/80 backdrop-blur">
          Digitaler Showroom {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-bronze">
          {floor.subtitle}
        </p>
        <h3 className="mt-3 text-3xl font-bold leading-tight text-cream sm:text-4xl">
          {floor.name}
        </h3>
        <p className="mt-3 text-2xl font-semibold text-bronze">{floor.price}</p>

        <ul className="mt-7 space-y-4">
          {floor.props.map((p) => (
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
          Muster anfragen
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}
