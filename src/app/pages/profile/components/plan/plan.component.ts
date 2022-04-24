import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { OrgansService, PatientService, ProblemService, TestCategoryService } from 'src/app/common/service';
import { AlertService } from 'src/app/shared/services';
import { DataService } from './data.service';
import { PlanHighBloodPressureModule } from './detail/plan-high-blood-pressure.component';
@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html',
    styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
    listProblem: any = [];
    isLoading = false;
    idPatent: number;

    constructor(
        private problemService: ProblemService,
        private route: ActivatedRoute,
        private organService: OrgansService,
        private dataService: DataService,
        private testCategoryService: TestCategoryService,
        private alertService: AlertService,
        private patientService: PatientService
    ) { }

    ngOnInit() {
        try {
            this.openLoading();
            this.idPatent = this.route.snapshot.params.patientId;
            this.patientService.detailPatient(this.idPatent).then((res: any) => {
                this.problemService.listProblemByVisitTo(res.VisitId).subscribe((respone: any) => {
                    if (respone.Ok) {
                        this.listProblem = respone.Payload;
                    } else {
                        this.alertService.changeMessage({
                            color: 'red',
                            text: `An error occurred.Please try again later.!`
                        });
                    }
                    this.problemService.listOldProblem(this.idPatent).subscribe(res => {
                        this.listProblem = this.listProblem.concat(res.filter(x => x.Type == 2));
                    });
                });
                // let respone = await this.problemService.listProblemByVisitToPromise(res.Payload.VisitId);
                
            })
            
            // this.organService.list().subscribe(res => {
            //     this.dataService.changeListOrgans(res);
            // })
            // respone = await this.testCategoryService.listTestCategories(0);
            // const listTestCategory = respone.Payload;
            // this.dataService.changeListTestCategory(listTestCategory);
        } catch (ex) {
        } finally {
            this.closeLoading();
        }
    }

    openLoading() {
        this.isLoading = true;
        var element = document.getElementById("loading-page");
        element.classList.remove("c-loading--hidden");
    }

    closeLoading() {
        this.isLoading = false;
        var element = document.getElementById("loading-page");
        element.classList.add("c-loading--hidden");
    }
}
@NgModule({
    declarations: [
        PlanComponent,
    ],
    imports: [
        MatTabsModule,
        PlanHighBloodPressureModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        PlanComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class PlanModule { }
