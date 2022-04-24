import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './routerLogin';

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes),
    ],
    exports: [RouterModule]
})
export class LoginModule { }
