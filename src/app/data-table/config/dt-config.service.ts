import {Injectable} from '@angular/core';

@Injectable()
export class DtConfigService {


    private labels: any = {
        resultsInfo: 'Showing {{from}} to {{to}} of {{max}} entries'
    };

    getResultsInfoLabel(): string {
        return this.labels.resultsInfo;
    }


    setLabels(sourceLabels: any): void {
        // TODO use merge
        this.labels = sourceLabels;
    }

    setResultsInfoLabel(template: string) {
        this.labels.resultsInfo = template;
    }

}
