// <TwinViewer config={sceneConfig} />
//
// The single public entry point of the twin module. Drop it anywhere: it fills
// its parent container, so it works full-screen (twin-app) or inside one
// section of a page (website-starter). It owns the R3F Canvas, the DOM overlay
// and the optional leva panel.
//
// Everything below is driven by scene.config. To change a twin, edit the
// config, not this component.

import { Canvas } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import { mergeConfig } from './defaultConfig'
import { useTwinStore } from './store'
import { SceneRoot } from './scene/SceneRoot'
import { Overlay } from './ui/Overlay'
import { LevaPanel } from './ui/LevaPanel'
import './twin.css'

export function TwinViewer({ config: userConfig, className = '', style }) {
  const config = useMemo(() => mergeConfig(userConfig), [userConfig])

  const initMaterials = useTwinStore((s) => s.initMaterials)
  const setRepresentation = useTwinStore((s) => s.setRepresentation)
  const setBeforeAfter = useTwinStore((s) => s.setBeforeAfter)

  // Seed live state from the static config, once per config.
  useEffect(() => {
    const selections = {}
    Object.keys(config.materials).forEach((slot) => {
      selections[slot] = 0
    })
    initMaterials(selections)
    setRepresentation(config.representation.default)
    setBeforeAfter('after')
  }, [config, initMaterials, setRepresentation, setBeforeAfter])

  return (
    <div className={`twin-viewer ${className}`.trim()} style={style}>
      <Canvas
        camera={{ fov: config.camera.fov, position: config.camera.position }}
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <SceneRoot config={config} />
      </Canvas>
      <Overlay config={config} />
      {config.devPanel && <LevaPanel />}
    </div>
  )
}

export default TwinViewer
