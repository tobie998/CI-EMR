import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '@progress/kendo-angular-grid';
import { MessageRoutingModule } from './message-routing.module';
import { MessageHeaderComponent } from './components/message-header/message-header.component';
import { MessageFooterComponent } from './components/message-footer/message-footer.component';
import { MessageContentComponent } from './components/message-content/message-content.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from 'src/app/shared/components/user/user.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageTabComponent } from './components/message-tab/message-tab.component';

@NgModule({
    declarations: [MessageHeaderComponent, MessageFooterComponent, MessageContentComponent, MessageListComponent, MessageTabComponent],
    imports: [
        CommonModule,
        MessageRoutingModule,
        CommonModule,
        FormsModule,
        UserModule,
        MatIconModule,
        MatTabsModule,
        SharedModule
    ],
    exports: [MessageHeaderComponent, MessageFooterComponent, MessageContentComponent, MessageTabComponent]
})
export class MessageModule { }
