import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { cloneDeep } from "lodash";
import { PrescriptionModel } from "src/app/common/model";
import { PrescriptionService } from "src/app/common/service";
import { AlertService, FormatDateService } from 'src/app/shared/services';

@Component({
    selector: "app-details-prescription",
    templateUrl: "./details-prescription.component.html",
    styleUrls: ["./details-prescription.component.scss"],
})
export class DetailsPrescriptionComponent implements OnInit {
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<DetailsPrescriptionComponent>,
        public prescriptionService: PrescriptionService,
        private alertService: AlertService,
        private dateService: FormatDateService
    ) { }

    model = new PrescriptionModel();
    RouteList;
    ngOnInit() {
        this.prescriptionService.listDrugRoutes().subscribe((res) => {
            this.RouteList = res;
        });
        this.model = cloneDeep(this.data);
        // this.dataTemp = cloneDeep(this.model);
        this.model.StartDate = this.model.StartDate ? this.dateService.formatDate(this.model.StartDate, 'yyyy-MM-DD') : '';
        this.model.EndDate = this.model.EndDate ? this.dateService.formatDate(this.model.EndDate, 'yyyy-MM-DD') : '';
    }

    updatePres() {
        this.prescriptionService
            .updatePres(this.data.PrescriptionDrugId, this.model)
            .subscribe((res) => {
                if (res.Ok === true) {
                  this.dialogRef.close(true);
                } else {
                    this.alertService.changeMessage({
                      color: 'red',
                      text: `An error occurred.Please try again later.!`
                  })
                }

            }, err => {
                this.alertService.changeMessage({
                    color: 'red',
                    text: `An error occurred.Please try again later.!`
                })
            });
    }

    closeDialog() {
        this.dialogRef.close(false);
    }
}
