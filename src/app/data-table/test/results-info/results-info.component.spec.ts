import {
    describe,
    expect,
    it,
    inject,
    beforeEach,
    beforeEachProviders
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';

import {ResultsInfoComponent} from '../../src/results-info/results-info.component';

describe('ResultsInfoComponent', () => {

    it('should have default values',
        inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

            tcb.createAsync(ResultsInfoComponent)
                .then((componentFixture: ComponentFixture<ResultsInfoComponent>) => {

                    let riInstance = componentFixture.componentInstance;
                    componentFixture.detectChanges();

                    // assert
                    expect(riInstance.pageNumber).toEqual(0);
                    expect(riInstance.pageSize).toEqual(0);
                    expect(riInstance.resultsNumber).toEqual(0);
                    expect(riInstance.labels).toEqual('Showing {{from}} to {{to}} of {{max}} entries');
                    expect(componentFixture.nativeElement.querySelector('.results-info').innerText).toEqual('Showing 1 to 0 of 0 entries');
                });
        })
    );

    it('should be possible to change value',
        inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

            tcb.createAsync(ResultsInfoComponent)
                .then((componentFixture: ComponentFixture<ResultsInfoComponent>) => {

                    let riInstance = componentFixture.componentInstance;

                    riInstance.pageNumber = 2;
                    riInstance.pageSize = 8;
                    riInstance.resultsNumber = 220;
                    riInstance.labels = 'to: {{to}}, max: {{max}}, from: {{from}}';
                    componentFixture.detectChanges();

                    // assert
                    expect(riInstance.pageNumber).toEqual(2);
                    expect(riInstance.pageSize).toEqual(8);
                    expect(riInstance.resultsNumber).toEqual(220);
                    expect(componentFixture.nativeElement.querySelector('.results-info').innerText).toEqual('to: 16, max: 220, from: 9');
                });
        })
    );
    
});
