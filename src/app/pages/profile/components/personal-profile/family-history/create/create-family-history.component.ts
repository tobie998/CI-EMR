import { CommonModule } from "@angular/common";
import { Component, Inject, NgModule, OnInit } from "@angular/core";
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TranslateModule } from "@ngx-translate/core";
import { FamilyHistoryService } from "src/app/common/service";
import { AlertService } from "src/app/shared/services";
import { isNullOrUndefined } from "util";

@Component({
    selector: "app-create-family-history",
    templateUrl: "./create-family-history.component.html",
    styleUrls: ["./create-family-history.component.scss"],
})
export class CreateFamilyHistoryComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<CreateFamilyHistoryComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialog,
        public familyHistoryService: FamilyHistoryService,
        public alertService: AlertService
    ) { }
    isChecked: number = 0;
    // heartAttack: number = 0;
    // stroke: number = 0;
    // dementia: number = 0;
    // diabetes: number = 0;
    // blood: number = 0;
    // cancer: number = 0;
    arrayHeartFamily = [];
    arrayStrokeFamily = [];
    arrayDementiaFamily = [];
    arrayDiabetesFamily = [];
    arrayBloodFamily = [];
    arrayCancerFamily = [];
    dataFamilyHistory: any;
    typeTranslate: string; ư
    listRelationShip: any;

    ngOnInit(): void {
        this.typeTranslate = localStorage.getItem("translate");
        this.getListRelation();


    }

    getListRelation() {
        this.familyHistoryService.listRelationship('Patients', 'EmergencyRelationshipType').subscribe(res => {
            this.listRelationShip = res;
            this.listRelationShip.map(x => x.checked = false);
            this.dataFamilyHistory = {
                PatientId: this.data.patientId,
                ListFamilyFactor: [
                    {
                        DiseaseId: 1,
                        RelationshipList: this.listRelationShip.map(x => {
                          return {
                              Value: x.Value,
                              NumericKey: x.NumericKey,
                              checked: !isNullOrUndefined(
                                this.data.data.find(element => element.DiseaseId === 1 && element.RelationshipNumbericKey === x.NumericKey))
                          }
                        }),
                        checked: !isNullOrUndefined(this.data.data.find(element => element.DiseaseId === 1))
                    },
                    {
                        DiseaseId: 2,
                        RelationshipList: this.listRelationShip.map(x => {
                            return {
                                Value: x.Value,
                                NumericKey: x.NumericKey,
                                checked: !isNullOrUndefined(
                                  this.data.data.find(element => element.DiseaseId === 2 && element.RelationshipNumbericKey === x.NumericKey))
                            }
                        }),
                        checked: !isNullOrUndefined(this.data.data.find(element => element.DiseaseId === 2))
                    },
                    {
                        DiseaseId: 3,
                        RelationshipList: this.listRelationShip.map(x => {
                            return {
                                Value: x.Value,
                                NumericKey: x.NumericKey,
                                checked: !isNullOrUndefined(
                                  this.data.data.find(element => element.DiseaseId === 3 && element.RelationshipNumbericKey === x.NumericKey))
                            }
                        }),
                        checked: !isNullOrUndefined(this.data.data.find(element => element.DiseaseId === 3))
                    },
                    {
                        DiseaseId: 4,
                        RelationshipList: this.listRelationShip.map(x => {
                            return {
                                Value: x.Value,
                                NumericKey: x.NumericKey,
                                checked: !isNullOrUndefined(
                                  this.data.data.find(element => element.DiseaseId === 4 && element.RelationshipNumbericKey === x.NumericKey))
                            }
                        }),
                        checked: !isNullOrUndefined(this.data.data.find(element => element.DiseaseId === 4))
                    },
                    {
                        DiseaseId: 5,
                        RelationshipList: this.listRelationShip.map(x => {
                            return {
                                Value: x.Value,
                                NumericKey: x.NumericKey,
                                checked: !isNullOrUndefined(
                                  this.data.data.find(element => element.DiseaseId === 5 && element.RelationshipNumbericKey === x.NumericKey))
                            }
                        }),
                        checked: !isNullOrUndefined(this.data.data.find(element => element.DiseaseId === 5))
                    },
                    {
                        DiseaseId: 6,
                        RelationshipList: this.listRelationShip.map(x => {
                            return {
                                Value: x.Value,
                                NumericKey: x.NumericKey,
                                checked: !isNullOrUndefined(
                                  this.data.data.find(element => element.DiseaseId === 6 && element.RelationshipNumbericKey === x.NumericKey))
                            }
                        }),
                        checked: !isNullOrUndefined(this.data.data.find(element => element.DiseaseId === 6))
                    }
                ],
            };

        });
    }

    setActive(item) {
      item.checked = !item.checked;
    }

    createFamilyHistory() {
        this.dataFamilyHistory.ListFamilyFactor = this.dataFamilyHistory.ListFamilyFactor.map(x => {
            return {
                DiseaseId: x.DiseaseId,
                RelationshipList: x.RelationshipList.filter(b => b.checked).map(c => { return c.NumericKey })
            }
        })
        this.familyHistoryService
            .create(this.dataFamilyHistory)
            .subscribe((res) => {
                this.dialogRef.close();
            }, err => {
                this.alertService.changeMessage({
                    color: 'red',
                    text: `An error occurred.Please try again later.!`
                })
            });
    }



    closeDialog(): void {
        this.dialogRef.close();
    }
}
@NgModule({
    declarations: [
        CreateFamilyHistoryComponent,
    ],
    imports: [
        TranslateModule,
        MatDialogModule,
        CommonModule
    ],
    exports: [
        CreateFamilyHistoryComponent
    ]
})
export class CreateFamilyHistoryModule { }
