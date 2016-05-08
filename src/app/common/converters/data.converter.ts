import {Injectable} from "angular2/core";

/**
 * This class does not work
 */
@Injectable()
export class DataConverter<T> {


    convert(rawData: any): T {
        var object: T = this.factory<T>();

        for (let property in rawData) {
            object[property] = rawData[property];
        }

        return object;
    }

    convertArray(rawData: any[]): T[] {
        let array: T[] = [];

        for (let i = 0, length = rawData.length; i < length; i += 1) {
            array.push(this.convert(rawData[i]));
        }

        return array;
    }

    factory<T>(): T {
        var type: {new(): T ;};
        return new type();
    }

}
