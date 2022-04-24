import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services';

@Injectable({
    providedIn: 'root'
})
export class DiagnosisService extends BaseApiService<any>  {
    constructor(public http: HttpClient) {
        super(http, 'api/VisitDiagnosis');
    }

    searchDiagnosis(keyword?) {
        return this.http
            .get(`api/APITerm?term=${keyword}&category=3`)
            .pipe(map((res: any) => res.Payload));
    }

    listDiagnosis(VisitId: number, ProblemId: number) {
        return this.http
            .get(`api/VisitDiagnosis/VisitDiagnosisByVisitId?visitid=${VisitId}&problemId=${ProblemId}`)
            .pipe(map((res: any) => res.Payload));
    }

    listDiagnosisLast(patientId, ProblemId) {
        return this.http
            .get(`api/VisitDiagnosis/LastVisitDiagnosis?patientId=${patientId}&problemId=${ProblemId}`)
            .pipe(map((res: any) => res.Payload));
    }
}
