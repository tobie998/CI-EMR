import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services';

@Injectable({
    providedIn: 'root'
})
export class FollowUpService extends BaseApiService<any>  {

    constructor(
        public http: HttpClient
    ) {
        super(http, 'api/FollowUp')
    }

    listFollowUp(visitId, problemId) {
        return this.http.get(`api/FollowUp?VisitId=${visitId}&ProblemId=${problemId}`).pipe(map((res: any) => res.Payload));
    }
}
