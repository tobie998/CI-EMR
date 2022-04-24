import { CommonModule } from "@angular/common";
import { Component, Inject, NgModule, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { TranslateModule } from "@ngx-translate/core";
import { AllergyService } from "src/app/common/service";
import { AlertService } from "src/app/shared/services";
@Component({
    selector: "app-details-allergy",
    templateUrl: "./details-allergy.component.html",
    styleUrls: ["./details-allergy.component.scss"],
})
export class DetailsAllergyComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public allergyService: AllergyService,
        public alertService: AlertService,
        private dialogRef: MatDialogRef<DetailsAllergyComponent>
    ) { }

    model: any = {};
    isLoading = true;
    keypress: any;
    symptomsList: any = [];
    allergyList: any = [];

    ngOnInit() {
        this.model = this.data;
        this.allergyService.listAllegry().subscribe((res: any) => {
            this.allergyList = res.map((x) => {
                return {
                    Name: x.Name,
                    AllergyId: x.AllergyId,
                };
            });
        });
    }

    closeDialog() {
        this.dialogRef.close();
    }

    updateAllegryPatient() {
        this.allergyService
            .updateAllegryPatient(this.data.PatientAllergySymptomId, this.model)
            .subscribe((res) => {
                this.dialogRef.close();
            }, err => {
                this.alertService.changeMessage({
                    color: 'red',
                    text: `An error occurred.Please try again later.!`
                })
            });
    }

    onClickAllergry = () => {
        switch (this.data.StatusType) {
            case 'detail':
                this.updateAllegryPatient();
                break;
            case 'create':
                this.allergyService.createAllegryPatient(this.model).subscribe((res) => {
                    this.dialogRef.close();
                });
                break;
            default:
                break;
        }
    }
}
@NgModule({
    declarations: [
        DetailsAllergyComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule,
        FormsModule,
        MatListModule,
        MatProgressSpinnerModule
    ],
    exports: [
        DetailsAllergyComponent
    ]
})
export class DetailsAllergyModule { }