import {OptionsConverter} from '../../src/options/options.converter';
import {Options} from '../../src/options/options.model';

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
            let rawOptions = {pageNumber: 6,
                pageSize: 11,
                pageSizeArray: [5, 6, 11],
                labels: {label: 'nice labels'},
                showIndex: true
            };

            // execute
            let expectedOptions = optionsConverter.convert(rawOptions);

            // assert
            expect(expectedOptions instanceof Options).toEqual(true);
            expect(expectedOptions.pageNumber).toEqual(6);
            expect(expectedOptions.pageSize).toEqual(11);
            expect(expectedOptions.pageSizeArray).toEqual([5, 6, 11]);
            expect(expectedOptions.labels).toEqual({label: 'nice labels'});
            expect(expectedOptions.showIndex).toEqual(true);
        });

        it ('should convert simple object with pageNumber string value', () => {

            // given
            let rawOptions = {pageNumber: '6',
                pageSize: '11',
                pageSizeArray: ['5', '6', '11'],
                showIndex: '0'
            };

            // execute
            let expectedOptions = optionsConverter.convert(rawOptions);

            // assert
            expect(expectedOptions instanceof Options).toEqual(true);
            expect(expectedOptions.pageNumber).toEqual(6);
            expect(expectedOptions.pageSize).toEqual(11);
            expect(expectedOptions.pageSizeArray).toEqual([5, 6, 11]);
            expect(expectedOptions.showIndex).toEqual(false);
        });

        it ('should log message when pageSize is not in pageSizeArray', () => {

            // given
            let rawOptions = { pageSize: 2,
                pageSizeArray: [1, 3]
            };
            spyOn(console, 'log');

            // execute
            optionsConverter.convert(rawOptions);

            // assert
            expect(console.log).toHaveBeenCalledWith('Error: pageSize should take a value from pageSizeArray.');
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
            expect(expectedOptions[0] instanceof Options).toEqual(true);
        });

    });


});
