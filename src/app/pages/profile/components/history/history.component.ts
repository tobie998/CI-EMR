
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { HistoryService, PatientService, ProblemService } from 'src/app/common/service';
import { LoaderService } from 'src/app/shared/services';
import { HistoryDetailProfileModule } from './detail/history-detail.component';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

    constructor(
        private historyService: HistoryService,
        private activatedRoute: ActivatedRoute,
        private patientService: PatientService,
        private problemService: ProblemService,
        private loadService: LoaderService
    ) { }

    patientId: number;
    ListProblem: any = [];
    modelPatient: any = {};


    ngOnInit() {
        this.patientId = this.activatedRoute.snapshot.params.patientId;
        this.loadService.show();
        this.patientService.detailPatient(this.patientId).then((res: any) => {
            this.modelPatient = res;
            this.historyService.detailProblemOfVisit(res.VisitId).subscribe(res => {
                this.ListProblem = this.ListProblem.concat(res);
                this.problemService.listOldProblem(this.patientId).subscribe(res => {
                    const filter = res.filter(x => x.Type === 2);
                    filter.forEach(element => {
                        element.Old = true
                    });
                    this.ListProblem = this.ListProblem.concat(filter);
                    this.loadService.hide();
                });
            });
        })
    }
}

@NgModule({
    declarations: [
        HistoryComponent,
    ],
    imports: [
        HistoryDetailProfileModule,
        MatTabsModule,
        MatMenuModule,
        CommonModule
    ],
    exports: [
        HistoryComponent
    ]
})
export class HistoryProfileModule { }