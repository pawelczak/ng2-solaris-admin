import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AdminComponent} from "./admin/admin.component";


@Component({
    selector: 'app',
    template: `
        <admin></admin>
    `,
    directives: [
        AdminComponent
    ],
    providers: [
        HTTP_PROVIDERS
    ]
})
export class AppComponent {}
