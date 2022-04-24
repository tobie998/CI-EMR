import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services';
@Injectable({
    providedIn: 'root'
})
export class ProviderService extends BaseApiService<any> {
    constructor(
        public http: HttpClient
    ) {
        super(http, 'api/provider')
    }

    detailProfileProvider() {
        return this.http.get('api/provider/username').pipe(map((result: any) => result.Payload));
    }

    listProvider(type) {
        return this.http.get(`api/Provider?type=${type}&ProviderId=`).pipe(map((res: any) => res.Payload));
    }

}
