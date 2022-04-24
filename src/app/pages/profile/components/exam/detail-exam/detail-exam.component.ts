import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";
import { differenceBy } from 'lodash';
import { ListExam, ListResult } from "src/app/common/model";
import { ExamService } from "src/app/common/service";
import { SelectExamComponent } from "./select-exam/select-exam.component";

@Component({
  selector: "app-detail-exam",
  templateUrl: "./detail-exam.component.html",
  styleUrls: ["./detail-exam.component.scss"],
})

export class DetailExamComponent implements OnInit {
  // @Input() data;
  @Input() problem: any;
  // @Input() listResultExam;
  isAbnormal: boolean = true;
  data
  listExamSub: ListExam[] = [];
  listExam: ListExam[] = [];
  isDisable = false;
  // listSection: any = [];
  // leftRight: any = [];
  checkShow = false;
  isLoading = false;
  listResult: ListExam[] = [];
  listExamChild: ListExam[] = [];
  constructor(
    public dialog: MatDialog,
    private examService: ExamService
  ) { }

  ngOnInit() {
    this.listExam = []
    this.getDataExam();

  }
  getDataExam() {
    this.isDisable = true;
    this.examService.getListExam(this.problem.VisitId, this.problem.ProblemId).subscribe(res => {
      this.listExam = res;
      this.isDisable = false;
      this.listExamSub = this.listExam.filter(res => res.Status !== 0);
      if(this.listExamSub.length > 0) {
        this.onClickActiveExam(this.listExamSub[0], this.listExamSub);
      }
    })
  }

  onClickActiveExam(exam: ListExam, lst: ListExam[]) {
    this.checkShow = false;
    lst.forEach(e => {
      e.isActive = false;
      if (e.ListSubExams) {
        e.level2 = true;
        e.ListSubExams.forEach(eChild1 => {
          eChild1.isActive = false;
          eChild1.haveLeftRight = false;
          if (eChild1.ListSubExams && eChild1.ListSubExams.length !== 0) {
            e.level2 = false;
            eChild1.ListSubExams.forEach(eChild2 => {
              eChild2.isActive = false;
              eChild2.haveLeftRight = false;
              if (eChild2.ListResults && eChild2.ListResults.length !== 0) {
                eChild2.ListResults.forEach(result => {
                  if (result.LeftRight !== 0) {
                    eChild2.haveLeftRight = true;
                  }
                });
              }
            });
          } else if (eChild1.ListResults && eChild1.ListResults.length !== 0) {
            eChild1.ListResults.forEach(result => {
              if (result.LeftRight !== 0) {
                eChild1.haveLeftRight = true;
              }
            });
          }
        });
      }
    });
    exam.isActive = true;
    if (exam.ListSubExams && exam.ListSubExams.length !== 0) {
      exam.ListSubExams[0].isActive = true;
      if (exam.ListSubExams[0].ListSubExams && exam.ListSubExams[0].ListSubExams.length !== 0) {
        exam.ListSubExams[0].ListSubExams[0].isActive = true;
      }
    }
    setTimeout(() => {
      this.checkShow = !document.getElementById('e25');
    }, 100);
  }
  onClickActiveExamChild(exam: ListExam) {
    // this.listExamChild.forEach(examC => {
    //   examC.isActive = false;
    // });
    // exam.isActive = true;
  }

  onSelectExamType(exam: ListExam, status) {
    let req = {
      VisitId: this.problem.VisitId,
      ProblemId: this.problem.ProblemId,
      ExamId: exam.ExamId,
      Status: status
    }
    console.log(exam);

    this.examService.createdVisitExam(req).subscribe(res => {
      exam.Status = status;
      if (status === 2) {
        this.resetData(exam);
      }
    });
  }
  resetData(exam: ListExam) {
    if (exam.ListResults) {
      exam.ListResults.forEach(result => {
        result.Status = 3;
      });
    }
    if (exam.ListSubExams) {
      exam.ListSubExams.forEach(subExam => {
        subExam.Status = 3;
        if (subExam.ListResults) {
          subExam.ListResults.forEach(result => {
            result.Status = 3;
          })
        }
        if (subExam.ListSubExams) {
          subExam.ListSubExams.forEach(subExam2 => {
            subExam2.Status = 3;
            if (subExam2.ListResults) {
              subExam2.ListResults.forEach(result => {
                result.Status = 3;
              })
            }
          })
        }
      });
    }

  }


  onSeclectionResult(result: ListResult) {

    let req = {
      VisitId: this.problem.VisitId,
      ProblemId: this.problem.ProblemId,
      ResultId: result.ResultId,
      Status: (result.Status === 1 )? 0 : 1
    }
    this.examService.createdVisitExam(req).subscribe(res => {
      result.Status = req.Status;
    });
  }

  onSeclectionExam(data) {

  }
  onSeclectSetionNotExam(item) {

  }
  onSeclectSetionNormal(item) {

  }
  onSeclectSetionAbnormal(item) {

  }
  onSeclectionLeftRigt(item, i?) {

  }
  onClickActiveLv2(item) {

  }
  onSelectExamNormalLv1(i) {

  }
  onSelectExamAbnormalLv1(i) {

  }
  openDialog() {
    this.dialog
      .open(SelectExamComponent, {
        panelClass: "dialog-60-50",
        data: this.listExam,
      })
      .afterClosed()
      .subscribe((result) => {
        console.log(result);
        if (result && result.length !== 0) {
          result.forEach((element, index) => {
            let req = {
              VisitId: this.problem.VisitId,
              ProblemId: this.problem.ProblemId,
              ExamId: element.ExamId,
              Status: element.Status
            }
            this.examService.createdVisitExam(req).subscribe(res => {
              if (index === result.length - 1 ) {
                this.ngOnInit();
              }
            });
          });
          // const datalistLv2 = this.data.listLv2;
          // const dataResultChecked = result.filter((x) => x.checked);
          // const data = differenceBy(datalistLv2, dataResultChecked, 'ExamId');
          // dataResultChecked
          //   .filter((a) => !a.isCreate)
          //   .forEach(x => {
          //     x.isAbnormal = false;
          //     x.isRequest = false;
          //     const data = {
          //       LeftRight: x.LeftRight,
          //       ResultId: 1,
          //       Type: 1,
          //       Status: 1,
          //       ExamId: x.ExamId,
          //       ParentExamId: 0,
          //       VisitId: this.data.VisitId,
          //       ProblemId: this.data.ProblemId,
          //       Name: x.Name
          //     };
          //     this.data.listLv2.push(data);
          //     this.examService.createdVisitExam(data);
          //   });
          // if (data.length) {
          //   let dataUpdate: any = {};
          //   dataUpdate.examId = data.map((x: any) => {
          //     return x.ExamId;
          //   })
          //   this.examService.deleteExam(this.data.VisitId, this.data.ProblemId, dataUpdate).subscribe();
          // }
        }
      });
  }
}

@NgModule({
  declarations: [
    DetailExamComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    MatIconModule
  ],
  exports: [
    DetailExamComponent
  ]
})
export class DetailExamModule { }
