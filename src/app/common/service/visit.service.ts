import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services';

@Injectable({
    providedIn: 'root'
})
export class VisitService extends BaseApiService<any> {

    constructor(public http: HttpClient) {
        super(http, "api/visit");
    }

    finishVisit(visitId, model) {
        return this.http
            .put(`api/Visit/${visitId}`, model)
            .pipe(map((res: any) => res.Payload));
    }
}
