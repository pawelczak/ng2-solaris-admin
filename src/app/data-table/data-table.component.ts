import {Component, Input, OnInit} from "angular2/core";
import {PageSizeComponent} from "./pageSizeSelect/page-size.component";
import {SearchPipe} from "./search/search.pipe";

@Component({
    selector: 'data-table',
    template: require('./data-table.component.html'),
    directives: [
        PageSizeComponent
    ],
    pipes: [SearchPipe]
})
export class DataTableComponent implements OnInit {

    @Input()
    items: any;

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
