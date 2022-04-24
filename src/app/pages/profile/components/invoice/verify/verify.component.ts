import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { ActivatedRoute } from "@angular/router";
import { PrescriptionModel, ServiceInvoiceModel } from "src/app/common/model";
import { InvoicesService, MedicationInvoiceService, PatientService } from "src/app/common/service";
import { EditInvoiceComponent } from './dialog/edit-invoice.component';
@Component({
    selector: "app-verify",
    templateUrl: "./verify.component.html",
    styleUrls: ["./verify.component.scss"],
})
export class VerifyComponent implements OnInit {
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    constructor(
        private invoiceService: InvoicesService,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private medicationInvoiceService: MedicationInvoiceService,
        private patientService: PatientService

    ) { }

    displayedColumnsServices = [
        "No.",
        "service",
        "Description",
        "Quantity",
        "Unit cost",
        "Tax",
        "Discount",
        "Amount",
        "edit"
    ];

    displayedColumnsMedication = [
        "No.",
        "Name",
        "SKU",
        "Quantity",
        "Unit cost",
        "Tax",
        "Discount",
        "Amount",
        "edit"
    ];
    dataSourceMedication: any;
    dataSourceService: any;
    patientId: number;
    isShow: boolean = false;
    Medication: number;
    serviceInvoice: any;
    MedicationInvoice: any;
    Description: string;
    SKU: string;
    Quantity: number;
    Discount = 0;
    Name: string;
    Unitcost: number;
    Tax = 0;
    amount: number;
    listServiceCharge: any;
    currentInvoice: any;
    visitId: number;
    keypress;
    count = 0;
    invoiceId: number;
    countAmountMedical = 0;
    countDiscount = 0;
    invoiceDetail: any;
    totalCount: number;
    listMedication = new PrescriptionModel();
    model = new ServiceInvoiceModel();
    lastVisitId: number;
    ngOnInit() {
        this.invoiceId = +JSON.parse(localStorage.getItem('invoiceId'));
        this.patientId = +this.activatedRoute.snapshot.params.patientId;
        this.patientService.detailPatient(this.patientId).then((res: any) => {
            this.visitId =  res.VisitId;
            this.lastVisitId = res.LastVisitId;
            this.getDetailPatient();
            this.getInvoiceService();
            this.getMedication();
            this.getDetailInvoice();
           })

    }

    getDetailPatient(){
      this.patientService.detailPatient(this.patientId).then((res: any) => {
        this.visitId =  res.VisitId;
        this.lastVisitId = res.LastVisitId;
       })
    }

    openEditDialog(item, check) {
        const dialogRef = this.dialog.open(EditInvoiceComponent, {
            panelClass: "dialog-50-97", disableClose: true,
            data: {
                Data: item,
                Check: check
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.getMedication();
            this.getInvoiceService();
        });
    }

    getInvoiceService() {
        this.count = 0;
        if(this.visitId !== 0){
            this.invoiceService.detailInvoiceVisit(this.visitId).subscribe(res => {
                this.dataSourceService = res;
                res.forEach(x => {
                    this.count += x.TotalAmount;
                });
                this.updateTotalAmount();
            });
        }
        else{
            this.invoiceService.detailInvoiceVisit(this.lastVisitId).subscribe(res => {
                this.dataSourceService = res;
                res.forEach(x => {
                    this.count += x.TotalAmount;
                });
                this.updateTotalAmount();
            });
        }

    }

    updateTotalAmount() {
        if(this.visitId !== 0){
            const data = {
                TotalAmount: this.count + this.countAmountMedical,
                VisitId: this.visitId
            }
            this.invoiceService.update(data, this.invoiceId).subscribe(res => {
            });
        }
        else{
            const data = {
                TotalAmount: this.count + this.countAmountMedical,
                VisitId: this.lastVisitId
            }
            this.invoiceService.update(data, this.invoiceId).subscribe(res => {
            });
        }

    }

    getDetailInvoice() {
        if(this.visitId !== 0){
            this.invoiceService.detailInvoice(this.visitId, this.patientId).subscribe(res => {
                this.invoiceDetail = res[0];
            });
        }
        else{
            this.invoiceService.detailInvoice(this.lastVisitId, this.patientId).subscribe(res => {
                this.invoiceDetail = res[0];
            });
        }

    }

    getMedication() {
        this.countAmountMedical = 0;
        this.countDiscount = 0;
        if(this.visitId !== 0){
            this.medicationInvoiceService.detailMedicationOfInvoice(this.visitId).subscribe(res => {
                this.dataSourceMedication = res;
                res.forEach(x => {
                    this.countDiscount += x.Discount;
                    this.countAmountMedical += x.TotalAmount
                });
                this.totalCount = this.count + this.countAmountMedical;
                this.updateTotalAmount();
            })
        }
        else{
            this.medicationInvoiceService.detailMedicationOfInvoice(this.lastVisitId).subscribe(res => {
                this.dataSourceMedication = res;
                res.forEach(x => {
                    this.countDiscount += x.Discount;
                    this.countAmountMedical += x.TotalAmount
                });
                this.totalCount = this.count + this.countAmountMedical;
                this.updateTotalAmount();
            })
        }

    }

    updateMedical(item, data) {
        this.invoiceService.updateMecicalService(item.VisitId, item.DrugId, item.PrescriptionDrugId, data).subscribe(res => {
            this.getMedication();
        });
    }

    updateInvoiceTax(item, tax) {
        const data = {
            Price: item.Price,
            Description: item.Description,
            VisitServiceId: item.VisitServiceId,
            VisitId: item.VisitId,
            ServiceType: item.ServiceType,
            ServiceId: item.ServiceId,
            Tax: +tax / 100,
            Quantity: item.Quantity,
            Discount: item.Discount
        }
        clearTimeout(this.keypress);
        this.keypress = setTimeout(() => {
            this.invoiceService.updateInvoice(item.ServicepriceId, item.VisitServiceId, item.VisitId, data).subscribe(res => {
                this.getInvoiceService();
            });
        }, 500);
    }

    updateInvoiceDiscount(item, discount) {
        const data = {
            Price: item.Price,
            Description: item.Description,
            VisitServiceId: item.VisitServiceId,
            VisitId: item.VisitId,
            ServiceType: item.ServiceType,
            ServiceId: item.ServiceId,
            Tax: item.Tax,
            Quantity: item.Quantity,
            Discount: +discount / 100
        }
        clearTimeout(this.keypress);
        this.keypress = setTimeout(() => {
            this.invoiceService.updateInvoice(item.ServicepriceId, item.VisitServiceId, item.VisitId, data).subscribe(res => {
                this.getInvoiceService();
            });
        }, 500);
    }
    create() {
        localStorage.removeItem('invoiceId');
    }
}
