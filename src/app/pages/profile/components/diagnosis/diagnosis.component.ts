import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { ActivatedRoute } from "@angular/router";
import { PatientService, ProblemService } from "src/app/common/service";
import { AlertService } from 'src/app/shared/services';
import { DiagnosisDetailModule } from "./detail/detail.component";
@Component({
    selector: "app-diagnosis",
    templateUrl: "./diagnosis.component.html",
    styleUrls: ["./diagnosis.component.scss"],
})
export class DiagnosisComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private alertService: AlertService,
        private patientService: PatientService,
        private problemService: ProblemService
    ) { }

    problemList: any;
    patientId: number;

    ngOnInit() {
        this.patientId = this.route.snapshot.params.patientId;
        this.patientService.detailPatient(this.patientId).then((res: any) => {
            this.problemService.listProblemByVisitTo(res.VisitId).subscribe((respone: any) => {
                if (respone.Ok) {
                    this.problemList = respone.Payload;
                } else {
                    this.alertService.changeMessage({
                        color: 'red',
                        text: `An error occurred.Please try again later!`
                    });
                }
            })
            this.problemService.listOldProblem(this.patientId).subscribe((respone2: any) => {
                this.problemList = this.problemList.concat(
                    respone2.filter((x) => x.Type == 2)
                );
            })

        })
    }
}

@NgModule({
    declarations: [
        DiagnosisComponent,
    ],
    imports: [
        MatTabsModule,
        DiagnosisDetailModule,
        CommonModule
    ],
    exports: [
        DiagnosisComponent
    ]
})
export class DiagnosisModule { }
