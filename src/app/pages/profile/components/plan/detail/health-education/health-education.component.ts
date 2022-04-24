import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnInit } from "@angular/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ActivatedRoute } from "@angular/router";
import { HealthEducationModel } from "src/app/common/model";
import { HealthEducationService, OrgansService } from "src/app/common/service";
import { AlertService } from 'src/app/shared/services';
import { ListOrgan, Testcombination } from "src/app/common/model/plan.model";
import { FormsModule } from "@angular/forms";
import { Education, ListEducationcombination } from "src/app/common/model/educationcombination.model";

@Component({
  selector: "app-health-education",
  templateUrl: "./health-education.component.html",
  styleUrls: ["./health-education.component.scss"],
})
export class HealthEducationComponent implements OnInit {
  @Input() data;

  constructor(
    private service: HealthEducationService,
    private route: ActivatedRoute,
    private alertService: AlertService,
  ) { }

  model = new HealthEducationModel();
  listOrgans: Education[] = [];
  lstTestcombinationsTemp: ListEducationcombination[] = [];
  resultHeath: any = [];
  isLoading = false;
  patientId: number;

  ngOnInit() {
    this.isLoading = true;
    this.patientId = this.route.snapshot.params.patientId;
    this.model.VisitId = this.data.VisitId;
    this.model.ProblemId = this.data.ProblemId;
    this.getVisitEducation();
  }

  onActiveOrgans(item: Education) {
    this.listOrgans.forEach(element => {
      element.isActive = false;
    });
    if (item.ListEducationcombinations && item.ListEducationcombinations.length !== 0) {
      this.lstTestcombinationsTemp =  item.ListEducationcombinations;
      this.setActiveCombination(item.ListEducationcombinations);
    }
    item.isActive = true;
  }
  setActiveCombination(testcombination: ListEducationcombination[]) {
    testcombination.forEach(test => {
      if (test.Status === 1) {
        test.isActive = true;
      } else {
        test.isActive = false;
      }
    });
  }
  getVisitEducation() {
    this.service
      .listEducation(this.data.VisitId, this.data.ProblemId)
      .subscribe(res => {
        this.listOrgans = res;

        if (this.listOrgans && this.listOrgans.length !== 0) {
          this.onActiveOrgans(this.listOrgans[0]);
        }
        this.isLoading = false;
      },
        err => {
          this.isLoading = false;
        });
  }
  createHealth(item: ListEducationcombination) {
    item.Status = (item.Status === 0) ? 1 : 0;
    let data = {
      VisitId: this.data.VisitId,
      ProblemId: this.data.ProblemId,
      ListEducationcombinationId: [item.EducationcombinationId]
    }
    this.service.create(data).subscribe(res => {});
  }
  // getCombination(organId) {
  //     this.isLoading = true;
  //     this.service
  //         .listCombinations(organId, 0, null)
  //         .subscribe((res) => {
  //             const data = this.resultHeath.find((x) => x.OrganId === organId);
  //             if (data) {
  //                 this.listCombination = res.map((x) => {
  //                     data.ListEducationcategoryId[0].ListEducationitemId = data.ListEducationcategoryId[0].ListEducationitemId || []
  //                     const checked = data.ListEducationcategoryId[0].ListEducationitemId.find(a => a.EducationitemId === x.EducationitemId)
  //                     return {
  //                         Description: x.Description,
  //                         OrganId: x.OrganId,
  //                         EducationitemId: x.EducationitemId,
  //                         EducationcombinationId: x.EducationcombinationId,
  //                         EducationItemName: x.EducationItemName,
  //                         checked: checked ? true : false,
  //                         VisitEducationId: x.VisitEducationId
  //                     };
  //                 });
  //             } else {
  //                 this.listCombination = res.map((x) => {
  //                     return {
  //                         OrganId: x.OrganId,
  //                         EducationitemId: x.EducationitemId,
  //                         EducationcombinationId: x.EducationcombinationId,
  //                         Description: x.Description,
  //                         EducationItemName: x.EducationItemName,
  //                         checked: false,
  //                         VisitEducationId: x.VisitEducationId
  //                     };
  //                 });
  //             }
  //             this.isLoading = false;
  //         });
  // }

  // createHealth(item) {
  //     this.model.EducationcombinationId = item.EducationcombinationId;
  //     this.model.Description = item.Description;
  //     if (item.checked) {
  //         this.service.delete(item.VisitEducationId);
  //     } else {
  //         this.service.create(this.model).subscribe(res => {
  //             const data = this.resultHeath.find(x => x.OrganId === this.model.OrganId);
  //             if (!data) {
  //                 this.resultHeath.push({
  //                     OrganId: this.model.OrganId,
  //                     ListEducationcategoryId: [
  //                         {
  //                             EducationcategoryId: 0,
  //                             ListEducationitemId: []
  //                         }
  //                     ]
  //                 })
  //                 const data = this.resultHeath.find(x => x.OrganId === this.model.OrganId);
  //                 data.ListEducationcategoryId[0].ListEducationitemId.push({
  //                     EducationitemId: item.EducationitemId
  //                 });
  //             } else {
  //                 data.ListEducationcategoryId[0].ListEducationitemId.push({
  //                     EducationitemId: item.EducationitemId
  //                 });
  //             }
  //         }, err => {
  //             this.alertService.changeMessage({
  //                 color: 'red',
  //                 text: `An error occurred.Please try again later.!`
  //             })
  //         });
  //     }

  // }

  // getVisitEducation() {
  //     this.service
  //         .detailVisitEducation(this.data.VisitId, this.data.ProblemId)
  //         .subscribe((res) => {
  //             this.resultHeath = res ? res.ListOrganId : [];
  //         });
  // }
}
@NgModule({
  declarations: [
    HealthEducationComponent,
  ],
  imports: [
    MatCheckboxModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    HealthEducationComponent
  ]
})
export class HealthEducationModule { }
