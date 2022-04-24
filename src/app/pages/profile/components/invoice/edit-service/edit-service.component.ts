import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ServiceInvoiceModel } from "src/app/common/model";
import { ExamService, InvoicesService } from "src/app/common/service";
@Component({
    selector: "app-edit-list-of-charge",
    templateUrl: "./edit-service.component.html",
    styleUrls: ["./edit-service.component.scss"],
})
export class EditListOfChargeComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<EditListOfChargeComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public invoiceService: InvoicesService,
        private examService: ExamService
    ) { }

    model = new ServiceInvoiceModel();
    ListExam: any = [];
    ListService: any = [];

    ngOnInit() {
        this.getListServiceTypes();
        this.getListExam();
        this.model = this.data;
    }

    updateInvoice() {
        this.invoiceService.updateInvoice(this.model.ServicepriceId, this.model.VisitServiceId, this.model.VisitId, this.model).subscribe(res => {
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
