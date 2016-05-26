import {Component, OnInit} from '@angular/core';
import {GalleryService} from "./services/gallery.service";
import {GalleryConverter} from "./services/gallery.converter";
import {DataTableComponent} from "../../data-table/data-table.component";
import {Gallery} from "./models/gallery";
import {DtColumnComponent} from "../../data-table/dt-column/dt-column.component";

@Component({
    template: require('./gallery.component.html'),
    providers: [
        GalleryService,
        GalleryConverter
    ],
    directives: [
        DataTableComponent,
        DtColumnComponent
    ],
})
export class GalleryComponent implements OnInit {

    galleries: Gallery[] = [];

    customLabels: any = {
        'resultsInfo': 'Showing {{from}} to {{to}} of {{max}} entries test',
        'pagination': {
            'next': 'Next test',
            'previous': 'Previous test'
        }
    };

    constructor(private galleryService: GalleryService) {}


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

}
