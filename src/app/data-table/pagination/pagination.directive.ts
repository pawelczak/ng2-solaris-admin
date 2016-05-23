import {Component, Input, Output, EventEmitter} from '@angular/core';

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

    @Output()
    selectedPageNumber = new EventEmitter<number>();


    changePage(page: number): void {
        this.selectedPageNumber.emit(this.pageNumber + page);
    }

    getTotalPageNumber(resultsNumber: number, pageSize: number): number {
        return Math.ceil(resultsNumber / pageSize);
    }

    previousButtonClass(): string {
        return this.pageNumber === 1 ? 'disabled' : '';
    }
    
    nextButtonClass(): string {
        return this.pageNumber >= Math.ceil(this.resultsNumber / this.pageSize) ? 'disabled' : '';
    }
}
