import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { BaseApiService } from "src/app/shared/services/base.service";

@Injectable({
    providedIn: "root",
})
export class MedicalHistoryService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, "api/PatientMedicalfactor");
    }

    searchMdeical(keyword?) {
        return this.http
            .get(`api/APITerm?term=${keyword}&category=3`)
            .pipe(map((res: any) => res.Payload));
    }

    searchSurgical(keyword?) {
        return this.http
            .get(`api/APITerm?term=${keyword}&category=6`)
            .pipe(map((res: any) => res.Payload));
    }

    listPatientMedicalOfPatient(id) {
        return this.http
            .get(`api/PatientMedicalfactor?PatientId=${id}`)
            .pipe(map((res: any) => res.Payload));
    }

}
