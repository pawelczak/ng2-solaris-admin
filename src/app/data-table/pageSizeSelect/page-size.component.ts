import {Component, Input, Output, EventEmitter} from "angular2/core";

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
            Show
            <select class="form-control input-sm"
                    [(ngModel)]="model.pageSize" 
                    (change)="change($event, pageSize.value)"
                    #pageSize >
                <option *ngFor="#p of pageSizes"
                        [value]="p"
                        >{{p}}</option>
            </select>
            entries
        </label>

    `
})
export class PageSizeComponent {

    @Input()
    sizes: any;

    @Output()
    selectedPageSize = new EventEmitter<boolean>();

    model: any = {
        pageSize: 1
    };

    //selectedPageSize: number = this._defaultPageSizes[0];

    private _defaultPageSizes: number[] = [1, 5, 10, 15, 20];

    get pageSizes(): number[] {
        return this._defaultPageSizes;
    }

    change($event, value) {
        this.selectedPageSize.emit(value);
    }

}
