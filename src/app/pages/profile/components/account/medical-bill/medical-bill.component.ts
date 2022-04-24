import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { BillService, PaymentService } from "src/app/common/service";
import { BillPdfService } from "src/app/common/service/bill-pdf.service";
@Component({
    selector: "app-medical-bill",
    templateUrl: "./medical-bill.component.html",
    styleUrls: ["./medical-bill.component.scss"],
})

export class MedicalBillComponent implements OnInit {
    payerName: string;
    payerPhone: string;
    payerAddress: string;
    constructor(
        public billService: BillService,
        private billPdf: BillPdfService,
        public paymentService: PaymentService,
        private activatedRoute: ActivatedRoute,
        public route: Router
    ) { }

    displayedColumns: string[] = ["position", "Invoice", "Amount"];
    dataSource: any;
    paymentmethodId: number;
    paymentmethod: string;
    billDetail: any;
    patientId: number;
    listMethod: any;
    billId: number;
    invoiceId: number;
    isBill = false;

    ngOnInit(): void {
        if (localStorage.getItem('bill')) {
            this.isBill = JSON.parse(localStorage.getItem('bill'));
        }
        this.patientId = +this.activatedRoute.snapshot.params.patientId;
        this.billId = +this.activatedRoute.snapshot.params.billId;
        this.getBillDetail();
        this.getListMethod();
    }

    updatePayment() {
        const data = {
            PaymentmethodId: this.paymentmethodId,
            PayerName: this.payerName,
            PayerPhone: this.payerPhone,
            PayerBillingAddress: this.payerAddress,
        }
        this.paymentService.update(data, this.dataSource[0].PaymentId).subscribe(res => {
            this.route.navigateByUrl(`/pages/profile/detail/${this.patientId}/account`);
            localStorage.removeItem('BillId');
        });
    }

    getListMethod() {
        this.billService.listMethod().subscribe(res => {
            this.listMethod = res;
            if (this.listMethod && this.listMethod.length !== 0) {
              while (this.listMethod.length % 4 !== 0) {
                this.listMethod.push(null)
              }
            }
        });
    }

    getBillDetail() {
        this.billService.listBillOfPatient(this.patientId).subscribe(res => {
            this.billDetail = res[0];
            this.billService.detailBillInvoice(this.billId).subscribe(res => {
                this.dataSource = res;
                this.invoiceId = res[0].InvoiceId;
                this.paymentService.listPaymentInvoice(this.patientId, this.invoiceId).subscribe(res => {
                    this.payerName = res[0].PayerName;
                    this.payerPhone = res[0].PayerPhone;
                    this.payerAddress = res[0].PayerBillingAddress;
                    this.paymentmethod = res[0].PaymentMethodName;
                });
            });
        });
    }

    clickMethod(item) {
        this.paymentmethod = item.Name;
        this.paymentmethodId = item.PaymentmethodId;
    }
    cancelBill() {
        if (this.isBill !== false) {
          this.route.navigateByUrl(`/pages/profile/detail/${this.patientId}/account`);
          localStorage.removeItem('BillId');
        } else {
          this.billService.delete(this.billId).subscribe(res => {
            this.route.navigateByUrl(`/pages/profile/detail/${this.patientId}/account`);
            localStorage.removeItem('BillId');
          });
        }
    }
    downloadPDF(): void {
      this.billPdf.createPDF(this.billDetail.FullName, this.billDetail.PatientId ,
        this.billDetail.CreatedOn , this.payerName, this.payerPhone, this.payerAddress, this.dataSource, true);
    }
}
