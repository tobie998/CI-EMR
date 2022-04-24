import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailNotificationComponent } from "./components/detail-notification/detail-notification.component";
import { NotificationListComponent } from "./components/notification-list/notification-list.component";

const routes: Routes = [
    {
        path: "",
        component: NotificationListComponent,
    },
    {
        path: "notificationid",
        component: DetailNotificationComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NotificationRoutingModule { }
