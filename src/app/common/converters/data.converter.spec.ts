import {DataConverter} from "./data.converter";


describe('DataConverter', () => {
    
    
    describe('SimpleClassMock', () => {

        class SimpleClassMock {
            constructor(
                id: number,
                name: string,
                enabled: boolean
            ) {}
        }

        let dataConverter: DataConverter<SimpleClassMock>;

        beforeEach(() => {

            dataConverter = new DataConverter<SimpleClassMock>();
        });

        /*
        it ('should be possible to convert object', () => {

            // given
            let givenData = {id: 12, name: 'Conan', enabled: true},
                expectedObject = new SimpleClassMock(12, 'Conan', true);

            // execute
            let actualObject = dataConverter.convert(givenData);

            // assert
            expect(typeof actualObject).toEqual('SimpleClassMock')
            expect(actualObject).toEqual(expectedObject);

        });
        */

    });

});
