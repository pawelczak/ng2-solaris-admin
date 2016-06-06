import {
    describe,
    expect,
    it
} from '@angular/core/testing';

import {DtColumnConverter} from '../../src/dt-column/dt-column.converter';
import {DtColumnComponent} from '../../src/dt-column/dt-column.component';
import {DtColumnModel} from '../../src/dt-column/dt-column.model';


describe('DtColumnConverter', () => {
    
    let dtColumnConverter: DtColumnConverter;

    beforeEach(() => {
        dtColumnConverter = new DtColumnConverter();
    });

    describe('convert', () => {

        it ('should convert DtColumnComponent with simple data', () => {

            // given
            let givenDcc = new DtColumnComponent(),
                givenLabel = 'given label',
                givenValue = 'given value';
            givenDcc.label = givenLabel;
            givenDcc.value = givenValue;

            // execute
            let actualDtColumnModel = dtColumnConverter.convert(givenDcc);

            // assert
            expect(actualDtColumnModel instanceof DtColumnModel).toEqual(true);
            expect(actualDtColumnModel.fieldName).toEqual(givenValue);
            expect(actualDtColumnModel.label).toEqual(givenLabel);
        });

        it ('should convert DtColumnComponent with only value', () => {

            // given
            let givenDcc = new DtColumnComponent(),
                givenValue = 'given value';
            givenDcc.value = givenValue;

            // execute
            let actualDtColumnModel = dtColumnConverter.convert(givenDcc);

            // assert
            expect(actualDtColumnModel instanceof DtColumnModel).toEqual(true);
            expect(actualDtColumnModel.fieldName).toEqual(givenValue);
            expect(actualDtColumnModel.label).toEqual(givenValue);
        });

        it ('should convert empty DtColumnComponent object', () => {

            // given
            let givenDcc = new DtColumnComponent();

            // execute
            let actualDtColumnModel = dtColumnConverter.convert(givenDcc);

            // assert
            expect(actualDtColumnModel instanceof DtColumnModel).toEqual(true);
            expect(actualDtColumnModel.fieldName).not.toBeDefined();
            expect(actualDtColumnModel.label).not.toBeDefined();
        });

    });
    
    describe('convertArray', () => {

        it ('should convert array of DtColumnComponent', () => {

            // given
            let givenDccOne = new DtColumnComponent(),
                givenDccTwo = new DtColumnComponent(),
                givenDccThree = new DtColumnComponent(),
                givenDccArray = [givenDccOne, givenDccTwo, givenDccThree],
                givenValueOne = 'value one',
                givenLabelOne = 'label one',
                givenValueTwo = 'value two';

            givenDccOne.value = givenValueOne;
            givenDccOne.label = givenLabelOne;
            givenDccTwo.value = givenValueTwo;

            // execute
            let actualDtColumnModelArray = dtColumnConverter.convertArray(givenDccArray);

            // assert
            expect(actualDtColumnModelArray.length).toEqual(3);
            expect(actualDtColumnModelArray[0] instanceof DtColumnModel).toEqual(true);
            expect(actualDtColumnModelArray[0].fieldName).toEqual(givenValueOne);
            expect(actualDtColumnModelArray[0].label).toEqual(givenLabelOne);

            expect(actualDtColumnModelArray[1] instanceof DtColumnModel).toEqual(true);
            expect(actualDtColumnModelArray[1].fieldName).toEqual(givenValueTwo);
            expect(actualDtColumnModelArray[1].label).toEqual(givenValueTwo);

            expect(actualDtColumnModelArray[2] instanceof DtColumnModel).toEqual(true);
            expect(actualDtColumnModelArray[2].fieldName).not.toBeDefined();
            expect(actualDtColumnModelArray[2].label).not.toBeDefined();
        });

        it ('should convert empty array', () => {

            // given
            let givenEmptyArray = [];

            // execute
            let actualDtColumnModelArray = dtColumnConverter.convertArray(givenEmptyArray);

            // assert
            expect(actualDtColumnModelArray.length).toEqual(0);
            expect(actualDtColumnModelArray instanceof Array).toEqual(true);
        });

    });
    
});
