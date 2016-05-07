import {Gallery} from "../models/gallery";

export class GalleryConverter {
    
    convertList(rawData: any[]): Gallery[] {

        let galleries: Gallery[] = [];

        for (let i = 0, length = rawData.length; i < length; i += 1) {
            galleries.push(this.convert(rawData[i]));
        }

        return galleries;
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
