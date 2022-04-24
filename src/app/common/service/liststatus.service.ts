import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root",

})

export class ListStatusService {

    constructor(private http: HttpClient) { }
    getListStatus() {
          return this.http.get
          (`api/codevalue?TableName=Patients&ColumnName=Status&NumericKey=null`)
          .pipe(map((res : any) => res.Payload));

    }

    updateStatus(patientID,NumericKey){
      return this.http.put(`api/Patient/${patientID}`,NumericKey)
    }
}
