import {Injectable} from '@angular/core';

import {DtColumnComponent} from './dt-column.component';
import {DtColumnModel} from './dt-column.model';

@Injectable()
export class DtColumnConverter {


    convert(rawColumn: DtColumnComponent): DtColumnModel {
        let dtColumnModel = new DtColumnModel();

        this.convertFieldName(rawColumn, dtColumnModel);
        this.convertLabel(rawColumn, dtColumnModel);
        dtColumnModel.template = rawColumn.template;

        return dtColumnModel;
    }

    convertArray(rawColumns: DtColumnComponent[]): DtColumnModel[] {
        let dtColumnModels = [];

        for (let i = 0, length = rawColumns.length; i < length; i += 1) {
            dtColumnModels.push(this.convert(rawColumns[i]));
        }

        return dtColumnModels;
    }


    private convertFieldName(rawColumn: DtColumnComponent, dtColumnModel: DtColumnModel): void {
        this.convertProperties(rawColumn, dtColumnModel, 'value', 'fieldName');
    }

    private convertLabel(rawColumn: DtColumnComponent, dtColumnModel: DtColumnModel): void {
        if (typeof rawColumn.label === 'undefined' && typeof rawColumn.value !== 'undefined') {
            dtColumnModel.label = rawColumn.value;
        } else {
            dtColumnModel.label = rawColumn.label;
        }
    }

    private convertProperty(rawColumn: DtColumnComponent, dtColumnModel: DtColumnModel, property: string): void {
        if (typeof rawColumn[property] !== 'undefined') {
            dtColumnModel[property] = rawColumn[property];
        }
    }

    private convertProperties(rawColumn: DtColumnComponent, dtColumnModel: DtColumnModel, rawProperty: string, colProperty): void {
        if (typeof rawColumn[rawProperty] !== 'undefined') {
            dtColumnModel[colProperty] = rawColumn[rawProperty];
        }
    }
}
