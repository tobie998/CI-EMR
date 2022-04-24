import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { cloneDeep } from "lodash";
import { BillService, InvoicesService, PatientService, PaymentService } from "src/app/common/service";
import { BillPdfService } from "src/app/common/service/bill-pdf.service";
import { AlertService } from "src/app/shared/services";
@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.component.html",
  styleUrls: ["./invoices.component.scss"],
})

export class InvoicesComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    public invoicesService: InvoicesService,
    public paymentService: PaymentService,
    public alertService: AlertService,
    public billService: BillService,
    public route: Router,
    private billPdf: BillPdfService,
    private patientService: PatientService
  ) { }
  dataSource: any;
  displayedColumns = ["Radio", "No.", "Date", "Amount", "Unpaid"];
  displayedColumnsData = ["Invoice"];
  displayedColumnsPay = ["Pay"];
  check: boolean = false;
  patientId: number;
  invoiceId: number;
  checkAll = false;
  total: number;
  visitId: number;
  timer;
  listInvoiceBill: any;
  amount: number;
  listService = [];
  price = 0;
  ngOnInit() {
    this.patientId = +this.activatedRoute.snapshot.params.patientId;
    localStorage.removeItem('bill');
    this.getListInvoice();
  }

  createBill() {
    localStorage.removeItem('invoiceId');
    localStorage.removeItem('visitId');
    const invoiceId = [];
    this.createPayment();
    this.listService.forEach(x => {
      const id = {
        InvoiceId: x
      }
      invoiceId.push(id);
    });
    const data = {
      PatientId: this.patientId,
      Invoices: invoiceId,
      TotalAmount: this.price
    }
    this.billService.createBill(data).subscribe(res => {
      this.route.navigateByUrl(`pages/profile/detail/${this.patientId}/account/medical-bill/${res}`);
      localStorage.setItem('BillId', JSON.stringify(res));
    }, (err) => {
    }, () => {

    });
  }

  createPayment() {
    this.price = 0;
    this.dataSource.forEach(x => {
      if (this.listService.includes(x.InvoiceId)) {
        let price = (x.Price >= 0) ? x.Price : 0
        this.price = this.price + price;
        const data = {
          Amount: price,
          InvoiceId: x.InvoiceId
        }
        this.paymentService.create(data).subscribe(res => {
        });
      }
    });
  }

  changePayment(value, index) {
    this.dataSource[index].Price = +value;
    this.amount = value;
  }

  onChange(serviceInvoice, isChecked: boolean) {
    if (isChecked) {
      this.listService.push(serviceInvoice.InvoiceId);
    } else {
      let index = this.listService.indexOf(serviceInvoice.InvoiceId);
      this.dataSource[index].Price = 0;
      this.listService.splice(index, 1);
    }
    if (this.listService.length !== 0) {
      this.check = true;
      if (this.listService.length === this.dataSource.length) {
        this.checkAll = true;
      }
      else {
        this.checkAll = false;
      }
    }
    if (this.listService.length === 0) {
      this.check = false;
      this.checkAll = false;
    }
  }

  getListInvoice() {
    this.invoicesService.listInvoiceVisitOfPatient(this.patientId, null).subscribe((res) => {
      this.dataSource = res;
      this.dataSource.map(x => x.Price = x.TotalAmount);
    });
  }

  showPay() {
    if (this.listService.length !== this.dataSource.length) {
      this.listService.splice(0);
      for (let i = 0; i < this.dataSource.length; i++) {
        let check = <HTMLInputElement>document.getElementById(`${this.dataSource[i].InvoiceId}`);
        check.checked = true;
        this.listService.push(this.dataSource[i].InvoiceId);
      }
    }
    else {
      this.listService.splice(0);
      for (let i = 0; i < this.dataSource.length; i++) {
        let check = <HTMLInputElement>document.getElementById(`${this.dataSource[i].InvoiceId}`);
        check.checked = false;
      }
    }
    if (this.listService.length !== 0) {
      this.check = true;
      if (this.listService.length === this.dataSource.length) {
        this.checkAll = true;
      }
      else {
        this.checkAll = false;
      }
    }
    if (this.listService.length === 0) {
      this.check = false;
      this.checkAll = false;
    }
  }

  downloadPDF(item): void {
    this.billService.listBillOfPatient(this.patientId).subscribe(res1 => {
      if (res1.length === 0) {
        this.patientService.detailPatient(this.patientId).then((data: any) => {
          this.billPdf.createPDF( data.LastName +' ' + data.FirstName, data.PatientId , new Date(), "", "", "", [item], false);
        })
      } else {
        this.billService.detailBillInvoice(1).subscribe(res2 => {
          this.paymentService.listPaymentInvoice(this.patientId, res2[0].InvoiceId).subscribe(res3 => {
            if (res3.length !== 0) {
              this.billPdf.createPDF(res1[0].FullName, res1[0].PatientId , res1[0].CreatedOn, res3[0].PayerName, res3[0].PayerPhone, res3[0].PayerBillingAddress, [item], false);
            } else {
              this.billPdf.createPDF(res1[0].FullName, res1[0].PatientId , res1[0].CreatedOn, "", "", "", [item], false);
            }
          });
        });
      }
    });

  }

}
