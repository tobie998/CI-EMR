import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { BaseApiService } from "src/app/shared/services/base.service";

@Injectable({
    providedIn: "root",
})
export class MessagesService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, "api/Message");
        const token = localStorage.getItem("token");
        this.httpOptions = {
            headers: new HttpHeaders({
                Authorization: "Bearer " + token,
            }),
        };
    }

    detailMessage(id: number) {
        return this.http.get(`api/Message/${id}`, this.httpOptions)
            .pipe(map((res: any) => res.Payload));;
    }

    createMessage(data) {
        return this.http.post(`api/Message`, data)
            .pipe(map((res: any) => res.Payload));
    }

    listConversations() {
        return this.http
            .get(`api/Message/conversations`, this.httpOptions)
            .pipe(map((res: any) => res.Payload));
    }

}
