import {Component, Input, Directive} from '@angular/core';

@Directive({
    selector: 'visible-icon'
})
export class VisibleIconDirective {


    private el: HTMLElement;

    @Input()
    visible: boolean;

/*
    constructor(el: ElementRef) { this.el = el.nativeElement; }
*/
    getIconClass(): string {
        return this.visible ? "fa-eye" : "fa-eye-slash ";
    }
}
