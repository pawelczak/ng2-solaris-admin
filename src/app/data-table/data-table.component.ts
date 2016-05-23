import {Component, Input, OnInit, Query, QueryList} from '@angular/core';
import {PageSizeComponent} from "./page-size/page-size.component";
import {ResultsInfoDirective} from "./results-info/results-info.directive";
import {PaginationDirective} from "./pagination/pagination.directive";
import {ItemsTableComponent} from "./items-table/items-table.component";
import {VisibleIconDirective} from "../utils/visible-icon.directive";
import {DtColumnComponent} from "./dt-column/dt-column.component";
import {DtColumnConverter} from "./dt-column/dt-column.converter";
import {DtColumnModel} from "./dt-column/dt-column.model";

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
        ItemsTableComponent,
        DtColumnComponent
    ],
    providers: [
        DtColumnConverter
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

    public columns: DtColumnModel[] = [];

    private cols: QueryList<DtColumnComponent>;

    constructor(
        private dtColumnConverter: DtColumnConverter,
        @Query(DtColumnComponent) cols: QueryList<DtColumnComponent>
    ) {
        this.cols = cols;
        this.cols.changes.subscribe(() => {
            this.columns = this.dtColumnConverter.convertArray(cols.toArray());
        });
    }

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
