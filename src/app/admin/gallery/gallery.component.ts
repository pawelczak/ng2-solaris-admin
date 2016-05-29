import {Component, OnInit} from '@angular/core';
import {GalleryService} from './services/gallery.service';
import {GalleryConverter} from './services/gallery.converter';
import {Gallery} from './models/gallery';
import {DATA_TABLE_DIRECTIVES} from '../../data-table/data_table_directives';
import {TranslateService} from 'ng2-translate/ng2-translate';

@Component({
    template: require('./gallery.component.html'),
    providers: [
        GalleryService,
        GalleryConverter
    ],
    directives: [
        DATA_TABLE_DIRECTIVES
    ]
})
export class GalleryComponent implements OnInit {

    galleries: Gallery[] = [];

    labels: any = {};


    constructor(private galleryService: GalleryService,
                private translateService: TranslateService
    ) {
        this.loadLabels();
        this.translateService.onLangChange.subscribe(() => {
            this.loadLabels()
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


    private loadLabels(): void {
        this.translateService.getTranslation(this.translateService.currentLang).subscribe((res) => {
            this.labels = res.gallery;
        });
    }
}
