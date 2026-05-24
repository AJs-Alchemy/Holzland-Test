// Lighting for the MESH track only.
//
// Splats carry their captured lighting, so the splat track needs none of this.
// The mesh track is "simple PBR for material demos" by design (grill decision):
// an environment map for soft reflections plus one key light. No attempt to
// reproduce the Unreal Engine lighting faithfully.

import { Environment } from '@react-three/drei'

export function Lighting({ config }) {
  const env = config.environment
  return (
    <>
      {env.hdri ? (
        <Environment files={env.hdri} />
      ) : (
        <Environment preset={env.preset} />
      )}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.4} castShadow />
    </>
  )
}
