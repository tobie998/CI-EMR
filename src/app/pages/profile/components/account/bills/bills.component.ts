import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cloneDeep } from 'lodash';
import { BillService, PaymentService } from 'src/app/common/service';
import { BillPdfService } from 'src/app/common/service/bill-pdf.service';
@Component({
    selector: 'app-bills',
    templateUrl: './bills.component.html',
    styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

    constructor(
        public billService: BillService,
        public activeRouter: ActivatedRoute,
        public route: Router,
        public paymentService: PaymentService,
        private billPdf: BillPdfService
    ) { }
    displayedColumns = ["No.", "Date", "Amount", "print"];
    dataSource: any;
    patientId: number;
    dataListBill: any = [];
    download = false;

    ngOnInit(): void {
        this.patientId = this.activeRouter.snapshot.params.patientId;
        this.getListBill();
    }

    clickDetail(item) {
        if (!this.download) {
          localStorage.setItem('bill', 'true');
          this.route.navigateByUrl(`pages/profile/detail/${this.patientId}/account/medical-bill/${item.BillId}`);
        } else {
          this.download = false;
        }
    }

    getListBill() {
        this.billService.listBillOfPatient(this.patientId).subscribe(res => {
            this.dataSource = res;
        });
    }
    downloadPDF(item): void {
      this.download = true;
      this.billService.listBillOfPatient(this.patientId).subscribe(res1 => {
        this.billService.detailBillInvoice(1).subscribe(res2 => {
          this.paymentService.listPaymentInvoice(this.patientId, res2[0].InvoiceId).subscribe(res3 => {
            this.billService.detailBillInvoice(item.BillId).subscribe(res4 => {
              if (res3.length !== 0) {
                const bill = cloneDeep(item);
                this.billPdf.createPDF(res1[0].FullName, res1[0].PatientId , res1[0].CreatedOn , res3[0].PayerName, res3[0].PayerPhone, res3[0].PayerBillingAddress, res4, true);
              } else {
                this.billPdf.createPDF(res1[0].FullName, res1[0].PatientId , res1[0].CreatedOn , "", "", "", res4, true);
              }
            });
        });
      });
    });
  }
}
