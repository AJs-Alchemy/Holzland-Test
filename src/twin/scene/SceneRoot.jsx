// Everything that lives INSIDE the R3F <Canvas>.
//
// The representation toggle is just a mount switch: only one track is in the
// scene graph at a time. Splat and mesh never render together, which keeps
// the frame budget predictable. Suspense covers the async loads (splat file,
// glTF, textures, environment map).

import { Suspense } from 'react'
import { useTwinStore } from '../store'
import { CameraRig } from './CameraRig'
import { SplatTrack } from './SplatTrack'
import { MeshTrack } from './MeshTrack'
import { Lighting } from './Lighting'
import { Hotspots } from './Hotspots'

export function SceneRoot({ config }) {
  const representation = useTwinStore((s) => s.representation)
  const showMesh = representation === 'mesh' && Boolean(config.model.src)
  const showSplat = representation === 'splat'

  return (
    <>
      <color attach="background" args={[config.environment.background]} />
      <CameraRig config={config} />
      <Suspense fallback={null}>
        {showSplat && <SplatTrack config={config} />}
        {showMesh && (
          <>
            <Lighting config={config} />
            <MeshTrack config={config} />
          </>
        )}
        <Hotspots hotspots={config.hotspots} />
      </Suspense>
    </>
  )
}
