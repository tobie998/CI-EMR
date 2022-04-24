import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoaderService } from 'src/app/shared/services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { HistoryService } from 'src/app/common/service';
import { cloneDeep } from 'lodash';
@Component({
  selector: 'app-review-system',
  templateUrl: './review-system.component.html',
  styleUrls: ['./review-system.component.scss']
})
export class ReviewSystemComponent implements OnInit {

  constructor(
    private loadService: LoaderService,
    private dialog: MatDialog,
    private historyService: HistoryService,
    public dialogRef: MatDialogRef<ReviewSystemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  // listDescriptor: any = [];
  dataUpdate = [];
  model: any = {};
  listOrgan: any = [];
  ngOnInit() {
    this.listOrgan = cloneDeep(this.data.ListOrgan);
    this.reSizeMenu();
  }
  reSizeMenu() {
    setTimeout(() => {
      var lstTabTitle = Array.from(document.getElementsByClassName("organNameTab"));
      var lstTitle = document.getElementsByClassName("mat-ripple mat-tab-label");
      const lstWidth = [];
      lstTabTitle.forEach(element => {
        lstWidth.push(element['offsetWidth']);
      });
      for(let i = 0; i < lstTabTitle.length; i++) {
        document.getElementById(lstTitle[i+1]['id']).style.minWidth =  String(lstWidth[i] + 12) + "px";
      }
    }, 10);
  }

  updateReviewSystem(item : any) {
    let req = {
      VisitId: this.data.VisitId,
      ProblemId: this.data.ProblemId,
      OrganReviewSystemId: item.OrganReviewSystemId
    }
    if (item.VisitReviewSystemId === null) {
      item.VisitReviewSystemId = 0;
    } else {
      item.VisitReviewSystemId = null;
    }
    this.dataUpdate.push(req);
  }

  createReviewSystom() {
    this.data.ListOrgan = this.listOrgan;
    this.dialogRef.close({dataUpdate: this.dataUpdate, organs: this.listOrgan});
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
@NgModule({
  declarations: [
    ReviewSystemComponent,
  ],
  imports: [
    TranslateModule,
    MatIconModule,
    CommonModule,
    MatTabsModule,
    FormsModule
  ],
  exports: [
    ReviewSystemComponent
  ]
})
export class ReviewSystemModule { }
