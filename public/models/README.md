# public/models/

glTF/GLB-Mesh-Exporte aus Unreal Engine, plus Material-Texturen unter
`models/tex/`.

Aktivierung im `scene.config.js` (siehe `ue-export-recipe.md` im Skill-Ordner
für die Export-Schritte aus Unreal):

```js
model: { src: '/models/showroom.glb' },
materials: {
  floor: {
    target: 'Mesh_Floor',
    variants: [{ name: 'Eiche', map: '/models/tex/oak_basecolor.png' }],
  },
},
```
