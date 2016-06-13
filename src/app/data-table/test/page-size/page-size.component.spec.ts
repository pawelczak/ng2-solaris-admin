import {
    describe,
    expect,
    it,
    inject,
    beforeEach,
    beforeEachProviders
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';

import {PageSizeComponent} from '../../src/page-size/page-size.component';

fdescribe('PageSizeComponent', () => {


    fit('should have default values',
        inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb
                .createAsync(PageSizeComponent)
                .then((componentFixture: ComponentFixture<PageSizeComponent>) => {

                    let psInstance = componentFixture.componentInstance;

                    // assert
                    expect(psInstance.pageSize).toEqual(0);
                    expect(psInstance.pageSizeArray).toEqual([]);
                    expect(psInstance.model.pageSize).toEqual(0);
                    expect(psInstance.labels).toBeDefined();
                });
        })
    );

    fit('should have template with select and 0 options',
        inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb
                .createAsync(PageSizeComponent)
                .then((componentFixture: ComponentFixture<PageSizeComponent>) => {

                    let psElement = componentFixture.nativeElement;

                    componentFixture.detectChanges();

                    // assert
                    expect(psElement.querySelectorAll('select').length).toEqual(1);
                    expect(psElement.querySelectorAll('option').length).toEqual(0);
                });
        })
    );

    fit('should have template with select and some options',
        inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb
                .createAsync(PageSizeComponent)
                .then((componentFixture: ComponentFixture<PageSizeComponent>) => {

                    let psInstance = componentFixture.componentInstance,
                        psElement = componentFixture.nativeElement,
                        givenPageSizeArray = [3, 8, 15, 39],
                        givenPageSize = givenPageSizeArray[1];

                    psInstance.pageSizeArray = givenPageSizeArray;
                    psInstance.pageSize = givenPageSize;

                    componentFixture.detectChanges();

                    // assert
                    let options = psElement.querySelectorAll('option');

                    expect(psElement.querySelectorAll('select').length).toEqual(1);
                    expect(options.length).toEqual(4);
                    for (let i = 0, length = options.length; i < length; i += 1) {
                        expect(options[i]).toHaveText(givenPageSizeArray[i]);
                    }
                    expect(psElement.querySelector('option:checked')).toHaveText(givenPageSize);

                });
        })
    );

    fit('should react to change of pageSize',
        inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb
                .createAsync(PageSizeComponent)
                .then((componentFixture: ComponentFixture<PageSizeComponent>) => {

                    let psInstance = componentFixture.componentInstance,
                        psElement = componentFixture.nativeElement,
                        givenPageSizeArray = [3, 8, 15, 39],
                        givenPageSize = givenPageSizeArray[2];

                    psInstance.pageSizeArray = givenPageSizeArray;
                    psInstance.pageSize = givenPageSize;

                    componentFixture.detectChanges();

                    // assert
                    expect(psElement.querySelectorAll('select').length).toEqual(1);
                    expect(psElement.querySelectorAll('option').length).toEqual(4);
                    expect(psElement.querySelector('option:checked')).toHaveText(givenPageSize);

                    psInstance.pageSize = givenPageSizeArray[1];

                    componentFixture.detectChanges();

                    // assert
                    expect(psElement.querySelectorAll('select').length).toEqual(1);
                    expect(psElement.querySelectorAll('option').length).toEqual(4);
                    expect(psElement.querySelector('option:checked')).toHaveText(givenPageSizeArray[1]);
                });
        })
    );

    fdescribe('change pageSizeArray', () => {

        fit('pageSize exists in new pageSizeArray',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                tcb
                    .createAsync(PageSizeComponent)
                    .then((componentFixture: ComponentFixture<PageSizeComponent>) => {

                        let psInstance = componentFixture.componentInstance,
                            psElement = componentFixture.nativeElement,
                            givenPageSizeArray = [3, 8, 15, 39],
                            givenPageSize = givenPageSizeArray[1];

                        psInstance.pageSizeArray = givenPageSizeArray;
                        psInstance.pageSize = givenPageSize;

                        componentFixture.detectChanges();

                        // assert
                        expect(psElement.querySelectorAll('select').length).toEqual(1);
                        expect(psElement.querySelectorAll('option').length).toEqual(4);
                        expect(psElement.querySelector('option:checked')).toHaveText(givenPageSize);

                        componentFixture.detectChanges();

                        let newPageSizeArray = [1, 2, 3, 4, 8];

                        psInstance.pageSizeArray = newPageSizeArray;

                        componentFixture.detectChanges();

                        // assert
                        let options = psElement.querySelectorAll('option');

                        expect(psElement.querySelectorAll('select').length).toEqual(1);
                        expect(options.length).toEqual(5);
                        for (let i = 0, length = options.length; i < length; i += 1) {
                            expect(options[i]).toHaveText(newPageSizeArray[i]);
                        }
                        expect(psElement.querySelector('option:checked')).toHaveText(givenPageSize);
                    });
            })
        );

        fit('pageSize don\'t exists in new pageSizeArray',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                tcb
                    .createAsync(PageSizeComponent)
                    .then((componentFixture: ComponentFixture<PageSizeComponent>) => {

                        let psInstance = componentFixture.componentInstance,
                            psElement = componentFixture.nativeElement,
                            givenPageSizeArray = [3, 8, 15, 39],
                            givenPageSize = givenPageSizeArray[1];

                        psInstance.pageSizeArray = givenPageSizeArray;
                        psInstance.pageSize = givenPageSize;

                        componentFixture.detectChanges();

                        // assert
                        expect(psElement.querySelectorAll('select').length).toEqual(1);
                        expect(psElement.querySelectorAll('option').length).toEqual(4);
                        expect(psElement.querySelector('option:checked')).toHaveText(givenPageSize);

                        let newPageSizeArray = [1, 2, 3, 4, 5];

                        psInstance.pageSizeArray = newPageSizeArray;

                        componentFixture.detectChanges();

                        // assert
                        let options = psElement.querySelectorAll('option');

                        expect(psElement.querySelectorAll('select').length).toEqual(1);
                        expect(options.length).toEqual(5);
                        for (let i = 0, length = options.length; i < length; i += 1) {
                            expect(options[i]).toHaveText(newPageSizeArray[i]);
                        }
                        expect(psElement.querySelector('option:checked')).toHaveText(newPageSizeArray[0]);
                    });
            })
        );
    });

    fdescribe('change pageSize & pageSizeArray', () => {

        fit('simple',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                tcb
                    .createAsync(PageSizeComponent)
                    .then((componentFixture: ComponentFixture<PageSizeComponent>) => {

                        let psInstance = componentFixture.componentInstance,
                            psElement = componentFixture.nativeElement,
                            givenPageSizeArray = [3, 8, 15, 39],
                            givenPageSize = givenPageSizeArray[2];

                        psInstance.pageSizeArray = givenPageSizeArray;
                        psInstance.pageSize = givenPageSize;

                        componentFixture.detectChanges();

                        // assert
                        expect(psElement.querySelectorAll('select').length).toEqual(1);
                        expect(psElement.querySelectorAll('option').length).toEqual(4);
                        expect(psElement.querySelector('option:checked')).toHaveText(givenPageSizeArray[2]);

                        psInstance.pageSizeArray = [1, 2, 3];
                        psInstance.pageSize = 2;

                        componentFixture.detectChanges();

                        // assert
                        let options = psElement.querySelectorAll('option');

                        expect(psElement.querySelectorAll('select').length).toEqual(1);
                        expect(options.length).toEqual(3);
                        expect(psElement.querySelector('option:checked')).toHaveText(2);
                    });
            })
        );

        fit('pageSize doesn\'t exists in pageSizeArray',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                tcb
                    .createAsync(PageSizeComponent)
                    .then((componentFixture: ComponentFixture<PageSizeComponent>) => {

                        let psInstance = componentFixture.componentInstance,
                            psElement = componentFixture.nativeElement,
                            givenPageSizeArray = [3, 8, 15, 39],
                            givenPageSize = givenPageSizeArray[2];

                        psInstance.pageSizeArray = givenPageSizeArray;
                        psInstance.pageSize = givenPageSize;

                        componentFixture.detectChanges();

                        // assert
                        expect(psElement.querySelectorAll('select').length).toEqual(1);
                        expect(psElement.querySelectorAll('option').length).toEqual(4);
                        expect(psElement.querySelector('option:checked')).toHaveText(givenPageSizeArray[2]);

                        psInstance.pageSizeArray = [1, 2, 3];
                        psInstance.pageSize = 6;

                        componentFixture.detectChanges();

                        // assert
                        let options = psElement.querySelectorAll('option');

                        expect(psElement.querySelectorAll('select').length).toEqual(1);
                        expect(options.length).toEqual(3);
                        expect(psElement.querySelector('option:checked')).toHaveText(1);
                    });
            })
        );
    });

    fdescribe('labels prefix & sufix', () => {

        fit('should have default values',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                tcb
                    .createAsync(PageSizeComponent)
                    .then((componentFixture: ComponentFixture<PageSizeComponent>) => {

                        let psInstance = componentFixture.componentInstance,
                            psElement = componentFixture.nativeElement,
                            defaultLabels = {
                                'prefix': 'Show',
                                'sufix': 'entries'
                            };

                        // assert
                        expect(psInstance.labels).toEqual(defaultLabels);
                        expect(psElement.querySelectorAll('span'))[0].toHaveText(defaultLabels.prefix);
                        expect(psElement.querySelectorAll('span'))[1].toHaveText(defaultLabels.sufix);
                    });
            })
        );


        fit('should be possible to change values',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                tcb
                    .createAsync(PageSizeComponent)
                    .then((componentFixture: ComponentFixture<PageSizeComponent>) => {

                        console.log('sadasd');

                        // given
                        let psInstance = componentFixture.componentInstance,
                            psElement = componentFixture.nativeElement,
                            givenLabels = {
                                'prefix': 'next prefix',
                                'sufix': 'better sufix'
                            };

                        // execute
                        psInstance.labels = givenLabels;

                        componentFixture.detectChanges();

                        // assert
                        expect(psInstance.labels).toEqual(givenLabels);
                        expect(psElement.querySelector('span:nth-child(1)')).toHaveText(givenLabels.prefix);
                        expect(psElement.querySelector('span:nth-child(2)')).toHaveText(givenLabels.sufix);
                    });
            })
        );
    });

});
