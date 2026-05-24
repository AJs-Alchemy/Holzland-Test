// Central GSAP setup. Import { gsap } from here, never straight from 'gsap',
// so the ScrollTrigger plugin is guaranteed registered exactly once.
//
// GSAP and all its plugins (ScrollTrigger, SplitText, ...) are fully free.

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }
