import {Component, Input, Output} from "angular2/core";

@Component({
    selector: 'pagination',
    template: require('./pagination.directive.html'),
    styles: [`
        .pagination {
            margin: 2px 0;
        }
    `]
})
export class PaginationDirective {


    @Input()
    pageSize: number;

    @Input()
    pageNumber: number;

    @Input()
    resultsNumber: number;

    //@Output()
    //selectedPageNumber: number;


    changePage(page: number) {
        
    }
}
