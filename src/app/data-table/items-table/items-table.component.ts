import {Component, Input} from '@angular/core';
import {PaginatePipe, PaginationService} from 'ng2-pagination';
import {DtColumnComponent} from "../dt-column/dt-column.component";

@Component({
    selector: 'items-table',
    template: require('./items-table.component.html'),
    pipes: [PaginatePipe],
    providers: [PaginationService]
})
export class ItemsTableComponent {

    @Input()
    items: any[] = [];

    @Input()
    pageSize: number = 1;

    @Input()
    pageNumber: number = 1;

    @Input()
    columns: DtColumnComponent[] = [];

}
