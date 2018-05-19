import $ from 'jquery'

export default class ModalContactUs {
	constructor() {
		this.openModalButton = $( ".open-modal" )
		this.modal = $( ".contact-us" )
		this.closeModalButton = $( ".contact-us__close" )

		this.events()
	}

	events() {
		this.openModalButton.click( this.openModal.bind( this ) )
		this.closeModalButton.click( this.closeModal.bind( this ) )

		$( document ).keyup( this.keyPressHandler.bind( this ) )
	}

	openModal() {
		this.modal.addClass( "contact-us--is-visible" )
		return false;
	}

	closeModal() {
		this.modal.removeClass( "contact-us--is-visible" )
	}

	keyPressHandler( e ) {
		// If the key is escape,
		if ( e.keyCode === 27 ) {
			this.closeModal()
		}
	}
}
