import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { BaseApiService } from "src/app/shared/services/base.service";

@Injectable({
    providedIn: "root",
})
export class FamilyHistoryService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, "api/PatientFamilyfactor");
    }

    detailPatientFamily(id) {
        return this.http
            .get(`api/PatientFamilyfactor?PatientId=${id}`)
            .pipe(map((res: any) => res.Payload));
    }

    listRelationship(Patients, type) {
        return this.http
            .get(`api/codevalue?TableName=${Patients}&ColumnName=${type}&NumericKey=null`)
            .pipe(map((res: any) => res.Payload));
    }
}
