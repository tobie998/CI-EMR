import { Routes } from "@angular/router";
import { ResultHomeComponent } from "./components/result-home/result-home.component";
import { ResultListDetailComponent } from "./components/result-list-detail/result-list-detail.component";
import { ResultListComponent } from "./components/result-list/result-list.component";

export const resultRoutes: Routes = [
    {
        path: '',
        component: ResultHomeComponent
    },
    {
        path: 'result-list/:patientId',
        component: ResultListComponent
    },
    {
        path: 'result-list-detail',
        component: ResultListDetailComponent
    }
]