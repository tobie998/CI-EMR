import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/interceptors/auth.guard';

const routes: Routes = [
    {
        path: 'pages',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/pages.module')
            .then(m => m.PagesModule)
    },

    {
        path: 'login',
        loadChildren: () => import('./login/login.module')
            .then(m => m.LoginModule)
    },

    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
