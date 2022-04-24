import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { cloneDeep } from "lodash";
import { forkJoin } from "rxjs";
import { ListofvisitsModel } from "src/app/common/model";
import { ListofvisitsService, PatientService } from "src/app/common/service";
import { TableBaseModule } from "src/app/shared/components/base@ci/table/table.component";
import { DetailComponent } from "./detail/detail.component";

@Component({
  selector: "app-list-of-visits",
  template: ` <div class="ci-p-30-table2">
                    <app-table-base
                        [listlable]="listlable"
                        [(data)]="data"
                        [(height)]="height"
                        [role]="Role"
                        [checkWidth]="true"
                        (callback)="handleCallBackTable($event)"
                    ></app-table-base>
                    <div *ngIf="Role === 'Nurse'">
                        <hr class="hr-dot" *ngIf="isShow === true">
                        <div class="ci-group-btn btn-15">
                          <button class="ci-button-cancel-view" (click)="isShow = false; base64 = ''"  *ngIf="isShow === true"> Cancel</button>
                          <button class="ci-button-save" (click)="onUploadFileNurse()"> Upload Report</button>
                        </div>
                        <div class="ci-group-btn btn-15" style="bottom: 140px;" *ngIf="isShow === true">
                          <button class="ci-button-cancel-view"> Take a photo</button>
                        </div>
                        <!-- <div class="ci-group-btn btn-15" *ngIf="isShow === true && model.NurseVisitId" style="bottom: 85px;"> -->
                        <div class="ci-group-btn btn-15" *ngIf="isShow === true" style="bottom: 85px;">
                          <input   #ProfileImage type="file" accept="image/*" id="profileImage"
                          (change)="chooseFile(ProfileImage.files)" hidden  />
                              <label for="profileImage" class="ci-button-cancel-view">
                              Choose from library
                            </label>
                        </div>
                    </div>
                </div>`
})
export class ListOfVisitsComponent implements OnInit {
  isShow: boolean = false;
  constructor(
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private listofvisitsService: ListofvisitsService,
    private servicePatient: PatientService
  ) { }

  patientId: number;
  base64 = '';
  config = new ListofvisitsModel;
  data: any = [];
  listlable: any = [];
  height = '75vh';
  model: any = {};
  Role: string;
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('access_token'));
    this.Role = user.Role;
    this.listlable = this.config.collums;
    if (this.Role === 'Receptionist') {
      this.listlable.splice(this.listlable.length -1, 1)
    }

    this.patientId = this.activatedRoute.snapshot.params.patientId;
    this.servicePatient.detailPatient(this.patientId).then((res: any) => {
      this.model = res;
      this.getListOfVisit();

    })
    
  }
  getListOfVisit() {
    let listApi = [];
    listApi.push(this.listofvisitsService
      .listVisitPatient(this.patientId, 3));
    listApi.push(this.listofvisitsService.editVisitPatient(this.patientId));
    forkJoin(listApi).subscribe((res: any) => {
      if (res[0]) {
        const currentVisit = res[0].filter((x) => x.VisitId === this.model.VisitId);
        if (currentVisit.length !== 1) {
          res[0] = res[0].filter((x) => x.ProblemName !== '');
        } 
        const dataFilter = this.groupByKey(
          res[0]);
          console.log(res[0], cloneDeep(dataFilter));
        this.data = dataFilter.map(x => {
          if (x.length === 0) {
            return {};
          } else {
            return {
              date: x[0].CreatedOn,
              listProblem: x.map(a => { return a.ProblemName }).toString(),
              VisitId: x[0].VisitId,
              PatientId: x[0].PatientId,
              IsUploaded: x[0].IsUploaded,
              check: false
            }
          }
        })
      } else {
        this.data = [];
      }
      if (res[1]) {
        res[1].forEach(element => {
          this.data.push({
            date: element.CreatedOn,
            listProblem: element.Problem,
            notShow: true,
          });
        });
      }
      this.sortData();
      console.log(this.data);
    })
    // this.listofvisitsService
    // .listVisitPatient(this.patientId, 3)
    // .subscribe(res => {
    //   if (res) {
    //     const dataFilter = this.groupByKey(
    //       res.filter(a => a.ProblemName !== null));
    //     this.data = dataFilter.map(x => {
    //       if (x.length === 0) {
    //         return {};
    //       } else {
    //         return {
    //           date: x[0].CreatedOn,
    //           listProblem: x.map(a => { return a.ProblemName }).toString(),
    //           VisitId: x[0].VisitId,
    //           PatientId: x[0].PatientId,
    //           IsUploaded: x[0].IsUploaded,
    //           check: false
    //         }
    //       }
    //     })
    //   } else {
    //     this.data = [];
    //   }
    //   console.log(this.data);

    // });
  }

  // editListOfVisit() {
  //   this.listofvisitsService.editVisitPatient(this.patientId).subscribe(res => {
  //     if (res) {
  //       const dataFilter = this.groupByKey(
  //         res.filter(a => a.ProblemName !== null));
  //       this.data = dataFilter.map(x => {
  //         if (x.length === 0) {
  //           return {};
  //         } else {
  //           return {
  //             date: x[0].CreatedOn,
  //             listProblem: x.map(a => { return a.ProblemName }).toString(),
  //             check: false
  //           }
  //         }
  //       })
  //     } else {
  //       this.data = [];
  //     }
  //   })
  // }

  chooseFile = (files: File) => {
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.base64 = reader.result.toString().split(",")[1];
      this.onUploadFileNurse();
    };
  }

  handleCallBackTable = (data) => {
    if (data.typeBtn ) {
      const dialogRef = this.dialog.open(DetailComponent, {
        panelClass: "dialog-97-97-bg-w",
        disableClose: true,
        data: {
          id: data.item.VisitId,
          check: (data.typeBtn.type === 'view-doctor') ? true : false
        }
      });
      dialogRef.afterClosed().subscribe((result) => {
      });
    }
  }
  onUploadFileNurse() {
    if (this.isShow === false) {
      this.isShow = true;
    } else {
      if (this.base64 !== '') {
        this.listofvisitsService.uploadFileNurse({
          VisitId: this.model.VisitId === 0 ? this.model.LastVisitId : this.model.VisitId,
          Type: 3,
          MediaURL: this.base64
        }).subscribe(res => {
          this.base64 = '';
          this.isShow = false;
          this.getListOfVisit();
        })
      }
    }
  }
  // openDialog(item) {
  //   const dialogRef = this.dialog.open(DetailComponent, {
  //     panelClass: "dialog-97-97-bg-w",
  //     disableClose: true,
  //     data: item[0].VisitId
  //   });
  //   dialogRef.afterClosed().subscribe((result) => { });
  // }
  groupByKey(data) {
    if (data.length === 0) {
      return [];
    }
    const list = [];
    let temp = [];
    let tempIndex = data[0];
    debugger;
    data.forEach(element => {
      if (element.VisitId === tempIndex.VisitId) {
        temp.push(element);
      } else {
        list.push(cloneDeep(temp));
        temp = [];
        tempIndex = element;
        temp.push(tempIndex);
      }
    });
    list.push(cloneDeep(temp));
    return list;
  };
  sortData() {
    this.data.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }
}
@NgModule({
  declarations: [
    ListOfVisitsComponent,
  ],
  imports: [
    TableBaseModule,
    CommonModule
  ],
  exports: [
    ListOfVisitsComponent
  ]
})
export class ListOfVisitsModule { }
