import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { SplatExplainer } from './sections/SplatExplainer'
import { VisionTwins } from './sections/VisionTwins'
import { SalesTwin } from './sections/SalesTwin'
import { Closer } from './sections/Closer'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SplatExplainer />
        <VisionTwins />
        <SalesTwin />
        <Closer />
      </main>
      <Footer />
    </>
  )
}
