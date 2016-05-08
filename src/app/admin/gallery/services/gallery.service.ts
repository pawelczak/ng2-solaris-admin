import {DataService} from "../../../common/repositories/data.service";
import {Injectable} from "angular2/core";
import {Gallery} from "../models/gallery";
import {Http} from "angular2/http";

@Injectable()
export class GalleryService extends DataService<Gallery> {


    private _url: string = 'http://localhost:8080/admin/api/gallery/list';


    constructor(
        _http: Http
    ) {
        super(_http);
    }


    getGalleries(): any {
        return this.getData(this._url);
    }

    convert(rawData: any): Gallery {

        let gallery = new Gallery();

        gallery.id = <number>rawData.id;
        gallery.name = rawData.name;
        gallery.description = rawData.description;
        gallery.visible = rawData.visible === 'true';

        return gallery;
    }
}