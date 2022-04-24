import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UserModule } from 'src/app/shared/components/user/user.component';
import { DetailNotificationComponent } from './components/detail-notification/detail-notification.component';
import { NotificationRoutingModule } from './notification-routing.module';

@NgModule({
    declarations: [DetailNotificationComponent],
    imports: [
        CommonModule,
        NotificationRoutingModule,
        UserModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotificationModule { }
