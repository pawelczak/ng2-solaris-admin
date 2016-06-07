import {Injectable} from '@angular/core';
import * as _ from 'lodash';

import {labels} from './labels';

@Injectable()
export class LabelsService {

    private labels: any;

    constructor() {
        this.labels = labels;
    }

    setLabels(newLabels: any): void {
        this.labels = _.merge(this.labels, newLabels);
    }

    getLabels() {
        return this.labels;
    }

    reset(newLabels: any) {
        this.labels = newLabels;
    }
}
