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
            {{labels?.prefix}}
            <select class="form-control input-sm"
                    [(ngModel)]="model.pageSize" 
                    (change)="change($event, ps.value)"
                    #ps >
                <option *ngFor="let p of pageSizes"
                        [value]="p"
                        >{{p}}</option>
            </select>
            {{labels?.sufix}}
        </label>

    `
})
export class PageSizeComponent implements OnChanges {

    @Input()
    pageSize: number;

    @Input()
    set pageSizes(sizes: number[]) {
        this._defaultPageSizes = sizes;
    }

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

    private _defaultPageSizes: number[];

    constructor() {
        this.model.pageSize = this.pageSize;
    }

    get pageSizes(): number[] {
        return this._defaultPageSizes;
    }

    ngOnChanges(): void {
        this.model.pageSize = this.pageSize;
    }

    // TODO add attribute types, value should be number
    change($event, value) {
        this.selectedPageSize.emit(value);
    }

}