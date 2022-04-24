import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from 'src/app/shared/services';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseApiService<any>{

  constructor(public http: HttpClient) {super(http, 'api/company') }
  getDetailConpany() {
    return this.http.get(`${this.actionUrl}/username`).pipe(map((res: any) => res.Payload));
}
}
