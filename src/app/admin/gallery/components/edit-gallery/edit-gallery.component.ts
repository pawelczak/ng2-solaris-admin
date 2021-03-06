import {Component, ViewChild, EventEmitter, Output} from '@angular/core';
import {MODAL_DIRECTIVES, ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {Gallery} from '../../models/gallery';

@Component({
    selector: 'edit-gallery',
    template: require('./edit-gallery.component.html'),
    directives: [
        MODAL_DIRECTIVES
    ],
    pipes: [
        TranslatePipe
    ]
})
export class EditGalleryComponent {

    @ViewChild('modal')
    modal: ModalComponent;

    @Output()
    onOpen: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onClose: EventEmitter<any> = new EventEmitter<any>();

    gallery: Gallery;

    constructor() {}


    open(gallery: Gallery) {
        this.gallery = gallery;
        this.modal.open();
    }

    onOpenEvent() {
        this.onOpen.emit(true);
    }

    onCloseEvent() {
        console.log('foo');
        this.onClose.emit(true);
    }

}
