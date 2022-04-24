import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TranslateModule } from '@ngx-translate/core';
import { ListofvisitsService } from 'src/app/common/service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<DetailComponent>,
        private service: ListofvisitsService
    ) { }

    imgLink = '';
    check = this.data.check

    ngOnInit() {
      console.log(this.data);

      if (this.data.check === true) {
        this.service.detailImageListOfVisit(this.data.id).subscribe(res => {
          if (res) {
              this.imgLink = res;
          }
        })
      } else {
        this.service.detailImageNurse(this.data.id).subscribe(res => {
          if (res) {
              this.imgLink = res.MediaURL;
          }
        })
      }
    }

    closeDialog() {
        this.dialogRef.close();
    }

}
@NgModule({
    declarations: [
        DetailComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule
    ]
})
export class DetailListOfVisitModule { }
