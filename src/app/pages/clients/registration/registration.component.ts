import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { TranslateModule } from '@ngx-translate/core';
import { GooglePlaceDirective, GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { RegistrationModel } from 'src/app/common/model';
import { RegistrationService } from 'src/app/common/service';
import { CodevalueService } from 'src/app/common/service/codevalue.service';
import { AlertService, TabMenuService } from 'src/app/shared/services';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;
  constructor(
    private service: RegistrationService,
    private router: Router,
    private alertService: AlertService,
    private hideMenu: TabMenuService,
    private codevalueService: CodevalueService
  ) { }
  options = {
    types: [],
    componentRestrictions: { country: 'VN' }
  }
  profileImagePath: any;
  profileImageString: any;
  isCheck: boolean = false;
  relationship: number = 1;
  listRelationship: any;
  lat: number;
  lng: number;
  lstInfoSource = [];
  model = new RegistrationModel();

  ngOnInit(): void {
    this.getListRelationship();
    this.getInfoSource();
    this.model.Gender = 1;
  }

  processFileProfileImage(files: File) {
    var reader = new FileReader();
    this.profileImagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.profileImageString = reader.result;
      this.model.MediaURL = this.profileImageString ? this.profileImageString.split(",")[1] : null;
    };
  }

  getInfoSource() {
    this.codevalueService.listInfoSource().subscribe(res => {
      this.lstInfoSource = res;
    });
  }

  getListRelationship() {
    this.service.listRelationship().subscribe(res => {
      this.listRelationship = res;
    });
  }

  back() {
    this.router.navigateByUrl(`/pages/clients`);
    this.hideMenu.sentHideMenuValue(false);
  }

  createCustomer(check) {
    this.isCheck = true;
    this.service.createPatient(this.model).subscribe(res => {
      const patientId = +res;
      this.isCheck = false;
      if (check === 1) {
        this.router.navigateByUrl(`/pages/clients/reason-booking/${patientId}/schedule`);
      }
      if (check === 2) {
        this.router.navigateByUrl(`pages/profile/detail/${patientId}/profile-info`);
      }
      this.hideMenu.sentHideMenuValue(false);
    }, err => {
      this.isCheck = false;
      this.alertService.changeMessage({
        color: 'red',
        text: `An error occurred.Please try again later.!`
      })
    })
  }
  public handleAddressChange(address: Address) {
    console.log(address, address.geometry);
    console.log(address, address.geometry.location.lat(), address.geometry.location.lng());
    this.model.CoordinationLat = address.geometry.location.lat();
    this.model.CoordinationLong = address.geometry.location.lng();
  }
  openGGMap() {
    if (this.model.CoordinationLat && this.model.CoordinationLong) {
      let url = "https://www.google.com.sa/maps/search/" + this.model.CoordinationLat + "," + this.model.CoordinationLong + "?hl=en";
      window.open(url, '_blank');
    }
  }

}
@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    GooglePlaceModule
  ]
})
export class RegistrationModule { }
