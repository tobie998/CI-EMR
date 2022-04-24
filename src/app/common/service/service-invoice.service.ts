import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { BaseApiService } from "src/app/shared/services/base.service";

@Injectable({
    providedIn: "root",
})
export class ServiceInvoiceService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, "api/ServiceCharge");
    }
}
