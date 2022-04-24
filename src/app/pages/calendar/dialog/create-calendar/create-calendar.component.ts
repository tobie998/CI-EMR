import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarService } from 'src/app/common/service';
import { AlertService, FormatDateService } from 'src/app/shared/services';
import { AddPeopleComponent } from '../add-people/add-people.component';

@Component({
  selector: 'app-create-calendar',
  templateUrl: './create-calendar.component.html',
  styleUrls: ['./create-calendar.component.scss']
})
export class CreateCalendarComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<CreateCalendarComponent>,
    private calenderService: CalendarService,
    private dialog: MatDialog,
    private formatDateService: FormatDateService,
    // private alertService: AlertService
  ) { }
  scheduleType = [];
  model: any = {};
  ItemPatient: any = {};
  listItemProvider = [];

  ngOnInit() {
    this.model.Type = 1;
    this.scheduleType = this.data;
    this.model.Date = this.formatDateService.formatDate(new Date(), "yyyy-MM-DD");
    this.model.fromTime = "08:00";
    this.model.toTime = "10:00"
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddPeopleComponent, {
      panelClass: "dialog-97-97", disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ItemPatient = result.Patient;
        this.listItemProvider = result.ListDoctor;
      }
    });
  }

  createCalender() {
    if (!this.ItemPatient || !this.listItemProvider.length) {

      // this.alertService.changeMessage({
      //   color: 'red',
      //   text: `Select the patient and physician involved!`
      // });
    } else {
      this.model.PatientId = this.ItemPatient.PatientId;
      this.model.FromDate = this.model.Date + "T" + this.model.fromTime;
      this.model.ToDate = this.model.Date + "T" + this.model.toTime;
      this.model.Providers = this.listItemProvider.map(x => { return x.ProviderId });
      this.calenderService.createCalender(this.model).subscribe(res => { });
      this.dialogRef.close();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}

@NgModule({
  declarations: [
    CreateCalendarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
})
export class CreateCalendarModule { }
