import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResultLabModel } from 'src/app/common/model/result-lab.model';
import { ResultService } from 'src/app/common/service/result.service';
import { TestresultService } from 'src/app/common/service/testresult.service';
import { LoaderService } from 'src/app/shared/services';

@Component({
  selector: 'app-upload-result',
  templateUrl: './upload-result.component.html',
  styleUrls: ['./upload-result.component.scss']
})
export class UploadResultComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private resultService: ResultService,
    private testresultService: TestresultService,
    // private loaderService: LoaderService,
    private dialogRef: MatDialogRef<UploadResultComponent>
  ) { }
  label = [];
  config = new ResultLabModel();
  isLoading = false;
  view = false;
  ngOnInit(): void {
    if (this.data.view === 'view') {
      this.view = true;
    }
    if (this.data.type === 'lab') {
      this.label = this.config.uploadLab;
    }
    else if (this.data.type === 'document') {
      this.label = this.config.uploadDoc;
    } else if (this.data.type === 'imaging') {
      this.label = this.config.uploadIm;
    }
    else {
      this.label = this.config.uploadCategory;
    }
  }

  handleCallBackTable(ev) {
    console.log(ev);

  //   {
  //     "OrderId": 2,
  //     "MediaURLList": [
  //         "aksjdh",
  //         "akjdaskjhd"
  //     ],
  //     "TestResultList": [
  //         {
  //             "OrderId": 2,
  //             "Conclusion": "Test",
  //             "NormalRange": "asdads",
  //             "Notes": "kjdhaskjdh",
  //             "TextResult": "kasjdhkaj"
  //         },
  //         {
  //             "OrderId": 3,
  //             "Conclusion": "Test",
  //             "NormalRange": "asdads",
  //             "Notes": "kjdhaskjdh",
  //             "TextResult": "kasjdhkaj"
  //         }
  //     ]
  // }
     const req = {
      OrderId: ev.item.OrderId,
      MediaURLList: ev.item.MediaURLList,
      TestResultList: ev.item.ListTests,
      }
      this.testresultService.create(req).subscribe(res => {
        this.closeDialog();
      });
    // if (ev.check === 1) {
    //   // const model = {
    //   //   TestcategoryId: ev.item.TestcategoryId,
    //   //   VisitId: ev.item.VisitId,
    //   //   ProblemId: ev.item.ProblemId,
    //   //   MediaURLList: ev.item.MediaURLList,
    //   //   Conclusion: ev.item.Conclusion,
    //   // }
    //   this.resultService.uploadResultOrderTestLab(ev.item).then(res => {
    //     this.closeDialog();
    //   })
    // }
    // else if (ev.check === 2) {
    //   const model = {
    //     OrderId: ev.item.OrderId,
    //     TextResult: ev.item.TextResult,
    //     NormalRange: ev.item.NormalRange,
    //     Description: ev.item.Description,
    //     Conclusion: ev.item.Conclusion,
    //   }
    //   this.resultService.updateLabLayer3(ev.item).then(res => {
    //     this.closeDialog();
    //   });
    // }
    // else if (ev.check === null) {
    //   const model = {
    //     OrderId: ev.item.OrderId,
    //     MediaURLList: ev.item.MediaURLList,
    //     Conclusion: ev.item.Conclusion,
    //   }
    //   this.resultService.uploadResultCategory(ev.item).then(res => {
    //     this.closeDialog();
    //   });
    // }
    // else if (ev.check === 3) {
    //   this.resultService.updateVisitMedia(ev.item).then(res => {
    //     this.closeDialog();
    //   });
    // }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
