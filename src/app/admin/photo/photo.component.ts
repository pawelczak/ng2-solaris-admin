import {Component, OnInit} from '@angular/core';

import {Photo} from './models/photo';
import {PhotoService} from './services/photo.service';
import {DATA_TABLE_DIRECTIVES} from '../../data-table/src/data_table_directives';

@Component({
    template: require('./photo.component.html'),
    directives: [
        DATA_TABLE_DIRECTIVES
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
