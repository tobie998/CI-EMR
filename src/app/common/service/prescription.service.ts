import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PrescriptionModel } from "../model/prescription.model";
@Injectable({
    providedIn: "root",
})
export class PrescriptionService {
    constructor(private http: HttpClient) { }

    listDrugRoutes() {
        return this.http.get(`api/DrugRoutes`).pipe(map((res: any) => res.Payload));
    }

    createPrescription(data: any) {
        return this.http.post("api/prescription", data).pipe(map((res: any) => res.Payload));
    }
    /**
     * get list history update PrescriptionDrug
     * @param prescriptionDrugId
     * @returns
     */
    historyPrescriptionDrug(prescriptionDrugId: number) {
        return this.http
            .get(`api/PrescriptionDrugHistories/PrescriptionDrug/${prescriptionDrugId}`)
            .pipe(map((res: any) => res.Payload));
    }

    listPrescriptionDrug(id: number, VisitId: number) {
      return this.http
          .get(`api/prescriptiondrug?ProblemId=${id}&VisitId=${VisitId}`)
          .pipe(map((res: any) => res.Payload));
  }

    createDetailsPrescription(data: any) {
        return this.http.post("api/prescription/drug", data);
    }

    deletePres(id) {
        return this.http
            .delete(`api/prescription/drug/${id}`)
            .pipe(map((res: any) => res.Payload));
    }

    updatePres(id: number, data: any): Observable<any> {
        return this.http.put<PrescriptionModel>(
            `api/prescription/drug/${id}`,
            data
        );
    }
}
