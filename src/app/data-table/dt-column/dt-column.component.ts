import {Component, Input} from '@angular/core';

@Component({
    selector: 'dt-column',
    template: ``
})
export class DtColumnComponent {

    @Input()
    public value: string;

    @Input()
    public label: string;
}
