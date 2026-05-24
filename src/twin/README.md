# twin-module

The reusable Twin viewer. A React-Three-Fiber component that renders a Gaussian
splat scene (via Spark.js) with switchable mesh representation, material
variants, camera tours, hotspots, before/after and a CTA.

This folder is copied into a project as `src/twin/`. Both scaffold modes use it:
`twin-app` mounts it full-screen, `website-starter` embeds it in one section.

## Usage

```jsx
import { TwinViewer } from './twin/TwinViewer'
import sceneConfig from './scene.config.js'

<TwinViewer config={sceneConfig} />
```

`<TwinViewer>` fills its parent container. Give the parent a size.

## The contract: scene.config

`scene.config.js` is the single source of truth for a twin. The skill edits it
on plain-language requests; you rarely touch the component code. Every field is
documented in `defaultConfig.js`, which also supplies fallbacks so a partial
config still runs.

## Peer dependencies

The host project must install: `react`, `react-dom`, `three`,
`@react-three/fiber`, `@react-three/drei`, `@sparkjsdev/spark`, `gsap`,
`zustand`, `leva`. Both starter projects already declare these.

## File map

```
twin/
├── TwinViewer.jsx     Public entry. Canvas + overlay + optional dev panel.
├── defaultConfig.js   scene.config schema, fallbacks, mergeConfig().
├── store.js           Zustand store: live interactive state.
├── spark-r3f.js       extend() bindings: Spark classes as JSX elements.
├── twin.css           Scoped overlay styles (no global reset, embed-safe).
├── scene/
│   ├── SceneRoot.jsx  Everything inside <Canvas>.
│   ├── SplatTrack.jsx Spark splat (the hero representation).
│   ├── MeshTrack.jsx  glTF mesh + material variant swapping.
│   ├── Lighting.jsx   Environment + key light, mesh track only.
│   ├── CameraRig.jsx  OrbitControls + GSAP camera tours.
│   └── Hotspots.jsx   drei <Html> hotspots with info panels.
└── ui/
    ├── Overlay.jsx    DOM controls (config-driven, only shows what exists).
    └── LevaPanel.jsx  Dev panel: tune framing, export to scene.config.
```

## Design notes

- **Splat is the hero.** Lighting is baked into the splat capture. The mesh
  track is deliberately simple PBR for material demos only.
- **One track at a time.** The representation toggle is a mount switch, so the
  frame budget stays predictable.
- **Embed-safe.** Plain scoped CSS, no Tailwind preflight, no global reset.
- **Maintenance.** This folder is duplicated into each scaffolded project.
  Improvements should be synced back here so future projects inherit them.
