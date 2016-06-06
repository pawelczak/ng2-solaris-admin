import {
    describe,
    expect,
    it,
    inject
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';

import {DtColumnComponent} from '../../src/dt-column/dt-column.component';


describe ('DtColumnComponent', () => {

    let dtColumnComponent: DtColumnComponent;

    beforeEach(() => {
        dtColumnComponent = new DtColumnComponent();
    });

    it ('should have an initial state', () => {
        expect(dtColumnComponent.value).not.toBeDefined();
        expect(dtColumnComponent.label).not.toBeDefined();
    });

    it ('should have input properites',
        inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.overrideProviders(DtColumnComponent, [])
                .createAsync(DtColumnComponent)
                .then((componentFixture: ComponentFixture<DtColumnComponent>) => {

                    // given
                    let givenValue = 'given value',
                        givenLabel = 'given label';

                    // execute
                    componentFixture.componentInstance.value = givenValue;
                    componentFixture.componentInstance.label = givenLabel;
                    componentFixture.detectChanges();

                    // assert
                    expect(componentFixture.componentInstance.value).toEqual(givenValue);
                    expect(componentFixture.componentInstance.label).toEqual(givenLabel);
            });

        })
    );

    it ('should have empty template',
        inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.overrideProviders(DtColumnComponent, [])
                .createAsync(DtColumnComponent)
                .then((componentFixture: ComponentFixture<DtColumnComponent>) => {

                    // given
                    const fixture = componentFixture.nativeElement;

                    // execute
                    componentFixture.detectChanges();

                    // assert
                    expect(fixture.querySelectorAll('*').length).toBe(0);
                });
        })
    );

});
