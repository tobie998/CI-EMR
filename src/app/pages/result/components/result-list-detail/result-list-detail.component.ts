import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ResultLabModel } from 'src/app/common/model/result-lab.model';
import { PatientService } from 'src/app/common/service';
import { ResultService } from 'src/app/common/service/result.service';
import { TestresultService } from 'src/app/common/service/testresult.service';
import { FormatDateService } from 'src/app/shared/services';
import { UploadResultComponent } from '../upload-result/upload-result.component';

@Component({
  selector: 'app-result-list-detail',
  templateUrl: './result-list-detail.component.html',
  styleUrls: ['./result-list-detail.component.scss']
})
export class ResultListDetailComponent implements OnInit {
  @Input() data;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private patientService: PatientService,
    private testresultService: TestresultService,
    private serviceDate: FormatDateService,
    private resultService: ResultService
  ) { }
  check = true;
  config = new ResultLabModel();
  height = '75vh';
  listlable: any = [];
  listlableDoc: any = [];
  listlableCategory: any = [];
  listlableImaging: any = [];
  patientName: string;
  categoryList: any = [];
  dataTableDoc: any = [];
  dataTableCategory: any = [];
  dataTableImaging: any = [];
  dataTable: any = [];
  patientId: number;
  labOrderDetail: any = {};
  categoryOderDetail: any = {};
  Role: string;
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('access_token'));
    this.Role = user.Role;
    this.listlable = this.config.collumsLab;
    this.listlableDoc = this.config.collumsDoc;
    this.listlableCategory = this.config.collumsCategory;
    this.listlableImaging = this.config.collumsImaging;
    this.patientId = this.activatedRoute.snapshot.params.patientId;
    this.getListOrderCategory();
  }

  getLabs() {
    this.testresultService.getLabs('',this.patientId).subscribe(res => {
      this.dataTable = res;
      this.dataTable.map(x => {
        x.VisitDate = this.serviceDate.formatDate(x.VisitDate, 'DD/MM/YYYY');
      })
      console.log(this.dataTable);

    })
  }
  getBiopsy() {
    this.testresultService.getBiopsy('',this.patientId).subscribe(res => {
      this.dataTableCategory = res;
      this.dataTableCategory.map(x => {
        x.TestcategoryName = x.OrganName,
        x.VisitDate = this.serviceDate.formatDate(x.VisitDate, 'DD/MM/YYYY');
      })
    })
  }
  getFunctional() {
    this.testresultService.getFunctional('',this.patientId).subscribe(res => {
      this.dataTableCategory = res;
      this.dataTableCategory.map(x => {
        x.TestcategoryName = x.OrganName,
        x.VisitDate = this.serviceDate.formatDate(x.VisitDate, 'DD/MM/YYYY');
      })
    })
  }
  getImaging() {
    this.testresultService.getImaging('',this.patientId).subscribe(res => {
      this.dataTableImaging = res;
      this.dataTableImaging.map(x => {
        x.VisitDate = this.serviceDate.formatDate(x.VisitDate, 'DD/MM/YYYY');
      })
    })
  }


  getListOrderCategory() {
    if (this.data.Name === "Lab") {
      this.getLabs();
    }
    else if (this.data.Name === "Biopsy") {
      this.getBiopsy();
    } else if (this.data.Name ==='Functional') {
      this.getFunctional();
    } else if (this.data.Name === 'Imaging') {
      this.getImaging();
    }
    else if (this.data.Name === "Other Documents") {
      this.resultService.getListOtherDoc(this.patientId).then(res => {
        this.dataTableDoc = res;
        this.dataTableDoc.map(x => {
          x.CreatedOn = this.serviceDate.formatDate(x.CreatedOn, 'DD/MM/YYYY');
        })
        console.log(this.dataTableDoc);


      })
    }
    else {
      this.resultService.getListOrderCategory(this.patientId, this.data.TestcategoryId).then(res => {
        this.dataTableCategory = res;
        this.dataTableCategory.map(x => {
          x.VisitDate = this.serviceDate.formatDate(x.VisitDate, 'DD/MM/YYYY');
        })
      })
    }
  }


  handleCallBackTableLab(event): void {
    // let item = await  this.resultService.getLabOrderTestDetail(event.item.VisitId, event.item.ProblemId, event.item.TestcategoryId);
    // let subDataTable = await  this.resultService.getLayer3CategoryLab(event.item.TestcategoryId,  event.item.VisitId,event.item.ProblemId,);
    console.log(event);

    if (event.typeBtn.type === 'upload') {
      const dialogRef = this.dialog.open(UploadResultComponent, {
        panelClass: "dialog-97-97",
        disableClose: true,
        data: {
          data: event.item,
          // subDataTable: subDataTable,
          type: 'lab',
          title: 'Add results',
          view: 'add'
        },
      })
      dialogRef.afterClosed().subscribe((result) => {
        this.getListOrderCategory();
      });
    }
    if (event.typeBtn.type === 'view') {
      if (event.item) {
        event.item.Type = 'Lab'
      };
      const dialogRef = this.dialog.open(UploadResultComponent, {
        panelClass: "dialog-97-97",
        disableClose: true,
        data: {
          data: event.item,
          type: 'lab',
          title: 'Test Result',
          view: 'view'
        },
      })
      dialogRef.afterClosed().subscribe((result) => { });
    }
  }
  handleCallBackTableCategory(event) {
    // let item = await this.resultService.getDetailOrderCategory(event.item.OrderId);
    if (event.typeBtn.type === 'upload') {
      const dialogRef = this.dialog.open(UploadResultComponent, {
        panelClass: "dialog-97-97",
        disableClose: true,
        data: {
          data: event.item,
          type: 'category',
          title: 'Add results',
          view: 'add'
        },
      })
      dialogRef.afterClosed().subscribe((result) => {
        this.getListOrderCategory();
      });
    }
    if (event.typeBtn.type === 'view') {
      const dialogRef = this.dialog.open(UploadResultComponent, {
        panelClass: "dialog-97-97",
        disableClose: true,
        data: {
          data: event.item,
          type: 'category',
          title: 'Test Result',
          view: 'view'
        },
      })
      dialogRef.afterClosed().subscribe((result) => { });
    }
  }
  handleCallBackTableImaging(event) {
    if (event.typeBtn.type === 'upload') {
      const dialogRef = this.dialog.open(UploadResultComponent, {
        panelClass: "dialog-97-97",
        disableClose: true,
        data: {
          data: event.item,
          type: 'imaging',
          title: 'Add documents',
          view: 'add'
        },
      })
      dialogRef.afterClosed().subscribe((result) => {
        this.getListOrderCategory();
      });;
    }
    if (event.typeBtn.type === 'view') {
      const dialogRef = this.dialog.open(UploadResultComponent, {
        panelClass: "dialog-97-97",
        disableClose: true,
        data: {
          data: event.item,
          type: 'imaging',
          title: 'Add documents',
          view: 'view',
        },
      })
      dialogRef.afterClosed().subscribe((result) => { });;
    }
  }
  async handleCallBackTableDoc(event) {
    let item = await this.resultService.getDetailVisit(event.item.VisitId, 4);
    if (event.typeBtn.type === 'upload') {
      const dialogRef = this.dialog.open(UploadResultComponent, {
        panelClass: "dialog-97-97",
        disableClose: true,
        data: {
          data: item,
          type: 'document',
          title: 'Add documents',
          view: 'add'
        },
      })
      dialogRef.afterClosed().subscribe((result) => {
        this.getListOrderCategory();
      });;
    }
    if (event.typeBtn.type === 'view') {
      const dialogRef = this.dialog.open(UploadResultComponent, {
        panelClass: "dialog-97-97",
        disableClose: true,
        data: {
          data: item,
          type: 'document',
          title: 'Add documents',
          view: 'view'
        },
      })
      dialogRef.afterClosed().subscribe((result) => { });;
    }
  }

}
