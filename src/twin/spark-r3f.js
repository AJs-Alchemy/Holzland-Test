// Spark.js <-> React-Three-Fiber bindings.
//
// Spark ships plain Three.js classes. R3F's extend() registers a class so it
// can be used as a JSX element. This is exactly the pattern from the official
// sparkjsdev/spark-react-r3f repo.
//
// Usage after this file:
//   <SparkRenderer args={[{ renderer: gl }]} />   // gl from useThree()
//   <SplatMesh args={[{ url: '/splats/scene.spz' }]} position={[0,0,0]} />
//
// extend() with a single class returns a typed PascalCase component (R3F v9).

import { extend } from '@react-three/fiber'
import {
  SparkRenderer as SparkRendererImpl,
  SplatMesh as SplatMeshImpl,
} from '@sparkjsdev/spark'

export const SparkRenderer = extend(SparkRendererImpl)
export const SplatMesh = extend(SplatMeshImpl)
