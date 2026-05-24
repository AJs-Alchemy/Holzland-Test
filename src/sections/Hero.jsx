import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

export function Hero() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.hero-line', {
        yPercent: 110,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      })
      gsap.from('.hero-tail', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        delay: 0.55,
        stagger: 0.1,
        ease: 'power2.out',
      })
      gsap.from('.hero-art', {
        opacity: 0,
        scale: 0.94,
        duration: 1.2,
        delay: 0.4,
        ease: 'power2.out',
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="section-pad relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 grain-overlay"
    >
      <div className="pointer-events-none absolute -top-1/3 left-1/3 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-bronze/15 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-1/3 right-0 h-[60vh] w-[60vh] rounded-full bg-moss/10 blur-[140px]" />

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="hero-tail mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-bronze">
            <span className="h-px w-10 bg-bronze" />
            Eine kleine Demo , von Mark für Marc
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] text-cream sm:text-6xl">
            <span className="block overflow-hidden">
              <span className="hero-line block">Stell dir vor,</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block">dein Showroom</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block text-bronze">ist immer offen.</span>
            </span>
          </h1>

          <p className="hero-tail mt-8 max-w-xl text-lg leading-relaxed text-cream/70">
            Drei eurer Böden, drei begehbare 3D-Räume direkt im Browser. Dein
            Kunde sitzt sonntags um halb elf zuhause auf dem Sofa, dreht den
            Raum mit der Maus, vergleicht die Maserung, klickt auf „Muster
            anfragen". Du beschäftigst dich derweil mit Wichtigerem.
          </p>

          <div className="hero-tail mt-10 flex flex-wrap gap-4">
            <a
              href="#vision-twins"
              className="rounded-full bg-bronze px-7 py-3 font-semibold text-ink shadow-lg shadow-bronze/20 transition-transform hover:-translate-y-0.5"
            >
              Zeig her, die Böden
            </a>
            <a
              href="#splat-explainer"
              className="rounded-full border border-cream/15 px-7 py-3 font-semibold text-cream transition-colors hover:bg-cream/5"
            >
              Was ist ein Splat?
            </a>
          </div>

          <p className="hero-tail mt-14 text-xs uppercase tracking-[0.3em] text-cream/40">
            Schöner zeigen, bevor gebaut wird.
          </p>
        </div>

        <div className="hero-art relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-cream/10 shadow-2xl shadow-black/50">
            <img
              src="/images/hero-landscape.png"
              alt="Synthetische Splat-Szene: warmer Wohnraum mit Holzboden, Partikel-Dissolve an den Raendern"
              className="block aspect-[16/9] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink/55 to-transparent" />
            <p className="absolute bottom-5 left-6 right-6 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-cream/80">
              Synthetischer Showroom , Wohnzimmer-Szene
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
