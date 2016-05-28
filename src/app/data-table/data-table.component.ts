import {Component, Input, OnInit, OnChanges, Query, QueryList} from '@angular/core';

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
import {DtControlsComponent} from "./dt-controls/dt.controls.component";

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
export class DataTableComponent implements OnInit {

    @Input()
    items: any[];

    @Input()
    set labels(labels: any) {
        this.labelsService.setLabels(labels);
        this._labels = this.labelsService.getLabels();
    };

    @Input()
    showIndex: boolean = false;

    pageNumber: number = 1;

    pageSize: number = 1;

    searchPhrase: string = '';

    model: any = {
        searchPhrase: ''
    };

    _labels: any;

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

    ngOnInit(): void {
        this.setPageSize(10);
    }

    get labels() {
        return this._labels;
    }

    setPageSize(size: number): void {
        this.pageSize = +size;
    }

    setPageNumber(page: number): void {
        this.pageNumber = page;
    }
}
