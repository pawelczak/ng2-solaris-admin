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

    labels: any;

    private labelsEN: any = {
        'resultsInfo': 'Showing {{from}} to {{to}} of {{max}} entries test',
        'pagination': {
            'next': 'Next test',
            'previous': 'Previous test'
        }
    };

    private labelsPL: any = {
        'resultsInfo': 'Po polsku {{from}} to {{to}} of {{max}} entries test',
        'pagination': {
            'next': 'Next test',
            'previous': 'Previous test'
        }
    };

    constructor(private galleryService: GalleryService,
                private translateService: TranslateService
    ) {
        this.setLabels(this.translateService.currentLang);
        this.translateService.onLangChange.subscribe((langEvent) => {
            this.setLabels(langEvent.lang);
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


    private setLabels(lang: string): void {
        switch (lang) {
            case 'en':
                this.labels = this.labelsEN;
                break;
            case 'pl':
                this.labels = this.labelsPL;
                break;
            default:
                this.labels = this.labelsEN;
                break;
        }
    }
}
