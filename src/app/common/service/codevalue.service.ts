import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CodevalueService {

    constructor(public http: HttpClient) { }

    listCodeValue() {
        return this.http.get(`api/codevalue?TableName=Patients&ColumnName=Status&NumericKey=0`).pipe(map((res: any) => res.Payload));
    }
    listInfoSource() {
        return this.http.get(`api/codevalue?TableName=Demographics&ColumnName=InfoSource&NumericKey=0`).pipe(map((res: any) => res.Payload));
    }
}
