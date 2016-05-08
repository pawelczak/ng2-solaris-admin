import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export abstract class DataService<T> {

    
    constructor(
        protected _http: Http
    ) {}


    getData(url: string): Observable<T[]> {

        return this._http
                    .get(url)
                    .map((res) => {
                        return this.convertArray(res.json());
                    });
    }

    convert(rawData: any): T {
        return <T>rawData;
    }

    convertArray(rawData: any[]): T[] {
        let data: T[] = [];

        for(let i = 0, length = rawData.length; i < length; i += 1) {
            data.push(this.convert(rawData[i]));
        }
        return data;
    }


}