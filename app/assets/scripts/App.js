import $ from 'jquery'

import MobileMenu from './modules/MobileMenu'
import StickyHeader from './modules/StickyHeader'
import RevealOnScroll from './modules/RevealOnScroll'

const mobileMenu = new MobileMenu()
const stickyHeader = new StickyHeader()

new RevealOnScroll( $( ".feature-item" ), "85%" )
