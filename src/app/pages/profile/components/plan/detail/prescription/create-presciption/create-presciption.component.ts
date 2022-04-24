import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PrescriptionModel } from "src/app/common/model";
import { PrescriptionService } from "src/app/common/service";
import { AlertService, FormatDateService } from 'src/app/shared/services';

@Component({
    selector: "app-create-presciption",
    templateUrl: "./create-presciption.component.html",
    styleUrls: ["./create-presciption.component.scss"],
})

export class CreatePresciptionComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<CreatePresciptionComponent>,
        private prescriptionService: PrescriptionService,
        private alertService: AlertService,
        private dateService: FormatDateService
    ) { }

    model = new PrescriptionModel();
    RouteList;
    isSending = false;
    ngOnInit() {
        this.prescriptionService.listDrugRoutes().subscribe((res) => {
            this.RouteList = res;
            this.model.DrugrouteId = res[0].DrugrouteId;
        });
        this.model.QuantityUnit = 1;
        this.model.FrequencyUnit = 'times daily';
        this.model.PrescriptionId = this.data.PrescriptionId;
        this.model.StartDate = this.dateService.formatDate(new Date(), 'yyyy-MM-DD');
    }

    createPrescription() {
        setTimeout(() => {
          this.isSending = false;
        }, 1000);
        if (this.isSending === false) {
          this.isSending = true;
          this.prescriptionService
          .listPrescriptionDrug(this.data.ProblemId, this.data.VisitId)
          .subscribe((res) => {
              if (!res.length) {
                  const data = {
                      VisitId: this.data.VisitId,
                      ProblemId: this.data.ProblemId,
                  };
                  this.prescriptionService.createPrescription(data).subscribe((res) => {
                      this.model.PrescriptionId = res;
                      this.prescriptionService
                          .createDetailsPrescription(this.model)
                          .subscribe((res) => {
                              this.closeDialog();
                          }, err => {
                              // this.alertService.changeMessage({
                              //     color: 'red',
                              //     text: `An error occurred.Please try again later.!`
                              // })
                          });
                  });
              } else {
                  this.model.PrescriptionId = res[0].PrescriptionId;
                  this.prescriptionService
                      .createDetailsPrescription(this.model)
                      .subscribe((res) => {
                          this.closeDialog();
                      }, err => {
                          // this.alertService.changeMessage({
                          //     color: 'red',
                          //     text: `An error occurred.Please try again later.!`
                          // })
                      });
              }
          });
        }
    }

    closeDialog() {
        this.dialogRef.close();
    }
}
