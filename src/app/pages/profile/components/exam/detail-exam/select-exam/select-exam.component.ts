import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { cloneDeep } from 'lodash';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'app-select-exam',
    templateUrl: './select-exam.component.html',
    styleUrls: ['./select-exam.component.scss']
})
export class SelectExamComponent implements OnInit {
    examSub: any = [];
    examTemp: any = [];
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<SelectExamComponent>,
    ) { }

    ngOnInit() {
        this.examSub = this.data;
        this.examSub.forEach(exam => {
          if (exam.Status === 0) {
            exam.checked = false;
          } else {
            exam.checked = true;
            this.examTemp.push(cloneDeep(exam));
          }
        });
        console.log(this.examSub);

    }

    closeDialog = () => {
        this.dialogRef.close(this.examTemp);
    }

    searchExam = (key) => {
        if (!key) this.examSub = this.data;
        this.examSub = this.data.filter(
            (x) => x.Name.toLowerCase().indexOf(key.toLowerCase()) > -1
        );
    }

    onSelectItem = (item) => {
      item.checked = !item.checked
      const dataTemp = this.examTemp.find(res => res.ExamId === item.ExamId);
      if (!dataTemp) {
        item.Status = (item.checked === true)? 3 : 0;
        this.examTemp.push(item);
      } else {
        this.examTemp.forEach(res => {
          if (res.ExamId === item.ExamId) {
            res.Status = (item.checked === true) ? 3 : 0;
          }
        });
      }
        // try {

        //     // const value = this.data.find(x => x.ExamId == item.ExamId);
        //     // value.checked = !value.checked;
        // } catch (ex) {
        // }
    }

}

@NgModule({
    declarations: [
        SelectExamComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule,
        MatDialogModule
    ],
    exports: [
        SelectExamComponent
    ]
})
export class SelectExamModule { }
