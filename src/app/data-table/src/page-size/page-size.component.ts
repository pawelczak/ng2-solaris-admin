import {Component, Input, Output, EventEmitter} from '@angular/core';

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
            <span class="page-size-prefix">{{labels?.prefix}}</span>
            <select class="form-control input-sm"
                    [(ngModel)]="model.pageSize" 
                    (change)="change($event, ps.value)"
                    #ps >
                <option *ngFor="let p of pageSizeArray"
                        [value]="p"
                        >{{p}}</option>
            </select>
            <span class="page-size-prefix">{{labels?.sufix}}</span>
        </label>

    `
})
export class PageSizeComponent {

    @Input()
    set pageSize(pageSize: number) {
        this._pageSize = pageSize;
        this.model.pageSize = pageSize;
    }

    @Input()
    set pageSizeArray(sizes: number[]) {
        this._pageSizeArray = sizes;
    }

    @Input()
    labels: any = {
        'prefix': 'Show',
        'sufix': 'entries'
    };

    @Output()
    selectedPageSize = new EventEmitter<boolean>();

    model: any = {
        pageSize: 0
    };

    private _pageSizeArray: number[] = [];

    private _pageSize: number = 0;

    constructor() {}

    get pageSize(): number {
        return this._pageSize;
    }

    get pageSizeArray(): number[] {
        return this._pageSizeArray;
    }

    // TODO add attribute types, value should be number
    change($event, value) {
        this.selectedPageSize.emit(value);
    }

}
