import {Component} from '@angular/core';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'admin',
    styles: [require('../../../libs/metisMenu/dist/metisMenu.min.css'), require('../admin/styles.css')],
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
