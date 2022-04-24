import { Component, Input, NgModule, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { AlertService } from "src/app/shared/services";
import { CreatePresciptionComponent } from "./create-presciption/create-presciption.component";
import { DetailsPrescriptionComponent } from "./details-prescription/details-prescription.component";
import { PrescriptionService } from "src/app/common/service";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
@Component({
    selector: "app-prescription",
    templateUrl: "./prescription.component.html",
    styleUrls: ["./prescription.component.scss"],
})
export class PrescriptionComponent implements OnInit {
    @Input() data;

    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    constructor(
        private prescriptionService: PrescriptionService,
        private activatedRoute: ActivatedRoute,
        public dialog: MatDialog,
        private alertService: AlertService
    ) { }
    displayedColumns: string[] = [
        "Name",
        "Dose",
        "Frequency",
        "Start Date",
        "End Date",
        "Route",
        "Detail",
        "delete",
    ];
    dataSource: any;
    RouteList: any;
    presciptionId: number;
    PresciptionId: number;
    PresciptionList: any;
    ListOfPrecription: any;
    VisitId: number;
    ProblemId: number;
    patientId: number;
    prescriptionId: number;

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((param) => (this.patientId = +param.get("patientId")));
        this.getPrescriptionByPatientAndProblem();
    }

    openDialog() {
        this.dialog
            .open(CreatePresciptionComponent, {
                panelClass: "dialog-60-97",
                data: {
                    Patient: this.patientId,
                    PrescriptionId: this.prescriptionId,
                    VisitId: this.data.VisitId,
                    ProblemId: this.data.ProblemId
                }
            })
            .afterClosed()
            .subscribe((result) => {
                this.ngOnInit();
            });
    }

    getPrescriptionByPatientAndProblem() {
        this.prescriptionService
            .listPrescriptionDrug(this.data.ProblemId, this.data.VisitId)
            .subscribe((res) => {
                this.ListOfPrecription = res;
                this.dataSource = new MatTableDataSource(this.ListOfPrecription);
                this.dataSource.paginator = this.paginator;
            });
    }

    deleteItem(item) {
        this.prescriptionService
            .deletePres(item.PrescriptionDrugId)
            .subscribe((res) => {
            }, err => {
                this.alertService.changeMessage({
                    color: 'red',
                    text: `An error occurred.Please try again later.!`
                })
            });
        const data = this.ListOfPrecription.filter(x => x.PrescriptionDrugId !== item.PrescriptionDrugId)
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
    }
    openDetailDialog(data) {
        const dialogRef = this.dialog.open(DetailsPrescriptionComponent, {
            width: "900px",
            height: "300px",
            panelClass: "dialog-60-97", disableClose: true,
            data: data,
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result === true) {
            this.ngOnInit();
          }
         });
    }
}
@NgModule({
    declarations: [
        PrescriptionComponent,
    ],
    imports: [
        TranslateModule,
        MatTableModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        PrescriptionComponent
    ]
})
export class PrescriptionModule { }
