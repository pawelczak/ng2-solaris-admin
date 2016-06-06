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

        this.setPropertyNumber(options, rawData, 'pageNumber');
        this.setPropertyNumber(options, rawData, 'pageSize');
        this.setPropertiesNumber(options, rawData, 'pageSizeArray');
        this.setPropertyBoolean(options, rawData, 'showIndex');

        if (rawData.hasOwnProperty('labels')) {
            options.labels = rawData.labels;
        }

        if (!options.pageSizeArray.find((c) => {return c === options.pageSize} )) {
            console.log('Error: pageSize should take a value from pageSizeArray.');
        }

        return options;
    }


    private setPropertyNumber(options: Options, rawData: any, property: string) {
        if (rawData.hasOwnProperty(property)) {
            options[property] = +rawData[property];
        }
    }

    private setPropertiesNumber(options: Options, rawData: any[], property: string) {

        if (rawData.hasOwnProperty(property)) {
            let properties = [],
                rawArray = rawData[property];

            for (let i = 0, length = rawArray.length; i < length; i += 1) {

                properties.push(+rawArray[i]);
            }

            options[property] = properties;
        }
    }

    private setPropertyBoolean(options: Options, rawData: any, property: string) {
        if (rawData.hasOwnProperty(property)) {

            if (typeof rawData[property] === 'boolean') {
                options[property] = rawData[property];
            } else if (rawData[property] === 0 || rawData[property] === '0') {
                options[property] = false;
            } else if (rawData[property] === 1 || rawData[property] === '1') {
                options[property] = true;
            } else {
                options[property] = false;
            }
        }
    }

}
