import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from '../../shared/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService extends BaseApiService<any>{
    constructor(public http: HttpClient) {
        super(http, 'api/patient')
    }

    listRelationship() {
        return this.http.get('api/codevalue?TableName=Patients&ColumnName=EmergencyRelationshipType&NumericKey=null').pipe(map((res: any) => res.Payload));
    }

    createPatient(data) {
        return this.http.post(this.actionUrl, data).pipe(map((res: any) => res.Payload));
    }
}
