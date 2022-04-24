import { Component, EventEmitter, Inject, OnInit, Output } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MedicationModel } from "src/app/common/model";
import { MedicationService } from "src/app/common/service";
import { AlertService, FormatDateService } from 'src/app/shared/services';
@Component({
    selector: "app-create-medication",
    templateUrl: "./create-medication.component.html",
    styleUrls: ["./create-medication.component.scss"],
})
export class CreateMedicationComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<CreateMedicationComponent>,
        private medicationService: MedicationService,
        private alertService: AlertService,
        private dateService: FormatDateService
    ) { }

    model: any = {};
    listDrugRouter: any = [];

    async ngOnInit() {
        let respone = await this.medicationService.listDrugRoutes();
        this.listDrugRouter = respone.Payload;
        this.model.NumberUnit = 1;
        this.model.DrugrouteId = 1;
        this.model.FrequencyUnit = 'times daily';
        this.model.StartDate = this.dateService.formatDate(new Date(), 'yyyy-MM-DD');;
    }

    closeDialog() {
        this.dialogRef.close();
    }

    onCreateMedication = async () => {
        try {
            this.model.PatientId = +this.data.patientId;
            this.model.Status = 1;
            this.model.DrugrouteId = +this.model.DrugrouteId;
            this.model.Type = this.data.type;
            
            // if (this.data.type === 2 && !this.model.EndDate) {
            //     return;
            // }
            this.medicationService.create(new MedicationModel(this.model)).subscribe(res => {
                this.closeDialog();
            }, err => {
                this.alertService.changeMessage({
                    color: 'red',
                    text: `An error occurred.Please try again later.!`
                });
            })
        } catch (ex) {
        }
    }
}
