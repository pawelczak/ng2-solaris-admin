import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'dt-controls',
    template: ``
})
export class DtControlsComponent {

    @Input()
    action: Function;
    
}
