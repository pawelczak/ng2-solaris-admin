import {Component, Input, Query, QueryList} from '@angular/core';

import {PageSizeComponent} from './page-size/page-size.component';
import {ResultsInfoComponent} from './results-info/results-info.component';
import {PaginationComponent} from './pagination/pagination.component';
import {ItemsTableComponent} from './items-table/items-table.component';
import {DtColumnComponent} from './dt-column/dt-column.component';
import {DtColumnConverter} from './dt-column/dt-column.converter';
import {DtColumnModel} from './dt-column/dt-column.model';
import {DtConfigService} from './config/dt-config.service';
import {LabelsService} from './labels/labels.service';
import {DtControlsComponent} from './dt-control/dt.controls.component';
import {Options} from './options/options.model';

@Component({
    selector: 'data-table',
    styles: [`
        .pagination-col {
            text-align: right;
        }
        
        table {
            margin-bottom: 6px;
        }
    `],
    template: require('./data-table.component.html'),
    directives: [
        PageSizeComponent,
        ResultsInfoComponent,
        PaginationComponent,
        ItemsTableComponent,
        DtColumnComponent,
        DtControlsComponent
    ],
    providers: [
        DtConfigService,
        LabelsService,
        DtColumnConverter
    ]
})
export class DataTableComponent {


    @Input()
    items: any[];

    @Input()
    set labels(labels: any) {
        this.labelsService.setLabels(labels);
        this.options.labels = this.labelsService.getLabels();
    };

    @Input()
    set showIndex(val: boolean) {
        this.options.showIndex = val;
    }

    @Input()
    set pageSize(num: number) {
        this.options.pageSize = +num;
    }

    @Input()
    set pageSizeArray(sizes: number[]) {
        this.options.pageSizeArray = sizes;
    }

    @Input()
    set pageNumber(page: number) {
        this.options.pageNumber = +page;
    }

    public options: Options = new Options();

    public columns: DtColumnModel[] = [];

    public columnsArray: DtControlsComponent[] = [];

    public cols: QueryList<DtColumnComponent>;

    public controls: QueryList<DtControlsComponent>;

    constructor(
        private labelsService: LabelsService,
        private dtColumnConverter: DtColumnConverter,
        @Query(DtColumnComponent) cols: QueryList<DtColumnComponent>,
        @Query(DtControlsComponent) controls: QueryList<DtControlsComponent>
    ) {

        // set labels
        this.options.labels= this.labelsService.getLabels();

        this.cols = cols;
        this.cols.changes.subscribe(() => {
            this.columns = this.dtColumnConverter.convertArray(cols.toArray());
        });

        this.controls = controls;
        this.controls.changes.subscribe(() => {
            this.columnsArray = controls.toArray();
        });
    }


    get labels() {
        return this.options.labels;
    }

    get pageNumber(): number {
        return this.options.pageNumber;
    }

    get pageSizeArray(): number[] {
        return this.options.pageSizeArray;
    }

    get pageSize(): number {
        return this.options.pageSize;
    }

    get showIndex(): boolean {
        return this.options.showIndex;
    }


    setPageSize(size: number): void {
        this.pageSize = +size;
    }

    setPageNumber(page: number): void {
        this.pageNumber = +page;
    }
}
