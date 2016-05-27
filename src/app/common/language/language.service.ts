import {Injectable} from '@angular/core';

@Injectable()
export class LanguageService {

    private _lang: string;

    constructor() {}

    set lang(language: string) {
        this._lang = language;
    }

    get lang(): string {
        return this._lang;
    }

}
