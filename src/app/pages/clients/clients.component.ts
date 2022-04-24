import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/common/service';
import { AlertService, FormatDateService, RouteService, TabMenuService, ViewAllClientService } from 'src/app/shared/services';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
    configOpenClients = {
        title: 'OPEN CLIENTS',
        class: 'outsideShadow',
        col: 'col-3',
        cssItem: 'content-list',
        splice: 4,
        viewAll: true
    }
    configRecent = {
        title: 'RECENT CLIENTS',
        class: 'outsideShadow',
        col: 'col-3',
        cssItem: 'content-list',
        splice: 4,
        viewAll: true
    }
    configSchedule = {
        title: 'SCHEDULE',
        class: 'outsideShadow',
        col: 'col-3',
        cssItem: 'content-list',
        splice: 4,
        viewAll: true
    }
    configPatientTested = {
        title: 'LAST RESULTS',
        class: 'outsideShadow',
        col: 'col-3',
        cssItem: 'content-list',
        splice: 4,
        viewAll: true
    }
    configLastResult: any = {
        // title: 'LAST RESULTS',
        class: 'outsideShadow',
        col: 'col-3',
        cssItem: 'content-list',
        splice: null,
        height: '75vh',
        viewAll: true
    }
    hideLastResults: boolean = true;
    listResultViewAll = [];
    patients: any = [];
    openClients: any;
    listRecent: any = [];
    listPatientScheduled: any = [];
    patientTested: any = [];
    keyword: string;
    keypress: any;
    patientsSub: any = [];
    isFromHome = false;
    constructor(
        private router: Router,
        private service: PatientService,
        private hideMenu: TabMenuService,
        private routeService: RouteService,
        private formatDate: FormatDateService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        const check = localStorage.getItem('backhome');
        if (check) {
          this.isFromHome = true;
          localStorage.removeItem('backhome');
        }
        const today = this.formatDate.formatDate(new Date(), 'YYYY-MM-DD');
        this.service.list().subscribe(res => {
            this.openClients = res.filter(x => x.VisitId !== 0);
            if (check === 'open') {
                this.showAllOpenClients()
            }

        });
        this.service.listPatientRecent().subscribe(res => {
            this.listRecent = res;
            if (check === 'recent') {
                this.showRecentClient()
            }

        });
        this.service.listPatientScheduled(today).subscribe(res => {
            this.listPatientScheduled = res;

        });
    }

    showAllOpenClients() {
        this.hideLastResults = !this.hideLastResults;
        this.configLastResult.title = this.configOpenClients.title;
        this.listResultViewAll = this.openClients;
    }

    showRecentClient() {
        this.hideLastResults = !this.hideLastResults;
        this.configLastResult.title = this.configRecent.title;
        this.listResultViewAll = this.listRecent;
    }

    showAllSchedule() {
        this.hideLastResults = !this.hideLastResults;
        this.configLastResult.title = this.configSchedule.title;
        this.listResultViewAll = this.listPatientScheduled;
    }

    showListTestOrder() {
        this.hideLastResults = !this.hideLastResults;
        this.configLastResult.title = this.configPatientTested.title;
        this.listResultViewAll = this.patientTested;


    }

    showViewAll = () => {
        if (this.isFromHome === true) {
          this.router.navigateByUrl(`pages/home`);
        } else {
          this.hideLastResults = !this.hideLastResults;
        }
    }

    searchPatient(keyWord) {
        this.keyword = keyWord;
        if (!keyWord) return this.patientsSub = [];
        clearTimeout(this.keypress);
        this.keypress = setTimeout(() => {
            this.service.searchPatient(keyWord).subscribe(res => {
                this.patientsSub = res;
            });
        }, 500);
    }

    routerLinkLocal = (patientId) => {
        this.routeService.routerLinkLocal(patientId);
    }

    createPatient() {
        this.router.navigateByUrl('/pages/clients/registration');
        this.hideMenu.sentHideMenuValue(true);
    }

    routerLink(patientId: number) {
        this.router.navigateByUrl(`pages/profile/detail/${patientId}/profile-info`);
    }

    deletePatient(patientId) {
        this.service.delete(patientId).subscribe(res => {
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        });
    }
}
