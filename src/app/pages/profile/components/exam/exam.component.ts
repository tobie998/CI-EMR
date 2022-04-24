import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { ListExam } from 'src/app/common/model';
import { ExamService, PatientService, ProblemService } from 'src/app/common/service';
import { AlertService } from 'src/app/shared/services';
import { DetailExamModule } from './detail-exam/detail-exam.component';
@Component({
    selector: 'app-exam',
    templateUrl: './exam.component.html',
    styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

    constructor(
        private problemService: ProblemService,
        private examService: ExamService,
        private route: ActivatedRoute,
        private alertService: AlertService,
        private patientService: PatientService
    ) { }

    listProblem: any = [];
    // listExam: object[];
    isLoading = false;
    PatientId: number;
    VisitId: number;
    listExam: ListExam[] = [];

    ngOnInit() {
        try {
           // this.isLoading = false;
            this.PatientId = this.route.snapshot.params.patientId;
            this.patientService.detailPatient(this.PatientId).then((res: any) => {
                this.VisitId = res.VisitId;
                this.problemService.listProblemByVisit(this.VisitId).subscribe(res => {
                    this.listProblem = res;
                    this.problemService.listOldProblem(this.PatientId).subscribe(res => {
                      const filter = res.filter(x => x.Type === 2);
                      this.listProblem = this.listProblem.concat(filter);
                  });
                }, err => {

                })
            }, err => {
              console.log(err);

            });
        } catch (ex) {
        } finally {
            // this.isLoading = true;
        }
    }
}
@NgModule({
    declarations: [
        ExamComponent
    ],
    imports: [
        CommonModule,
        DetailExamModule,
        MatTabsModule,
    ],
    exports: [
        ExamComponent
    ]
})
export class ExamModule { }
