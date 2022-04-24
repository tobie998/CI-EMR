import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { ServiceInvoiceModel } from "src/app/common/model";
import { ExamService, InvoicesService } from "src/app/common/service";
import { AlertService } from 'src/app/shared/services';
@Component({
    selector: "app-create-list-of-charge",
    templateUrl: "./create-service.component.html",
    styleUrls: ["./create-service.component.scss"],
})
export class CreateListOfChargeComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<CreateListOfChargeComponent>,
        public invoiceService: InvoicesService,
        public activatedRoute: ActivatedRoute,
        private alertService: AlertService,
        private examService: ExamService
    ) { }

    ListExam: any = [];
    ListService: any = [];
    ListInvoice: any = [];
    visitId: number;
    dataSource: any;
    patientId: number;
    model = new ServiceInvoiceModel();
    ServiceType: number;

    ngOnInit() {
        this.patientId = this.activatedRoute.snapshot.params.patientId;
        this.getListServiceTypes();
        this.getListExam();
        this.model.ServiceType = 1;
        this.model.VisitId = this.data;
    }

    getListServiceTypes() {
        this.invoiceService.listServiceTypes().subscribe((res) => {
            this.ListService = res.length ? res : [{ Value: 'Exam', NumericKey: 1 }, { Value: 'Diagnosis', NumericKey: 2 }, { Value: 'Test', NumericKey: 3 }];
        });
    }

    getListExam() {
        this.examService.listExamParent().subscribe((res) => {
            this.ListExam = res;
            this.model.ServiceId = res[0].ExamId;
        });
    }

    onCreateInvoiceService = () => {
        this.model.Tax = 0;
        this.model.Discount = 0;
        this.invoiceService.createVisitService(this.model).subscribe(
            (res) => {
                this.dialogRef.close();
                this.closeDialog();
            },
            (err) => {
                this.alertService.changeMessage({
                    color: 'red',
                    text: `An error occurred.Please try again later.!`
                })
            }
        );
    };
    closeDialog(): void {
        this.dialogRef.close();
    }
}
