import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestService } from 'src/app/common/service';
import { AlertService } from 'src/app/shared/services';

@Component({
    selector: 'app-view-test',
    templateUrl: './view-test.component.html',
    styleUrls: ['./view-test.component.scss']
})
export class ViewTestComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<ViewTestComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialog,
        private testService: TestService,
        private alertService: AlertService
    ) { }
    listMedias: any;

    ngOnInit(): void {
        this.listMedias = this.data.patientTestResultMedias;
        this.updateTest();
    }
    updateTest() {
        let model = {
            "Status": 2
        }
        this.testService.update(model, this.data.PatientTestResultId).subscribe(res => {
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        })
    }
}
;