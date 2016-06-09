import {Input, Component} from '@angular/core';

@Component({
    selector: 'results-info',
    template: `
        <div class='results-info'>
            {{createInfoText(pageNumber, pageSize, resultsNumber)}}
        </div>
    `,
    styles: [`
        .results-info {
            padding-top: 8px;
        }
    `]
})
export class ResultsInfoComponent {

    @Input()
    pageNumber: number = 0;

    @Input()
    pageSize: number = 0;

    @Input()
    resultsNumber: number = 0;

    @Input()
    labels: string = 'Showing {{from}} to {{to}} of {{max}} entries';


    createInfoText(pageNumber: number, pageSize: number, resultsNumber: number): string {
        let from = (pageNumber - 1) * pageSize + 1,
            to = pageNumber * pageSize < resultsNumber ? pageNumber * pageSize : resultsNumber;

        return this.getText(from, to, resultsNumber);
    }


    private getText(from: number, to: number, max: number): string {
        let text = this.labels;

        text = text.replace(/\{\{from\}\}/g, from.toString());
        text = text.replace(/\{\{to\}\}/g, to.toString());
        text = text.replace(/\{\{max\}\}/g, max.toString());

        return text;
    }

}
