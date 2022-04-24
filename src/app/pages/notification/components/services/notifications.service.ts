import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { BaseApiService } from "../../../../shared/services/base.service";

@Injectable({
    providedIn: "root",
})
export class NotificationsService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, "api/notification ");
    }
    getAllNotifications() {
        return this.http
            .get("api/notification")
            .pipe(map((res: any) => res.Payload));
    }
    getNotificationDetails(notificationid: number) {
        return this.http
            .get(`api/notification?notificationid=${notificationid}`)
            .pipe(map((res: any) => res.Payload));
    }
}
