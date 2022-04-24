import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ReportService {

    constructor(
        private http: HttpClient
    ) { }

    listMedicationHistory(idPatient) {
        return this.http.get<any>(`api/PatientMedicalfactor?PatientId=${idPatient}`).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }

    listFamilyHistory(idPatient) {
        return this.http.get<any>(`api/PatientFamilyfactor?PatientId=${idPatient}`).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }

    listSocialHistory(idPatient) {
        return this.http.get<any>(`api/PatientSocialFactor?PatientId=${idPatient}`).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }

    listPatientAllergy(idPatient) {
        return this.http.get<any>(`api/PatientAllergy?PatientId=${idPatient}`).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }

    listMedicationByProblem(idPatient) {
        return this.http.get<any>(`api/PatientMedicalfactorByProblem?PatientId=${idPatient}&historymode=3`).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }

    listProblemOfVisit(visitId) {
        return this.http.get<any>(`api/VisitProblem?VisitId=${visitId}`).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }

    listOldProblemVisit(patientId) {
        return this.http.get<any>(`api/PatientOldProblems?PatientId=${patientId}`).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }

    listHistoryReport(visitId, problemId) {
        return this.http.get<any>(`api/VisitSymptom/VisitSymptomByVisitId?visitId=${visitId}&problemId=${problemId}`).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }

    listMedicalReport(visitId, problemId) {
        return this.http.get<any>(`api/prescriptiondrug?ProblemId=${problemId}&VisitId=${visitId}`).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }

    listPlanReport(visitid, testcategoryId, organid) {
        return this.http
            .get(`/api/test/result?visitid=${visitid}&testcategoryId=${testcategoryId}&organid=${organid}`)
            .pipe(map((res: any) => res.Payload));
    }

    listPlanPrescriptiondrugReport(ProblemId, VisitId) {
        return this.http
            .get(`api/prescriptiondrug?ProblemId=${ProblemId}&VisitId=${VisitId}`)
            .pipe(map((res: any) => res.Payload));
    }

    listPlanFollowupReport(ProblemId, VisitId) {
        return this.http
            .get(`api/FollowUp?VisitId=${VisitId}&ProblemId=${ProblemId}`)
            .pipe(map((res: any) => res.Payload));
    }

    listVitalPatient(id): Observable<any> {
        return this.http.get<any>(`api/Vital/${id}`).pipe(map((res: any) => res.Payload));
    }

    getDiagnosis(VisitId: number, ProblemId: number) {
        return this.http
            .get(`api/VisitDiagnosis/VisitDiagnosisByVisitId?visitid=${VisitId}&problemId=${ProblemId}`)
            .pipe(map((res: any) => res.Payload));
    }

    listExamReport2(id: number) {
        return this.http
            .get(`api/VisitReport/Exams/${id}`)
            .pipe(map((res: any) => res.Payload));
    }
    listExamReport3(id: number) {
      return this.http
          .get(`api/exam/report?VisitId=${id}`)
          .pipe(map((res: any) => res.Payload));
  }
}
