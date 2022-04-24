import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-card-patient',
    templateUrl: './card-patient.component.html',
    styleUrls: ['./card-patient.component.scss']
})
export class CardPatientComponent implements OnInit {
    @Input() data;
    @Input() cssClass?;
    constructor() { }

    ngOnInit(): void { }

}

@NgModule({
    declarations: [
        CardPatientComponent,
    ],

    imports: [
        CommonModule,
        FormsModule,
        TranslateModule
    ],
    exports: [
        CardPatientComponent
    ]
})
export class CardPatientModule { }