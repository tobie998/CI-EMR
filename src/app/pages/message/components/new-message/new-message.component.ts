import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ConversationService, PatientService, ProviderService } from 'src/app/common/service';
@Component({
    selector: 'app-new-message',
    templateUrl: './new-message.component.html',
    styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

    constructor(
        private patientService: PatientService,
        private dialogRef: MatDialogRef<NewMessageComponent>,
        private conversationService: ConversationService,
        private providerService: ProviderService
    ) { }

    listProvider: any = [];
    listProviderFilter: any = [];

    listPatient: any = [];
    listPatientFilter: any = [];

    model: any = {};
    checked = false;

    ngOnInit(): void {
        this.providerService.listProvider('').subscribe(res => {
            this.listProvider = res.map(x => {
                return {
                    fullText: x.FirstName + x.LastName,
                    MediaURL: x.MediaURL,
                    ProviderId: x.ProviderId,
                    ProviderCode: x.ProviderCode,
                    FirstName: x.FirstName,
                    LastName: x.LastName,
                    checked: false
                }
            });
            this.listProviderFilter = this.listProvider;
        });

        this.patientService.list().subscribe(res => {
            this.listPatient = res.map(x => {
                return {
                    fullText: x.FirstName + '-' + x.LastName,
                    MediaURL: x.MediaURL,
                    PatientId: x.PatientId,
                    FirstName: x.FirstName,
                    LastName: x.LastName,
                    checked: false
                }
            });
            this.listPatientFilter = this.listPatient;
        });

    }

    onSearchPatient = (key) => {
        if (!key) this.listPatientFilter = [];
        this.listPatientFilter = this.listPatient.filter(
            (x) => x.fullText.toLowerCase().indexOf(key.toLowerCase()) > -1
        );
    }

    closeDialog() {
        this.dialogRef.close();
    }

    creareGroup = () => {
        console.log(this.model);
        
        this.conversationService.createConversationsGroup(this.model).subscribe(res => {
            this.listProviderFilter.forEach(x => {
                if (x.checked) {
                    const data = {
                        ConversationId: res.Payload,
                        ProviderId: x.ProviderId
                    }
                    this.conversationService.createProviderGroup(data).subscribe(res => {
                    })
                }
            });
            this.closeDialog();
        })
    }

    onSelectProvider = (i) => {
        i.checked = !i.checked;
    }

    onSelectPatient = (i?) => {
        if (i) {
            this.listPatientFilter.forEach(x => {
                if (x.PatientId === i.PatientId) {
                    x.checked = true;
                    this.model.PatientId = x.PatientId;
                } else {
                    x.checked = false;
                }
            });
            this.checked = false;
        } else {
            this.checked = !this.checked;
            this.model.PatientId = null;
            this.listPatientFilter.forEach(x => {
                x.checked = false;
            });
        }
    }

}
@NgModule({
    declarations: [
        NewMessageComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule,
        FormsModule,
    ],
    exports: [
        NewMessageComponent
    ]
})
export class NewMessageModule { }
