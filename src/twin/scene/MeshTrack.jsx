// Mesh representation: simple PBR, used for material demos.
//
// The GLTF scene from useGLTF is cached and shared, so it is cloned (geometry
// AND materials) before anything is mutated. Mutating the cached original
// would bleed edits across every mount, the classic shared-material trap.
//
// Material variants: for each slot in config.materials, the target mesh's
// material map is swapped to the selected variant's texture.

import { useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import { SRGBColorSpace } from 'three'
import { useTwinStore } from '../store'

export function MeshTrack({ config }) {
  const { scene } = useGLTF(config.model.src)

  // Clone scene + per-mesh materials so edits stay local to this instance.
  const cloned = useMemo(() => {
    const copy = scene.clone(true)
    copy.traverse((o) => {
      if (o.isMesh && o.material) o.material = o.material.clone()
    })
    return copy
  }, [scene])

  // Every unique variant texture across all slots, loaded once.
  const slots = config.materials
  const allMaps = useMemo(() => {
    const set = new Set()
    Object.values(slots).forEach((slot) =>
      (slot.variants || []).forEach((v) => v.map && set.add(v.map)),
    )
    return [...set]
  }, [slots])

  const textures = useTexture(allMaps)
  const texByPath = useMemo(() => {
    const out = {}
    allMaps.forEach((path, i) => {
      const tex = Array.isArray(textures) ? textures[i] : textures
      if (!tex) return
      tex.colorSpace = SRGBColorSpace
      tex.flipY = false // glTF UV convention
      tex.needsUpdate = true
      out[path] = tex
    })
    return out
  }, [allMaps, textures])

  const selections = useTwinStore((s) => s.materialSelections)

  useEffect(() => {
    Object.entries(slots).forEach(([slotKey, slot]) => {
      const variant = (slot.variants || [])[selections[slotKey] ?? 0]
      if (!variant) return
      const mesh = cloned.getObjectByName(slot.target)
      if (!mesh || !mesh.material) return
      if (variant.map && texByPath[variant.map]) {
        mesh.material.map = texByPath[variant.map]
      }
      if (variant.color) mesh.material.color.set(variant.color)
      if (typeof variant.roughness === 'number') {
        mesh.material.roughness = variant.roughness
      }
      mesh.material.needsUpdate = true
    })
  }, [slots, selections, cloned, texByPath])

  return (
    <primitive
      object={cloned}
      position={config.model.position}
      scale={config.model.scale}
    />
  )
}
