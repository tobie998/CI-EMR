import { OverlayModule } from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "./components/header/header.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { BaseDetailComponent } from './components/base@ci/base-detail/base-detail.component';
import { BaseStatusComponent } from './components/base@ci/base-status/base-status.component';

@NgModule({
    declarations: [
        MenuBarComponent,
        HeaderComponent,
        NotificationsComponent,
        BaseDetailComponent,
        BaseStatusComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        TranslateModule,
        OverlayModule,

    ],
    exports: [
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        MenuBarComponent,
        HeaderComponent,
        NotificationsComponent,
        MatDialogModule,
        TranslateModule,
        OverlayModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ],
    providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
    ],
})
export class SharedModule { }
