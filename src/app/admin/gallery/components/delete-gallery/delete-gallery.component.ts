import {Component, ViewChild, EventEmitter, Output} from '@angular/core';
import {MODAL_DIRECTIVES, ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {Gallery} from '../../models/gallery';

@Component({
    selector: 'delete-gallery',
    template: require('./delete-gallery.component.html'),
    directives: [
        MODAL_DIRECTIVES
    ],
    pipes: [
        TranslatePipe
    ]
})
export class DeleteGalleryComponent {

    @ViewChild('modal')
    modal: ModalComponent;

    @Output()
    onOpen: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onClose: EventEmitter<number> = new EventEmitter<number>();

    gallery: Gallery;

    galleryIndex: number;

    constructor() {}


    open(gallery: Gallery, index: number) {
        this.gallery = gallery;
        this.galleryIndex = index;
        this.modal.open();
    }

    onOpenEvent() {
        this.onOpen.emit(true);
    }

    onCloseEvent() {
        console.log('confirm delete');
        this.onClose.emit(this.galleryIndex);
    }

}
