import { Component, Input, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PatientService } from 'src/app/common/service';
import { SendDataService } from 'src/app/common/service/send-data.service';
import { UserModule } from 'src/app/shared/components/user/user.component';

@Component({
    selector: 'app-tab-row-menu',
    templateUrl: './tab-row-menu.component.html',
    styleUrls: ['./tab-row-menu.component.scss']
})
export class TabRowMenuComponent implements OnInit {
    @Input() patientId;
    constructor(
        private patientService: PatientService,
        private sendDataService: SendDataService,
    ) { 
        this.sendDataService.currentMessage.subscribe(res1 => {
            if (res1 && res1 !== 'default message') {
                console.log(res1);
                
                this.patientService.detailPatient(this.patientId).then((res: any) => {
                    this.currentPatient = res;
                });
            }
          });
    }

    currentPatient: any;

    ngOnInit() {
        this.patientService.detailPatient(this.patientId).then((res: any) => {
            this.currentPatient = res;
        });
    }
}

@NgModule({
    declarations: [
        TabRowMenuComponent,
    ],
    imports: [
        UserModule,
        RouterModule,
        TranslateModule
    ],
    exports: [
        TabRowMenuComponent
    ]
})
export class TabRowMenuModule { }
