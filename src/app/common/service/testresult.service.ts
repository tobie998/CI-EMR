import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services';


@Injectable({
  providedIn: 'root'
})
export class TestresultService extends BaseApiService<any> {
  constructor(
    public http: HttpClient
  ) {
    super(http, 'api/testresult')
  }

  getLabs(visitId, patient) {
    return this.http.get(`${this.actionUrl}/lab?VisitId=${visitId}&PatientId=${patient}`).pipe(map((result: any) => result.Payload));
  }
  getBiopsy(visitId, patient) {
    return this.http.get(`${this.actionUrl}/biopsy?VisitId=${visitId}&PatientId=${patient}`).pipe(map((result: any) => result.Payload));
  }
  getFunctional(visitId, patient) {
    return this.http.get(`${this.actionUrl}/functional?VisitId=${visitId}&PatientId=${patient}`).pipe(map((result: any) => result.Payload));
  }
  getImaging(visitId, patient) {
    return this.http.get(`${this.actionUrl}/imaging?VisitId=${visitId}&PatientId=${patient}`).pipe(map((result: any) => result.Payload));
  }


}
