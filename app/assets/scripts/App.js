import $ from 'jquery'

import MobileMenu from './modules/MobileMenu'
import StickyHeader from './modules/StickyHeader'
import RevealOnScroll from './modules/RevealOnScroll'

new MobileMenu()
new StickyHeader()

new RevealOnScroll( $( ".feature-item" ), "85%" )
new RevealOnScroll( $( ".testimonial-item" ), "60%" )
