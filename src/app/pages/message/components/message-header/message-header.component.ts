import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeerService } from 'src/app/common/service/peer.service';
import { SocketService } from 'src/app/common/service/socket.service';
import { CallModalComponent } from '../call-modal/call-modal.component';

@Component({
  selector: 'app-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.scss']
})
export class MessageHeaderComponent implements OnInit {

  constructor(
    private socketService: SocketService, 
    private peerService: PeerService, 
    private dialog: MatDialog) { }
  @Input() groupModel: any = null;
  partnerId = '';
  ngOnInit(): void {
  }
  openModal() {
    // this.receiveUser = this.selectedUser;
    if (this.groupModel.Profilelist[0].SenderUserprofileId) {
      var userprofileId = this.groupModel.Profilelist[0].SenderUserprofileId;
    }
    this.socketService.sendMessage({
      Action: 'callRequest',
      RecipientUserProfileId: userprofileId,
      PeerId: this.peerService.getID(),
    });

    let modal = this.dialog.open(CallModalComponent, {
      width: '100%',
      height: '100%',
      panelClass: 'custom-dialog-call',
      hasBackdrop: false,
      data: {
        partnerId: this.partnerId,
        receiveUid: userprofileId,
      },
    });
    modal.afterClosed().subscribe(() => {
      this.peerService.disconnect();
    });
  }
}
