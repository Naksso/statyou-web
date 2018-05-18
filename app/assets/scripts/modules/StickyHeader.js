import $ from 'jquery'
import '../../../../node_modules/waypoints/lib/noframework.waypoints'
import 'jquery-smooth-scroll'

export default class StickyHeader {
	constructor() {
		this.siteHeader = $( ".site-header" )
		this.headerTriggerElement = $( ".banner__title" )
		this.headerLinks = $( ".primary-nav a" )

		this.createHeaderWaypoint()
		this.addSmoothScroll()
	}

	createHeaderWaypoint() {
		const thisClass = this
		new Waypoint( {
			element: thisClass.headerTriggerElement[0],
			handler: function( direction ) {
				if ( direction == "down" ) {
					thisClass.siteHeader.addClass( "site-header--dark" )
				} else {
					thisClass.siteHeader.removeClass( "site-header--dark" )
				}
			}
		} )
	}

	addSmoothScroll() {
		this.headerLinks.smoothScroll()
	}
}
