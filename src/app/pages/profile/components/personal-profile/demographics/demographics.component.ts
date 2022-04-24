import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit, ViewChild } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { cloneDeep } from "lodash";
import { GooglePlaceDirective, GooglePlaceModule } from "ngx-google-places-autocomplete";
import { Address } from "ngx-google-places-autocomplete/objects/address";
import { DemographicsModel } from "src/app/common/model";
import { DemographicsService, PatientService } from "src/app/common/service";
import { CodevalueService } from "src/app/common/service/codevalue.service";
import { SendDataService } from "src/app/common/service/send-data.service";

@Component({
    selector: "app-demographics",
    templateUrl: "./demographics.component.html",
    styleUrls: ["./demographics.component.scss"],
})
export class DemographicsComponent implements OnInit {
    patientId: number;
    profileImageString: any;
    tempProfileImageString = '';
    isShow: boolean = false;
    listRelationship: any;
    model = new DemographicsModel();
    dataTempDemographics = new DemographicsModel();
    isLoading = false;
    lstInfoSource = [];
    options = {
      types: [],
      componentRestrictions: { country: 'VN' }
    }
    @ViewChild("placesRef") placesRef: GooglePlaceDirective;
    constructor(
        private activatedRoute: ActivatedRoute,
        private demographicsService: DemographicsService,
        private patientService: PatientService,
        private sendDataService: SendDataService,
        private codevalueService: CodevalueService
    ) { }

    ngOnInit(): void {
        this.patientId = this.activatedRoute.snapshot.params.patientId;
        this.patientService
            .detailPatient(this.patientId)
            .then((data: any) => {
                this.model = data;
                this.profileImageString = this.model.MediaURL;
                this.getListRelationship();
                this.model.DOB = data.DOB ? data.DOB.split("T")[0] : '';
                this.model.CreatedOn = data.CreatedOn ? data.CreatedOn.split("T")[0] : '';
                this.getInfoSource();
            });
    }

    getInfoSource() {
        this.codevalueService.listInfoSource().subscribe(res => {
            this.lstInfoSource = res;
        });
    }
    processFileProfileImage(files: File) {
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.profileImageString = reader.result;
            this.model.MediaURL = this.profileImageString.split(",")[1];
        };
    }

    showEdit(type: boolean) {
      if (type === true) {
          this.tempProfileImageString = this.profileImageString;
          this.dataTempDemographics = cloneDeep(this.model);
      } else {
        this.profileImageString = this.tempProfileImageString;
        this.model = cloneDeep(this.dataTempDemographics);
      }
        this.isShow = !this.isShow;
    }

    getListRelationship() {
        this.demographicsService.listRelationship().subscribe((res) => {
            this.listRelationship = res;
            const data = res.find(
                (x) => x.Value === this.model.Relationship
            );
            if (data) {
                this.model.EmergencyRelationshipType = data.NumericKey;
            };
        });
    }

    updateCurrentPatient() {
        this.isLoading = true;
        if (this.model.MediaURL === this.profileImageString) {
            delete this.model.MediaURL;
            this.patientService.update(this.model, this.patientId).subscribe(
                (res) => {
                    this.isShow = !this.isShow;
                },
                null,
                () => {
                    this.isLoading = false;
                }
            );
        } else {
            this.patientService.update(this.model, this.patientId).subscribe(
                (res) => {
                    this.isShow = !this.isShow;
                    this.sendDataService.changeData(JSON.stringify(this.model));
                },
                null,
                () => {
                    this.isLoading = false;
                }
            );
        }
    }
    openGGMap() {
      if (this.model.CoordinationLat && this.model.CoordinationLong) {
        let url = "https://www.google.com.sa/maps/search/" + this.model.CoordinationLat + "," + this.model.CoordinationLong + "?hl=en";
        window.open(url, '_blank');
      }
    }
    public handleAddressChange(address: Address) {
      this.model.CoordinationLat = address.geometry.location.lat();
      this.model.CoordinationLong = address.geometry.location.lng();
    }
}

@NgModule({
    declarations: [
        DemographicsComponent,
    ],
    imports: [
        TranslateModule,
        MatProgressSpinnerModule,
        CommonModule,
        FormsModule,
        RouterModule,
        GooglePlaceModule
    ],
    exports: [
        DemographicsComponent
    ]
})
export class DemographicsModule { }
