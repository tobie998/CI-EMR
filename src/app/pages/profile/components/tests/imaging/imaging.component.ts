import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnChanges, OnInit } from '@angular/core';
import { ImagingModel } from 'src/app/common/model/imaging.model';
import { OrderTestService } from 'src/app/common/service';
import { TableBaseModule } from 'src/app/shared/components/base@ci/table/table.component';

@Component({
    selector: 'app-imaging',
    templateUrl: './imaging.component.html',
    styleUrls: ['./imaging.component.scss']
})
export class ImagingComponent implements OnInit, OnChanges {
    @Input() modelPatient: any;
    config = new ImagingModel();
    listlable: any = [];
    data: any = [];
    height = '61vh';
    check = true;

    constructor(
        private service: OrderTestService
    ) { }

    ngOnChanges() {
        if (this.modelPatient.VisitId) {
            this.data = [];
        }
        if (this.modelPatient.VisitId) {
            this.service.listTestPatient(this.modelPatient.VisitId, 4, null).subscribe(res => {
                if (!res || !res.length) return this.data = [];
                this.data = res.map(x => {
                    return {
                        TestcategoryName: x.TestcategoryName,
                        TestName: x.TestName,
                        OrganName: x.OrganName,
                        NumbericResult: x.NumbericResult
                    }
                }
                );
            });
        }
    }

    ngOnInit() {
        this.listlable = this.config.collums;
    }
}

@NgModule({
    declarations: [
        ImagingComponent,
    ],
    imports: [
        TableBaseModule,
        CommonModule
    ],
    exports: [
        ImagingComponent
    ]
})
export class ImagingModule { }