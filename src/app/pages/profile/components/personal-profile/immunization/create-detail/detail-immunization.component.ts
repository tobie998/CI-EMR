import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TranslateModule } from '@ngx-translate/core';
import { PatientImmunizationscheduleModel } from 'src/app/common/model';
import { PatientImmunizationscheduleService } from 'src/app/common/service';
import { AlertService } from 'src/app/shared/services';

@Component({
    selector: 'app-detail-immunization',
    templateUrl: './detail-immunization.component.html',
    styleUrls: ['./detail-immunization.component.scss']
})
export class DetailImmunizationComponent implements OnInit {

    constructor(
        private alertService: AlertService,
        private dialogRef: MatDialogRef<DetailImmunizationComponent>,
        private service: PatientImmunizationscheduleService,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    model = new PatientImmunizationscheduleModel();

    ngOnInit() {
        this.model = this.data;
    }

    updateItem() {
        this.service.update(this.model, this.data.PatientImmunizationscheduleId).subscribe(res => {
            this.dialogRef.close();
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        });
    }

    createImmu() {
        this.service.create(this.model).subscribe(res => {
            this.closeDialog();
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        });
    }

    handleEvent = () => {
        switch (this.data.type) {
            case 'create':
                this.createImmu();
                break;
            case 'detail':
                this.updateItem();
                break;
            default:
                break;
        }
    }
    closeDialog() {
        this.dialogRef.close();
    }
}
@NgModule({
    declarations: [DetailImmunizationComponent],
    imports: [
        TranslateModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        DetailImmunizationComponent
    ]
})
export class DetailImmunizationModule { }