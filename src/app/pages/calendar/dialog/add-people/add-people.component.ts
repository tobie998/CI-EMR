import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PatientService, ProviderService } from 'src/app/common/service';

@Component({
    selector: 'app-add-people',
    templateUrl: './add-people.component.html',
    styleUrls: ['./add-people.component.scss']
})
export class AddPeopleComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialog: MatDialogRef<AddPeopleComponent>,
        private patientService: PatientService,
        private providerService: ProviderService
    ) { }

    listPatient: any = [];
    patientsSub: any = [];
    modelPatient: any = {};
    keypress: any;
    listDoctor: any = [];
    isEdit = false;

    ngOnInit() {
        console.log(this.data);
        // const user = JSON.parse(localStorage.getItem('access_token'));
        let list = [];
        list.push(JSON.parse(localStorage.getItem('access_token')))
        if (this.data) {
          this.isEdit = true;
          this.modelPatient = this.data.ItemPatient;
          this.patientsSub.push(this.modelPatient);
          list = this.data.listItemProvider.map(res => {
            return res.ProviderId;
          });
        } else {
          this.patientService.list().subscribe(data => {
            this.listPatient = data.map(x => {
                return {
                    LastName: x.LastName,
                    FirstName: x.FirstName,
                    PatientId: x.PatientId,
                    MediaURL: x.MediaURL
                }
            });
            this.patientsSub = this.listPatient;
          })
        }
        this.providerService.listProvider(null).subscribe(res => {
            this.listDoctor = res.map(x => {
                return {
                    LastName: x.LastName,
                    FirstName: x.FirstName,
                    ProviderId: x.ProviderId,
                    MediaURL: x.MediaURL,
                    check: list.includes(x.ProviderId) ? true : false
                }
            });
            console.log(this.listDoctor);

        });
    }

    searchPatient(keyWord) {
        if (keyWord) {
            clearTimeout(this.keypress);
            this.keypress = setTimeout(() => {
                this.patientService.searchPatient(keyWord).subscribe(res => {
                    this.patientsSub = res;
                });
            }, 500);
        }
        else {
            this.patientsSub = this.listPatient;
        }
    }

    cancelDialog() {
        this.dialog.close();
    }

    saveDialog() {
        const model = {
            Patient: this.modelPatient,
            ListDoctor: this.listDoctor.filter(x => x.check)
        }
        this.dialog.close(model);
    }
}

@NgModule({
    declarations: [
        AddPeopleComponent,
    ],
    imports: [
        MatProgressSpinnerModule,
        MatIconModule,
        CommonModule
    ],
    providers: [],
})
export class AddPeopleModule { }
