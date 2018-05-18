import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

export default class StickyHeader {
	constructor() {
		this.siteHeader = $( ".site-header" )
		this.headerTriggerElement = $( ".banner__title" )

		this.createHeaderWaypoint()
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
}
