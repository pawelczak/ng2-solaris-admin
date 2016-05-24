import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
    selector: 'page-size',
    styles: [`

        label {
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
        }
    `],
    template: `
        <label>
            {{labels.prefix}}
            <select class="form-control input-sm"
                    [(ngModel)]="model.pageSize" 
                    (change)="change($event, ps.value)"
                    #ps >
                <option *ngFor="let p of pageSizes"
                        [value]="p"
                        >{{p}}</option>
            </select>
            {{labels.sufix}}
        </label>

    `
})
export class PageSizeComponent implements OnChanges {

    @Input()
    pageSize: number = 10;

    @Input()
    labels: any = {
        'prefix': 'Show',
        'sufix': 'entries'
    };

    @Output()
    selectedPageSize = new EventEmitter<boolean>();

    model: any = {
        pageSize: 5
    };

    private _defaultPageSizes: number[] = [5, 10, 15, 20];

    constructor() {
        this.model.pageSize = this.pageSize;
    }

    get pageSizes(): number[] {
        return this._defaultPageSizes;
    }

    ngOnChanges() {
        this.model.pageSize = this.pageSize;
    }

    change($event, value) {
        this.selectedPageSize.emit(value);
    }

}
