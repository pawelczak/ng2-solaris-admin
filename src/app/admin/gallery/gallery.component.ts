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


    constructor(private _galleryService: GalleryService) {}


    ngOnInit(): void {
        this.getGalleries();
    }

    getGalleries(): void {
        this.galleries = this._galleryService.getGalleries();
        /*
        this._galleryService
            .getGalleries()
            .subscribe((data) => {
               this.galleries = data;
            });
            */
    }

}
