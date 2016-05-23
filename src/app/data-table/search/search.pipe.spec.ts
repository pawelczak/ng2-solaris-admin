import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from '@angular/core/testing';
import {SearchPipe} from "./search.pipe";

describe('SearchPipe', () => {

    class MockClazz {

        constructor(
            public name: string
        ) {}

    }

    let searchPipe: SearchPipe;


    beforeEach(() => {
        searchPipe = new SearchPipe();
    });

    it('should transform basic array', () => {

        // given
        let givenValues = [new MockClazz('value'), new MockClazz('simple'), new MockClazz('hey alu')];

        // execute
        let actualValues = searchPipe.transform(givenValues, ['alu', 'name']);

        // assert
        expect(actualValues).toEqual([new MockClazz('value'), new MockClazz('hey alu')]);
    });

    it('should not transform array when phrase is empty string', () => {

        // given
        let givenValues = [new MockClazz('value'), new MockClazz('simple'), new MockClazz('hey alu')];

        // execute
        let actualValues = searchPipe.transform(givenValues, ['', 'name']);

        // assert
        expect(actualValues).toEqual(givenValues);
    });

});
