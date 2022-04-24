import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import {
    AgendaService, DayService,
    MonthAgendaService, MonthService, ScheduleModule,
    TimelineMonthService, TimelineViewsService, WeekService,
    WorkWeekService
} from "@syncfusion/ej2-angular-schedule";
import { UserModule } from "src/app/shared/components/user/user.component";
import { CalendarComponent } from "./calendar.component";

const routes: Routes = [
    {
        path: '',
        component: CalendarComponent
    },

];
@NgModule({
    declarations: [
        CalendarComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ScheduleModule,
        FormsModule,
        RouterModule.forChild(routes),
        UserModule,
        MatIconModule
    ],
    providers: [
        TimelineViewsService,
        DayService,
        WeekService,
        MonthService,
        WorkWeekService,
        MonthService,

        AgendaService,
        MonthAgendaService,
        TimelineViewsService,
        TimelineMonthService,
    ],
    exports: [RouterModule]
})
export class CalendarModule { }
