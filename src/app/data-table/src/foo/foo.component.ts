import {Component, Input, Attribute} from '@angular/core';

@Component({
    selector: 'foo',
    template: ``
})
export class FooComponent {

    public bar: any = 'a';

    constructor(@Attribute('value') value: any) {
        console.log(value);
        this.bar = value;
    }

}
