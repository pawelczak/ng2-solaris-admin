import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from '@angular/core/testing';

import {DtColumnModel} from '../../src/dt-column/dt-column.model';

describe('DtColumnModel', () => {
    
    it('should be possible to create object', () => {

        // given
        let givenColumn = new DtColumnModel(),
            givenFieldName = 'givenFieldName',
            givenLabel = 'givenLabel';

        givenColumn.fieldName = givenFieldName;
        givenColumn.label = givenLabel;

        // assert
        expect(givenColumn instanceof DtColumnModel).toEqual(true);
        expect(givenColumn.fieldName).toEqual(givenFieldName);
        expect(givenColumn.label).toEqual(givenLabel);
    });

});
