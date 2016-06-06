import {Options} from './options.model';

describe('Options', () => {

    it('create simple model object', () => {

        // given
        let options = new Options();

        // assert
        expect(options instanceof Options).toEqual(true);
    });

    it('create simple model object with values', () => {

        // given
        let options = new Options();
        options.pageNumber = 5;

        // assert
        expect(options instanceof Options).toEqual(true);
        expect(options.pageNumber).toEqual(5);
    });

});

