import {Component, OnInit} from "angular2/core";
import {GalleryService} from "./services/gallery.service";
import {GalleryConverter} from "./services/gallery.converter";

@Component({
    template: require('./gallery.component.html'),
    providers: [
        GalleryService,
        GalleryConverter
    ]
})
export class GalleryComponent implements OnInit {

    galleries: any[] = [];


    constructor(private _galleryService: GalleryService) {}


    ngOnInit() {
        this.getGalleries();
    }

    getGalleries() {
        this._galleryService
            .getGalleries()
            .subscribe((data) => {
               this.galleries = data;
                console.log(this.galleries);
            });
    }

}
