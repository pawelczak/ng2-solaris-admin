import {DataService} from '../../../common/repositories/data.service';
import {Injectable} from '@angular/core';
import {Gallery} from '../models/gallery';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GalleryService extends DataService<Gallery> {


    private url: string = 'http://localhost:8080/admin/api/gallery/list';


    constructor(
        http: Http
    ) {
        super(http);
    }


    getGalleries(): any {
        return this.getMockData();
        //return this.getData(this.url);
    }

    convert(rawData: any): Gallery {

        let gallery = new Gallery();

        gallery.id = <number>rawData.id;
        gallery.name = rawData.name;
        gallery.description = rawData.description;
        gallery.visible = rawData.visible === 'true';

        return gallery;
    }

    private getMockData(): any {

        let galleryOne = new Gallery(),
            galleryTwo = new Gallery(),
            galleryThree = new Gallery();

        galleryOne.id = 1;
        galleryOne.name = 'Great name';
        galleryOne.description = 'Doloro samit it etu';
        galleryOne.visible = true;

        galleryTwo.id = 2;
        galleryTwo.name = 'Creative name';
        galleryTwo.description = 'Lorem ipsum';
        galleryTwo.visible = true;


        galleryThree.id = 3;
        galleryThree.name = 'Picture';
        galleryThree.description = 'This is desc for picture';
        galleryThree.visible = false;


        return [
            galleryOne,
            galleryTwo,
            galleryThree,
            galleryOne,
            galleryTwo,
            galleryThree,
            galleryOne,
            galleryTwo,
            galleryThree,
            galleryOne,
            galleryTwo,
            galleryThree,
            galleryOne,
            galleryTwo,
            galleryThree,
            galleryOne,
            galleryTwo,
            galleryThree,
            galleryOne,
            galleryTwo,
            galleryThree,
            galleryOne,
            galleryTwo,
            galleryThree,
            galleryOne,
            galleryTwo,
            galleryThree
        ];
    }
}