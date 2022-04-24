import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-footer',
  templateUrl: './message-footer.component.html',
  styleUrls: ['./message-footer.component.scss']
})
export class MessageFooterComponent implements OnInit {
  @Input() content = '';
  @Output() sendMessage = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  detectSendMessage() {
    this.sendMessage.emit(this.content);
    this.content = '';
  }
}
