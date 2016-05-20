import {Component, Input, OnInit} from '@angular/core';
import {PageSizeComponent} from "./page-size/page-size.component";
import {ResultsInfoDirective} from "./results-info/results-info.directive";
import {PaginationDirective} from "./pagination/pagination.directive";
import {VisibleIconDirective} from "./utils/visible-icon.directive";
import {ItemsTable} from "./items-table/items-table.component";

@Component({
    selector: 'data-table',
    styles: [`
        .pagination-col {
            text-align: right;
        }
        
        table {
            margin-bottom: 6px;
        }
    `],
    template: require('./data-table.component.html'),
    directives: [
        PageSizeComponent,
        ResultsInfoDirective,
        PaginationDirective,
        VisibleIconDirective,
        ItemsTable
    ]
})
export class DataTableComponent implements OnInit {

    @Input()
    items: any[];

    pageNumber: number = 1;

    pageSize: number = 1;
    
    searchPhrase: string = '';

    model: any = {
        searchPhrase: ''
    };

    ngOnInit(): void {
        this.setPageSize(10);
    }

    setPageSize(size: number): void {
        this.pageSize = size;
        this.pageNumber = 1;
    }

    setPageNumber(page: number): void {
        this.pageNumber = page;
    }
}
