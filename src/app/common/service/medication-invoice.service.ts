import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class MedicationInvoiceService extends BaseApiService<any>{
    constructor(public http: HttpClient) {
        super(http, 'api/DrugCharge')
    }

    detailMedicationOfInvoice(id) {
        return this.http.get(`api/VisitService/Prescription/${id}`).pipe(map((res: any) => res.Payload));
    }
}
