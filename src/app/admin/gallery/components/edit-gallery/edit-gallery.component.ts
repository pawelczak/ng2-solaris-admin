import {Component, ViewChild, EventEmitter, Output} from '@angular/core';
import {MODAL_DIRECTIVES, ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import {Gallery} from "../../models/gallery";

@Component({
    selector: 'edit-gallery',
    template: `
    <modal #modal (onOpen)="onOpenEvent()" (onClose)="onCloseEvent()" >
        <modal-header [show-close]="true">
            <h4 class="modal-title">I'm a modal!</h4>
        </modal-header>
        <modal-body>
            <div *ngIf="gallery" >
                {{gallery.name}}
            </div>
        </modal-body>
        <modal-footer [show-default-buttons]="true"></modal-footer>
    </modal>
    `,
    directives: [
        MODAL_DIRECTIVES
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
