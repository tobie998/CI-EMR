import { Component, NgModule, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PatientService } from 'src/app/common/service';
import { BiopsyModule } from './biopsy/biopsy.component';
import { FunctionalTestsModule } from './functional-tests/functional-tests.component';
import { ImagingModule } from './imaging/imaging.component';
import { LabModule } from './lab/lab.component';

@Component({
    selector: 'app-tests',
    templateUrl: './tests.component.html',
    styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
    constructor(
        private patientService: PatientService,
        private route: ActivatedRoute
    ) { }

    modelPatient: any = {};

    ngOnInit() {
        const id = this.route.snapshot.params.patientId;
        this.patientService.detailPatient(id).then((res: any) => {
            this.modelPatient = res;
        })
    }
}
@NgModule({
    declarations: [TestsComponent],
    imports: [
        LabModule,
        MatTabsModule,
        TranslateModule,
        ImagingModule,
        FunctionalTestsModule,
        BiopsyModule
    ],
    exports: [TestsComponent]
})
export class TestsModule { }