import {Injectable} from "angular2/core";
import {ISearchable} from "./isearchable";

@Injectable()
export class SearchService<T> {
    
    
    search(obj: T, phrase: string): boolean {
        return obj.getContent().indexOf(phrase) !== -1;
    }
    
}
