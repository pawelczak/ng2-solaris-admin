import {OptionsConverter} from './options.converter';
import {Options} from './options.model';

describe('OptionsConverter', () => {


    let optionsConverter: OptionsConverter;

    beforeEach(() => {
        optionsConverter = new OptionsConverter();
    });

    describe('convert', () => {

        it ('should convert empty object', () => {

            // given
            let rawOptions = {};

            // execute
            let expectedOptions = optionsConverter.convert(rawOptions);

            // assert
            expect(expectedOptions instanceof Options).toEqual(true);
        });

        it ('should convert simple object', () => {

            // given
            let rawOptions = {pageNumber: 6};

            // execute
            let expectedOptions = optionsConverter.convert(rawOptions);

            // assert
            expect(expectedOptions instanceof Options).toEqual(true);
            expect(expectedOptions.pageNumber).toEqual(6);
        });

        it ('should convert simple object with pageNumber undefined', () => {

            // given
            let rawOptions = {};

            // execute
            let expectedOptions = optionsConverter.convert(rawOptions);

            // assert
            expect(expectedOptions instanceof Options).toEqual(true);
            expect(expectedOptions.pageNumber).not.toBeDefined();
        });

        /*
        it ('should convert simple object with pageNumber null', () => {

            // given
            let rawOptions = {pageNumber: null);

            // execute
            let expectedOptions = optionsConverter.convert(rawOptions);

            // assert
            expect(expectedOptions instanceof Options).toEqual(true);
            expect(expectedOptions.pageNumber).toEqual(null);
        });
        */

        it ('should convert simple object with pageNumber string value', () => {

            // given
            let rawOptions = {pageNumber: '6'};

            // execute
            let expectedOptions = optionsConverter.convert(rawOptions);

            // assert
            expect(expectedOptions instanceof Options).toEqual(true);
            expect(expectedOptions.pageNumber).toEqual(6);
        });

    });


    describe('convertArray', () => {

        it ('should convert empty array', () => {

            // given
            let rawOptions = [];

            // execute
            let expectedOptions = optionsConverter.convertArray(rawOptions);

            // assert
            expect(expectedOptions).toEqual([]);
            expect(expectedOptions.length).toEqual(0);
        });

        it ('should convert array with simple Options', () => {

            // given
            let rawOptions = [{}];

            // execute
            let expectedOptions = optionsConverter.convertArray(rawOptions);

            // assert
            expect(expectedOptions.length).toEqual(1);
        });

    });


});
