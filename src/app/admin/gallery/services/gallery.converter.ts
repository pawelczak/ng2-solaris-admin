import {Gallery} from "../models/gallery";
import {Injectable} from '@angular/core';
import {DataConverter} from "../../../common/converters/data.converter";

@Injectable()
export class GalleryConverter extends DataConverter<Gallery> {
    
    convert(rawData: any): Gallery {

        let gallery = new Gallery();

        gallery.id = <number>rawData.id;
        gallery.name = rawData.name;
        gallery.description = rawData.description;
        gallery.visible = rawData.visible === 'true';

        return gallery;
    }
    
}
