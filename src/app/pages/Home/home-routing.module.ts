import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { NoteComponent } from './components/note/note.component';
import { ProfileDoctorComponent } from './components/profile-doctor/profile-doctor.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'doctor',
        component: ProfileDoctorComponent
    },
    {
        path: 'note',
        component: NoteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
