import {Injectable} from '@angular/core';


@Injectable()
export class DataConverter<T> {


    convert(rawData: any): T {
        return <T>rawData;
    }

    convertArray(rawData: any[]): T[] {
        let array: T[] = [];

        for (let i = 0, length = rawData.length; i < length; i += 1) {
            array.push(this.convert(rawData[i]));
        }

        return array;
    }


    /**
     * This method does not work
     */
    factory<T>(): T {
        var type: {new(): T ;};
        return new type();
    }

}
