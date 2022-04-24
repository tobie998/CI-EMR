import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { MedicalHistoryModel } from 'src/app/common/model';
import { MedicalHistoryService } from 'src/app/common/service';
import { AlertService } from 'src/app/shared/services';
@Component({
    selector: 'app-detail-medical-history',
    templateUrl: './detail-medical-history.component.html',
    styleUrls: ['./detail-medical-history.component.scss']
})
export class DetailMedicalHistoryComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<DetailMedicalHistoryComponent>,
        public dialog: MatDialog,
        public medicalService: MedicalHistoryService,
        public alertService: AlertService
    ) { }

    model = new MedicalHistoryModel();
    medicalList: any = [];
    surgicalList: any = [];
    showItem = true;

    ngOnInit() {
        this.model = this.data;
        this.model.Type = this.model.Type || 1;
    }

    getMedical(key) {
        this.medicalService.searchMdeical(key).subscribe(res => {
            this.medicalList = res;
        });
    }

    getSurgical(key) {
        this.medicalService.searchSurgical(key).subscribe(res => {
            this.surgicalList = res;
        });
    }

    searchName(key, type) {
        switch (type) {
            case 1:
                if (!key) this.medicalList = [];
                this.showItem = false;
                if (key.length >= 3)
                    setTimeout(() => {
                        this.getMedical(key);
                    }, 500);
                break;
            case 2:
                if (!key) this.surgicalList = [];
                this.showItem = false;
                if (key.length >= 3)
                    setTimeout(() => {
                        this.getSurgical(key);
                    }, 500);
                break;
            default:
                break;
        }
    }

    setTermSurgical = (item) => {
    }

    setTermMedical = (item) => {
    }

    createData() {
        this.medicalService.create(this.model).subscribe(res => {
            this.dialogRef.close();
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        });
    }

    updateItem() {
        this.medicalService.update(this.model, this.model.PatientMedicalfactorId).subscribe(res => {
            this.dialogRef.close();
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        });
    }

    closeDialog() {
        this.dialogRef.close();
    }

    selectType(type: number) {
        this.model.Type = type;
    }

    onClickEvent = () => {
        switch (this.data.StatusType) {
            case 'create':
                this.createData();
                break;
            case 'detail':
                this.updateItem();
                break;
            default:
                break;
        }
    }

}
@NgModule({
    declarations: [
        DetailMedicalHistoryComponent,
    ],
    imports: [
        TranslateModule,
        MatListModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        DetailMedicalHistoryComponent
    ]
})
export class DetailMedicalHistoryModule { }