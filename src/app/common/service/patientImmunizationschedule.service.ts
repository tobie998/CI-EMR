import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { BaseApiService } from "src/app/shared/services/base.service";
@Injectable({
    providedIn: "root",
})
export class PatientImmunizationscheduleService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, "api/PatientImmunizationschedule");
    }

    searchImmunization(keyword?) {
        return this.http
            .get(`api/APITerm?term=${keyword}&category=3`)
            .pipe(map((res: any) => res.Payload));
    }

    listImmuByPatientId(id) {
        return this.http
            .get(`api/PatientImmunizationschedule?PatientId=${id}`)
            .pipe(map((res: any) => res.Payload));
    }
}
