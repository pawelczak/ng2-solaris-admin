import {
    describe,
    expect,
    it,
    inject,
    beforeEach,
    beforeEachProviders
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {provide, QueryList, Component} from '@angular/core';
import {FooComponent} from '../../src/foo/foo.component';

xdescribe('FooComponent', () => {

    xit('should have value',
        inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb
                .createAsync(TestTemplate)
                .then((componentFixture: ComponentFixture<TestTemplate>) => {

                    // given
                    const element: HTMLElement = componentFixture.nativeElement;

                    // execute
                    componentFixture.detectChanges();

                    // assert
                    expect(componentFixture.debugElement.children[0].componentInstance.bar).toEqual('ttr');

                });

        })
    );

});

@Component({
    selector: 'test-template',
    template: `<foo value="ttr" ></foo>`,
    directives: [FooComponent]
})
class TestTemplate {}
