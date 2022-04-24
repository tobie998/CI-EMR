import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarService, PatientService, ProviderService } from 'src/app/common/service';
import { AlertService } from 'src/app/shared/services';
import { AddPeopleComponent } from '../add-people/add-people.component';
@Component({
    selector: 'app-detail-event',
    templateUrl: './detail-event.component.html',
    styleUrls: ['./detail-event.component.scss']
})
export class DetailEventComponent implements OnInit {
    fromDate: string;
    toDate: string;
    fromTime: string;
    toTime: string;
    providerId: number;
    ItemPatient: any = {};
    listItemProvider = [];
    scheduleType = [];
    model: any = {};
    currentProvider: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<DetailEventComponent>,
        private calenderService: CalendarService,
        private router: Router,
        private dialog: MatDialog,
        private alertService: AlertService,
        private patientService: PatientService,
        private providerService: ProviderService
    ) { }

    ngOnInit() {
        this.model = this.data.calenderDeail;
        this.scheduleType = this.data.scheduleType;
        this.fromDate = this.model.FromDate.split('T')[0];
        this.fromTime = this.model.FromDate.split('T')[1];
        this.toTime = this.model.ToDate.split('T')[1];
        this.providerId = +JSON.parse(localStorage.getItem('access_token')).ProviderId;
        this.listItemProvider = this.model.ListProviders
        this.patientService.detailPatient(this.data.PatientId).then((res: any) => {
          if (res) {
            this.ItemPatient = res;
          }
        });
    }

    updateEvent() {
        this.model.FromDate = this.fromDate + "T" + this.fromTime;
        this.model.ToDate = this.fromDate + "T" + this.toTime;
        this.model.Providers = this.listItemProvider.map(x => {
          return +x.ProviderId
        });
        this.calenderService.updateSchedule(this.model.ScheduleId, this.model).subscribe(res => {
            this.dialogRef.close();
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        });
    }
    deleteItem(i) {
      this.listItemProvider.splice(i, 1);
    }
    openDialog() {
      console.log(this.listItemProvider);
      const dialogRef = this.dialog.open(AddPeopleComponent, {
        panelClass: "dialog-97-97", disableClose: true,
        data: {
          listItemProvider: this.listItemProvider,
          ItemPatient: this.ItemPatient,
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        // this.listItemProvider
        if (result) {
          this.ItemPatient = result.Patient;
          this.listItemProvider = result.ListDoctor.map(x => {
            return {
              ProviderId: x.ProviderId,
              ProviderFullName: x.FirstName + ' ' + x.LastName,
              ProviderMediaURL: x.MediaURL
            }
          });
        }

        // this.ItemPatient = result.Patient;
        // this.listItemProvider = result.ListDoctor;
      });
    }
    onClickDeleteSchedule = () => {
        this.calenderService.deleteSchedule(this.model.ScheduleId).subscribe(res => {
            this.dialogRef.close();
        })
    }

    closeDialog() {
        this.dialogRef.close();
    }

    clickRouter(patientId) {
        this.router.navigateByUrl(`pages/profile/detail/${patientId}/problem-list`);
        this.dialogRef.close();
    }

}

@NgModule({
    declarations: [
        DetailEventComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule
    ],
    providers: [],
})
export class DetailEventCalenderModule { }
