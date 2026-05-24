import { floors } from '../constants'
import { FloorBubble } from './FloorBubble'

// Compact key-hint banner above the first interactive splat. Casual tone,
// monospace pills for the keys, two-row mini explainer.
function SplatControlsHint() {
  return (
    <div className="mx-auto mb-10 max-w-3xl rounded-2xl border border-cream/10 bg-ink-soft/70 px-6 py-5 backdrop-blur">
      <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-bronze">
        Kurze Bedienanleitung, dann darfst du klicken
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex items-start gap-4">
          <div className="flex shrink-0 gap-1">
            {['W', 'A', 'S', 'D'].map((k) => (
              <span
                key={k}
                className="grid h-7 w-7 place-items-center rounded-md bg-bronze/20 font-mono text-[0.7rem] font-bold text-bronze"
              >
                {k}
              </span>
            ))}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-cream">Bewegt dich durch den Raum.</p>
            <p className="mt-0.5 text-xs text-cream/55">Wie in jedem Computerspiel.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="grid h-7 shrink-0 place-items-center whitespace-nowrap rounded-md bg-bronze/20 px-2.5 font-mono text-[0.7rem] font-bold text-bronze">
            2× Klick
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-cream">Wechselt zwischen Modi.</p>
            <p className="mt-0.5 text-xs text-cream/55">
              Drehkamera (Orbit) ↔ freie Begehung (Drohne).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function VisionTwins() {
  return (
    <section id="vision-twins" className="section-pad pt-6 pb-24 sm:pt-8 sm:pb-28">
      <div className="mb-10 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-bronze">
          Deine drei Böden
        </p>
        <h2 className="text-4xl font-bold leading-tight text-cream sm:text-5xl">
          Drei Räume, drei Stimmungen, alle interaktiv.
        </h2>
        <p className="mt-5 text-lg text-cream/65">
          Jeder Boden in seinem eigenen synthetischen Showroom. Links der
          lebende Splat zum Drehen und Zoomen, rechts die harten Fakten.
          Klick dich durch, fühl rein.
        </p>
      </div>

      <SplatControlsHint />

      <div className="space-y-8">
        {floors.map((floor, i) => (
          <FloorBubble key={floor.id} floor={floor} index={i} />
        ))}
      </div>
    </section>
  )
}
