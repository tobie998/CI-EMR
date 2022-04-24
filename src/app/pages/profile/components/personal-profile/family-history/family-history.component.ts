import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { ActivatedRoute } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FamilyHistoryModel } from "src/app/common/model";
import { FamilyHistoryService } from "src/app/common/service";
import { TableBaseModule } from "src/app/shared/components/base@ci/table/table.component";
import { AlertService } from "src/app/shared/services";
import { SharedModule } from "src/app/shared/shared.module";
import { CreateFamilyHistoryComponent } from "./create/create-family-history.component";

@Component({
    selector: "app-family-history",
    templateUrl: "./family-history.component.html",
    styleUrls: ["./family-history.component.scss"],
})
export class FamilyHistoryComponent implements OnInit {
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    constructor(
        private activatedRoute: ActivatedRoute,
        private familyHistoryService: FamilyHistoryService,
        private alertService: AlertService,
        private dialog: MatDialog
    ) { }
    dataSource: any;
    patientId: number;
    config = new FamilyHistoryModel;
    collumsFamily: any;

    ngOnInit() {
        this.patientId = +this.activatedRoute.snapshot.params.patientId;
        this.getFamilyHistory();
        this.collumsFamily = this.config.collumsFamily;
    }

    openDialog() {
        const dialogRef = this.dialog.open(CreateFamilyHistoryComponent, {
            panelClass: "dialog-97-97", disableClose: true,
            data: {
              patientId: this.patientId,
              data: this.dataSource
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.getFamilyHistory();
        });
    }

    getFamilyHistory() {
        this.familyHistoryService
            .detailPatientFamily(this.patientId)
            .subscribe((data) => {
                this.dataSource = data;
            });
    }

    deleteItem(id: number) {
        this.familyHistoryService
            .delete(id)
            .subscribe(res => {
                this.dataSource = this.dataSource.filter(x => x.PatientFamilyfactorId != id);
            }, err => {
                this.alertService.changeMessage({
                    color: 'red',
                    text: `An error occurred.Please try again later.!`
                })
            });
    }
    handleCallBackTable = (data) => {

    }
}
@NgModule({
    declarations: [
        FamilyHistoryComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule,
        FormsModule,
        TableBaseModule
    ],
    exports: [
        FamilyHistoryComponent
    ]
})
export class FamilyHistoryModule { }
