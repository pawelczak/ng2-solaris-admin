import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({selector: '[customTemplate]'})
export class CustomTemplateDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

    @Input() set customTemplate(options: any) {

        this.viewContainer.clear();
        
        if (options.template !== undefined) {
            this.viewContainer.createEmbeddedView(options.template, {
                'data': options.data,
                'dataIndex': options.dataIndex
            });
        } else {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}
