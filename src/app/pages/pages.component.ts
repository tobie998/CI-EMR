import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { LocalStorageService } from '../common/service/localstorage.service';
import { PeerService } from '../common/service/peer.service';
import { SocketService } from '../common/service/socket.service';
import { TabMenuService } from '../shared/services/tabMenu.service';
import { CallModalComponent } from './message/components/call-modal/call-modal.component';
import * as uuid from 'uuid';
@Component({
    selector: 'app-pages',
    styleUrls: ['pages.component.scss'],
    template: `
    <div class="d-flex" >
        <div class="menuLeft"><app-menu-bar></app-menu-bar></div>
        <div class="main">
        <app-tab-row-menu *ngIf="checked" [patientId]="patientId"></app-tab-row-menu>
        <router-outlet></router-outlet>
        </div>
        <app-notifications></app-notifications>
    </div>
    `
})

export class PagesComponent implements OnInit {
    checked = false;
    patientId;
    timeFocus: Date;
    token = this.storage.getToken();
    selectedUser = 17;
    receiveUser;
    partnerId: string;
    uid: string;
    constructor(
        private router: Router,
        private tabService: TabMenuService,
        private peerService: PeerService,
        private socketService: SocketService,
        private storage: LocalStorageService,
        private dialog: MatDialog,
    ) {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            distinctUntilChanged(),
        ).subscribe((res: any) => {
            const data = res.url.split('/');
            this.tabService.changeMessage(data[4]);
            if (data.length > 3 && data.includes('detail') && data[4] != 'invoice') {
                const value = {
                    id: data[4],
                    href: data[5]
                }
                const listRoute = JSON.parse(localStorage.getItem('router'));
                if (!listRoute) {
                    let listRouteSub = [];
                    listRouteSub.push(value)
                    localStorage.setItem('router', JSON.stringify(listRouteSub));
                } else {
                    const index = listRoute.findIndex(x => x.id == value.id);
                    if (index > -1) {
                        listRoute[index] = value;
                        localStorage.setItem('router', JSON.stringify(listRoute));
                    } else {
                        listRoute.push(value);
                        localStorage.setItem('router', JSON.stringify(listRoute));
                    }
                }

                return this.checked = true,
                    this.patientId = data[4];
            }
            return this.checked = false;
        });
    }
    mouseDown() {
      this.timeFocus = new Date();
      console.log(this.timeFocus.getTime());
      setTimeout(() => {
        const dateNow = new Date();
        console.log(dateNow.getTime(), this.timeFocus.getTime() , dateNow.getTime() - this.timeFocus.getTime());
        if ((dateNow.getTime() - this.timeFocus.getTime() >= (5*60*1000))) {
          alert('phiên đăng nhập đã hết hạn');
          localStorage.clear();
          this.router.navigate(['login']);
        }
      }, 5*60 *1000 + 1000);


    }
    ngOnInit() {
        // this.mouseDown();
        this.socketService.connect();
        const user = JSON.parse(localStorage.getItem('access_token'));
        this.peerService.createAPeer(uuid.v4())
        this.socketService.messages$.subscribe((res) => {
            const result = JSON.parse(res);
            if (result && result.Type) {
              try {
                if (result.SenderUserprofileId) {
                    this.receiveUser = result.SenderUserprofileId;
                }
                this.partnerId = result.PeerId;
                if (result.Type == 4) {
                    // this.dialog.closeAll();
                    return this.peerService.disconnect();
                }
                  if (result.Type == 3 && this.partnerId &&  this.receiveUser !== +user?.UserprofileId) {
                    return this.openModal();

                }
            } catch (e) {
              console.log(e);

            }
            }

        });


        const data = window.location.href.split('/');
        if (data.length > 6 && data.includes('detail'))
            return this.checked = true,
                this.patientId = data[data.length - 2];
        return this.checked = false;
    }
    openModal(type?) {

         const myId = uuid.v4();
        // if (type == 'abc') {
        //     this.receiveUser = this.selectedUser;
        //     this.socketService.sendMessage({
        //         action: 'callRequest',
        //         recipientUserProfileId: this.selectedUser,
        //         createdOn: new Date().toISOString(),
        //         peerId: myId,
        //         type: 1,
        //     });
        // }

        let modal = this.dialog.open(CallModalComponent, {
            width: '100%',
            height: '100%',
            panelClass: 'custom-dialog-call',
            data: {
                partnerId: this.partnerId,
                userId: myId,
                receiveUid: this.receiveUser,
            },
        });
        modal.afterClosed().subscribe(() => {
            // this.peerService.disconnect();
        });
    }
}
