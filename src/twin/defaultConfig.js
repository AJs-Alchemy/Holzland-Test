// Default / fallback scene config + the schema reference.
//
// A real project keeps its own scene.config.js at the project root. <TwinViewer>
// merges whatever it is handed onto this object, so a partial config still runs.
//
// THIS FILE DOUBLES AS THE SCHEMA DOC. Every supported field is listed here with
// a comment. When the skill edits a project's scene.config.js on a plain-language
// request, this is the contract it edits against.

export const defaultConfig = {
  // ---- Splat track (the hero representation) -------------------------------
  // src: path under /public, or a full URL. Spark supports .ply (incl.
  // compressed), .spz, .splat, .ksplat, .sog.
  splat: {
    src: 'https://sparkjs.dev/assets/splats/butterfly.spz',
    // Spark splats often need a 180deg flip to face the viewer upright.
    quaternion: [1, 0, 0, 0],
    position: [0, 0, 0],
    scale: 1,
  },

  // ---- Mesh track (simple PBR, for material demos) -------------------------
  // src: a .glb under /public/models. null = no mesh track, splat only.
  model: {
    src: null,
    position: [0, 0, 0],
    scale: 1,
  },

  // 'splat' | 'mesh': representation shown on load.
  representation: { default: 'splat' },

  // ---- Environment / lighting (mesh track only; splats carry their light) --
  environment: {
    hdri: null, // path to an .hdr under /public/hdri, or null for a preset
    preset: 'studio', // drei Environment preset used when hdri is null
    background: '#0b0b12',
  },

  // ---- Camera --------------------------------------------------------------
  camera: {
    fov: 50,
    // Starting framing.
    position: [0, 0, 4],
    target: [0, 0, 0],
    // Named viewpoints. The skill seeds these from UE camera exports.
    waypoints: [
      // { name: 'entry', position: [x,y,z], target: [x,y,z], fov: 50 },
    ],
    // Ordered list of waypoint names the "Play tour" button steps through.
    tour: [],
    transition: { duration: 2.0, easing: 'power2.inOut' },
  },

  // ---- Material variants (mesh track only) ---------------------------------
  // Each key is a slot. target = mesh name inside the .glb. variants = the
  // swappable options. map/roughnessMap/normalMap are paths under /public.
  materials: {
    // floor: {
    //   target: 'Mesh_Floor',
    //   variants: [
    //     { name: 'Eiche', map: '/models/tex/oak_basecolor.png' },
    //     { name: 'Vinyl', map: '/models/tex/vinyl_basecolor.png' },
    //   ],
    // },
  },

  // ---- Hotspots ------------------------------------------------------------
  hotspots: [
    // { id: 'h1', position: [x,y,z], title: 'Kueche', body: 'Text...' },
  ],

  // ---- Before / after ------------------------------------------------------
  // When enabled, the overlay shows a toggle. 'before'/'after' each name a
  // splat src; if a key is omitted that side falls back to splat.src.
  beforeAfter: {
    enabled: false,
    label: { before: 'Bestand', after: 'Entwurf' },
    before: null, // splat src for the "before" state
    after: null, // splat src for the "after" state
  },

  // ---- Call to action ------------------------------------------------------
  cta: {
    label: null, // null hides the CTA button
    href: '#',
  },

  // ---- Dev panel -----------------------------------------------------------
  // leva live-tuning panel. Off by default so embedded twins stay clean.
  devPanel: false,
}

// Deep-ish merge so a project config only needs the fields it changes.
export function mergeConfig(userConfig = {}) {
  const c = defaultConfig
  const u = userConfig
  return {
    splat: { ...c.splat, ...u.splat },
    model: { ...c.model, ...u.model },
    representation: { ...c.representation, ...u.representation },
    environment: { ...c.environment, ...u.environment },
    camera: { ...c.camera, ...u.camera },
    materials: { ...c.materials, ...u.materials },
    hotspots: u.hotspots ?? c.hotspots,
    beforeAfter: {
      ...c.beforeAfter,
      ...u.beforeAfter,
      label: { ...c.beforeAfter.label, ...(u.beforeAfter?.label) },
    },
    cta: { ...c.cta, ...u.cta },
    devPanel: u.devPanel ?? c.devPanel,
  }
}
