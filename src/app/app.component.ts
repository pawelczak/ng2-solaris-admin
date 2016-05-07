import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AdminComponent} from "./admin/admin.component";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";


@Component({
    selector: 'app',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [
        AdminComponent,
        ROUTER_DIRECTIVES
    ],
    providers: [
        HTTP_PROVIDERS
    ]
})
@RouteConfig([
    {path: '...', name: 'Admin', component: AdminComponent, useAsDefault: true}
])
export class AppComponent {}
