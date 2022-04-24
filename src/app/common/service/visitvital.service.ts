import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services';
@Injectable({
    providedIn: 'root'
})
export class VisitVitalService extends BaseApiService<any> {
    API_URI = 'api/VisitVital';
    constructor(
        public http: HttpClient
    ) {
        super(http, 'api/VisitVital')
    }

    updateVisitVital(data) {
        return this.http.put(this.API_URI, data).pipe(map((res: any) => res.Payload));
    }

    listResultTime(resultdate, patientid) {
        return this.http.get<any>(this.API_URI + `?resultdate=${resultdate}&patientid=${patientid}`).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }

    listVitalPatient(id) {
        return this.http.get<any>(`api/Vital/${id}`).pipe(map((res: any) => res.Payload));
    }
}
