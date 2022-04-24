import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/common/service';
import { TabMenuService } from "../../services/tabMenu.service";
import { ViewAllClientService } from '../../services/viewAllClient.service';

@Component({
    selector: 'app-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.scss'],

})
export class MenuBarComponent implements OnInit {

    constructor(
        public data: TabMenuService,
        public viewClientService: ViewAllClientService,
        private patientService: PatientService,
        private router: Router
    ) { }

    showButton: boolean = false;
    isShow: boolean = false;
    patientId: number;
    hideMenu: boolean = false;
    showArrow: boolean;
    VisitId = 0;
    Role: string;
    isNursingReport = false;
    company: any;

    ngOnInit() {
        const user = JSON.parse(localStorage.getItem('access_token'));
        this.Role = user.Role;
        this.company = JSON.parse(localStorage.getItem('company'));
        this.data.currentMessage.subscribe(res => {
            this.data.hideMenuValue.subscribe(res => {
                this.hideMenu = res;
            });
            this.patientId = +res;
            if (!this.patientId) return this.isShow = false;
            this.patientService.detailPatient(res, true).then((res: any) => {
              if (res) {
                this.VisitId = res.VisitId;
                res.NurseVisitId = res.NurseVisitId || 0;
                if (this.Role === 'Doctor') {
                  this.isNursingReport = res.IsNursing
                }
                // this.isShow = res.VisitId != 0 || res.NurseVisitId != 0 ? true : false;
                // chưa xử lý với NurseVisitId
                this.isShow = res.VisitId != 0 ? true : false;
              }
            }, (err) => console.error(err))
        });
    }
    showNursingReport() {
      localStorage.setItem('haveReport', 'true');
    }
    clickClientMenu() {
        this.viewClientService.showClient(false);
        this.viewClientService.showOpenClientAll(true);
        this.viewClientService.showRecentClient(true);
    }

}
