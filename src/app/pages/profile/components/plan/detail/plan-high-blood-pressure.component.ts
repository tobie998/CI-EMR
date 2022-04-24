import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { ActivatedRoute } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FollowUpModule } from "./follow-up/follow-up.component";
import { HealthEducationModule } from "./health-education/health-education.component";
import { OrderTestsModule } from "./order-tests/order-tests.component";
import { PrescriptionModule } from "./prescription/prescription.component";
@Component({
    selector: "app-plan-high-blood-pressure",
    templateUrl: "./plan-high-blood-pressure.component.html",
    styleUrls: ["./plan-high-blood-pressure.component.scss"],
})
export class PlanHighBloodPressureComponent implements OnInit {
    @Input() data;
    @Input() selectedIndex: number | null

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() { }

    ngAfterViewInit() {
        setTimeout(() => this.checkActiveTab());
    }

    checkActiveTab() {
        this.activatedRoute.queryParamMap.subscribe(params => {
            this.selectedIndex = +params.get('tab');
        });
    }
}

@NgModule({
    declarations: [
        PlanHighBloodPressureComponent,
    ],
    imports: [
        MatTabsModule,
        CommonModule,
        FormsModule,
        PrescriptionModule,
        FollowUpModule,
        HealthEducationModule,
        OrderTestsModule,
        TranslateModule
    ],
    exports: [
        PlanHighBloodPressureComponent
    ]
})
export class PlanHighBloodPressureModule { }
