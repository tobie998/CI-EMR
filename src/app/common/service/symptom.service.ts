import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services';

@Injectable({
    providedIn: 'root'
})
export class SymptomService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, "api/VisitSymptom");
    }

    listNewSymptomOfVisitId(id, problemId) {
        return this.http.get(`api/VisitSymptom/VisitSymptomByVisitId?visitId=${id}&problemId=${problemId}`).pipe(map((res: any) => res.Payload));
    }
    deleteSystom(data) {
        return this.http.put(`${this.actionUrl}`, data).pipe(map((res: any) => res.Payload));
    }
}
