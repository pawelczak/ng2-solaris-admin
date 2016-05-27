// Prefer CoreJS over the polyfills above
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');

// Typescript emit helpers polyfill
// import 'ts-helpers';
// import 'angular2/bundles/angular2-polyfills.js';

import 'rxjs/Rx';
import  { bootstrap } from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AppComponent} from './app/app.component';
import {provide} from '@angular/core';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {
    TranslateLoader, TranslateService,
    TranslateStaticLoader
} from 'ng2-translate/ng2-translate';


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(TranslateLoader, {
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'src/assets/i18n', '.json'),
        deps: [Http]
    }),
    // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
    TranslateService
]);
