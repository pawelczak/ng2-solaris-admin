import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({ selector: '[customTemplate]' })
export class CustomTemplateDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

    @Input() set customTemplate(options: any) {
        if (options.template !== undefined) {
            this.viewContainer.createEmbeddedView(options.template, {
                'value': options.value
            });
        } else {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}