import {Injectable} from '@angular/core';
import {DtColumnComponent} from "./dt-column.component";
import {DtColumnModel} from "./dt-column.model";

@Injectable()
export class DtColumnConverter {
    
    
    convert(rawColumn: DtColumnComponent): DtColumnModel {
    
        let dtColumnModel = new DtColumnModel();
        
        
        dtColumnModel.label = rawColumn.label;
        
        return dtColumnModel;
    }
    
    convertArray() {}
}
