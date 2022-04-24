import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { ActivatedRoute, Router } from "@angular/router";
import { InvoicesService, PatientService, VisitService } from "src/app/common/service";
import { AlertService, FormatDateService } from "src/app/shared/services";
import { CreateListOfChargeComponent } from "./create-service/create-service.component";
import { EditListOfChargeComponent } from "./edit-service/edit-service.component";
@Component({
    selector: "app-invoice",
    templateUrl: "./invoice.component.html",
    styleUrls: ["./invoice.component.scss"],
})
export class InvoiceComponent implements OnInit {
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    getDate: string;
    getMonth: string;
    getYear: any;
    getTime: string;
    constructor(
        private dialog: MatDialog,
        private alertService: AlertService,
        private activatedRoute: ActivatedRoute,
        private invoiceService: InvoicesService,
        private formatDate: FormatDateService,
        private patientService: PatientService,
        private visitService: VisitService,
        private router: Router
    ) { }
    displayedColumns = [
        "Category",
        "Description",
        "Price",
        "Quantity",
        "act",
    ];
    dataSource: any;
    patientId: number;
    visitId: number;
    listVisit: any;
    today: any;
    NurseVisitId: number
    lastVisitId: number;
    ngOnInit() {
        this.patientId = this.activatedRoute.snapshot.params.patientId;
        this.getTime = this.formatDate.formatDate(new Date(), 'YYYY-MM-DD');
        this.getDetailPatient();
    }

    onDeleteInvoice = (item) => {
        this.invoiceService
            .deleteInvoice(item.VisitServiceId, item.VisitId, item.ServiceType, item.ServiceId, item.ServicepriceId)
            .subscribe((res) => {
                this.getDetailPatient();
            }, err => {
                this.alertService.changeMessage({
                    color: 'red',
                    text: `An error occurred.Please try again later.!`
                })
            });
    };

    getDetailPatient() {
        this.patientService.detailPatient(this.patientId).then((res: any) => {
            this.visitId = res.VisitId;
            this.lastVisitId = res.LastVisitId;
            this.NurseVisitId = res.NurseVisitId;
            this.getInvoiceVisit((this.visitId === 0) ? this.lastVisitId:this.visitId);
        });
    }
    getInvoiceVisit(visitId: number) {
      this.invoiceService.detailInvoiceVisit( visitId ).subscribe((res) => {
        this.dataSource = res;
      });
    }

    finishVisit() {
        const model = {
            EndDate: this.getTime,
            PatientId: +this.patientId,
            Status: 2,
        };
        const data = {
            VisitId: this.visitId
        }
        // phase sau
        // this.visitService.finishVisit(this.NurseVisitId, model).subscribe(res => {
        // })
        this.visitService.finishVisit(this.visitId, model).subscribe((res) => {
          if (this.visitId !== 0) {
              this.invoiceService.create(data).subscribe(res => {
                  const invoiceId = JSON.parse(JSON.stringify(res)).Payload;
                  localStorage.setItem('invoiceId', JSON.stringify(invoiceId));
                  this.router.navigateByUrl('/pages/profile/detail/'+ +this.patientId +'/invoice/verify');
              });
          }
          let listRoute = JSON.parse(localStorage.getItem("router"));
          listRoute = listRoute.filter((x) => x.id != this.patientId);
          localStorage.setItem("router", JSON.stringify(listRoute));
        });


    }


    openDialog() {
        const visitId = (this.visitId === 0) ? this.lastVisitId : this.visitId;
        const dialogRef = this.dialog.open(CreateListOfChargeComponent, {
            width: "900px",
            height: "300px",
            panelClass: "dialog-50-97", disableClose: true,
            data: visitId,
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.getInvoiceVisit(visitId);
        });

    }

    openEditDialog(item) {
        const dialogRef = this.dialog.open(EditListOfChargeComponent, {
            width: "900px",
            height: " 300px",
            panelClass: "dialog-50-97",
            data: item,
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.getDetailPatient();
        });
    }
}
