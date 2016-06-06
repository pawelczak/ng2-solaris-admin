import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {

    transform(value: any[], [phrase, field]: any[]): any[] {

        let phrases = phrase || [''];

        if (phrases.length === 0 || phrases[0] === '') {
            return value;
        }

        return value.filter((item) => {

            //return item[field].indexOf(phrases) !== -1;

            for(let key in item) {

                if ((typeof item[key] === 'string' || item[key] instanceof String)
                && item[key].indexOf(phrases) !== -1) {
                    return true;
                } else {
                    return false;
                }
            }
        });
    }
}
