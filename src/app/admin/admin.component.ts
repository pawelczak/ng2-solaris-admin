import {Component} from "angular2/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'admin',
    template: require('./admin.component.html'),
    directives: [
        ROUTER_DIRECTIVES,
        RouterOutlet
    ]
})
@RouteConfig([
    {path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/gallery', name: 'Gallery',
        loader: () => require('es6-promise!./gallery/gallery.component')('GalleryComponent')},
    {path: '/photo', name: 'Photo',
        loader: () => require('es6-promise!./photo/photo.component')('PhotoComponent')}
])
export class AdminComponent {}
