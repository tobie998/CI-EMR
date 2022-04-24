import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        try {
            const token = localStorage.getItem('token');
            const access_token = JSON.parse(localStorage.getItem('access_token'));
            if (!token) {
                this.router.navigate(['login']);
                return false;
            }
            if (new Date().getTime() >=
                new Date(access_token['.expires']).getTime()
            ) {
                alert('phiên đăng nhập đã hết hạn');
                localStorage.clear();
                this.router.navigate(['login']);
                return false;
            }

            return true;
        } catch (ex) {
            this.router.navigate(['login']);
            return false;
        }
    }
}
