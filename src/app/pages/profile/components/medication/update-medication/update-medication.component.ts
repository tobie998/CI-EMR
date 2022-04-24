import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment-timezone';
import { MedicationModel } from 'src/app/common/model';
import { MedicationService } from 'src/app/common/service';
import { AlertService } from 'src/app/shared/services';

@Component({
    selector: 'app-update-medication',
    templateUrl: './update-medication.component.html',
    styleUrls: ['./update-medication.component.scss']
})
export class UpdateMedicationComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<UpdateMedicationComponent>,
        private medicationService: MedicationService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private alertService: AlertService
    ) { }

    model = new MedicationModel;
    listDrugRouter: any = [];
    listProblem: any = [];

    async ngOnInit() {
        let respone = await this.medicationService.listDrugRoutes();
        this.listDrugRouter = respone.Payload;
        respone = await this.medicationService.listProblem();
        this.listProblem = respone.Payload;
        this.data.StartDate = this.data.StartDate ? this.formatDate(this.data.StartDate, 'YYYY-MM-DD') : '';
        this.data.EndDate = this.data.EndDate ? this.formatDate(this.data.EndDate, 'YYYY-MM-DD') : '';
        this.model = this.data;
    }

    formatDate = (date: any, format: string) => moment.unix(new Date(date).getTime() / 1000).format(format);

    closeDialog() {
        this.dialogRef.close();
    }

    onUpdateMedication = async () => {
        try {
            this.model.DrugrouteId = +this.model.DrugrouteId;
            this.model.Type = 2;
            this.medicationService.update(this.model, this.data.PatientMedicalfactorDrugId).subscribe(res => {
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
