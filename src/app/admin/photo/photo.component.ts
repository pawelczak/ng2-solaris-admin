import {Component, OnInit} from '@angular/core';
import {Photo} from "./models/photo";
import {PhotoService} from "./services/photo.service";
import {DataTableComponent} from "../../data-table/data-table.component";
import {DtColumnComponent} from "../../data-table/dt-column/dt-column.component";

@Component({
    template: require('./photo.component.html'),
    directives: [
        DataTableComponent,
        DtColumnComponent
    ],
    providers: [
        PhotoService
    ]
})
export class PhotoComponent implements OnInit {
    
    
    photos: Photo[];

    constructor(
        private photoService: PhotoService
    ) {}

    ngOnInit () {
        this.photos = this.photoService.getPhotos();
    }
}
