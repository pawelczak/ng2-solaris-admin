import {Injectable} from '@angular/core';

@Injectable()
export class DtConfigService {


    private resultsInfoTemplate: string = 'Showing {{from}} to {{to}} of {{max}} entries';

    
    getResultsInfoTemplate(): string {
        return this.resultsInfoTemplate;
    }


    setResultsInfoTemplate(template: string) {
        this.resultsInfoTemplate = template;
    }

}
