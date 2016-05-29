import {Component, Input} from '@angular/core';
import {PaginatePipe, PaginationService} from 'ng2-pagination';

import {DtColumnModel} from '../dt-column/dt-column.model';
import {CustomTemplateDirective} from "./custom-template.directive";

@Component({
    selector: 'items-table',
    template: require('./items-table.component.html'),
    pipes: [PaginatePipe],
    providers: [PaginationService],
    directives: [CustomTemplateDirective]
})
export class ItemsTableComponent {

    @Input()
    items: any[] = [];

    @Input()
    columns: DtColumnModel[] = [];

    @Input()
    pageSize: number = 1;

    @Input()
    pageNumber: number = 1;

    @Input()
    labels: any = {
        'index': '#'
    };

    @Input()
    showIndex: boolean = false;


    countIndex(index: number): number {
        return ((this.pageNumber - 1) * this.pageSize) + index + 1;
    }
}
