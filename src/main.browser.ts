// Prefer CoreJS over the polyfills above
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');

// Typescript emit helpers polyfill
//import 'ts-helpers';
//import 'angular2/bundles/angular2-polyfills.js';

import 'rxjs/Rx';
import  { bootstrap } from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AppComponent} from './app/app.component';


bootstrap(AppComponent,[
    ROUTER_PROVIDERS
]);
