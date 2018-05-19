import $ from 'jquery'

import MobileMenu from './modules/MobileMenu'
import StickyHeader from './modules/StickyHeader'
import RevealOnScroll from './modules/RevealOnScroll'
import ModalContactUs from './modules/ModalContactUs'

new MobileMenu()
new StickyHeader()

new RevealOnScroll( $( ".feature-item" ), "85%" )
new RevealOnScroll( $( ".testimonial-item" ), "60%" )

new ModalContactUs()
