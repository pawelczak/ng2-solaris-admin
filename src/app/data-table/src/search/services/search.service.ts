import {Injectable} from '@angular/core';
import {ISearchable} from "./isearchable";

@Injectable()
export class SearchService<T> {
    
    
    search(obj: T, phrase: string): boolean {
        return false;
        //return obj.getContent().indexOf(phrase) !== -1;
    }
    
}
