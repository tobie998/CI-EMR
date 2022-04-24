import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnChanges, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ActivatedRoute } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { isNullOrEmptyString } from "@progress/kendo-angular-grid/dist/es2015/utils";
import { DiagnosisModel } from "src/app/common/model";
import { DiagnosisService } from "src/app/common/service";
import { AlertService, FormatDateService } from 'src/app/shared/services';
import { ClinicaltablesService } from "src/app/shared/services/clinicaltables.service";
@Component({
    selector: "app-diagnosis-detail",
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.scss"],
})
export class DiagnosisDetailComponent implements OnInit, OnChanges {
    @Input() data;

    constructor(
        private diagnosisService: DiagnosisService,
        private route: ActivatedRoute,
        private alertService: AlertService,
        private dateService: FormatDateService,
        private clinicaltablesService : ClinicaltablesService
    ) { }

    Listdiagnosis: any;
    showLastVisit = false;
    VisitId: number;
    patientId: number;
    problemId: number;
    showItem: boolean;
    diagnosisList: any = [
      [],[],[],[],[]
    ];
    result: any = [];
    diagnosisThisVisit: DiagnosisModel[] = [
      new DiagnosisModel(),
      new DiagnosisModel(),
      new DiagnosisModel(),
      new DiagnosisModel(),
      new DiagnosisModel()
    ] ;
    diagnosisLastVisit: DiagnosisModel[] = [
      new DiagnosisModel(),
      new DiagnosisModel(),
      new DiagnosisModel(),
      new DiagnosisModel(),
      new DiagnosisModel()
    ] ;
    type = 0;
    isLoading = true;
    today: string;
    keypress: any;
    key: any;

    ngOnChanges() {
    }

    ngOnInit() {
        this.patientId = this.route.snapshot.params.patientId;
        this.today = this.dateService.formatDate(new Date(), 'DD/MM/YYYY')
        this.diagnosisService
            .listDiagnosis(this.data.VisitId, this.data.ProblemId)
            .subscribe(res => {
                for (let index = 0; index < 5; index++) {
                  const element = res.find(x => x.SequenceNumber === index + 1);
                  if (element) {
                    this.diagnosisThisVisit[index] = element;
                  } else {
                    this.diagnosisThisVisit[index].VisitDiagnosisId = -1;
                    this.diagnosisThisVisit[index].SequenceNumber = index + 1;
                  }
                }
            });
        this.diagnosisService
            .listDiagnosisLast(this.patientId, this.data.ProblemId)
            .subscribe(res => {
                // this.diagnosisLastVisit = res;
                if (res && res.length !== 0) {
                  this.showLastVisit = true;
                }
                for (let index = 0; index < 5; index++) {
                  if (res) {
                    const element = res.find(x => x.SequenceNumber === index + 1);
                    if (element) {
                      this.diagnosisLastVisit[index] = element;
                    }
                  }
                }
            });
    }

    createDiagnosis() {
        const listUpdate: DiagnosisModel[] = this.diagnosisThisVisit.filter(x =>
           !isNullOrEmptyString(x.SNOMEDFullName)).map(x => {
            let data2 : DiagnosisModel = new DiagnosisModel();
            data2.VisitDiagnosisId = x.VisitDiagnosisId;
            data2.SequenceNumber = x.SequenceNumber;
            data2.ProblemId = this.data.ProblemId;
            data2.VisitId = this.data.VisitId;
            data2.SNOMEDCode = 0;
            data2.SNOMEDFullName = x.SNOMEDFullName;
            data2.SNOMEDName = x.SNOMEDFullName;
            return data2;
        });
        this.diagnosisService.create(listUpdate).subscribe((res) => {
            this.alertService.changeMessage({
                color: 'green',
                text: `Updated`
            })

            this.diagnosisThisVisit.forEach(element => {
              element.VisitDiagnosisId = 0;
              });
            }, err => {
                this.alertService.changeMessage({
                    color: 'red',
                    text: `An error occurred.Please try again later.!`
                })
            });
    }

    onSearchDiagnosis(index, keyValue) {
      this.type = 1;
      clearTimeout(this.keypress);
        this.keypress = setTimeout(() => {
          if (keyValue.length !== 0) {
            this.clinicaltablesService.searchDiagnosis(keyValue).subscribe(res => {
              this.diagnosisList[+index] = res
            });
          }
        }, 500);
    }

    onChangeValue(item, index) {
      this.diagnosisThisVisit[+index].SNOMEDFullName = item;
      this.diagnosisThisVisit[+index].SNOMEDName = item;
      this.diagnosisList[+index] = [];
    }
}

@NgModule({
    declarations: [
        DiagnosisDetailComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        MatListModule,
        MatProgressSpinnerModule,
        FormsModule,
    ],
    exports: [
        DiagnosisDetailComponent
    ]
})
export class DiagnosisDetailModule { }
