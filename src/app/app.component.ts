import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';

import {AdminComponent} from './admin/admin.component';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {LanguageService} from './common/language/language.service';

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
        LanguageService
    ]
})
@RouteConfig([
    {path: '...', name: 'Admin', component: AdminComponent, useAsDefault: true}
])
export class AppComponent {

    constructor(translate: TranslateService) {

        let userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(pl|en)/gi.test(userLang) ? userLang : 'en';

        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(userLang);
    }

}
