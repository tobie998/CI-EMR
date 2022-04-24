import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PatientAllergyModel } from "../model";
@Injectable({
    providedIn: "root",
})
export class AllergyService {
    API_URI = "api/Allergy";
    constructor(public http: HttpClient) { }

    searchSymptons(keyword?) {
        return this.http
            .get(`api/APITerm?term=${keyword}&category=2`)
            .pipe(map((res: any) => res.Payload));
    }

    detailAllegryPatient(id): Observable<PatientAllergyModel> {
        return this.http
            .get<PatientAllergyModel>(`api/PatientAllergy?PatientId=${id}`)
            .pipe(map((res: any) => res.Payload));
    }

    createAllegryPatient(data: any) {
        return this.http.post("api/PatientAllergy", data);
    }

    updateAllegryPatient(id: number, data: any): Observable<PatientAllergyModel> {
        return this.http.put<PatientAllergyModel>(`api/PatientAllergy/${id}`, data);
    }

    deleteAllegryPatient(id): Observable<PatientAllergyModel> {
        return this.http
            .delete<PatientAllergyModel>(`api/PatientAllergy/${id}`)
            .pipe(map((res: any) => res.Payload));
    }

    listAllegry(): Observable<PatientAllergyModel> {
        return this.http.get<PatientAllergyModel>(this.API_URI)
            .pipe(map((res: any) => res.Payload));
    }
}
