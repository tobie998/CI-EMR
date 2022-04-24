import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { BaseApiService } from "src/app/shared/services";

@Injectable({
    providedIn: 'root'
})
export class SchedulingService extends BaseApiService<any> {

    constructor(public http: HttpClient) {
        super(http, 'api/schedule')
    }

    listCalenderProviderDate(date) {
        return this.http.get(`api/schedule/provider?Date=${date}`).pipe(map((res: any) => res.Payload));
    }

}
