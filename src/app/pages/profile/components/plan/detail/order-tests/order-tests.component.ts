import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute } from "@angular/router";
import { ListOrgan, ListTestcategory, PlanModel, Testcombination } from "src/app/common/model/plan.model";
import { OrderTestService, OrgansService } from "src/app/common/service";
@Component({
  selector: "app-order-tests",
  templateUrl: "./order-tests.component.html",
  styleUrls: ["./order-tests.component.scss"],
})
export class OrderTestsComponent implements OnInit {
  @Input() data;

  constructor(
    private orderTestService: OrderTestService,
    private activatedRoute: ActivatedRoute,
    private organsService: OrgansService
  ) { }

  patientId: number;
  listParentTest: PlanModel[] = [];
  lstTestcombinationsTemp = [];
  // listTestCategory = [];
  // listTest = [];
  // listOrgans = [];
  // listResultTest = [];
  model: any = {};

  ngOnInit() {
    this.patientId = this.activatedRoute.snapshot.params.patientId;
    this.model.Type = 1;
    this.orderTestService.listOrderTest(this.data.VisitId, this.data.ProblemId).subscribe((res) => {
      this.listParentTest = res;
      if (this.listParentTest && this.listParentTest.length !== 0) {
        this.setInit();
        this.onActiveItem(this.listParentTest[0]);
      }
    });
  }
  setInit() {
    this.listParentTest.forEach(parent => {
      parent.isActive = false;
      if (parent.ListOrgans.length !== 0) {
        parent.ListOrgans.forEach(organ => {
          organ.isActive = false;
          if (organ.ListTestcombinations.length !== 0) {
            organ.ListTestcombinations.forEach(testCom => {
              if (testCom && testCom.Status === 1) {
                testCom.isActive = true;
              }
            });
          }
        });
      }
      if (parent.ListTestcategories.length !== 0) {
        parent.ListTestcategories.forEach(testCategory => {
          testCategory.isActive = false;
          if (testCategory.ListTestcombinations.length !== 0) {
            testCategory.ListTestcombinations.forEach(testCom => {
              if (testCom && testCom.Status === 1) {
                testCom.isActive = true;
              }
            });
          }
          if (testCategory.ListOrgans.length !== 0) {
            testCategory.ListOrgans.forEach(testOrgan => {
              testOrgan.isActive = false;
              if (testOrgan.ListTestcombinations.length !== 0) {
                testOrgan.ListTestcombinations.forEach(testCom => {
                  if (testCom && testCom.Status === 1) {
                    testCom.isActive = true;
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  onActiveItem(item: PlanModel) {
    this.listParentTest.forEach(element => {
      // set Active in first item of list Plan
      if (item.TestcategoryId === element.TestcategoryId) {
        element.isActive = true;
        if (element.ListTestcategories.length !== 0) {
          element.ListTestcategories[0].isActive = true;
          if (element.ListTestcategories[0].ListOrgans.length !== 0) {
            element.ListTestcategories[0].ListOrgans[0].isActive = true;
            this.lstTestcombinationsTemp = element.ListTestcategories[0].ListOrgans[0].ListTestcombinations;
          }
        } else if (element.ListOrgans.length !== 0) {
          element.ListOrgans[0].isActive = true;
          this.lstTestcombinationsTemp =  element.ListOrgans[0].ListTestcombinations;

        }
        // remove all Active in all child item of list Plan
      } else {
        element.isActive = false;
        if (element.ListTestcategories.length !== 0) {
          element.ListTestcategories.forEach(test => {
            test.isActive = false;
            if (test.ListOrgans.length !== 0) {
              test.ListOrgans.forEach(organ => {
                organ.isActive = false;
              });
            }
          });
        } else if (element.ListOrgans.length !== 0) {
          element.ListOrgans.forEach(organ => {
            organ.isActive = false;
          });
        }
      }
    });
    this.setActiveCombination(this.lstTestcombinationsTemp);
  }
  setActiveCombination(testcombination: Testcombination[]) {
    testcombination.forEach(test => {
      if (test.Status === 1) {
        test.isActive = true;
      } else {
        test.isActive = false;
      }
    });
  }
  onActiveTestCategory(lst: ListTestcategory[], item: ListTestcategory) {

    lst.forEach(element => {
      element.isActive = false;
    });
    if (item.ListTestcombinations && item.ListTestcombinations.length !== 0) {
      this.lstTestcombinationsTemp =  item.ListTestcombinations;
      this.setActiveCombination(item.ListTestcombinations);
    }
    if (item.ListOrgans && item.ListOrgans.length !== 0) {
      item.ListOrgans[0].isActive = true;
      if (item.ListOrgans[0].ListTestcombinations && item.ListOrgans[0].ListTestcombinations.length !== 0) {
        this.lstTestcombinationsTemp =  item.ListOrgans[0].ListTestcombinations;
        this.setActiveCombination(item.ListOrgans[0].ListTestcombinations);
      }
    }
    item.isActive = true;
  }
  onActiveOrgans(lst: ListOrgan[], item: ListOrgan) {
    lst.forEach(element => {
      element.isActive = false;
    });
    if (item.ListTestcombinations && item.ListTestcombinations.length !== 0) {
      this.lstTestcombinationsTemp =  item.ListTestcombinations;
      this.setActiveCombination(item.ListTestcombinations);
    }
    item.isActive = true;
  }
  onActiveCatSub(item: Testcombination) {
    console.log(item);

    item.Status = (item.Status === 0) ? 1 : 0;
    let data = {
      VisitId: this.data.VisitId,
      ProblemId: this.data.ProblemId,
      TestcombinationId: item.TestcombinationId
    }
    this.orderTestService.create(data).subscribe(res => {});
  }
  orderTestAll() {
    console.log(this.lstTestcombinationsTemp);
    let temp = [];
    this.listParentTest.forEach(parent => {
      if (parent.isActive === true) {
        if (parent.ListOrgans.length !== 0) {
          parent.ListOrgans.forEach(organ => {
            if ((organ.isActive === true)) {
              organ.ListTestcombinations.forEach(element => {
                element.Status = 1;
                element.isActive = true;
              });
              temp = organ.ListTestcombinations;
            }
          });
        } else if (parent.ListTestcategories.length !== 0) {
          parent.ListTestcategories.forEach(testCategory => {
            if (testCategory.isActive === true && testCategory.ListTestcombinations.length !== 0) {
              testCategory.ListTestcombinations.forEach(element => {
                element.Status = 1;
                element.isActive = true;
              });
              temp = testCategory.ListTestcombinations;
            } else if (testCategory.isActive === true && testCategory.ListOrgans.length !== 0) {
              testCategory.ListOrgans.forEach(organ => {
                if (organ && organ.isActive === true) {
                  organ.ListTestcombinations.forEach(element => {
                    element.Status = 1;
                    element.isActive = true;
                  });
                  temp = organ.ListTestcombinations;
                }
              });
            }
          });

        }
      }
    });
    // this.lstTestcombinationsTemp.forEach(element => {
    //   element.Status = 1;
    // });
    let data = {
      VisitId: this.data.VisitId,
      ProblemId: this.data.ProblemId,
      ListTestcombinationId: temp.map(res => {
        return res.TestcombinationId;
      })
    }
    this.orderTestService.createAll(data).subscribe(res => {});
  }
}

@NgModule({
  declarations: [
    OrderTestsComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    FormsModule,
    MatCheckboxModule
  ],
  exports: [
    OrderTestsComponent
  ]
})
export class OrderTestsModule { }
