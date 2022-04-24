import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { inputs } from '@syncfusion/ej2-angular-buttons/src/button/button.component';

@Component({
    selector: 'app-table-base',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
    @Input() data: any = [];
    @Input() listlable: any;
    @Input() checkWidth;
    @Input() height;
    @Input() role = '';
    @Output() callback = new EventEmitter<any>();

    dataSub: any = [];

    ngOnChanges() {
        this.dataSub = this.data;
    }

    active(item) {
        item.check = !item.check;
    }

    onClickSetting = (btn, item) => {
        this.callback.emit({
            typeBtn: btn,
            item: item
        })
    }

}
@NgModule({
    declarations: [
        TableComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule
    ],
    exports: [
        TableComponent
    ]
})
export class TableBaseModule { }
