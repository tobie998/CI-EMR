import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

    constructor(
        private alertService: AlertService
    ) { }

    notification: any;

    ngOnInit(): void {
        this.alertService.currentMessage.subscribe(noti => {
            this.notification = noti;
            if (this.notification !== null && this.notification.text && document.getElementById('notification')) {
                document.getElementById('notification').style.animation = 'notiShow 5s 1';
                setTimeout(() => {
                    document.getElementById('notification').style.animation = 'none';
                }, 5000);
            }

        });
        // noti.unsubscribe();
    }

    // showNoti(){
    //   document.getElementById('notification').style.animation = 'notiShow 3s 1';
    //   setTimeout(() => {
    //     document.getElementById('notification').style.animation = 'none';
    //   }, 3000);
    // }

    hiddenNoti() {
        document.getElementById('notification').style.animation = 'none';
    }

}
