import { Component, NgModule, OnInit } from "@angular/core";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { PatientImmunizationscheduleModel } from "src/app/common/model";
import { PatientImmunizationscheduleService } from "src/app/common/service";
import { TableBaseModule } from "src/app/shared/components/base@ci/table/table.component";
import { AlertService } from "src/app/shared/services";
import { DetailImmunizationComponent } from "./create-detail/detail-immunization.component";
@Component({
    selector: "app-immunization",
    templateUrl: "./immunization.component.html",
    styleUrls: ["./immunization.component.scss"],
})
export class ImmunizationComponent implements OnInit {
    height = '60vh'
    constructor(
        private dialog: MatDialog,
        private alertService: AlertService,
        private route: ActivatedRoute,
        private service: PatientImmunizationscheduleService
    ) { }
    dataSource: any;
    patientId: number;
    config = new PatientImmunizationscheduleModel;
    collumsImmunization: any;

    ngOnInit() {
        this.patientId = this.route.snapshot.params.patientId;
        this.collumsImmunization = this.config.collumsImmunization;
        this.getImmuById();
    }

    handleCallBackTable = (data) => {
        switch (data.typeBtn.type) {
            case 'detail':
                this.openDetailDialog(data.item);
                break;
            case 'delete':
                this.deleteItem(data.item.PatientImmunizationscheduleId)
                break;
            default:
                break;
        }
    }

    openDialog() {
        const dialogRef = this.dialog.open(DetailImmunizationComponent, {
            panelClass: "dialog-40-97",
            disableClose: true,
            data: {
                PatientId: this.patientId,
                type: 'create'
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.getImmuById();
        });
    }

    getImmuById() {
        this.service
            .listImmuByPatientId(this.patientId)
            .subscribe(res => {
                this.dataSource = res;
            });
    }

    deleteItem(id) {
        this.service.delete(id).subscribe(res => {
            this.dataSource = this.dataSource.filter(x => x.PatientImmunizationscheduleId !== id);
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        });
    }

    openDetailDialog(data) {
        data.type = 'detail';
        const dialogRef = this.dialog.open(DetailImmunizationComponent, {
            panelClass: "dialog-40-97",
            disableClose: true,
            data: data
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.getImmuById();
        });
    }
}
@NgModule({
    declarations: [ImmunizationComponent],
    imports: [
        TableBaseModule,
        MatDialogModule
    ],
    exports: [
        ImmunizationComponent
    ]
})
export class ImmunizationModule { }