import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services';
import { RegisterModel } from '../../models/register.model';
import { AccountRegisterService } from '../../services/register.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    model = new RegisterModel();

    constructor(
        private accountRegisterService: AccountRegisterService,
        private router: Router,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.model.Type = 1;
    }

    registerAccount() {
        if (this.model.Password !== this.model.ConfirmPassword) return;
        this.accountRegisterService.createAccount(this.model).subscribe(res => {
            this.router.navigateByUrl('/login');
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        })
    }
}

@NgModule({
    declarations: [
        SignUpComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [SignUpComponent]
})
export class SignUpModule { }