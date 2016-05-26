import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Photo} from '../models/photo';
import {DataService} from '../../../common/repositories/data.service';

@Injectable()
export class PhotoService extends DataService<Photo> {


    private url: string = 'http://localhost:8080/admin/api/photo/list';


    constructor(
        http: Http
    ) {
        super(http);
    }


    getPhotos(): any {
        return this.getMockData();
        //return this.getData(this.url);
    }


    private getMockData(): Photo[] {

        let photoOne = new Photo(),
            photoTwo = new Photo(),
            photoThree = new Photo();

        photoOne.id = 1;
        photoOne.title = 'Title #1';
        photoOne.description = 'Desc #1';
        photoOne.imageSrc = 'image #1';

        photoTwo.id = 2;
        photoTwo.title = 'Title #2';
        photoTwo.description = 'Desc #2';
        photoTwo.imageSrc = 'image #2';

        photoThree.id = 3;
        photoThree.title = 'Title #3';
        photoThree.description = 'Desc #3';
        photoThree.imageSrc = 'image #3';

        return [photoOne, photoTwo, photoThree];
    }
}
