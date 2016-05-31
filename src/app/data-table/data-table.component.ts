import {Component, Input, Query, QueryList} from '@angular/core';

import {PageSizeComponent} from './page-size/page-size.component';
import {ResultsInfoComponent} from './results-info/results-info.component';
import {PaginationComponent} from './pagination/pagination.component';
import {ItemsTableComponent} from './items-table/items-table.component';
import {VisibleIconDirective} from '../utils/visible-icon.directive';
import {DtColumnComponent} from './dt-column/dt-column.component';
import {DtColumnConverter} from './dt-column/dt-column.converter';
import {DtColumnModel} from './dt-column/dt-column.model';
import {DtConfigService} from './config/dt-config.service';
import {LabelsService} from './labels/labels.service';
import {DtControlsComponent} from './dt-control/dt.controls.component';

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
        VisibleIconDirective,
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


    private _pageSizeArray: number[] = [5, 10, 25, 50];

    private _pageSize: number = this._pageSizeArray[1];

    private _pageNumber: number = 1;

    private _labels: any;

    @Input()
    items: any[];

    @Input()
    set labels(labels: any) {
        this.labelsService.setLabels(labels);
        this._labels = this.labelsService.getLabels();
    };

    @Input()
    showIndex: boolean = false;

    @Input()
    set pageSize(num: number) {
        this._pageSize = +num;
    }

    @Input()
    set pageSizeArray(sizes: number[]) {
        this._pageSizeArray = sizes;
    }

    @Input()
    set pageNumber(page: number) {
        this._pageNumber = +page;
    }


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
        this._labels = this.labelsService.getLabels();

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
        return this._labels;
    }

    get pageNumber(): number {
        return this._pageNumber;
    }

    get pageSizeArray(): number[] {
        return this._pageSizeArray;
    }

    get pageSize(): number {
        return this._pageSize;
    }


    setPageSize(size: number): void {
        this.pageSize = +size;
    }

    setPageNumber(page: number): void {
        this.pageNumber = +page;
    }
}
