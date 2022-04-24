import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PatientService } from 'src/app/common/service';
import { FormatDateService, TabMenuService } from 'src/app/shared/services';

@Component({
    selector: 'app-reason-for-booking',
    templateUrl: './reason-for-booking.component.html',
    styleUrls: ['./reason-for-booking.component.scss']
})
export class ReasonForBookingComponent implements OnInit {
    age: number;

    constructor(
        private activatedRoute: ActivatedRoute,
        private patientService: PatientService,
        private router: Router,
        public hideMenu: TabMenuService,
        private dateService: FormatDateService
    ) { }

    patientId: number;
    model: any = {};
    name: string;
    listName: any = [];

    ngOnInit(): void {
        this.patientId = this.activatedRoute.snapshot.params.patientId;
        this.hideMenu.sentHideMenuValue(true);
        this.patientService.detailPatient(this.patientId).then((res: any) => {
            this.model = res;
            this.getAge(this.model.DOB);
        });
    }

    back() {
        this.router.navigateByUrl(`/pages/clients`);
        this.hideMenu.sentHideMenuValue(false);
    }

    createNewProblem() {
        const name = {
            Name: this.name
        }
        this.listName.push(name);
        this.name = "";
    }

    getAge(dateString) {
        const yearNew = +this.dateService.formatDate(new Date(), 'YYYY');
        const DOBYear = +this.dateService.formatDate(dateString, 'YYYY')
        this.model.age = yearNew - DOBYear;
    }
}
@NgModule({
    declarations: [
        ReasonForBookingComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        TranslateModule
    ]
})
export class ReasonForBookingModule { }