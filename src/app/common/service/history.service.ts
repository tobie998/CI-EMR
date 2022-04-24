import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services';

@Injectable({
    providedIn: 'root'
})
export class HistoryService extends BaseApiService<any> {

    constructor(public http: HttpClient) {
        super(http, 'api/VisitSymptom')
    }

    detailProblemOfVisit(id) {
        return this.http.get(`api/VisitProblem?VisitId=${id}`).pipe(map((res: any) => res.Payload));
    }
    listVisitSymptomByVisitRequired(problemId) {
      return this.http.get(`api/Problemcombination/Symptom?problemId=${problemId}&isRequired=2`).pipe(map((res: any) => res.Payload));

    }
    listVisitSymptomByVisit(visitId, problemId) {
        return this.http.get(`api/VisitSymptom/VisitSymptomByVisitId?visitId=${visitId}&problemId=${problemId}`).pipe(map((res: any) => res.Payload));
    }

    searchTerm(key) {
        return this.http.get(`api/APITerm?term=${key}&category=2`).pipe(map((res: any) => res.Payload));
    }

    listMedicationByProblem(patientId, type) {
        return this.http.get<any>(`api/PatientMedicalfactorDrug?PatientId=${patientId}&historymode=${type}`).pipe(map((res: any) => res.Payload))
    }

    updateMedication(medicalDrugId, model) {
        return this.http.put(`api/PatientMedicalfactorDrug/${medicalDrugId}`, model).pipe(map((res: any) => res.Payload));
    }
    /**
     * Get list review of system
     * @param visitId VisitID
     * @param problemId ProblemId
     * @returns
     */

    lstReviewSystem(visitId: number, problemId: number) {
        return this.http.get(`api/VisitReviewSystem?VisitId=${visitId}&ProblemId=${problemId}`).pipe(map((res: any) => res.Payload));
    }
    /**
     *
     * @param data
     */
    updateVisitReviewSystem(data) {
      return this.http.post(`api/VisitReviewSystem`, data).pipe(map((res: any) => res.Payload));
    }
    /**
     *
     * @param data
     */
     bulkInsertVisitReviewSystem(data) {
      return this.http.post(`api/VisitReviewSystem/bulkpost`, data).pipe(map((res: any) => res.Payload));
    }
}
