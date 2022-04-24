import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from 'src/app/shared/services';

@Injectable({
    providedIn: 'root'
})
export class OrgansService extends BaseApiService<any> {

    constructor(
        public http: HttpClient
    ) {
        super(http, 'api/Organ')
    }
}
