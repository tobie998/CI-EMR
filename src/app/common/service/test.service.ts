import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services/base.service';
import { TestModel } from "../model/test.model";

@Injectable({
    providedIn: 'root'
})
export class TestService extends BaseApiService<any> {

    constructor(
        public http: HttpClient
    ) {
        super(http, 'api/PatientTestResult');
    }
}
