import {
    describe,
    expect,
    it,
    inject,
    beforeEach,
    beforeEachProviders
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {provide, QueryList} from '@angular/core';

import {DataTableComponent} from '../src/data-table.component';
import {LabelsService} from '../src/labels/labels.service';
import {DtColumnConverter} from '../src/dt-column/dt-column.converter';
import {OptionsConverter} from '../src/options/options.converter';
import {DtColumnComponent} from '../src/dt-column/dt-column.component';
import {DtControlsComponent} from '../src/dt-controls/dt.controls.component';



class MockDtColumnConverter extends DtColumnConverter {

}

class MockLabelService extends LabelsService {

}

class MockOptionsConverter extends OptionsConverter {

}

describe('DataTableComponent', () => {

    let injector: any,
        mockLabelService: MockLabelService,
        mockDtColumnConverter: MockDtColumnConverter,
        mockOptionsConverter: MockOptionsConverter,
        dataTableComponent: DataTableComponent;
    let mockTranslations = {val: 'val1'};
    let emptyQueryList: any = {};


    describe('class', () => {

        beforeEach(() => {
            emptyQueryList = new QueryList<any>();
            mockLabelService = new MockLabelService();
            mockLabelService.reset(mockTranslations);
            mockDtColumnConverter = new MockDtColumnConverter();
            dataTableComponent = new DataTableComponent(mockLabelService, mockDtColumnConverter, mockOptionsConverter, emptyQueryList, emptyQueryList);
        });

        it('should have an initial state', () => {

            // assert
            expect(dataTableComponent.options).toBeDefined();
            expect(dataTableComponent.pageSize).toEqual(10);
            expect(dataTableComponent.pageSizeArray).toEqual([5, 10, 25]);
            expect(dataTableComponent.pageNumber).toEqual(1);
            expect(dataTableComponent.showIndex).toEqual(false);
            expect(dataTableComponent.labels).toEqual(mockTranslations);

            expect(dataTableComponent.columns.length).toEqual(0);
            expect(dataTableComponent.columnsArray.length).toEqual(0);
        });

    });

    xdescribe('tcb', () => {

        xit('should take options and set state',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                tcb.overrideProviders(DataTableComponent, [
                    provide(LabelsService, {useClass: MockLabelService}),
                    provide(DtColumnConverter, {useClass: MockDtColumnConverter}),
                    provide(OptionsConverter, {useClass: MockOptionsConverter})/*,
                    provide(QueryList<DtColumnComponent>, {useValue: new QueryList<any>()}),
                    provide(QueryList<DtControlsComponent>, {useValue: new QueryList<any>()})*/
                    ])
                    .createAsync(DataTableComponent)
                    .then((componentFixture: ComponentFixture<DataTableComponent>) => {

                        console.log('asd#3r2');

                        // given
                        let options = {
                            pageNumber: 8,
                            pageSize: 4,
                            pageSizeArray: [1, 4, 8]
                        };

                        // execute
                        componentFixture.componentInstance.options = options;
                        componentFixture.detectChanges();

                        // assert
                        // expect(componentFixture.componentInstance.options).toBeDefined();
                        expect(componentFixture.componentInstance.pageSize).toEqual(4);
                        expect(componentFixture.componentInstance.pageSizeArray).toEqual([1, 4, 8]);
                        expect(componentFixture.componentInstance.pageNumber).toEqual(8);
                        expect(componentFixture.componentInstance.showIndex).toEqual(false);
                        expect(componentFixture.componentInstance.labels).toEqual(mockTranslations);
                    });

            })
        );
        
    });

});
