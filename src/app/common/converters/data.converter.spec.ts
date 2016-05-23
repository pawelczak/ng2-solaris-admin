import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from '@angular/core/testing';
import {DataConverter} from './data.converter';


describe('DataConverter', () => {
    
    
    describe('Class with public variables', () => {

        class SimpleClassMock {
            id: number;
            name: string;
            enabled: boolean;
        }

        let dataConverter: DataConverter<SimpleClassMock>;

        beforeEach(() => {

            dataConverter = new DataConverter<SimpleClassMock>();
        });

        it ('should be possible to convert object', () => {

            // given
            let givenData = {id: 12, name: 'Conan', enabled: true},
                expectedObject = new SimpleClassMock();

            expectedObject.id = 12;
            expectedObject.name = 'Conan';
            expectedObject.enabled = true;

            // execute
            let actualObject = dataConverter.convert(givenData);

            // assert
            expect(actualObject instanceof Object).toEqual(true);
            expect(actualObject instanceof SimpleClassMock).toEqual(false);
            expect(actualObject.id).toEqual(expectedObject.id);
            expect(actualObject.name).toEqual(expectedObject.name);
            expect(actualObject.enabled).toEqual(expectedObject.enabled);
        });

    });

    describe('Class with public constructor', () => {

        class ContructorClassMock {
            constructor(
                public id: number,
                public name: string,
                public enabled: boolean
            ) {}
        }

        let dataConverter: DataConverter<ContructorClassMock>;

        beforeEach(() => {

            dataConverter = new DataConverter<ContructorClassMock>();
        });

        it ('should be possible to convert object', () => {

            // given
            let givenData = {id: 12, name: 'Conan', enabled: true},
                expectedObject = new ContructorClassMock(12, 'Conan', true);

            // execute
            let actualObject = dataConverter.convert(givenData);

            // assert
            expect(actualObject instanceof Object).toEqual(true);
            expect(actualObject instanceof ContructorClassMock).toEqual(false);
            expect(actualObject.id).toEqual(expectedObject.id);
            expect(actualObject.name).toEqual(expectedObject.name);
            expect(actualObject.enabled).toEqual(expectedObject.enabled);
        });
    });

});
