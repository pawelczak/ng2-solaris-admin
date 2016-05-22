import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'dt-column',
    template: ``
})
export class DtColumnComponent {
    
    @Input()
    value: string;

    @Input()
    label: string;
}
