import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from "@angular/router";
import { BillService, PatientService, PaymentService } from 'src/app/common/service';
@Component({
    selector: 'app-print',
    templateUrl: './print.component.html',
    styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    constructor(
        private activatedRoute: ActivatedRoute,
        private paymentService: PaymentService,
        private billService: BillService,
        private patientService: PatientService
    ) { }

    displayedColumnsBill = [
        'No.',
        'Invoice',
        'Amount'
    ];
    dataClientInfo: any;
    paymentInfor: any;
    paymentMethod: any;
    list: any;
    dataSource: any;
    subtotal: number = 0;
    total: number = 0;
    patient: any;
    patientId: number;
    payerName: string;
    payerPhone: string;
    payerBillingAddress: string;
    patientName: string;
    startDate: string;
    invoiceNumber: number;
    createdOn: string;
    PaymentmethodId: number;
    bill: any;
    billList: any;
    payment: any;
    ngOnInit(): void {
        this.dataClientInfo = JSON.parse(localStorage.getItem('dataClientInfo'));
        this.paymentInfor = JSON.parse(localStorage.getItem('paymentInfor'));
        this.paymentMethod = JSON.parse(localStorage.getItem('paymentMethod'));
        this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));
        this.list = JSON.parse(localStorage.getItem('payList'));;
        this.dataSource = new MatTableDataSource(this.list);
        for (let i = 0; i < this.list.length; i++) {
            this.total += Number(this.list[i].Amount);
            this.subtotal += Number(this.list[i].Amount);
        }
        this.payerName = this.paymentInfor.PayerName;
        this.getPatient();
        this.getBillList();
        this.getPayment();
    }
    getBillList() {
        this.billService.listBillOfPatient(this.patientId).subscribe(data => {
            this.billList = data;
            this.bill = this.billList[0];
        })
    }
    getPayment() {
        this.paymentService.listPayment(this.patientId, null, null).subscribe(data => {
            this.payment = data[data.length - 1]
        })
    }

    getPatient() {
        let today = new Date();
        this.startDate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        this.createdOn = today.getHours() + ":" + today.getMinutes();
        for (let i = 0; i < this.list.length; i++) {
            this.total += Number(this.list[i].Amount);
            this.subtotal += Number(this.list[i].Amount);
        }
        this.patientService.detailPatient(this.patientId).then((data: any) => {
            this.patient = data[0];
        })
    }
}
