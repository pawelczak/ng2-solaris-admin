import {Input, Component} from "angular2/core";

@Component({
    selector: 'results-info',
    template: `
        <div class="result-info">
            Showing {{(pageNumber-1) * pageSize + 1}} to 
            {{pageNumber * pageSize < resultsNumber ? pageNumber * pageSize : resultsNumber}} of 
            {{resultsNumber}} entries
        </div>
    `,
    styles: [`
        .result-info {
            padding-top: 8px;
        }
    `]
})
export class ResultsInfoDirective {

    @Input()
    pageNumber: number = 0;
    
    @Input()
    pageSize: number = 0;
    
    @Input()
    resultsNumber: number = 0;

}
