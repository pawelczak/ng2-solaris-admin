import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'page-size',
    template: `
        <select class="form-control"
                [(ngModel)]="model.pageSize" 
                (change)="change($event, pageSize.value)"
                #pageSize >
            <option *ngFor="#p of pageSizes"
                    [value]="p"
                    >{{p}}</option>
        </select>

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
