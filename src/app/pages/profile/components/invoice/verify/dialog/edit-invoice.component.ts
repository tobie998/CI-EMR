import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrescriptionModel, ServiceInvoiceModel } from 'src/app/common/model';
import { ExamService, InvoicesService } from 'src/app/common/service';
@Component({
    selector: 'app-edit-invoice',
    templateUrl: './edit-invoice.component.html',
    styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<EditInvoiceComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public invoiceService: InvoicesService,
        private examService: ExamService
    ) { }

    model = new ServiceInvoiceModel();
    modelMedication = new PrescriptionModel();
    ListExam: any = [];
    ListService: any = [];
    check: any;
    tax: number;
    discount: number;

    ngOnInit() {
        this.getListServiceTypes();
        this.getListExam();
        this.model = this.data.Data;
        this.modelMedication = this.data.Data;
        this.check = this.data.Check;
        this.tax = this.model.Tax * 100;
        this.discount = this.model.Discount * 100;
    }

    updateInvoice() {
        this.model.Tax = +this.tax / 100;
        this.model.Discount = +this.discount / 100;
        this.invoiceService.updateInvoice(this.model.ServicepriceId, this.model.VisitServiceId, this.model.VisitId, this.model).subscribe(res => {
            this.dialogRef.close();
        });
    }

    updateMedical() {
        this.modelMedication.Tax = +this.tax / 100;
        this.modelMedication.Discount = +this.discount / 100;
        this.invoiceService.updateMecicalService(this.modelMedication.VisitId, this.modelMedication.DrugId, this.modelMedication.PrescriptionDrugId, this.modelMedication).subscribe(res => {
            this.dialogRef.close();
        });
    }


    getListServiceTypes() {
        this.invoiceService.listServiceTypes().subscribe((res) => {
            this.ListService = res;
        });
    }

    getListExam() {
        this.examService.listExamParent().subscribe((res) => {
            this.ListExam = res;
            this.model.ServiceId = res[0].ExamId;
        });
    }

    closeDialog() {
        this.dialogRef.close();
    }
}
