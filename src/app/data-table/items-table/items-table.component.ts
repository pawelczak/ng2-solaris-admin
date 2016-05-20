import {Component, Input} from '@angular/core';
import {PaginatePipe, PaginationService} from 'ng2-pagination';

@Component({
    selector: 'items-table',
    template: require('./items-table.component.html'),
    pipes: [PaginatePipe],
    providers: [PaginationService]
})
export class ItemsTable {

    @Input()
    items: any[];

    @Input()
    pageSize: number;

    @Input()
    pageNumber: number;


}
