import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { BaseApiService } from 'src/app/shared/services/base.service';

@Injectable({
    providedIn: "root",
})
export class BillService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, "api/Bill");
    }
    createBill(data){
        return this.http
        .post('api/Bill', data)
        .pipe(map((res: any) => res.Payload));
    }
    listBillOfPatient(id) {
        return this.http
            .get(`api/Bill?PatientId=${id}`)
            .pipe(map((res: any) => res.Payload));
    }

    listMethod() {
        return this.http.get('api/Paymentmethod').pipe(map((res: any) => res.Payload));
    }

    detailBillInvoice(id) {
        return this.http
            .get(`api/BillInvoice?BillId=${id}`)
            .pipe(map((res: any) => res.Payload));
    }
}
