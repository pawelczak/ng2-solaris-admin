import {Component, OnInit, ViewChild} from '@angular/core';
import {GalleryService} from './services/gallery.service';
import {GalleryConverter} from './services/gallery.converter';
import {Gallery} from './models/gallery';
import {DATA_TABLE_DIRECTIVES} from '../../data-table/src/data_table_directives';
import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';
import {EditGalleryComponent} from './components/edit-gallery/edit-gallery.component';
import {DeleteGalleryComponent} from './components/delete-gallery/delete-gallery.component';


@Component({
    template: require('./gallery.component.html'),
    providers: [
        GalleryService,
        GalleryConverter
    ],
    directives: [
        DATA_TABLE_DIRECTIVES,
        EditGalleryComponent,
        DeleteGalleryComponent
    ],
    pipes: [
        TranslatePipe
    ]
})
export class GalleryComponent implements OnInit {


    @ViewChild('editModal')
    editModal: EditGalleryComponent;

    @ViewChild('deleteModal')
    deleteModal: DeleteGalleryComponent;

    galleries: Gallery[] = [];

    labels: any = {};


    constructor(private galleryService: GalleryService,
                private translateService: TranslateService
    ) {
        this.loadLabels();
        this.translateService.onLangChange.subscribe(() => {
            this.loadLabels();
        });
    }


    ngOnInit(): void {
        this.getGalleries();
    }

    getGalleries(): void {
        this.galleries = this.galleryService.getGalleries();
        /*
        this._galleryService
            .getGalleries()
            .subscribe((data) => {
               this.galleries = data;
            });
            */
    }

    public addGallery() {
        let gallery = new Gallery();

        gallery.id = Math.floor(Math.random() * 1000);
        gallery.name = 'Name #' + gallery.id;

        this.galleries.push(gallery);
    }

    public openEditModal(index: number): void {
        this.editModal.open(this.galleries[index]);
    }

    public onEditModalClose() {
        console.log('edit close');
        // this.galleries[index].name += 'EDITED';
    }

    public onEditModalOpen() {
        console.log('edit open');
    }

    public openDeleteModal(index: number): void {
        this.deleteModal.open(this.galleries[index], index);
    }

    public onDeleteModalClose(index: number) {
        let galleryIndex = +index;

        console.log('delete close: ' + galleryIndex);

        if (galleryIndex > -1) {
            this.galleries.splice(galleryIndex, 1);
        }
    }

    public onDeleteModalOpen() {
        console.log('delete open');
    }

    public deleteGallery(index: number): void {
        this.galleries.splice(index, 1);
    }


    private loadLabels(): void {
        this.translateService.getTranslation(this.translateService.currentLang).subscribe((res) => {
            this.labels = res.gallery;
        });
    }

    private find(id: number): any {
        return this.galleries.filter((element) => {
            return (element.id === id);
        });
    }
}
