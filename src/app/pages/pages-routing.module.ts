import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./home/home.module')
                    .then(m => m.HomeModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./profile/profile.module')
                    .then(m => m.ProfileModule)
            },
            {
                path: 'clients',
                loadChildren: () => import('./clients/clients.module')
                    .then(m => m.ClientsModule)
            },
            {
                path: 'calendar',
                loadChildren: () => import('./calendar/calendar.module')
                    .then(m => m.CalendarModule)
            },
            {
                path: 'result',
                loadChildren: () => import('./result/result.module')
                    .then(m => m.ResultModule)
            },
            {
                path: 'notifications',
                loadChildren: () => import('./notification/notification.module')
                    .then(m => m.NotificationModule)
            },
            {
                path: 'message',
                loadChildren: () => import('./message/message.module')
                    .then(m => m.MessageModule)
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
