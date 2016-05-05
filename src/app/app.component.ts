import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';


@Component({
    selector: 'app',
    template: `App Heh`,
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        HTTP_PROVIDERS
    ]
})
export class AppComponent {}
