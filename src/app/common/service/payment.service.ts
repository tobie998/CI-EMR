import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseApiService } from 'src/app/shared/services/base.service';
import { PaymentModel } from "../model";
@Injectable({
    providedIn: "root",
})
export class PaymentService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, "api/Payment");
    }

    listPaymentInvoice(patientId, invoiceId) {
        return this.http.get(`api/Payment?PatientId=${patientId}&InvoiceId=${invoiceId}`)
            .pipe(map((res: any) => res.Payload));
    }

    listPayment(patientId, invoiceId, contractId) {
        return this.http.get(`api/Payment?PatientId=${patientId}&InvoiceId=${invoiceId}&ContractId=${contractId}`)
            .pipe(map((res: any) => res.Payload));
    }
}
