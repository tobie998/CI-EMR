import { Component, NgModule, OnInit } from "@angular/core";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { MedicalHistoryModel } from "src/app/common/model";
import { MedicalHistoryService } from "src/app/common/service";
import { TableBaseModule } from "src/app/shared/components/base@ci/table/table.component";
import { AlertService } from "src/app/shared/services";
import { DetailMedicalHistoryComponent } from "./detail/detail-medical-history.component";
@Component({
    selector: "app-medical-history",
    templateUrl: "./medical-history.component.html",
    styleUrls: ["./medical-history.component.scss"],
})
export class MedicalHistoryComponent implements OnInit {
    check = true;
    constructor(
        private medicalService: MedicalHistoryService,
        private alertService: AlertService,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog
    ) { }
    patientId: number;
    height = '60vh';
    config = new MedicalHistoryModel;
    collumsMedical: any;
    collumsSurgical: any;
    medical: any = [];
    surgical: any = [];

    ngOnInit() {
        this.patientId = this.activatedRoute.snapshot.params.patientId;
        this.collumsMedical = this.config.collumsMedical;
        this.collumsSurgical = this.config.collumsSurgical;
        this.getMedical();
    }

    openDialog() {
        const dialogRef = this.dialog.open(DetailMedicalHistoryComponent, {
            panelClass: "dialog-40-97",
            disableClose: true,
            data: {
                PatientId: this.patientId,
                StatusType: 'create'
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.getMedical();
        });
    }

    openDetailDialog(item) {
        item.StatusType = 'detail';
        const dialogRef = this.dialog.open(DetailMedicalHistoryComponent, {
            panelClass: "dialog-40-97",
            disableClose: true,
            data: item
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.getMedical();
        });
    }

    getMedical() {
        this.medicalService.listPatientMedicalOfPatient(this.patientId).subscribe((data) => {
            this.medical = data.filter((res) => res.Type == 1);
            this.surgical = data.filter((res) => res.Type == 2);
        });
    }

    handleCallBackTable = (data) => {
        switch (data.typeBtn.type) {
            case 'detail':
                this.openDetailDialog(data.item);
                break;
            case 'delete':
                this.medicalService
                    .delete(data.item.PatientMedicalfactorId)
                    .subscribe(res => {
                        this.getMedical();
                    }, err => {
                        this.alertService.changeMessage({
                            color: 'red',
                            text: `An error occurred.Please try again later.!`
                        })
                    });
                break;
            default:
                break;
        }

    }
}
@NgModule({
    declarations: [MedicalHistoryComponent],
    imports: [
        TableBaseModule,
        MatDialogModule
    ],
    exports: [
        MedicalHistoryComponent
    ]
})
export class MedicalHistoryModule { }