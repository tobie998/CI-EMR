import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}

@NgModule({
    declarations: [
        ForgotPasswordComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [ForgotPasswordComponent]
})
export class ForgotPasswordModule { }
