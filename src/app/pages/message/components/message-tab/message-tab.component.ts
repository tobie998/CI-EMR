import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import {  } from 'events';

@Component({
  selector: 'app-message-tab',
  templateUrl: './message-tab.component.html',
  styleUrls: ['./message-tab.component.scss']
})
export class MessageTabComponent implements OnInit, OnChanges {
  keySearch = '';
  @Input() listConveration: any = [];
  @Input() type = '';
  @Output() callBack = new EventEmitter();
  listConverationPreview: any = [];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.listConverationPreview = this.listConveration;
  }

  ngOnInit(): void {
  }
  onSearch() {
    if (this.keySearch === '') {
      this.listConverationPreview = this.listConveration;
    } else if (this.type === 'ByClient') {
      this.listConverationPreview = this.listConveration.filter(x => (
        (x.ConversationName && x.ConversationName.includes(this.keySearch)) || x.PatientName.includes(this.keySearch)
      ))
    } else {
      this.listConverationPreview = this.listConveration.filter(
        (x) => x.fullText.toLowerCase().indexOf(this.keySearch.toLowerCase()) > -1
      );
    }
  }

  showMessage(item: any) {
    this.callBack.emit(item);
  }
}
