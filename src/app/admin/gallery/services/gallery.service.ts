import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {GalleryConverter} from "./gallery.converter";

@Injectable()
export class GalleryService {

    private _url: string = 'http://localhost:8080/admin/api/gallery/list';
    
    constructor(
        private _http: Http,
        private _galleryConverter: GalleryConverter
    ) {}
    
    getGalleries(): Observable<any[]> {
        return this._http
                    .get(this._url)
                    .map((res) => { return this._galleryConverter.convertList(res.json());});
    }
    
}
