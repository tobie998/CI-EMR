import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from "@angular/router";
import { OrderTestService, PatientService } from 'src/app/common/service';

@Component({
    selector: 'app-biopsy',
    templateUrl: './biopsy.component.html',
    styleUrls: ['./biopsy.component.scss']
})
export class BiopsyComponent implements OnInit {
    constructor(
        private activatedRoute: ActivatedRoute,
        private orderService: OrderTestService,
        private patientService: PatientService,
    ) { }
    displayedColumns: string[] = ['organ', 'test', 'result'];
    patientId: number;
    listBiopsyPatient: any = [];
    modelPatient: any = {}
    dataSource;
    ngOnInit() {
        this.patientId = this.activatedRoute.snapshot.params.patientId;
        this.patientService.detailPatient(this.patientId).then((res: any) => {
            this.modelPatient = res;
            this.orderService.listTestPatient(this.modelPatient.VisitId, 2, null).subscribe(res => {
                if (!res || !res.length) return this.listBiopsyPatient = [];
                this.listBiopsyPatient = res.map(x => {
                    return {
                        TestName: x.TestName,
                        OrganName: x.OrganName,
                        NumbericResult: x.NumbericResult
                    }
                });
                this.dataSource = this.listBiopsyPatient
            });
        })
    }
}
@NgModule({
    declarations: [
        BiopsyComponent,
    ],
    imports: [
        MatTableModule,
        CommonModule
    ],
    exports: [
        BiopsyComponent
    ]
})
export class BiopsyModule { }