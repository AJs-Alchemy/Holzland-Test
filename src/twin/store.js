// Zustand store for the Twin viewer.
//
// One global store holds every piece of interactive state the scene and the
// UI overlay both need to read. Components subscribe with useTwinStore(s => s.x)
// so a change only re-renders the components that use that slice.
//
// This is the same idea as the useMacBookStore pattern, kept deliberately
// small. scene.config is the static description of a twin; this store is the
// live state on top of it.

import { create } from 'zustand'

export const useTwinStore = create((set) => ({
  // 'splat' | 'mesh': which representation of the scene is shown.
  representation: 'splat',
  setRepresentation: (representation) => set({ representation }),

  // 'before' | 'after': only meaningful when scene.config.beforeAfter.enabled.
  beforeAfter: 'after',
  setBeforeAfter: (beforeAfter) => set({ beforeAfter }),

  // { [slotKey]: variantIndex }: selected material variant per mesh slot.
  materialSelections: {},
  setMaterial: (slot, index) =>
    set((s) => ({
      materialSelections: { ...s.materialSelections, [slot]: index },
    })),
  // Seed all slots at once (called once from TwinViewer with the config).
  initMaterials: (selections) => set({ materialSelections: selections }),

  // id of the hotspot whose info panel is open, or null.
  activeHotspot: null,
  setActiveHotspot: (activeHotspot) => set({ activeHotspot }),

  // true while a camera tour is running (used to lock orbit controls).
  tourPlaying: false,
  setTourPlaying: (tourPlaying) => set({ tourPlaying }),

  // Bumping this integer asks CameraRig to (re)start the tour. null = idle.
  tourRequest: 0,
  requestTour: () => set((s) => ({ tourRequest: s.tourRequest + 1 })),

  // Live camera readout, written by CameraRig, read by the leva panel so the
  // "Export Config" button can dump the current framing.
  cameraReadout: { position: [0, 0, 0], target: [0, 0, 0], fov: 50 },
  setCameraReadout: (cameraReadout) => set({ cameraReadout }),
}))
