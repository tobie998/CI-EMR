import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { BaseApiService } from 'src/app/shared/services';

@Injectable({
    providedIn: 'root'
})

export class MedicationService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, 'api/PatientMedicalfactorDrug')
    }
    listMedication(patientId, type) {
        return this.http.get<any>(`api/PatientMedicalfactorDrug?PatientId=${patientId}&historymode=${type}`)
            .toPromise()
            .then(
                result => JSON.parse(
                    JSON.stringify(result)
                )
            );
    }

    listMedicationByProblem(patientId, type) {
        return this.http.get<any>(`api/PatientMedicalfactorByProblem?PatientId=${patientId}&historymode=${type}`)
            .toPromise()
            .then(
                result => JSON.parse(
                    JSON.stringify(result)
                )
            );
    }

    listDrugRoutes() {
        return this.http.get<any>(`api/DrugRoutes`).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }

    listProblem() {
        return this.http.get<any>(`api/Problem`).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }
    /**
     *
     * @param patientId patientId
     * @returns
     */
    listPrescriptionDrug(patientId: number) {
      return this.http
          .get(`api/prescriptiondrug?PatientId=${patientId}`)
          .pipe(map((res: any) => res.Payload));
  }
}
