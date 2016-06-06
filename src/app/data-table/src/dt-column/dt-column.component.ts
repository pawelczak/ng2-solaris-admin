import {Component, Input, TemplateRef, ContentChild} from '@angular/core';

@Component({
    selector: 'dt-column',
    template: ``
})
export class DtColumnComponent {

    @Input()
    public value: string;

    @Input()
    public label: string;

    @ContentChild(TemplateRef) template: TemplateRef<any>;
}
