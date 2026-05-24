// scene.config.js
//
// Config for the twin embedded in TwinSection. Same schema as Modus A; see
// src/twin/defaultConfig.js for every field. devPanel is off here because the
// leva panel is a dev tool, not something a site visitor should see.

export default {
  splat: {
    src: 'https://sparkjs.dev/assets/splats/butterfly.spz',
    quaternion: [1, 0, 0, 0],
  },

  representation: { default: 'splat' },

  // Drop a UE mesh export into public/models/ and uncomment to enable the
  // Splat/Modell toggle and material variants. See ue-export-recipe.md.
  //
  // model: { src: '/models/showroom.glb' },
  // materials: { ... },

  camera: {
    fov: 50,
    position: [0, 0, 4],
    target: [0, 0, 0],
    waypoints: [
      { name: 'front', position: [0, 0, 4], target: [0, 0, 0], fov: 50 },
      { name: 'side', position: [3.4, 0.6, 1.6], target: [0, 0, 0], fov: 46 },
      { name: 'top', position: [0, 3.4, 1.6], target: [0, 0, 0], fov: 55 },
    ],
    tour: ['side', 'top', 'front'],
    transition: { duration: 2.2, easing: 'power2.inOut' },
  },

  hotspots: [
    {
      id: 'detail',
      position: [0.6, 0.35, 0],
      title: 'Detailpunkt',
      body: 'Hotspots verankern Info-Panels an einer 3D-Position im Twin.',
    },
  ],

  // The page already has its own calls to action, so the twin keeps none.
  cta: { label: null },

  devPanel: false,
}
