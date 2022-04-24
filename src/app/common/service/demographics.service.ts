import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
@Injectable({
    providedIn: "root",
})
export class DemographicsService {
    constructor(public http: HttpClient) { }

    listRelationship() {
        return this.http
            .get(`api/codevalue?TableName=Patients&ColumnName=EmergencyRelationshipType&NumericKey=null`)
            .pipe(map((res: any) => res.Payload));
    }
}
