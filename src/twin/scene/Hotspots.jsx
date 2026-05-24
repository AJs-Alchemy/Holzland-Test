// Hotspots: clickable points in 3D space with an info panel.
//
// drei's <Html> projects a DOM node onto a 3D position, so the dot and its
// panel are real HTML (easy to style, accessible) that tracks the splat.

import { Html } from '@react-three/drei'
import { useTwinStore } from '../store'

export function Hotspots({ hotspots }) {
  const active = useTwinStore((s) => s.activeHotspot)
  const setActive = useTwinStore((s) => s.setActiveHotspot)

  if (!hotspots || !hotspots.length) return null

  return hotspots.map((h) => (
    <group key={h.id} position={h.position}>
      <Html center distanceFactor={10} zIndexRange={[40, 0]}>
        <button
          type="button"
          className={`twin-hotspot-dot ${active === h.id ? 'is-open' : ''}`}
          aria-label={h.title}
          onClick={() => setActive(active === h.id ? null : h.id)}
        >
          <span aria-hidden="true">+</span>
        </button>
        {active === h.id && (
          <div className="twin-hotspot-panel" role="dialog" aria-label={h.title}>
            <h4>{h.title}</h4>
            <p>{h.body}</p>
          </div>
        )}
      </Html>
    </group>
  ))
}
