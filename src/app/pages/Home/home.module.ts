import { CommonModule } from "@angular/common";
import {
    CUSTOM_ELEMENTS_SCHEMA,
    NgModule,
    NO_ERRORS_SCHEMA
} from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { ButtonModule } from "@syncfusion/ej2-angular-buttons";
import {
    AgendaService,
    DayService,
    MonthAgendaService,
    MonthService,
    ScheduleModule,
    WeekService,
    WorkWeekService
} from "@syncfusion/ej2-angular-schedule";
import { ListPatientModule } from "src/app/shared/components/base@ci/list-patient/list-patient.component";
import { UserModule } from "src/app/shared/components/user/user.component";
import { HomeComponent } from "./components/home.component";
import { TimelineComponent } from "./components/timeline/timeline.component";
import { TodayComponent } from "./components/today/today.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    declarations: [
        HomeComponent,
        TodayComponent,
        TimelineComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ButtonsModule,
        ScheduleModule,
        ButtonModule,
        ListPatientModule,
        UserModule,
        TranslateModule
    ],
    providers: [
        DayService,
        WeekService,
        WorkWeekService,
        MonthService,
        AgendaService,
        MonthAgendaService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ],
})
export class HomeModule { }
