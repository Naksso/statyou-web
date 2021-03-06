import $ from 'jquery'
import '../../../../node_modules/waypoints/lib/noframework.waypoints'

export default class RevealOnScroll {
	constructor( elements, offset ) {
		this.itemsToReveal = elements
		this.offsetPercentage = offset

		this.hideInitially()
		this.createWaypoints()
	}

	hideInitially() {
		this.itemsToReveal.addClass( "reveal-item" )
	}

	createWaypoints() {
		const thisClass = this;
		this.itemsToReveal.each( function() {
			var currentItem = this;
			new Waypoint( {
				element: currentItem,
				handler: function() {
					$( currentItem ).addClass( "reveal-item--is-visible" )
				},
				offset: thisClass.offsetPercentage,
			} )
		} )
	}
}
