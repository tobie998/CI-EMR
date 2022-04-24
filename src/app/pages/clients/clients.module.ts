import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { ListPatientModule } from "src/app/shared/components/base@ci/list-patient/list-patient.component";
import { UserModule } from "src/app/shared/components/user/user.component";
import { ClientsComponent } from "./clients.component";
import { ReasonForBookingComponent } from "./reason-for-booking/reason-for-booking.component";
import { RegistrationComponent } from "./registration/registration.component";
import { SchedulingComponent } from "./scheduling/scheduling.component";

const routes: Routes = [
    {
        path: "",
        component: ClientsComponent,
    },
    {
        path: "registration",
        component: RegistrationComponent,
    },
    {
        path: "reason-booking/:patientId",
        component: ReasonForBookingComponent,
    },
    {
        path: "reason-booking/:patientId/schedule",
        component: SchedulingComponent,
    },
    {
        path: "reason-booking/:patientId/schedule/:problemId",
        component: SchedulingComponent,
    },
];
@NgModule({
    declarations: [ClientsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslateModule,
        FormsModule,
        ListPatientModule,
        MatIconModule,
        UserModule,
        GooglePlaceModule
    ],
    exports: [
        RouterModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class ClientsModule { }
