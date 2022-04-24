import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConversationService, PatientService, ProviderService } from 'src/app/common/service';
@Component({
    selector: 'app-new-group',
    templateUrl: './new-group.component.html',
    styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private patientService: PatientService,
        private dialogRef: MatDialogRef<NewGroupComponent>,
        private conversationService: ConversationService,
        private providerService: ProviderService
    ) { }

    listProvider: any = [];
    listProviderFilter: any = [];
    listPreview: any = [];

    key = '';
    patient: any = [];

    model: any = {};
    checked = false;

    ngOnInit() {
        this.listProvider = this.data.listContact;
        this.listProviderFilter = this.listProvider;

        this.patientService.list().subscribe(res => {
            this.patient = res.find(x => x.PatientId === this.data.patientId);
            this.model.PatientId = this.patient.PatientId;
        });

    }

    search() {
        this.listProvider.forEach(item => {
            if (item.fullText) {
                if(item.fullText.toLowerCase().indexOf(this.key.toLowerCase()) !== -1) {
                    item.notShow = false;
                } else {{
                    item.notShow = true;
                }}
            }
        });
        console.log(this.listPreview);
        
    }

    closeDialog() {
        this.dialogRef.close();
    }

    creareGroup = () => {
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
            let current = {
              ConversationId: res.Payload,
              ProviderId: this.data.ProviderId
            }
            this.conversationService.createProviderGroup(current).subscribe(res => {
              this.closeDialog();
            })
        })
    }

    onSelectProvider = (i) => {
        i.checked = !i.checked;
    }
}
