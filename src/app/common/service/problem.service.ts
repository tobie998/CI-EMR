import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services';
import { ProblemModel } from '../model';
@Injectable({
    providedIn: 'root'
})
export class ProblemService extends BaseApiService<any> {
    constructor(
        public http: HttpClient
    ) {
        super(http, 'api/Problem')
    }

    searchProblemPredefine(pageSize, pageNumber, keyword) {
        return this.http.get(`api/Problem/predefine?PageNumber=${pageSize}&PageSize=${pageNumber}&keyword=${keyword}`).pipe(map((res: any) => res.Payload));
    }

    listProblemByVisit(id) {
        return this.http.get(`api/VisitProblem?VisitId=${id}`).pipe(map((res: any) => res.Payload));
    }

    listOldProblem(id) {
        return this.http.get(`api/PatientOldProblems?PatientId=${id}`).pipe(map((res: any) => res.Payload));
    }


    updateProblem(patientProblemId, data) {
        return this.http.put(`api/PatientProblem/${patientProblemId}`, data)
    }

    listProblemByVisitTo(id?) {
        return this.http.get(`api/VisitProblem?VisitId=${id}`);
    }

    detailProblemOfVisit(visitId: number) {
        return this.http
            .get(`api/VisitProblem?VisitId=${visitId}`)
            .pipe(map((res: any) => res.Payload));
    }

    updateProblemPatient(patientProblemId: number, model: any): Observable<ProblemModel> {
        return this.http
            .put<ProblemModel>(`api/PatientProblem/${patientProblemId}`, model)
            .pipe(map((res: any) => res.Payload));
    }

    createProblemVisit(model) {
        return this.http
            .post("api/VisitProblem", model)
            .pipe(map((res: any) => res.Payload));
    }

    createPredefinedProblemVisit(model) {
        return this.http
            .post(`api/VisitProblem/PredefinedProblem`, model)
            .pipe(map((res: any) => res.Payload));
    }

    createVisit(data) {
        return this.http
            .post("api/Visit", data)
            .pipe(map((res: any) => res.Payload));
    }

    updateProblemVisit(visitProblemId, model) {
        return this.http
            .put<ProblemModel>(`api/VisitProblem/${visitProblemId}`, model)
            .pipe(map((res: any) => res.Payload));
    }

    deleteVisitProblemId(visitProblemId) {
        return this.http
            .delete(`api/VisitProblem/${visitProblemId}`)
            .pipe(map((res: any) => res.Payload));
    }
}
