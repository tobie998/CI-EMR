import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { AlertService } from 'src/app/shared/services';
import { LoginService } from '../../services/sign-in.service';
import { CompanyService } from 'src/app/common/service/company.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

    constructor(
        private alertService: AlertService,
        private loginService: LoginService,
        private companyService: CompanyService,
        private router: Router
    ) { }

    error: any;
    isLoading = false;
    model: any = {};

    login(): void {
        this.isLoading = true;
        this.loginService.login(this.model.userName, this.model.pwd).subscribe((data: any) => {
            if (data.Role !== 'Admin') {
                localStorage.setItem('token', data.access_token);

                this.loginService.checkToken(data.access_token).subscribe(res => {
                    data.PositionId = res.PositionId;
                    data.Position = res.Position;
                    data.Role = res.Position;
                    localStorage.setItem('access_token', JSON.stringify(data));
                    this.companyService.getDetailConpany().subscribe(res =>  {
                      localStorage.setItem('company', JSON.stringify(res));
                      setTimeout(() => this.router.navigateByUrl('/pages/home'), 300);
                    });
                });

                localStorage.setItem('translate', 'en');
                // this.alertService.changeMessage({
                //     color: 'green',
                //     text: `Welcome!`
                // });
            } else {
              this.error = 'Không có quyền vào!'
            }

        }, (err) => {
            this.error = err;
            // this.alertService.changeMessage({
            //     color: 'red',
            //     text: `Có lỗi xảy ra vui lòng thử lại sau!`
            // });
            this.isLoading = false;
        }, () => {
            this.isLoading = false;
        });
    }
}

@NgModule({
    declarations: [
        SignInComponent,
    ],
    imports: [
        CommonModule,
        MatCheckboxModule,
        FormsModule,
        RouterModule
    ],
    exports: [SignInComponent]
})
export class SignInModule { }
