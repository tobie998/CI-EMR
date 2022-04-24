import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class ListofvisitsService extends BaseApiService<any>{
    constructor(public http: HttpClient) {
        super(http, 'api/Visit')
    }

    listVisitPatient(id, type) {
        return this.http.get(`api/visit/patient?id=${id}&type=${type}`).pipe(map((res: any) => res.Payload));
    }

    detailImageListOfVisit(id) {
        return this.http.get(`api/VisitReport/ReportFile/${id}`)
            .pipe(map((res: any) => res.Payload));
    }

    uploadFileNurse(data) {
        return this.http.post(`api/VisitMedia/nurse`, data).pipe(map((res: any) => res.Payload));
    }

    detailImageNurse(id) {
        return this.http.get(`/api/VisitMedia?Type=3&VisitId=${id}`)
            .pipe(map((res: any) => res.Payload));
    }
    editVisitPatient(id) {
        return this.http.get(`api/MedicationChangeLog?PatientId=${id}`).pipe(map((res: any) => res.Payload));
    }

}
