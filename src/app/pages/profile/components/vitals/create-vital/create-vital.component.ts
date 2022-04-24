import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VisitModel, VisitVitalModel } from 'src/app/common/model';
import { PatientService, VisitService, VisitVitalService } from 'src/app/common/service';
import { FormatDateService } from 'src/app/shared/services';
@Component({
    selector: 'app-create-vital',
    templateUrl: './create-vital.component.html',
    styleUrls: ['./create-vital.component.scss']
})
export class CreateVitalComponent implements OnInit {
    model: any = {};
    isLoading = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<CreateVitalComponent>,
        private visitVitalService: VisitVitalService,
        private patientService: PatientService,
        private visitService: VisitService,
        public formatDateService: FormatDateService
    ) { }

    ngOnInit() {
        this.model.VisitId = this.data;
        this.model.Date = new Date();
        this.model.Time = this.formatDateService.formatDate(new Date(), "HH:mm");
    }

    onCloseModal = () => {
        this.dialogRef.close();
    }

    onCreateVital = () => {
        try {
            this.isLoading = true;
            this.model.Type = 1;
            this.model.Status = 1;
            this.model.ResultDate = this.formatDateService.formatDate(this.model.Date, "YYYY-MM-DDTHH:mm:00");
            this.onLoadListVital();
            this.patientService.detailPatient(this.data).then((res: any) => {
                if (res.VisitId !== 0) {
                    this.model.VisitId = +res.VisitId;
                    this.visitVitalService.create(new VisitVitalModel(this.model)).subscribe(res => { });
                } else {
                    const data = {
                        PatientId: this.data,
                        StartDate: this.formatDateService.formatDate(new Date(), "YYYY-MM-DDTHH:mm"),
                        Status: 1,
                        Type: 1
                    };
                    this.visitService.create(new VisitModel(data)).subscribe(res => {
                        this.model.VisitId = +res;
                        this.visitVitalService.create(new VisitVitalModel(this.model)).subscribe(res => { });
                    })
                }
                this.onCloseModal();
            })
        } catch (ex) {
        } finally {
            this.isLoading = false;
        }
    }


    onLoadListVital = () => {
        this.model.ListVital = [
            {
                "VitalId": 1,
                "NumericValue": this.model.BPsystolic || 0,
                "SNOMEDCode": "271649006"
            },
            {
                "VitalId": 2,
                "NumericValue": this.model.BPdiastolic || 0,
                "SNOMEDCode": "271650006"
            },
            {
                "VitalId": 3,
                "NumericValue": this.model.Pulse || 0,
                "SNOMEDCode": "8499008"
            },
            {
                "VitalId": 4,
                "NumericValue": this.model.RepiratoryRate || 0,
                "SNOMEDCode": "86290005"
            }, {
                "VitalId": 5,
                "NumericValue": this.model.sPO2 || 0,
                "SNOMEDCode": "373638005"
            },
            {
                "VitalId": 6,
                "NumericValue": this.model.Height || 0,
                "SNOMEDCode": "251832002"
            },
            {
                "VitalId": 7,
                "NumericValue": this.model.Temperature || 0,
                "SNOMEDCode": "386725007"
            },
            {
                "VitalId": 8,
                "NumericValue": this.model.Weight || 0,
                "SNOMEDCode": "27113001"
            }
        ]
    }
}
