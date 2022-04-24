import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services/base.service';
import { SocialHistoryModel } from '../model';
@Injectable({
    providedIn: 'root'
})
export class SocialHistoryService extends BaseApiService<any>{
    constructor(public http: HttpClient) {
        super(http, 'api/PatientSocialfactor')
    }

    listSocialHistoryByPatientId(id): Observable<SocialHistoryModel> {
        return this.http.get<SocialHistoryModel>(`api/PatientSocialfactor?patientId=${id}`).pipe(map((res: any) => res.Payload));
    }
}
