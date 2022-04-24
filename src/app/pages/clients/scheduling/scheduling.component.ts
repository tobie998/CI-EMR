import { CommonModule } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { CalendarModule } from "@syncfusion/ej2-angular-calendars";
import {
    DayService,
    DragAndDropService,
    EventRenderedArgs, EventSettingsModel,
    GroupModel,
    ResizeService, ScheduleModule, TimelineMonthService, TimelineViewsService, View
} from "@syncfusion/ej2-angular-schedule";
import { PatientService, ProviderService, SchedulingService } from "src/app/common/service";
import { FormatDateService } from "src/app/shared/services";

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [
        DayService,
        TimelineViewsService,
        TimelineMonthService,
        ResizeService,
        DragAndDropService,
    ],
    selector: "app-scheduling",
    templateUrl: "./scheduling.component.html",
    styleUrls: ["./scheduling.component.scss"],
})

export class SchedulingComponent {
    Dr: string;
    Ton: String;
    patientId: number;
    problemId: number;
    model: any;
    public selectedDate: Date = new Date();
    public rowAutoHeight: boolean = true;
    public scheduleViews: View[] = ['TimelineDay'];
    public currentView: View = 'TimelineDay';
    public group: GroupModel = {
        enableCompactView: false,
        resources: ['MeetingRoom']
    };
    public allowMultiple: Boolean = true;
    data: Object[] = [];
    eventSettings: EventSettingsModel = {
        dataSource: this.data,
    };
    public dateValue: Date = new Date();
    resourceDataSource: Object[];
    listProvider: Object[];
    fromDate: string;
    fromTime = '06:00';
    toTime = '18:00';
    providerId: number;
    listEventDate: any = [];
    note: string;
    dateTime: string;
    constructor(
        private patientService: PatientService,
        private schedulingService: SchedulingService,
        private route: ActivatedRoute,
        private router: Router,
        private formatDateService: FormatDateService,
        private providerService: ProviderService
    ) { }

    ngOnInit(): void {
        this.patientId = +this.route.snapshot.params.patientId;
        this.problemId = +this.route.snapshot.params.problemId;
        const today = new Date();
        this.fromDate = this.formatDateService.formatDate(today, 'yyyy-MM-DD');
        this.getDetailPatient(this.patientId);
        this.getProvider();
    }

    changeDate(date) {
        this.selectedDate = new Date(date);
        this.dateValue = new Date(date);
    }

    changeFromTime(time) {
        this.fromTime = time;
    }
    changeToTime(time) {
        this.toTime = time;
    }

    onClick(event) {
        this.selectedDate = new Date(event);
        this.fromDate = this.formatDateService.formatDate(this.selectedDate, 'yyyy-MM-DD');
    }

    onPopupOpen(args) {
        args.cancel = true;
    }

    getDetailPatient(patientId) {
        this.patientService.detailPatient(patientId).then((res: any) => {
            this.model = res;
            this.note = this.model.FirstName + " " + this.model.LastName;
        });
    }

    getProvider() {
        this.providerService.listProvider(1).subscribe(res => {
            this.listProvider = res;
            const data = res.map(x => {
                return {
                    text: x.FirstName + " " + x.LastName || "",
                    id: x.ProviderId,
                    color: "#98AFC7"
                }
            });
            this.resourceDataSource = data;
            const listProvider = data.map(x => {
              return x.id
            })
            this.listCalenderProvider(listProvider);

        });
    }

    listCalenderProvider(listProvider: number[]) {
        this.schedulingService.listCalenderProviderDate('').subscribe(res => {
            res.forEach(x => {
                const providerId: number = x.ProviderId
                if (listProvider.includes(providerId)) {
                  x.ListSchedules.forEach(i => {
                    i.ProviderFullName = x.ProviderFullName;
                    i.ProviderId = x.ProviderId;
                    this.listEventDate.push(i);
                });
                }
            });
            const listData = this.listEventDate.map(i => {
                if (i.Type === 1) {
                    return {
                        Id: i.ScheduleId,
                        Subject: i.PatientFullName,
                        Description: i.Notes,
                        StartTime: i.FromDate,
                        EndTime: i.ToDate,
                        CategoryColor: '#BCD6BF',
                        RoomId: i.ProviderId
                    }
                }
                if (i.Type !== 1) {
                    return {
                        Id: i.ScheduleId,
                        Subject: i.PatientFullName,
                        Description: i.Notes,
                        StartTime: i.FromDate,
                        EndTime: i.ToDate,
                        CategoryColor: '#E1BF7B',
                        RoomId: i.ProviderId
                    }
                }
            });
            this.data = listData;
            this.eventSettings = { dataSource: listData };
        });
    }

    book() {
        let data = {
            PatientId: this.patientId,
            FromDate: this.fromDate + "T" + this.fromTime,
            ToDate: this.fromDate + "T" + this.toTime,
            Notes: this.note,
            Providers: [+this.providerId],
            ProblemId: this.problemId ?? this.patientId,
            ReasonList: [
                {
                    Name: this.note,
                    Description: ""
                }
            ]
        }
        this.schedulingService.create(data).subscribe(res => {
            this.listEventDate.splice(0);
            // this.listCalenderProvider();
            const check = localStorage.getItem('FollowUpBook');
            if (check) {
                localStorage.removeItem('FollowUpBook');
                this.router.navigateByUrl(`/pages/profile/detail/${this.patientId}/plan?tab=3`);
            } else {
                this.router.navigateByUrl('/pages/home');
            }
        });
    }

    back() {
        window.history.back();
    }

    oneventRendered(args: EventRenderedArgs): void {
        let categoryColor: string = args.data.CategoryColor as string;
        if (!args.element || !categoryColor) {
            return;
        }
        if (this.currentView === 'Agenda') {
            (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
        } else {
            args.element.style.backgroundColor = categoryColor;
        }
    }

}

@NgModule({
    declarations: [
        SchedulingComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        ScheduleModule,
        CalendarModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SchedulingModule { }
