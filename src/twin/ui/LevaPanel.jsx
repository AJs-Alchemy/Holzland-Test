// leva dev panel. Only mounted when scene.config.devPanel is true.
//
// This is the bridge between visual tuning and the config file: orbit the
// camera to frame a shot, hit the export button, and a ready-to-paste
// camera block is copied to the clipboard and logged. The skill then bakes
// that block into the project's scene.config.js.

import { Leva, useControls, button } from 'leva'
import { useTwinStore } from '../store'

export function LevaPanel() {
  useControls('Kamera', {
    'Framing in scene.config exportieren': button(() => {
      const { position, target, fov } = useTwinStore.getState().cameraReadout
      const fmt = (a) => `[${a.map((n) => Number(n).toFixed(2)).join(', ')}]`
      const snippet =
        'camera: {\n' +
        `  fov: ${fov},\n` +
        `  position: ${fmt(position)},\n` +
        `  target: ${fmt(target)},\n` +
        '},'
      console.log('[twin] Snippet fuer scene.config.js:\n' + snippet)
      if (navigator.clipboard) {
        navigator.clipboard.writeText(snippet).catch(() => {})
      }
    }),
  })

  return <Leva collapsed titleBar={{ title: 'Twin Dev' }} />
}
