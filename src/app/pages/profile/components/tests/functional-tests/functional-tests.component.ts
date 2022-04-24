import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from "@angular/router";
import { FunctionalTestsModel } from 'src/app/common/model/functional-tests.model';
import { OrderTestService, PatientService } from 'src/app/common/service';
import { TableBaseModule } from 'src/app/shared/components/base@ci/table/table.component';

@Component({
    selector: 'app-functional-tests',
    templateUrl: './functional-tests.component.html',
    styleUrls: ['./functional-tests.component.scss']
})
export class FunctionalTestsComponent implements OnInit {
    @Input() modelPatient: any;
    config = new FunctionalTestsModel();
    listlable: any = [];
    data: any = [];
    height = '61vh';
    check = true;

    constructor(
        private orderService: OrderTestService,
    ) { }
    ngOnChanges() {
        if (this.modelPatient.VisitId) {
            this.data = [];
        }
        if (this.modelPatient.VisitId) {
            this.orderService.listTestPatient(this.modelPatient.VisitId, 3, null).subscribe(res => {
                if (!res || !res.length) return this.data = [];
                this.data = res.map(x => {
                    return {
                        TestName: x.TestName,
                        OrganName: x.OrganName,
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
        FunctionalTestsComponent,
    ],
    imports: [
        TableBaseModule,
        CommonModule
    ],
    exports: [
        FunctionalTestsComponent
    ]
})
export class FunctionalTestsModule { }