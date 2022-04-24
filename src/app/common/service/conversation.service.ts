import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class ConversationService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, "api/conversation");
    }

    getAllConversation() {
        return this.http
            .get(`api/Conversation/All`)
            .pipe(map((res: any) => res.Payload));
    }

    detailConversationsGroup(id) {
        return this.http
            .get(`api/conversation/${id}`, this.httpOptions)
            .pipe(map((res: any) => res.Payload));
    }

    searchGroup(key) {
        return this.http
            .get(`${this.actionUrl}/search?keyword=${key}`, this.httpOptions)
            .pipe(map((res: any) => res.Payload));
    }

    createProviderGroup(data) {
        return this.http
            .post(`api/Conversation/PostProvider`, data, this.httpOptions)
            .pipe(map((res: any) => res));
    }

    createConversationsGroup(data) {
        return this.http
            .post(`api/conversation`, data, this.httpOptions)
            .pipe(map((res: any) => res));
    }

    createMessageConversations(data) {
        return this.http
            .post(`api/Conversation/PostMessage`, data, this.httpOptions)
            .pipe(map((res: any) => res));
    }
}