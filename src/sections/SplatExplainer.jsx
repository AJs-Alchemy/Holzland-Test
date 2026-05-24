import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

const steps = [
  {
    no: '01',
    title: 'Synthetisch entworfen',
    body: 'Der Raum entsteht am Rechner, nicht in der Kamera. KI-generierte 3D-Szenen statt fotografierter Showrooms. Frei vom Limit dessen, was real gebaut ist.',
  },
  {
    no: '02',
    title: 'Als Gaussian Splat gerendert',
    body: 'Aus dem Raum werden Millionen winziger 3D-Lichtpunkte. Jeder Punkt weiß, wo er liegt, welche Farbe er hat und wie er aus jedem Blickwinkel aussieht.',
  },
  {
    no: '03',
    title: 'Im Browser begehbar',
    body: 'Ein Link öffnet die Szene. Drehen, zoomen, Boden umschalten. Kein Foto, kein Video: ein echtes 3D-Abbild von deinem Material.',
  },
]

export function SplatExplainer() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.explainer-step', {
        opacity: 0,
        y: 32,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
      gsap.from('.explainer-image', {
        opacity: 0,
        scale: 0.96,
        duration: 1.0,
        ease: 'power2.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
    },
    { scope: root },
  )

  return (
    <section
      id="splat-explainer"
      ref={root}
      className="section-pad relative pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      <div className="mb-12 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-bronze">
          Bevor wir loslegen , kurz erklärt
        </p>
        <h2 className="text-4xl font-bold leading-tight text-cream sm:text-5xl">
          Ich zeig dir Showrooms,
          <br />
          die's gar nicht gibt.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/70">
          Klassische Splats kommen aus echten Räumen, mit hunderten Fotos
          abgescannt. Meine kommen direkt aus der KI. Heißt: ich bau den Raum
          am Rechner, zieh euren Boden rein, und dein Kunde läuft durch, bevor
          der Maurer überhaupt weiß, dass er kommt.
        </p>
      </div>

      <div className="explainer-image relative mb-14 overflow-hidden rounded-[2rem] border border-cream/10 shadow-2xl shadow-black/40">
        <img
          src="/images/splat-explainer.png"
          alt="Visualisierung: Holzboden links als Foto, rechts aufgelöst in Millionen farbiger Gaussian-Splat-Partikel"
          className="block w-full"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/60 to-transparent" />
        <p className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.25em] text-cream">
          Vom synthetischen Raum zum begehbaren Splat
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <article
            key={s.no}
            className="explainer-step rounded-2xl border border-cream/10 bg-ink-soft p-7"
          >
            <span className="text-xs font-bold tracking-[0.3em] text-bronze">
              {s.no}
            </span>
            <h3 className="mt-3 text-2xl font-bold text-cream">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/65">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
