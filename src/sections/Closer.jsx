import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

// Closer block: same treatment offered for the rest of the sortiment. Cards
// use Higgsfield-generated synthetic-splat scenes in the same visual language
// as the floor splats. Image and body sit cleanly stacked, no negative-margin
// overlap that clips title text.
const categories = [
  {
    id: 'sichtschutz',
    name: 'Sichtschutz',
    body: 'Vertikale Holzlamellen, individuell konfigurierbar, im synthetischen Garten erlebbar bevor das erste Brett geliefert wird.',
    image: '/images/closer-sichtschutz.png',
  },
  {
    id: 'tueren',
    name: 'Türen',
    body: 'Innentüren in echtem Massivholz, Dekorvariante per Klick gewechselt, im virtuellen Flur direkt in Wirkung gesehen.',
    image: '/images/closer-tueren.png',
  },
  {
    id: 'terrasse',
    name: 'Terrassenbau',
    body: 'Diele, Unterbau, Geländer , als Splat-Szene mit goldener Stunde, lange bevor der Bagger anrückt.',
    image: '/images/closer-terrasse.png',
  },
]

export function Closer() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.closer-tail', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: root.current, start: 'top 80%' },
      })
      gsap.from('.closer-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
    },
    { scope: root },
  )

  return (
    <section
      id="closer"
      ref={root}
      className="section-pad relative overflow-hidden py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/4 right-1/3 h-[55vh] w-[55vh] rounded-full bg-bronze/10 blur-[160px]" />
      </div>

      <div className="relative mb-14 max-w-3xl">
        <p className="closer-tail mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-bronze">
          Falls du Bock hast
        </p>
        <h2 className="closer-tail text-4xl font-bold leading-tight text-cream sm:text-5xl">
          Das Gleiche bau ich dir
          <br />
          auch für den Rest.
        </h2>
        <p className="closer-tail mt-5 text-lg text-cream/65">
          Böden sind nur der Anfang. Sichtschutz, Türen, Terrassenbau , jedes
          Material bei euch kann als interaktiver Vergleichsraum gezeigt werden.
          Drei Beispiele unten als Vorgeschmack.
        </p>
      </div>

      <div className="relative grid items-stretch gap-6 md:grid-cols-3">
        {categories.map((c) => (
          <article
            key={c.id}
            className="closer-card group flex h-full flex-col overflow-hidden rounded-3xl border border-cream/10 bg-ink-soft shadow-2xl shadow-black/30 transition-transform hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-black">
              <img
                src={c.image}
                alt={`Synthetische Splat-Szene fuer ${c.name}`}
                className="block h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-soft to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-bronze">
                Vergleichsraum-Idee
              </p>
              <h3 className="mt-2 text-2xl font-bold text-cream">{c.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                {c.body}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="relative mt-14 overflow-hidden rounded-3xl border border-bronze/25 bg-ink-soft p-8 sm:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-bronze/15 blur-[100px]" />
        <p className="relative text-[0.7rem] font-bold uppercase tracking-[0.3em] text-bronze">
          Nächster Schritt
        </p>
        <p className="relative mt-3 max-w-3xl text-xl font-semibold leading-relaxed text-cream sm:text-2xl">
          Falls du Bock hast, sag einfach Bescheid. Ich bau dir einen Showroom
          ohnegleichen, einen ohne Konkurrenz, setze deine Marke auf eine neue
          Empore und liefere dir Marketing-Material von übermorgen. Wenn wir
          reden, reden wir persönlich , kein Call, kein Kalender-Pingpong. Sag
          mir was du willst, und ich bau dir etwas, von dem du dir nicht
          hättest träumen lassen können.
        </p>
      </div>
    </section>
  )
}
