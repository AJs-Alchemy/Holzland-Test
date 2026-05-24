// Static content for the Holzland Wischmann Sales Twin demo.
// Floor metadata is placeholder, ready to be replaced with actual SKU data.

export const navLinks = [
  { label: 'Konzept', href: '#splat-explainer' },
  { label: 'Böden', href: '#vision-twins' },
  { label: 'Vergleichsraum', href: '#sales-twin' },
  { label: 'Kontakt', href: '#kontakt' },
]

// Each floor:
// - splatUrl: superspl.at iframe-embed endpoint
// - swatch: CSS background string for the round selector swatch
// - price: realistic mid-upper-segment German retail €/m² (placeholder)
// - props: rows rendered with icon + label + value
export const floors = [
  {
    id: 'floor-1',
    splatUrl: 'https://superspl.at/s?id=a07971b2',
    name: 'Eiche Natur Premium',
    subtitle: 'Mehrschichtparkett, gebürstet, geölt',
    accent: 'bronze',
    price: '69,90 € / m²',
    swatch:
      'radial-gradient(circle at 30% 25%, #d3a878 0%, #a87a4a 35%, #7a5230 75%, #4a3320 100%)',
    props: [
      { icon: 'shield', label: 'Abriebsklasse', value: 'AC5 / 33' },
      { icon: 'ruler', label: 'Stärke', value: '14 mm' },
      { icon: 'globe', label: 'Herkunft', value: 'Europäische Eiche' },
      { icon: 'palette', label: 'Farbton', value: 'Warmes Naturholz, leichte Astigkeit' },
      { icon: 'home', label: 'Eignung', value: 'Wohn- und Objektbereich' },
      { icon: 'leaf', label: 'Oberfläche', value: 'Naturöl, matt' },
    ],
  },
  {
    id: 'floor-2',
    splatUrl: 'https://superspl.at/s?id=2051afbf',
    name: 'Pinie Hell Designboden',
    subtitle: 'Vinyl LVT, Klick-System, wasserfest',
    accent: 'cream',
    price: '39,90 € / m²',
    swatch:
      'radial-gradient(circle at 30% 25%, #f5e4c5 0%, #e0c89a 40%, #c4a875 80%, #9d8350 100%)',
    props: [
      { icon: 'shield', label: 'Abriebsklasse', value: 'AC4 / 32' },
      { icon: 'ruler', label: 'Stärke', value: '5 mm + 1 mm Trittschall' },
      { icon: 'globe', label: 'Herkunft', value: 'Made in Germany' },
      { icon: 'palette', label: 'Farbton', value: 'Helle Pinie, sanfte Maserung' },
      { icon: 'home', label: 'Eignung', value: 'Bad, Küche, Wohnraum' },
      { icon: 'leaf', label: 'Oberfläche', value: 'Matte Prägestruktur' },
    ],
  },
  {
    id: 'floor-3',
    splatUrl: 'https://superspl.at/s?id=38e583e7',
    name: 'Schwarzeiche Industrial',
    subtitle: 'Laminat XL-Diele, V-Fuge umlaufend',
    accent: 'moss',
    price: '27,90 € / m²',
    swatch:
      'radial-gradient(circle at 30% 25%, #5a4030 0%, #38251a 40%, #1f1410 80%, #0d0805 100%)',
    props: [
      { icon: 'shield', label: 'Abriebsklasse', value: 'AC6 / 34' },
      { icon: 'ruler', label: 'Stärke', value: '10 mm' },
      { icon: 'globe', label: 'Herkunft', value: 'Skandinavien' },
      { icon: 'palette', label: 'Farbton', value: 'Tiefes Schwarzbraun, markante Astung' },
      { icon: 'home', label: 'Eignung', value: 'Gewerbe und Wohnen' },
      { icon: 'leaf', label: 'Oberfläche', value: 'Authentische Holzprägung' },
    ],
  },
]
