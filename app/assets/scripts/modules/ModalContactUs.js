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
	}

	openModal() {
		this.modal.addClass( "modal--is-visible" )
		return false;
	}

	closeModal() {
		this.modal.removeClass( "modal--is-visible" )
	}
}
