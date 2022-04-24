import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    constructor(
        private http: HttpClient
    ) { }

    UploadFileReport(data) {
        return this.http.post(`api/VisitReport/ReportFile`, data)
            .pipe(map((res: any) => res.Payload));
    }
}
