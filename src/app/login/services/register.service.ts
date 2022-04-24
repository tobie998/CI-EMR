import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/register.model';

@Injectable({
    providedIn: "root",
})
export class AccountRegisterService {
    constructor(
        public http: HttpClient
    ) { }

    createAccount(data): Observable<RegisterModel> {
        return this.http.post<RegisterModel>(`api/account/register`, data);
    }
}
