import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { TranslateModule } from "@ngx-translate/core";
import { HistoryService, ProblemService, SymptomService } from "src/app/common/service";
import { AlertService } from "src/app/shared/services";
import { DescriptorCategoryComponent } from "./descriptor-category/descriptor-category.component";
import { ReviewSystemComponent } from "./review-system/review-system.component";

@Component({
  selector: "app-history-detail",
  templateUrl: "./history-detail.component.html",
  styleUrls: ["./history-detail.component.scss"],
})
export class HistoryDetailComponent implements OnInit {
  @Input() data;
  @Input() modelPatient;

  constructor(
    private historyService: HistoryService,
    private alertService: AlertService,
    private symptomService: SymptomService,
    private problemService: ProblemService,
    private dialog: MatDialog
  ) { }

  reviewName: string;
  dailyName: string;
  drugName: any;
  modelNewSymptom: any = {};
  listNewSymptom: any;
  listNewSymptomRequire: any;
  listReview: any;
  listDaily: any;
  listMedication: any;
  listOldSymptom: any;
  overall: any;
  listOrgan = [];

  ngOnInit() {
    this.getListSymptom();
    this.getListMedicationByProblem();
    this.overall = this.data.Overall;
    console.log(this.data);

    this.historyService
      .lstReviewSystem(this.modelPatient.VisitId, this.data.ProblemId)
      .subscribe((res) => {
        this.listOrgan = res;
        this.refreshOrgan();
      });
  }
  getListSymptonRequired() {
    this.historyService
      .listVisitSymptomByVisitRequired(this.data.ProblemId)
      .subscribe((res) => {
        console.log(res, this.listNewSymptom);
        this.listNewSymptomRequire = res;
        if (res && res.length !== 0) {
          this.listNewSymptomRequire.forEach((sysptom) => {
            sysptom.ResultCode = 0;
          });
        }

        // if (this.listNewSymptomRequire && this.listNewSymptomRequire.length) {
        //   this.listNewSymptomRequire.forEach(element => {
        //     const temp = this.listNewSymptom.find(x => x.SymptomId === element.SymptomId);
        //     element.VisitSymptomId = temp.VisitSymptomId;
        //   });
        // }
        console.log(this.listNewSymptomRequire, this.listNewSymptom, "123");
      });
  }
  getListSymptom() {
    this.historyService
      .listVisitSymptomByVisit(this.modelPatient.VisitId, this.data.ProblemId)
      .subscribe((res) => {
        //         this.listOverall.push({
        //           DescriptorText: "",
        // ProblemId: 0,
        // ResultCode: 0,
        // Status: null,
        // SymptomGroupType: 2,
        // SymptomId: 25,
        // SymptomName: "fever between 37-39",
        // Type: 1,
        // VisitId: 0,
        // VisitSymptomId: 380
        //         })
        this.listOldSymptom = res
          .filter((x) => x.SymptomGroupType === 2)
          .map((x) => {
            return {
              ProblemId: x.ProblemId,
              ProblemName: x.ProblemName,
              ResultCode: x.ResultCode,
              ResultName: x.ResultName,
              Status: x.Status,
              SymptomGroupName: x.SymptomGroupName,
              SymptomGroupType: x.SymptomGroupType,
              SymptomId: x.SymptomId,
              SymptomName: x.SymptomName,
              VisitId: x.VisitId,
              VisitSymptomId: x.VisitSymptomId,
              Code: x.ResultCode - 1,
            };
          });

        this.listNewSymptom = res
          .filter((x) => x.SymptomGroupType === 3 || !x.SymptomGroupType)
          .map((x) => {
            return {
              ProblemcombinationType: x.ProblemcombinationType,
              SymptomGroupType: x.SymptomGroupType,
              SymptomId: x.SymptomId,
              SymptomName: x.SymptomName,
              VisitSymptomId: x.VisitSymptomId,
              Description: x.Description,
              DescriptorText: x.DescriptorText,
              ResultCode: x.ResultCode,
              Type: x.Type,
            };
          });
        if (this.listNewSymptom) {
          // this.getListSymptonRequired();
        }
        this.listReview = res.filter((x) => x.SymptomGroupType === 4);
        this.listDaily = res.filter((x) => x.SymptomGroupType === 5);
      });
  }

  createNewSymptom(groupType) {
    let data = {};
    data = {
      ProblemId: this.data.ProblemId,
      VisitId: this.data.VisitId,
      SymptomName: this.modelNewSymptom.SymptomName,
      SymptomGroupType: groupType, //New Symptom
    };
    this.modelNewSymptom.SymptomName = "";
    this.modelNewSymptom.Description = "";
    this.symptomService.create(data).subscribe(
      (res) => {
        this.getListSymptom();
      },
      (err) => {
        console.log(err.toString());

        // this.alertService.changeMessage({
        //     color: 'red',
        //     text: `An error occurred.Please try again later.!`
        // })
      }
    );
  }

  updateMedical(item, value, type) {
    const req = {
      TakeIt: null,
      Tolerated: null
    }
    if (type === 'take') {
      req.TakeIt = value;
    } else {
      req.Tolerated = value;
    }
    this.historyService
      .updateMedication(item.PatientMedicalfactorDrugId, req)
      .subscribe((res) => {
        this.getListMedicationByProblem();
      });
  }

  getListMedicationByProblem() {
    this.historyService
      .listMedicationByProblem(this.modelPatient.PatientId, 2)
      .subscribe((res) => {
        this.drugName = res;
      });
  }
  updateReviewSystem(item: any) {
    if (item.VisitReviewSystemId === null) {
      item.VisitReviewSystemId = 0;
    } else {
      item.VisitReviewSystemId = null;
    }
    let req = {
      VisitId: this.modelPatient.VisitId,
      ProblemId: this.data.ProblemId,
      OrganReviewSystemId: item.OrganReviewSystemId,
    };
    this.historyService.updateVisitReviewSystem(req).subscribe((res) => {
      console.log(res);
    });
  }
  updateSymptom(item, type, groupType, overall?) {
    if (overall) {
      this.problemService.updateProblemVisit(this.data.VisitProblemId, { Overall: type }).subscribe(res => {
        this.overall = type;
      })
    } else {
      let model = {
        ProblemId: this.data.ProblemId,
        VisitId: this.data.VisitId,
        SymptomName: item.SymptomName,
        ResultCode: type,
        SymptomGroupType: groupType, //New Symptom
      };
      this.symptomService.create(model).subscribe(
        (res) => {
          this.getListSymptom();
        },
        (err) => {
          console.log(err.toString());

          // this.alertService.changeMessage({
          //     color: 'red',
          //     text: `An error occurred.Please try again later.!`
          // })
        }
      );
    }

    // let model = {
    //     ProblemId: item.ProblemId,
    //     SymptomId: item.SymptomId,
    //     SymptomGroupType: item.SymptomGroupType,
    //     ResultCode: type,
    //     Status: 1
    // }
    // this.historyService.update(model, item.VisitSymptomId).subscribe(res => {
    //     this.getListSymptom();
    // }, err => {
    //     this.alertService.changeMessage({
    //         color: 'red',
    //         text: `An error occurred.Please try again later.!`
    //     })
    // });
  }

  deleteSymptom(item) {
    const req = {
      VisitId: this.data.VisitId,
      ProblemId: this.data.ProblemId,
      SymptomName: item.SymptomName,
    };
    console.log(req);
    this.symptomService.deleteSystom(req).subscribe((res) => {
      this.listNewSymptom = this.listNewSymptom.filter(
        (x) => x.SymptomName !== item.SymptomName
      );
    });
    // this.historyService.delete(id).subscribe(res => {
    //     switch (type) {
    //         case 1:
    //             this.listNewSymptom = list.filter(x => x.VisitSymptomId !== id);
    //             break;
    //         case 2:
    //             this.listReview = list.filter(x => x.VisitSymptomId !== id);
    //             break;
    //         case 3:
    //             this.listDaily = list.filter(x => x.VisitSymptomId !== id);
    //             break;
    //         default:
    //             break;
    //     }
    // });
  }

  openUpdateNewSymtom = (item) => {
    const dialogRef = this.dialog.open(DescriptorCategoryComponent, {
      panelClass: "dialog-97-97",
      data: item,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getListSymptom();
    });
  };
  openUpdateReviewSystem() {
    let data = {
      VisitId: this.modelPatient.VisitId,
      ProblemId: this.data.ProblemId,
      ListOrgan: this.listOrgan,
    };
    const dialogRef = this.dialog.open(ReviewSystemComponent, {
      panelClass: "dialog-97-97",
      data: data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.historyService
          .bulkInsertVisitReviewSystem(result.dataUpdate)
          .subscribe((res) => {
            this.listOrgan = result.organs;
            this.refreshOrgan();
          });
      }
    });
  }
  refreshOrgan() {
    this.listOrgan.forEach((organ) => {
      organ.ReviewActive = 0;
      organ.stringActive = [];
      organ.ListReviewSystems.forEach((review) => {
        if (review.VisitReviewSystemId !== null) {
          organ.ReviewActive++;
          organ.stringActive.push(review.ReviewSystemName);
        }
      });
    });
  }
}

@NgModule({
  declarations: [HistoryDetailComponent],
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
  ],
  exports: [HistoryDetailComponent],
})
export class HistoryDetailProfileModule { }
