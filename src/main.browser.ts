import 'angular2/bundles/angular2-polyfills.js';
import 'rxjs/Rx';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app/app.component';

bootstrap(AppComponent,[
    ROUTER_PROVIDERS
]);