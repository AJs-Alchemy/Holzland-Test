// DOM overlay on top of the canvas.
//
// All twin interaction the user sees lives here: representation toggle,
// before/after, material swatches, the tour button and the CTA. Each control
// only appears when scene.config actually declares it, so a minimal config
// yields a minimal UI. The overlay reads and writes the Zustand store; it
// never touches the 3D scene directly.

import { useTwinStore } from '../store'

export function Overlay({ config }) {
  const representation = useTwinStore((s) => s.representation)
  const setRepresentation = useTwinStore((s) => s.setRepresentation)
  const beforeAfter = useTwinStore((s) => s.beforeAfter)
  const setBeforeAfter = useTwinStore((s) => s.setBeforeAfter)
  const materialSelections = useTwinStore((s) => s.materialSelections)
  const setMaterial = useTwinStore((s) => s.setMaterial)
  const requestTour = useTwinStore((s) => s.requestTour)
  const tourPlaying = useTwinStore((s) => s.tourPlaying)

  const hasMesh = Boolean(config.model.src)
  const hasMaterials = Object.keys(config.materials).length > 0
  const hasTour =
    (config.camera.tour || []).length > 0 &&
    (config.camera.waypoints || []).length > 0
  const ba = config.beforeAfter

  return (
    <div className="twin-ui">
      {hasMesh && (
        <div className="twin-seg twin-seg--tl" role="group" aria-label="Darstellung">
          <button
            type="button"
            className={representation === 'splat' ? 'is-active' : ''}
            onClick={() => setRepresentation('splat')}
          >
            Splat
          </button>
          <button
            type="button"
            className={representation === 'mesh' ? 'is-active' : ''}
            onClick={() => setRepresentation('mesh')}
          >
            Modell
          </button>
        </div>
      )}

      {ba.enabled && (
        <div className="twin-seg twin-seg--tr" role="group" aria-label="Vergleich">
          <button
            type="button"
            className={beforeAfter === 'before' ? 'is-active' : ''}
            onClick={() => setBeforeAfter('before')}
          >
            {ba.label.before}
          </button>
          <button
            type="button"
            className={beforeAfter === 'after' ? 'is-active' : ''}
            onClick={() => setBeforeAfter('after')}
          >
            {ba.label.after}
          </button>
        </div>
      )}

      {hasMesh && hasMaterials && representation === 'mesh' && (
        <div className="twin-materials">
          {Object.entries(config.materials).map(([slotKey, slot]) => (
            <div key={slotKey} className="twin-material-slot">
              <span className="twin-material-label">{slotKey}</span>
              <div className="twin-swatches">
                {(slot.variants || []).map((variant, i) => (
                  <button
                    type="button"
                    key={variant.name}
                    title={variant.name}
                    className={`twin-swatch ${
                      (materialSelections[slotKey] ?? 0) === i ? 'is-active' : ''
                    }`}
                    style={variant.color ? { background: variant.color } : undefined}
                    onClick={() => setMaterial(slotKey, i)}
                  >
                    {variant.color ? '' : variant.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="twin-bottom">
        {hasTour && (
          <button
            type="button"
            className="twin-btn"
            disabled={tourPlaying}
            onClick={requestTour}
          >
            {tourPlaying ? 'Tour laeuft' : 'Tour abspielen'}
          </button>
        )}
        {config.cta.label && (
          <a className="twin-btn twin-btn--cta" href={config.cta.href}>
            {config.cta.label}
          </a>
        )}
      </div>
    </div>
  )
}
