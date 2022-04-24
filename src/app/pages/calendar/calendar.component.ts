import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import {
    DayService,
    DragAndDropService, EventRenderedArgs, EventSettingsModel,
    MonthService,
    PopupOpenEventArgs, ResizeService, View,
    WeekService,
    WorkWeekService
} from "@syncfusion/ej2-angular-schedule";
import { cloneDeep } from "lodash";
import { CalendarService } from "src/app/common/service";
import { FormatDateService } from "src/app/shared/services";
import { isNullOrUndefined } from "util";
import { CreateCalendarComponent } from "./dialog/create-calendar/create-calendar.component";
import { DetailEventComponent } from './dialog/detail-event/detail-event.component';
@Component({
    providers: [
        DayService,
        WeekService,
        WorkWeekService,
        MonthService,
        ResizeService,
        DragAndDropService,
    ],
    selector: "app-calendar",
    templateUrl: "./calendar.component.html",
    styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit {

    public rowAutoHeight: boolean = true;
    public scheduleViews: View[] = ['TimelineDay'];
    public currentView: View = 'TimelineDay';
    dataSchedule = [];
    eventSettings: EventSettingsModel = { dataSource: this.dataSchedule };
    listCalenderProvider: any = [];
    selectedDate: Date;
    check = false;
    readonly: boolean = true;
    providerId: number;
    showMonth = false;
    scheduleType = [];
    constructor(
        public dialog: MatDialog,
        public calenderService: CalendarService,
        public formatDateService: FormatDateService
    ) { }

    ngOnInit() {
        this.providerId = +JSON.parse(localStorage.getItem('access_token')).ProviderId;
        this.getCalenderProvider();
        this.selectedDate = new Date();
        this.getScheduleType();
    }

    groupByKey(data) {
      if (data.length === 0) {
        return [];
      }
      const list = [];
      let temp = [];
      let tempIndex = data[0];
      data.forEach(element => {
        if (element.ScheduleId === tempIndex.ScheduleId) {
          temp.push(element);
        } else {
          list.push(cloneDeep(temp));
          temp = [];
          tempIndex = element;
          temp.push(tempIndex);
        }
      });
      list.push(cloneDeep(temp));
      return list;
    }

    getCalenderProvider() {
        this.calenderService.listCalenderByDateOfProvider('').subscribe(res => {
            this.listCalenderProvider = res;
            this.dataSchedule = this.listCalenderProvider.map(i => {
                if ( i && i.Type === 1) {
                    return {
                        Id: i.ScheduleId,
                        Subject: i.PatientFullName +' - '+
                          this.formatDateService.formatDate(i.FromDate, "hh:mm") +' - '+
                          this.formatDateService.formatDate(i.ToDate, "hh:mm"),
                        Description: i.Notes,
                        StartTime: i.FromDate,
                        EndTime: i.ToDate,
                        CategoryColor: '#BCD6BF',
                        PatientId: i.PatientId
                    }
                }
                if (i && i.Type !== 1) {
                    return {
                        Id: i.ScheduleId,
                        Subject: i.PatientFullName +' - '+
                          this.formatDateService.formatDate(i.FromDate, "hh:mm") +' - '+
                          this.formatDateService.formatDate(i.ToDate, "hh:mm"),
                        Description: i.Notes,
                        StartTime: i.FromDate,
                        EndTime: i.ToDate,
                        CategoryColor: '#E1BF7B',
                        PatientId: i.PatientId
                    }
                }
            });
            this.eventSettings = { dataSource: this.dataSchedule };
            console.log(this.dataSchedule);

        });
    }

    clickToday() {
        this.selectedDate = new Date();
        this.scheduleViews = ['TimelineDay'];
        this.currentView = 'TimelineDay';
        this.check = true;
    }

    backDate() {
        if (this.currentView !== 'Week') {
            this.selectedDate = new Date(this.selectedDate.getTime() - (86400 * 1000));
        } else {
            this.selectedDate = new Date(this.selectedDate.getTime() - (7 * 86400 * 1000));
            this.checkClickCellWeek();
        }
    }
    nextDate() {
        if (this.currentView !== 'Week') {
            this.selectedDate = new Date(this.selectedDate.getTime() + (86400 * 1000));
        } else {
            this.selectedDate = new Date(this.selectedDate.getTime() + (7 * 86400 * 1000));
            this.checkClickCellWeek();
        }

    }
    backMonth() {
      this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
      let stringDate = this.selectedDate.toString();
      // refesh  date when using setMonth
      this.selectedDate = new Date(stringDate);
      this.checkClickCellMonth();
    }
    nextMonth() {
      this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);
      let stringDate = this.selectedDate.toString();
      // refesh  date when using setMonth
      this.selectedDate = new Date(stringDate);
      this.checkClickCellMonth();
    }

    onNavigating(event): void {
      if (this.check === false) {
        this.selectedDate = event.currentDate;

      } else {
        this.check = false;
      }
    }
    getScheduleType() {
      this.calenderService.getScheduletype().subscribe(res => {
        this.scheduleType = res;
      });
    }

    openDetailDialog(schedule) {
      console.log(this.listCalenderProvider);
      
        const dialogRef = this.dialog.open(DetailEventComponent, {
          panelClass: "dialog-60-97", disableClose: true,
          data: {
            calenderDeail: this.listCalenderProvider.find(x => x.ScheduleId === schedule.Id),
            scheduleType: this.scheduleType,
            PatientId: schedule.PatientId
          }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getCalenderProvider();
            if (this.currentView === 'Month') {
              this.checkClickCellMonth();
            } else if (this.currentView === 'Week') {
              this.checkClickCellWeek();
            }
        });
    }
    backToMonth() {
        this.scheduleViews = ['Month'];
        this.currentView = 'Month';
        this.check = true;
        this.checkClickCellMonth();
    }
    backToWeek() {
      this.scheduleViews = ['Week'];
      this.currentView = 'Week';
      this.check = true;
      this.checkClickCellWeek();
    }
    checkClickCellWeek() {
      this.showMonth = false;
      setTimeout(() => {
        var rows = document.getElementsByClassName("e-work-cells");
        let herf = this
        for(var i = 0; i < rows.length; i++)
        {
            var currentRow : HTMLElement = rows[i] as HTMLElement;
            var createClickHandler = function(currentRow) {
              return function() {
                herf.selectedDate = new Date(+currentRow.getAttribute("data-date"));
                if (herf.showMonth === true) {
                  herf.showMonth = false;
                } else {
                  herf.scheduleViews = ['TimelineDay'];
                  herf.currentView = 'TimelineDay';
                  herf.check = true;
                }
              };
            };
            currentRow.onclick = createClickHandler(currentRow);
        }
      }, 500);
    }
    checkClickCellMonth() {
      this.showMonth = false;
      setTimeout(() => {
        var rows = document.getElementsByClassName("e-work-cells");
        let herf = this
        for(var i = 0; i < rows.length; i++)
        {
            var currentRow : HTMLElement = rows[i] as HTMLElement;
            var createClickHandler = function(currentRow) {
              return function() {
                herf.selectedDate = new Date(+currentRow.getAttribute("data-date"));
                herf.scheduleViews = ['TimelineDay'];
                herf.currentView = 'TimelineDay';
                herf.check = true;
              };
            };
            currentRow.onclick = createClickHandler(currentRow);
        }
      }, 500);
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(CreateCalendarComponent, {
            panelClass: "dialog-60-97", disableClose: true, data: this.scheduleType
        });

        dialogRef.afterClosed().subscribe(result => {
            this.getCalenderProvider();
        });
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

    onPopupOpen(args: PopupOpenEventArgs): void {
        this.showMonth = true;
        this.openDetailDialog(args.data);
        args.cancel = true;
    }

}
