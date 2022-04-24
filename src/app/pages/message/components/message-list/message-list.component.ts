import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, NgModule, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ConversationService, MessagesService, ProviderService } from 'src/app/common/service';
import { UserModule } from 'src/app/shared/components/user/user.component';
import { NewMessageComponent } from '../new-message/new-message.component';
import { MatDialog } from '@angular/material/dialog';
import * as uuid from 'uuid';
import { PeerService } from 'src/app/common/service/peer.service';
import { SocketService } from 'src/app/common/service/socket.service';
import { LocalStorageService } from 'src/app/common/service/localstorage.service';
import { CallModalComponent } from '../call-modal/call-modal.component';
import { isNullOrUndefined } from 'util';
import { cloneDeep } from 'lodash';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  uid: string;
  partnerId: string;
  token = this.storage.getToken();
  receiveUser;
  content = '';
  constructor(
    private messagesService: MessagesService,
    private dialog: MatDialog,
    private conversationService: ConversationService,
    private providerService: ProviderService,
    private socketService: SocketService,
    private storage: LocalStorageService,
  ) { 
    this.socketService.messages$.subscribe((res) => {
      const data = JSON.parse(res);
      if (data && data.Type) {
        if (data.Type === 1) {
          this.getListAll();
          if (this.GroupModel?.Profilelist?.length === 1 && this.GroupModel?.Profilelist[0].SenderUserprofileId === data.SenderUserprofileId) {
            // const sender = this.listContacts.find(element => element.UserprofileId == data.SenderUserprofileId);
            this.listMesGroup.push({
              Content: data.Message,
              UserProfielId: data.SenderUserprofileId,
              SenderFullName: [this.GroupModel?.Profilelist[0]?.SenderFirstName, this.GroupModel?.Profilelist[0]?.SenderLastName].join(' '),
              ProfileImageUrl: this.GroupModel?.Profilelist[0]?.SenderProfileImage
            });
            console.log(this.listMesGroup);
            
            // this.listMes.push({
            //   Content: data.Message,
            //   SenderProviderId: data.SenderProviderId,
            // })
          }
        } else if (data.Type === 2) {
          this.getListconversationsGroup();
          this.getListAll();
          if (this.GroupModel && this.GroupModel.ConversationId == data.ConversationId && this.currentUserId != data.SenderUserprofileId) {
            const sender = this.listContacts.find(element => element.UserprofileId == data.SenderUserprofileId);
            this.listMesGroup.push({
              Content: data.Message,
              UserProfielId: data.SenderProviderId,
              SenderFullName: [sender?.FirstName, sender?.LastName].join(' '),
              ProfileImageUrl: sender?.MediaURL
            });
          }
        }
      }
    });
  }

  listAll = [];

  listContacts = [];

  listClients = [];

  listMesGroup: any = [];

  GroupModel = {
    ConversationId: '',
    ConversationName: '',
    ProfileImageUrls: [],
    Profilelist: []
  };
  showGroupMes = false;
  isLoading = false;
  currentUserId = '';
  ngOnInit() {
    // video call
    this.uid = this.token.ProviderId;

    // end Video call

    const user = JSON.parse(localStorage.getItem('access_token'));
    this.currentUserId = user.UserprofileId;
    this.providerService.listProvider('').subscribe(res => {
      this.listContacts = res.filter(x => x.UserprofileId != this.currentUserId && !isNullOrUndefined(x.UserprofileId));
      this.listContacts.forEach(x => {
        x.fullText = x.FirstName + '-' + x.LastName;
      });
    });
    this.getListconversationsGroup();
    this.getListAll();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(NewMessageComponent, {
      panelClass: "dialog-97-97",
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  showMessageFromContracts(item: any) {
    this.listMesGroup = [];
    this.content = '';
    this.GroupModel = {
      ConversationName: '',
      ProfileImageUrls: [],
      Profilelist: [{
          SenderProfileImage: item.MediaURL,
          SenderFirstName: item.FirstName,
          SenderLastName: item.LastName,
          SenderUserprofileId: item.UserprofileId
        }],
      ConversationId: undefined
    }
    this.messagesService.detailMessage(item.UserprofileId).subscribe((res) => {
      this.listMesGroup = res.map(x => {
        return {
          UserProfielId: x.SenderProviderId,
          ProfileImageUrl: item.MediaURL,
          SenderFullName: [item.FirstName, item.LastName].join(' ') ,
          Content: x.Content,
        }
      });
    });
  }
  showMessageFromAll(item) {
    if (item.ConversationId && item.ConversationId !== 0) {
      this.showMessageByClient(item);
    } else {
      this.showMessageByClient(item);
    }
    // this.showGroupMes = false;
    // this.listMes = [];
    // this.listMesGroup = [];
    // this.ProviderModel = {
    //   SenderProfileImage: item.SenderProfileImage,
    //   SenderFirstName: item.SenderFirstName,
    //   SenderLastName: item.SenderLastName,
    //   SenderUserprofileId: item.RecipientProviderId
    // };
    // this.receiveUserprofileId = item.RecipientProviderId;

    // this.messagesService.detailMessage(item.RecipientProviderId).subscribe((res) => {
    //   this.listMes = res;
    // });
  }

  getListAll() {
    this.conversationService.getAllConversation().subscribe(res => {
      this.listAll = res.map(x => {
        return {
          ConversationId: x.ConversationId,
          ConversationName: x.ConversationName,
          FirstName: x.FirstName,
          LastName: x.LastName,
          ProviderId: x.ProviderId,
          MediaURL: x.MediaURL,
          OwnerProviderId: x.OwnerProviderId,
          NewMessageCount: x.NewMessageCount,
          PatientId: x.PatientId,
          PatientName: x.PatientName,
          ProfileImageUrls: x.ProfileImageUrls,
          Profilelist: (x.ProfileImageUrls && x.ProfileImageUrls.slice(0, x.ProfileImageUrls.length - 1) !== '') ? x.ProfileImageUrls.slice(0, x.ProfileImageUrls.length - 1).split(','):[]
        }
      });
    })
  }

  getListconversationsGroup() {
    this.conversationService.list().subscribe(res => {
      this.listClients = res.map(x => {
        return {
          ConversationId: x.ConversationId,
          ConversationName: x.ConversationName,
          OwnerProviderId: x.OwnerProviderId,
          NewMessageCount: x.NewMessageCount,
          PatientId: x.PatientId,
          PatientName: x.PatientName,
          ProfileImageUrls: x.ProfileImageUrls,
          Profilelist: (x.ProfileImageUrls.slice(0, x.ProfileImageUrls.length - 1) !== '') ? x.ProfileImageUrls.slice(0, x.ProfileImageUrls.length - 1).split(','):[]
        }
      });
    });
  }

  showMessageByClient(item) {
    this.listMesGroup = [];
    this.content = '';
    // this.listMes = [];
    // this.ProviderModel = null;
    // this.showGroupMes = true;
    // this.listMes = [];
    // this.listMesGroup = [];
    // // this.ProviderId = null;
    this.GroupModel = {
      ConversationName: item.ConversationName,
      ProfileImageUrls: item.ProfileImageUrls,
      Profilelist: item.Profilelist,
      ConversationId: item.ConversationId
    }
    this.conversationService.detailConversationsGroup(item.ConversationId).subscribe((res: any[]) => {
      this.listMesGroup = res.map(x => {
        const sender = this.listContacts.find(element => element.UserprofileId ==x.CreatedBy);
        return {
          UserProfielId: x.CreatedBy,
          ProfileImageUrl: x.ProfileImageUrl,
          SenderFullName: [sender?.FirstName, sender?.LastName].join(' '),
          Content: x.Content,
        }
      });
      console.log(this.listMesGroup, this.GroupModel, this.listContacts);
      
    });

  }
  sendMessage(content = '') {
    this.content = content;
    if (this.content !== '') {
      if (this.GroupModel.Profilelist[0].SenderUserprofileId) {
        var receiveUserprofileId = this.GroupModel.Profilelist[0].SenderUserprofileId;
      }
      this.socketService.sendMessage({
        Action: 'sendMessage',

        RecipientUserProfileId: receiveUserprofileId,
        ConversationId: this.GroupModel.ConversationId,
        Content: this.content,
      });
      this.listMesGroup.push({
        Content: this.content,
        UserProfielId: this.currentUserId
      });
      console.log(this.listMesGroup);
    }
    this.content = '';
  }
}


