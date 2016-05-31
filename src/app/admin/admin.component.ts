import {Component} from '@angular/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {DashboardComponent} from './dashboard/dashboard.component';
import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';

@Component({
    selector: 'admin',
    styles: [require('../../../libs/metisMenu/dist/metisMenu.min.css'), require('../admin/styles.css')],
    template: require('./admin.component.html'),
    directives: [
        ROUTER_DIRECTIVES,
        RouterOutlet
    ],
    pipes: [
        TranslatePipe
    ]
})
@RouteConfig([
    {path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/gallery', name: 'Gallery',
        loader: () => require('es6-promise!./gallery/gallery.component')('GalleryComponent')},
    {path: '/photo', name: 'Photo',
        loader: () => require('es6-promise!./photo/photo.component')('PhotoComponent')}
])
export class AdminComponent {

    constructor(
        private translateService: TranslateService
    ) {}

    changeLanguage(lang: string): void {
        this.translateService.use(lang);
    }
}
