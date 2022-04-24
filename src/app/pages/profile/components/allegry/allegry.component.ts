import { Component, NgModule, OnInit } from "@angular/core";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { AllergryModel } from "src/app/common/model/allergry.model";
import { AllergyService } from "src/app/common/service";
import { TableBaseModule } from "src/app/shared/components/base@ci/table/table.component";
import { AlertService } from "src/app/shared/services";
import { DetailsAllergyComponent } from "./details-allergy/details-allergy.component";
@Component({
    selector: "app-allegry",
    templateUrl: "./allegry.component.html",
    styleUrls: ["./allegry.component.scss"],
})
export class AllegryComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private allergyService: AllergyService,
        private dialog: MatDialog,
        private alertService: AlertService
    ) { }

    patientId: number;
    check = true;
    config = new AllergryModel();
    height = '75vh';
    listlable: any = [];
    data: any = [];

    ngOnInit() {
        this.listlable = this.config.collums;
        this.patientId = this.activatedRoute.snapshot.params.patientId;
        this.getAllegryPatient();
    }

    openDialog() {
        this.dialog
            .open(DetailsAllergyComponent, {
                panelClass: "dialog-50-97", disableClose: true,
                data: {
                    PatientId: this.patientId,
                    StatusType: 'create'
                },
            })
            .afterClosed()
            .subscribe((result) => {
                this.ngOnInit();
            });
    }

    openDetailDialog(item) {
        item.StatusType = 'detail';
        const dialogRef = this.dialog.open(DetailsAllergyComponent, {
            panelClass: "dialog-50-97",
            disableClose: true,
            data: item,
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.getAllegryPatient();
        });
    }

    getAllegryPatient() {
        this.allergyService.detailAllegryPatient(this.patientId).subscribe((res) => {
            this.data = res;
        });
    }

    handleCallBackTable = (data) => {
        switch (data.typeBtn.type) {
            case 'detail':
                this.openDetailDialog(data.item);
                break;
            case 'delete':
                this.allergyService
                    .deleteAllegryPatient(data.item.PatientAllergySymptomId)
                    .subscribe(res => {
                        this.data = this.data.filter(x => x.PatientAllergySymptomId !== data.item.PatientAllergySymptomId);
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
    declarations: [
        AllegryComponent,
    ],
    imports: [
        TranslateModule,
        MatDialogModule,
        TableBaseModule
    ],
    exports: [
        AllegryComponent
    ]
})
export class AllegryModule { }