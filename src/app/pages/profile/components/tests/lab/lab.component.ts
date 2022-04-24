import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnChanges, OnInit } from '@angular/core';
import { LabModel } from 'src/app/common/model/lab.model';
import { OrderTestService } from 'src/app/common/service';
import { TableBaseModule } from 'src/app/shared/components/base@ci/table/table.component';
@Component({
    selector: 'app-lab',
    templateUrl: './lab.component.html',
    styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit, OnChanges {
    @Input() modelPatient: any;
    config = new LabModel();
    listlable: any = [];
    height = '61vh';
    check = true;
    data: any = [];

    constructor(
        private service: OrderTestService,
    ) { }

    ngOnChanges() {
        if (this.modelPatient.VisitId) {
            this.data = [];
        }
        if (this.modelPatient.VisitId) {
            this.service.listTestPatient(this.modelPatient.VisitId, null, 0).subscribe(res => {
                this.data = res.map(x => {
                    return {
                        TestName: x.TestName,
                        TestcategoryName: x.TestcategoryName,
                        NumbericResult: x.NumbericResult
                    }
                });
            });
        }
    }

    ngOnInit() {
        this.listlable = this.config.collums;
    }
}

@NgModule({
    declarations: [
        LabComponent,
    ],
    imports: [
        CommonModule,
        TableBaseModule
    ],
    exports: [
        LabComponent
    ]
})
export class LabModule { }