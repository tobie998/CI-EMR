import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import {
    AgendaService,
    DragAndDropService,
    EventRenderedArgs, EventSettingsModel,
    GroupModel,
    PopupOpenEventArgs, ResizeService, TimelineMonthService, TimelineViewsService, View
} from "@syncfusion/ej2-angular-schedule";
import { extend } from "@syncfusion/ej2-base";
import { CalendarService, ProviderService } from "src/app/common/service";
import { DetailEventComponent } from "src/app/pages/calendar/dialog/detail-event/detail-event.component";

@Component({
    selector: "app-timeline",
    templateUrl: "./timeline.component.html",
    styleUrls: ["./timeline.component.scss"],
    providers: [
        TimelineViewsService,
        TimelineMonthService,
        AgendaService,
        ResizeService,
        DragAndDropService,
    ],
})
export class TimelineComponent implements OnInit {
    public rowAutoHeight: boolean = true;
    public scheduleViews: View[] = ["TimelineDay"];
    public currentView: View = "TimelineDay";
    public group: GroupModel = {
        enableCompactView: false,
        resources: ["MeetingRoom"],
    };
    public selectedDate: Date = new Date();
    eventSettings: EventSettingsModel = {
        dataSource: <Object[]>extend([], [] , null, true),
    };
    scheduleType = [];
    providerId: any;
    calendarList: any;
    dataSchedule: any;
    readonly: boolean = true;

    constructor(
        private timelineService: ProviderService,
        public calenderService: CalendarService,
        public datepipe: DatePipe,
        public dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.providerId = +JSON.parse(localStorage.getItem('access_token')).ProviderId;
        this.getScheduleType();
        this.getTimelineHomeProvider();
    }
    getScheduleType() {
      this.calenderService.getScheduletype().subscribe(res => {
        this.scheduleType = res;
      });
    }
    getTimelineHomeProvider() {
        this.calenderService.listCalenderByDateOfProvider(this.datepipe.transform(new Date(), 'yyyy-MM-dd')).subscribe(res => {
            this.calendarList = res;
            this.dataSchedule = res.map(i => {
              if (i.Type === 1) {
                  return {
                      Id: i.ScheduleId,
                      Subject: i.PatientFullName,
                      Description: i.Notes,
                      StartTime: i.FromDate,
                      EndTime: i.ToDate,
                      CategoryColor: '#BCD6BF',
                      PatientId: i.PatientId
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
                      PatientId: i.PatientId
                  }
              }

          });
          this.eventSettings = { dataSource: this.dataSchedule };
        });
    }
    openDetailDialog(scheduleId) {
        const dialogRef = this.dialog.open(DetailEventComponent, {
            panelClass: "dialog-60-97", disableClose: true,
            data: {
              calenderDeail: this.calendarList.find(x => x.ScheduleId === scheduleId.Id),
              scheduleType: this.scheduleType,
              PatientId: scheduleId.PatientId
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.getTimelineHomeProvider();
        });
    }

    onPopupOpen(args: PopupOpenEventArgs): void {
        this.openDetailDialog(args.data);
        args.cancel = true;
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
