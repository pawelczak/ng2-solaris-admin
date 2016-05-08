import {Component, Input} from "angular2/core";

@Component({
    selector: 'data-table',
    template: require('./data-table.component.html')
})
export class DataTableComponent {

    @Input()
    items: any;

}