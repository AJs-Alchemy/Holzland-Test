// Splat representation, the hero. Renders the Gaussian splat through Spark.
//
// SparkRenderer must live in the scene graph for splats to draw; it is given
// the R3F WebGLRenderer via args. SplatMesh loads the splat file itself.
//
// key={url} forces a fresh SplatMesh when the before/after source changes, so
// the new splat actually reloads instead of keeping stale data.

import { useThree } from '@react-three/fiber'
import { SparkRenderer, SplatMesh } from '../spark-r3f'
import { useTwinStore } from '../store'

export function SplatTrack({ config }) {
  const gl = useThree((s) => s.gl)
  const beforeAfter = useTwinStore((s) => s.beforeAfter)

  const ba = config.beforeAfter
  let url = config.splat.src
  if (ba.enabled) {
    url =
      beforeAfter === 'before'
        ? ba.before ?? config.splat.src
        : ba.after ?? config.splat.src
  }

  return (
    <group>
      <SparkRenderer args={[{ renderer: gl }]} />
      <SplatMesh
        key={url}
        args={[{ url }]}
        position={config.splat.position}
        quaternion={config.splat.quaternion}
        scale={config.splat.scale}
      />
    </group>
  )
}
