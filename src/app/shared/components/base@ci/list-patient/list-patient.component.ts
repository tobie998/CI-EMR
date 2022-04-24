import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BaseStatusComponent } from '../base-status/base-status.component';

@Component({
    selector: 'app-list-patient',
    templateUrl: './list-patient.component.html',
    styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnChanges {
    @Input() config;
    @Input() data;
    @Output() callback = new EventEmitter<any>();
    dataSub = [];
    constructor(
        private router: Router,
        private dialog: MatDialog,
    ) { }

    ngOnChanges() {
        this.data = this.data || [];
        if (this.config.splice) return this.dataSub = this.data.filter((x, ix) => ix < this.config.splice);
        return this.dataSub = this.data;
    }

    routerLinkRecent(item) {
        if (this.config.viewAll === true) {
            this.router.navigateByUrl(`pages/profile/detail/${item.PatientId}/problem-list`);
        }
        else {
            this.router.navigateByUrl(`/pages/result/result-list/${item.PatientId}`);
        }

    }

    routerLinkListPatient() {
        this.callback.emit(this.config.title);
    }
    checkStatus(patientId, status, item): void {
        const dialogRef = this.dialog.open(BaseStatusComponent, {
            width: '533px',
            height: '250px',
            data: {
              PatientId: patientId,
              Status: status,

            }


        });

        dialogRef.afterClosed().subscribe(result => {
            if (result.Save === true) {
              item.StatusString = result.Status;
            }
        });

    }
}

@NgModule({
    declarations: [
        ListPatientComponent,
    ],

    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        RouterModule,
        MatIconModule
    ],
    exports: [
        ListPatientComponent
    ]
})
export class ListPatientModule { }
