import {Options} from '../../src/options/options.model';

describe('Options', () => {

    it('create simple model object with default values', () => {

        // given
        let options = new Options();

        // assert
        expect(options instanceof Options).toEqual(true);
        expect(options.pageNumber).toEqual(1);
        expect(options.pageSize).toEqual(10);
        expect(options.pageSizeArray).toEqual([5, 10, 25]);
        expect(options.labels).toEqual({});
        expect(options.showIndex).toEqual(false);
    });

    it('create simple model object with values', () => {

        // given
        let options = new Options();
        options.pageNumber = 5;
        options.pageSize = 10;
        options.pageSizeArray = [5, 10, 35];
        options.labels = {label: 'label'};
        options.showIndex = true;

        // assert
        expect(options instanceof Options).toEqual(true);
        expect(options.pageNumber).toEqual(5);
        expect(options.pageSize).toEqual(10);
        expect(options.pageSizeArray).toEqual([5, 10, 35]);
        expect(options.labels).toEqual({label: 'label'});
        expect(options.showIndex).toEqual(true);
    });

});
