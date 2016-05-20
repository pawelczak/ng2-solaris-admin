import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {AdminComponent} from "./admin/admin.component";
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';


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
