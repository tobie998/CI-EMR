import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TabMenuService } from './tabMenu.service';

@Injectable({
    providedIn: 'root'
})
export class RouteService {

    constructor(
        private router: Router,
        private menuService: TabMenuService
    ) { }

    routerLinkLocal = (patientId) => {
        const listRoute = JSON.parse(localStorage.getItem('router'));
        if (!listRoute) {
            const href = 'pages/profile/detail/' + patientId + '/profile-info';
            this.router.navigateByUrl(href);
            return;
        }
        const value = listRoute.find(x => x.id == patientId);
        if (value) {
            const href = 'pages/profile/detail/' + value.id + '/' + value.href;
            this.router.navigateByUrl(href);
            if (
                value.href == 'plan'
                || value.href == 'history'
                || value.href == 'exam'
                || value.href == 'diagnosis'
                || value.href == 'report'
                || value.href == 'invoice'
            ) {
                this.menuService.changeMessage(true);
                this.menuService.changeMessage(value.id);
            }
        } else {
            const href = 'pages/profile/detail/' + patientId + '/profile-info';
            this.router.navigateByUrl(href);
        }
        this.menuService.showSmallMenu(false);
    }
}
