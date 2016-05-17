import {Component, Input, OnInit} from "angular2/core";
import {PageSizeComponent} from "./pageSizeSelect/page-size.component";
import {ResultsInfoDirective} from "./results-info/results-info.directive";
import {PaginationDirective} from "./pagination/pagination.directive";

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
        PaginationDirective
    ]
})
export class DataTableComponent implements OnInit {

    @Input()
    items: any[];

    pageNumber: number = 1;

    pageSize: number = 5;
    
    searchPhrase: string = '';

    model: any = {
        searchPhrase: ''
    };

    ngOnInit(): void {
        this.setPageSize(5);
    }

    setPageSize(size: number): void {
        this.pageSize = size;
    }
}
