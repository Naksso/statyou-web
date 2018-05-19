import $ from 'jquery'
import '../../../../node_modules/waypoints/lib/noframework.waypoints'

export default class RevealOnScroll {
	constructor( elements, offset ) {
		this.itemsToReveal = elements
		this.offsetPercentage = offset

		this.hideInitially()
	}

	hideInitially() {
		this.itemsToReveal.addClass( "reveal-item" )
	}
}
