import {
    describe,
    expect,
    it,
    inject,
    beforeEach,
    beforeEachProviders
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component, provide, QueryList} from '@angular/core';

import {DataTableComponent} from '../src/data-table.component';
import {LabelsService} from '../src/labels/labels.service';
import {DtColumnConverter} from '../src/dt-column/dt-column.converter';
import {OptionsConverter} from '../src/options/options.converter';
import {DtColumnComponent} from '../src/dt-column/dt-column.component';
import {DtControlsComponent} from '../src/dt-controls/dt.controls.component';
import {DATA_TABLE_DIRECTIVES} from '../src/data_table_directives';
import {Options} from '../src/options/options.model';



class MockDtColumnConverter extends DtColumnConverter {

}

let mockTranslations = {val: 'val1'};

class MockLabelsService extends LabelsService {

    getLabels() {
        return mockTranslations;
    }

    setLabels() {}
}

class MockOptionsConverter extends OptionsConverter {

}

describe('DataTableComponent', () => {

    let injector: any,
        mockLabelService: MockLabelsService,
        mockDtColumnConverter: MockDtColumnConverter,
        mockOptionsConverter: MockOptionsConverter,
        dataTableComponent: DataTableComponent;
    let emptyQueryList: any = {};


    describe('options', () => {


        describe('default values', () => {

            beforeEach(() => {
                emptyQueryList = new QueryList<any>();
                mockLabelService = new MockLabelsService();
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

            it('should use labelsService to change labels', () => {

                // given
                spyOn(mockLabelService, 'setLabels');

                // execute
                dataTableComponent.labels = {};

                // assert
                expect(mockLabelService.setLabels).toHaveBeenCalled();
            });

        });

        describe('params via input', () => {

            beforeEachProviders(() => [
                provide(LabelsService, {useClass: MockLabelsService})
            ]);

            it('should be possible to set & change input params',
                inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

                    // given
                    let givenItems = ['1', '2'],
                        givenPageSizeArray = [4, 5, 7, 9],
                        givenPageSize = givenPageSizeArray[2],
                        givenPageNumber = 2,
                        givenShowIndex = true,
                        givenLabels = mockTranslations;

                    let expectedOptions = new Options();
                    expectedOptions.pageSize = givenPageSize;
                    expectedOptions.pageNumber = givenPageNumber;
                    expectedOptions.pageSizeArray = givenPageSizeArray;
                    expectedOptions.showIndex = givenShowIndex;
                    expectedOptions.labels = givenLabels;

                    tcb.overrideProviders(DataTableComponent, [
                        provide(LabelsService, {useClass: MockLabelsService})
                    ])
                        .createAsync(DataTableComponent)
                        .then((componentFixture: ComponentFixture<DataTableComponent>) => {

                            let dtInstance = componentFixture.componentInstance;

                            dtInstance.pageSize = givenPageSize;
                            dtInstance.pageSizeArray = givenPageSizeArray;
                            dtInstance.pageNumber = givenPageNumber;
                            dtInstance.showIndex = givenShowIndex;
                            dtInstance.labels = mockTranslations;

                            componentFixture.detectChanges();

                            // TODO Move to helper
                            // assert
                            expect(dtInstance.options instanceof Options).toEqual(true);
                            expect(dtInstance.options.pageSize).toEqual(expectedOptions.pageSize);
                            expect(dtInstance.options.pageNumber).toEqual(expectedOptions.pageNumber);
                            expect(dtInstance.options.pageSizeArray).toEqual(expectedOptions.pageSizeArray);
                            expect(dtInstance.options.showIndex).toEqual(expectedOptions.showIndex);
                            expect(dtInstance.options.labels).toEqual(expectedOptions.labels);

                            expect(dtInstance.pageSize).toEqual(givenPageSize);
                            expect(dtInstance.pageSizeArray).toEqual(givenPageSizeArray);
                            expect(dtInstance.pageNumber).toEqual(givenPageNumber);
                            expect(dtInstance.showIndex).toEqual(givenShowIndex);
                            expect(dtInstance.labels).toEqual(mockTranslations);


                            // Change

                            givenPageSizeArray = [3, 9, 18, 22];
                            givenPageSize = givenPageSizeArray[2];
                            givenPageNumber = 3;
                            givenShowIndex = false;
                            givenLabels = {val: 'val221'};


                            dtInstance.pageSize = givenPageSize;
                            dtInstance.pageSizeArray = givenPageSizeArray;
                            dtInstance.pageNumber = givenPageNumber;
                            dtInstance.showIndex = givenShowIndex;

                            componentFixture.detectChanges();

                            // TODO testing service
                            // assert
                            expect(dtInstance.options instanceof Options).toEqual(true);
                            expect(dtInstance.options.pageSize).toEqual(givenPageSize);
                            expect(dtInstance.options.pageNumber).toEqual(givenPageNumber);
                            expect(dtInstance.options.pageSizeArray).toEqual(givenPageSizeArray);
                            expect(dtInstance.options.showIndex).toEqual(givenShowIndex);
                            expect(dtInstance.options.labels).toEqual(expectedOptions.labels);

                            expect(dtInstance.pageSize).toEqual(givenPageSize);
                            expect(dtInstance.pageSizeArray).toEqual(givenPageSizeArray);
                            expect(dtInstance.pageNumber).toEqual(givenPageNumber);
                            expect(dtInstance.showIndex).toEqual(givenShowIndex);
                            expect(dtInstance.labels).toEqual(mockTranslations);
                        });
                })
            );
            
        });

    });

    describe('tcb', () => {


        beforeEachProviders(() => [
            provide(LabelsService, {useClass: MockLabelsService})
        ]);

        it('should be possible to set input params',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

                // given
                let givenItems = ['1', '2'],
                    givenPageSizeArray = [4, 5, 7, 9],
                    givenPageSize = givenPageSizeArray[2],
                    givenPageNumber = 2,
                    givenShowIndex = true,
                    givenLabels = mockTranslations;

                let expectedOptions = new Options();
                expectedOptions.pageSize = givenPageSize;
                expectedOptions.pageNumber = givenPageNumber;
                expectedOptions.pageSizeArray = givenPageSizeArray;
                expectedOptions.showIndex = givenShowIndex;
                expectedOptions.labels = givenLabels;

                let template = `<data-table [items]='[${givenItems}]' [pageSize]='${givenPageSize}'
                                    [pageSizeArray]='[${givenPageSizeArray}]' [pageNumber]='${givenPageNumber}'
                                    [showIndex]='${givenShowIndex}' [labels]="labels" ></data-table>`;

                tcb.overrideTemplate(TestComponent, template)
                    .overrideProviders(TestComponent, [])
                    .createAsync(TestComponent)
                    .then((componentFixture: ComponentFixture<TestComponent>) => {

                        componentFixture.detectChanges();
                        let dtInstance = componentFixture.debugElement.children[0].componentInstance;
                        // dtInstance.setLabelsService(labelsService);

                        // assert
                        expect(dtInstance.options instanceof Options).toEqual(true);
                        expect(dtInstance.options.pageSize).toEqual(expectedOptions.pageSize);
                        expect(dtInstance.options.pageNumber).toEqual(expectedOptions.pageNumber);
                        expect(dtInstance.options.pageSizeArray).toEqual(expectedOptions.pageSizeArray);
                        expect(dtInstance.options.showIndex).toEqual(expectedOptions.showIndex);
                        // expect(dtInstance.options.labels).toEqual(expectedOptions.labels);

                        expect(dtInstance.pageSize).toEqual(givenPageSize);
                        expect(dtInstance.pageSizeArray).toEqual(givenPageSizeArray);
                        expect(dtInstance.pageNumber).toEqual(givenPageNumber);
                        expect(dtInstance.showIndex).toEqual(givenShowIndex);
                        // expect(componentFixture.debugElement.children[0].componentInstance.labels).toEqual(mockTranslations);
                    });
            })
        );

        xit('should be possible to set input params with options',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

                console.log('aas');

                // given
                let givenItems = ['1', '2'],
                    givenPageSizeArray = [4, 5, 7, 9],
                    givenPageSize = givenPageSizeArray[2],
                    givenPageNumber = 2,
                    givenShowIndex = true,
                    givenLabels = mockTranslations;

                let givenOptions = {
                    pageSize: givenPageSize
                };

                let expectedOptions = new Options();
                expectedOptions.pageSize = givenPageSize;
                expectedOptions.pageNumber = givenPageNumber;
                expectedOptions.pageSizeArray = givenPageSizeArray;
                expectedOptions.showIndex = givenShowIndex;
                expectedOptions.labels = givenLabels;

                let template = `<data-table [items]='[${givenItems}]' ></data-table>`;

                tcb.overrideTemplate(TestComponent, template)
                    .overrideProviders(TestComponent, [])
                    .createAsync(TestComponent)
                    .then((componentFixture: ComponentFixture<TestComponent>) => {

                        componentFixture.detectChanges();
                        let dtInstance = componentFixture.debugElement.children[0].componentInstance;
                        // dtInstance.setLabelsService(labelsService);

                        // assert
                        expect(dtInstance.options instanceof Options).toEqual(true);
                        expect(dtInstance.options.pageSize).toEqual(expectedOptions.pageSize);
                        expect(dtInstance.options.pageNumber).toEqual(expectedOptions.pageNumber);
                        expect(dtInstance.options.pageSizeArray).toEqual(expectedOptions.pageSizeArray);
                        expect(dtInstance.options.showIndex).toEqual(expectedOptions.showIndex);
                        // expect(dtInstance.options.labels).toEqual(expectedOptions.labels);

                        expect(dtInstance.pageSize).toEqual(givenPageSize);
                        expect(dtInstance.pageSizeArray).toEqual(givenPageSizeArray);
                        expect(dtInstance.pageNumber).toEqual(givenPageNumber);
                        expect(dtInstance.showIndex).toEqual(givenShowIndex);
                        // expect(componentFixture.debugElement.children[0].componentInstance.labels).toEqual(mockTranslations);
                    });
            })
        );

    });

});


@Component({
    selector: 'test-component',
    template: ``,
    directives: [DATA_TABLE_DIRECTIVES],
    providers: [LabelsService]
})
class TestComponent {

    public labels: any = mockTranslations;
}
