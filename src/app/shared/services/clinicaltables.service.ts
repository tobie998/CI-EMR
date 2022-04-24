import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClinicaltablesService {
  private http: HttpClient;
  constructor(private handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }
  public searchDiagnosis(terms: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.http.post<any>(`${environment.API_CLINICALTABLES}/api/icd10cm/v3/search`,
      `sf=name&df=name&cf=name&terms=${terms}`,
      httpOptions);

  }
}
