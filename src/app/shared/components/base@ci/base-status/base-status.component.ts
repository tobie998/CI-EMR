import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StatusModel } from 'src/app/common/model/status.model';

import { ListStatusService } from 'src/app/common/service/liststatus.service';

@Component({
    selector: 'app-base-status',
    templateUrl: './base-status.component.html',
    styleUrls: ['./base-status.component.scss']
})
export class BaseStatusComponent implements OnInit {
    status: number;
    statusStr = '';
    statusModel : StatusModel;
    listStatus :any;




    constructor(
        public dialogRef: MatDialogRef<BaseStatusComponent>,
        private listStatusService : ListStatusService,
        @Inject(MAT_DIALOG_DATA) public data
    ) { }

    ngOnInit(): void {
        this.statusStr = this.data.Status;
        this.listStatusService.getListStatus().subscribe(
        (res) => {
          this.listStatus = res;
          if (this.listStatus && this.listStatus.length !== 0) {
            this.listStatus.forEach(status => {
                if (status.Value === this.statusStr) {
                  this.status = status.NumericKey;
                }
            });
          }
        }

      );

    }
    close(isSave: boolean): void {
        const req = {
          Status : this.statusStr,
          Save: isSave
        }
        this.dialogRef.close(req);
    }

    // truyen len NumericKey va PatientID
    save(): void {
      let statusModel = {
        Status : this.status,
      }
      this.listStatusService.updateStatus(this.data.PatientId,statusModel).subscribe(
        (res) =>  {
            this.close(true);

        }

      )

    }

    click(ev, value) {
        this.status = ev;
        this.statusStr = value;
    }



}
