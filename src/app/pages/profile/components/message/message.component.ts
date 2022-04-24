import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ConversationService, MessagesService, ProviderService } from 'src/app/common/service';
import { SocketService } from 'src/app/common/service/socket.service';
import { isNullOrUndefined } from 'util';
import { NewGroupComponent } from './new-group/new-group.component';
@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
    @ViewChild('scrollMe') private myScrollContainer: ElementRef;

    constructor(
        public messagesService: MessagesService,
        public dialog: MatDialog,
        public conversationService: ConversationService,
        private socketService: SocketService,
        public route: ActivatedRoute,
        private providerService: ProviderService
    ) { }

    listClients = [];
    listClientsFilter = [];

    listMes: any = [];
    listMesGroup: any = [];

    GroupModel = null;
    content: string = '';
    ProviderId: number;
    listContacts: any = [];
    user;
    isLoading = false;
    id;
    patientId: number;

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('access_token'));
        this.patientId = +this.route.snapshot.params.patientId;
        this.scrollToBottom();
        this.getListconversationsGroup();
        this.getListContact();
        this.socketService.messages$.subscribe((res) => {
          console.log(res, this.listMes, this.listMesGroup);
          const data = JSON.parse(res);
          if (data && data.Type) {
             if (data.Type === 2) {
               this.getListconversationsGroup();
              if (this.GroupModel && this.GroupModel.ConversationId == data.ConversationId && this.user.UserprofileId != data.SenderUserprofileId) {
                const sender = this.listContacts.find(element => element.UserprofileId == data.SenderUserprofileId);
                this.listMesGroup.push({
                  Content: data.Message,
                  CreatedBy: data.SenderUserprofileId,
                  SenderFullName: sender?.FirstName + sender?.LastName,
                  ProfileImageUrl: sender?.MediaURL
                });
                // this.listMes.push({
                //   Content: data.Message,
                //   SenderProviderId: data.SenderProviderId,
                // })
              }
            }
          }

          // if (!isNullOrUndefined(data) && data.SenderUserProfileId === +this.user.ProviderId && data.RecipientUserProfileId === this.ProviderId) {
          //   console.log(data);
          //   this.listMes.push({
          //     SenderProviderId: data.SenderUserProfileId,
          //     RecipientProviderId: data.RecipientUserProfileId,
          //     Content: data.Content,
          //     Status: 1,
          //     Type: 1
          //   });

          // } else if (!isNullOrUndefined(data) && data.SenderUserProfileId === this.ProviderId && data.RecipientUserProfileId === +this.user.ProviderId) {
          //   this.messagesService.detailMessage(this.ProviderId).subscribe((res) => {
          //     this.listMes = res;
          //     console.log(this.listMes);
          //   });
          // }


        });
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    ngOnDestroy() {
        if (this.id) {
            clearInterval(this.id);
        }
    }
    getListContact() {
      this.providerService.listProvider('').subscribe(res => {
        this.listContacts = res.map(x => {
            return {
                fullText: x.FirstName + '-' + x.LastName,
                MediaURL: x.MediaURL,
                ProviderId: x.ProviderId,
                FirstName: x.FirstName,
                LastName: x.LastName,
                UserprofileId: x.UserprofileId,
                checked: false
            }
        }).filter(x => x.UserprofileId != this.user.UserprofileId && !isNullOrUndefined(x.UserprofileId) );

    });
    }
    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch (err) { }
    }

    onSearchClients = (key) => {
        if (!key) this.listClientsFilter = [];
        this.listClientsFilter = this.listClients.filter(
            (x) => x.fullText.toLowerCase().indexOf(key.toLowerCase()) > -1
        );
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(
        NewGroupComponent,
        {
            panelClass: "dialog-97-97",
            data: {
              patientId: this.patientId,
              ProviderId: this.user.ProviderId,
              listContact: this.listContacts
            }
        });
      dialogRef.afterClosed().subscribe(result => {
          this.ngOnInit();
      });


    }

    getListconversationsGroup() {
        this.conversationService.list().subscribe(res => {
            this.listClients = res.filter(a => a.PatientId === this.patientId).map(x => {
                return {
                    ConversationId: x.ConversationId,
                    ConversationName: x.ConversationName,
                    OwnerProviderId: x.OwnerProviderId,
                    NewMessageCount: x.NewMessageCount,
                    PatientId: x.PatientId,
                    ProfileImageUrls: x.ProfileImageUrls,
                    Profilelist: x.ProfileImageUrls.slice(0,x.ProfileImageUrls.length - 1).split(','),
                    fullText: x.ConversationName || ''
                }
            });
            this.listClientsFilter = this.listClients;
        });
    }

    detailGroupConversation = (item) => {
        clearInterval(this.id);
        this.listMes = [];
        this.ProviderId = null;
        this.GroupModel = {
            ConversationName: item.ConversationName,
            ProfileImageUrls: item.ProfileImageUrls,
            Profilelist: item.Profilelist,
            ConversationId: item.ConversationId
        }
        this.conversationService.detailConversationsGroup(item.ConversationId).subscribe(res => {
            this.listMesGroup = res;
            this.listMesGroup = res.map(x => {
              const sender = this.listContacts.find(element => element.UserprofileId ==x.CreatedBy);
              return {
                UserProfielId: x.CreatedBy,
                CreatedBy: x.CreatedBy,
                ProfileImageUrl: x.ProfileImageUrl,
                SenderFullName: [sender?.FirstName, sender?.LastName].join(' '),
                Content: x.Content,
              }
            });
            console.log(this.listMesGroup );
        });

    }

    onSendMesGroup = () => {
      if (this.content !== '') {
        this.socketService.sendMessage({
          Action: 'sendMessage',
          ConversationId: this.GroupModel.ConversationId,
          Content: this.content
        });
        this.listMesGroup.push({
          Content: this.content,
          CreatedBy: this.user.UserprofileId
        });
        this.content = '';
      }
      
    }
}
