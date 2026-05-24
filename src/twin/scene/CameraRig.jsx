// Camera: free orbit plus scripted tours.
//
// OrbitControls handles user look-around. A tour is a GSAP timeline that steps
// the camera through named waypoints from scene.config; orbit is disabled while
// it runs so the two do not fight. onChange writes a live readout into the
// store so the leva panel can export the current framing.

import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useCallback, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useTwinStore } from '../store'

export function CameraRig({ config }) {
  const controlsRef = useRef(null)
  const camera = useThree((s) => s.camera)
  const tourRequest = useTwinStore((s) => s.tourRequest)
  const setTourPlaying = useTwinStore((s) => s.setTourPlaying)
  const setCameraReadout = useTwinStore((s) => s.setCameraReadout)

  // Initial framing from config.
  useEffect(() => {
    camera.position.set(...config.camera.position)
    camera.fov = config.camera.fov
    camera.updateProjectionMatrix()
    const controls = controlsRef.current
    if (controls) {
      controls.target.set(...config.camera.target)
      controls.update()
    }
  }, [camera, config])

  // Tour: a GSAP timeline through the waypoints named in config.camera.tour.
  useEffect(() => {
    if (!tourRequest) return
    const controls = controlsRef.current
    const waypoints = (config.camera.tour || [])
      .map((name) => config.camera.waypoints.find((w) => w.name === name))
      .filter(Boolean)
    if (!waypoints.length || !controls) return

    const { duration, easing } = config.camera.transition
    controls.enabled = false
    setTourPlaying(true)

    const tl = gsap.timeline({
      onComplete: () => {
        controls.enabled = true
        setTourPlaying(false)
      },
    })
    waypoints.forEach((wp) => {
      tl.to(camera.position, {
        x: wp.position[0],
        y: wp.position[1],
        z: wp.position[2],
        duration,
        ease: easing,
      })
      tl.to(
        controls.target,
        {
          x: wp.target[0],
          y: wp.target[1],
          z: wp.target[2],
          duration,
          ease: easing,
          onUpdate: () => controls.update(),
        },
        '<',
      )
      if (wp.fov) {
        tl.to(
          camera,
          {
            fov: wp.fov,
            duration,
            ease: easing,
            onUpdate: () => camera.updateProjectionMatrix(),
          },
          '<',
        )
      }
    })
    return () => tl.kill()
  }, [tourRequest, camera, config, setTourPlaying])

  const handleChange = useCallback(() => {
    const controls = controlsRef.current
    if (!controls) return
    setCameraReadout({
      position: camera.position.toArray().map((n) => +n.toFixed(3)),
      target: controls.target.toArray().map((n) => +n.toFixed(3)),
      fov: +camera.fov.toFixed(1),
    })
  }, [camera, setCameraReadout])

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enableDamping
      onChange={handleChange}
    />
  )
}
