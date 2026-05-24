# AE Reality Webseite (Modus B)

Eine komplette Creative-Frontend-Projekt-Webseite. React + Vite + Tailwind v4 +
React-Three-Fiber + Spark.js + GSAP. Gescaffoldet vom Skill
`creative-frontend-builder`.

## Aufbau durch den Skill

Vollständig erst mit dem hineinkopierten Twin-Modul:

```
<projekt>/
├── (Inhalt von references/website-starter/)
└── src/twin/   <-- Inhalt von references/twin-module/
```

Der Skill erledigt beide Kopierschritte beim Scaffolding.

## Starten

```bash
npm install
npm run dev
```

## Seitenaufbau

| Section | Datei | Inhalt |
|---|---|---|
| Navbar | `src/sections/Navbar.jsx` | Fixierte Navigation |
| Hero | `src/sections/Hero.jsx` | Headline mit GSAP-Intro |
| TwinSection | `src/sections/TwinSection.jsx` | Eingebetteter `<TwinViewer>` |
| ScrollStory | `src/sections/ScrollStory.jsx` | Horizontale Pin-Scroll-Sektion |
| Bento | `src/sections/Bento.jsx` | Bento-Grid, Stagger beim Scrollen |
| Footer | `src/sections/Footer.jsx` | Abschluss + Kontakt |

## Anpassen

- **Inhalte und Texte:** `src/constants/index.js`
- **Theme-Farben:** `@theme`-Block in `src/index.css`
- **Der eingebettete Twin:** `scene.config.js` im Projekt-Root
- **Neue Sektionen:** Komponente in `src/sections/` anlegen, in `App.jsx`
  einhängen. GSAP-Muster in `website-patterns.md` (Skill-Ordner).

Das visuelle Design wird beim Anpassen vom `taste-skill` verantwortet. Dieser
Starter ist die solide technische Basis, keine fertige Markengestaltung.

## Deployment

`npm run build`, dann den `dist/`-Ordner zu Vercel deployen.
