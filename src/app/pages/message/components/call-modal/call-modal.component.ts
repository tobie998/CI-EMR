import {
    AfterViewInit,
    Component,
    ElementRef,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessagesService } from 'src/app/common/service';
import { PeerService } from 'src/app/common/service/peer.service';
import { SocketService } from 'src/app/common/service/socket.service';
@Component({
    selector: 'app-call-modal',
    templateUrl: './call-modal.component.html',
    styleUrls: ['./call-modal.component.scss']
})
export class CallModalComponent implements OnInit {
    @Input() partnerId: string;
    @ViewChild('videoUser') videoUser: ElementRef;
    @ViewChild('videoPartner') videoPartner: ElementRef;
    topVideoFrame = 'partner-video';
    userId: string;
    myEl: HTMLMediaElement;
    partnerEl: HTMLMediaElement;
    peer: any;
    isAnswerClick: boolean;
    checkScale: boolean = true;
    constructor(
        private message: MessagesService,
        private socketService: SocketService,
        private peerService: PeerService,
        private modalRef: MatDialogRef<CallModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit(): void {
      console.log(this.data);
      if (this.data.partnerId) {
        this.isAnswerClick = false;
      } else {
          this.isAnswerClick = true;
      }
      this.socketService.messages$.subscribe((res) => {
        const data = JSON.parse(res);
        if (data && data.Type) {
          if (data.Type === 4) {
            this.peerService.disconnect();
            this.modalRef.close();
          }
        }
      })
    }
    scaleTo() {
        this.checkScale = !this.checkScale;
        if (this.checkScale === false) {
            this.modalRef.removePanelClass('custom-dialog-call')
            this.modalRef.addPanelClass('cumstom-dialog-scale')
        } else {
            this.modalRef.removePanelClass('cumstom-dialog-scale')
            this.modalRef.addPanelClass('custom-dialog-call')
        }

    }
    ngAfterViewInit() {
        // if (!this.data.partnerId) {
        this.init();
        // }
    }

    ngOnDestroy() {
      this.socketService.sendMessage({
        Action: 'videoCallDisconnect',
        RecipientUserProfileId: this.data.receiveUid,
      });
        this.peerService.disconnect();
        // this.socketService.close(true);
    }

    init() {
        this.myEl = this.videoUser.nativeElement;
        this.partnerEl = this.videoPartner.nativeElement;
        this.peerService.init(this.myEl, this.partnerEl);
    }

    call() {
        this.isAnswerClick = true;
        this.peerService.conectPart(this.data.partnerId);
        this.swapVideo('my-video');
    }

    swapVideo(topVideo: string) {
        this.topVideoFrame = topVideo;
    }

    closeModal() {
        this.modalRef.close();
        this.socketService.sendMessage({
          Action: 'videoCallDisconnect',
          RecipientUserProfileId: this.data.receiveUid,
        });
        this.peerService.disconnect();
    }

}
