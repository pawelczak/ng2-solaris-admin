import {Component, Input, TemplateRef, ContentChild} from '@angular/core';

@Component({
    selector: 'dt-controls',
    template: ``
})
export class DtControlsComponent {

    @Input()
    action: Function;

    @ContentChild(TemplateRef) template: TemplateRef<any>;
}
