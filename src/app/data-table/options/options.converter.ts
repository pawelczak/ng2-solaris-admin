import {Options} from './options.model';

export class OptionsConverter {


    convertArray(rawOptionsArray: any[]) {

        let options = [];

        for (let i = 0, length = rawOptionsArray.length; i < length; i += 1) {
            options.push(this.convert(rawOptionsArray[i]));
        }

        return options;
    }

    convert(rawData: any): Options {
        let options = new Options();

        if (rawData.hasOwnProperty('pageNumber')) {
            options.pageNumber = +rawData.pageNumber;
        }

        return options;
    }

}
