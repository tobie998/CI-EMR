import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { UserModule } from "src/app/shared/components/user/user.component";
import { NotificationsService } from "../services/notifications.service";

@Component({
    selector: "app-notification-list",
    templateUrl: "./notification-list.component.html",
    styleUrls: ["./notification-list.component.scss"],
})
export class NotificationListComponent implements OnInit {
    constructor(
        public service: NotificationsService
    ) { }

    listnoti: any;
    ngOnInit() {
        this.service.getAllNotifications().subscribe((res) => {
            this.listnoti = res;
        });
    }
}
@NgModule({
    declarations: [NotificationListComponent],
    imports: [
        UserModule,
        TranslateModule,
        CommonModule
    ]
})
export class NotificationListModule { }