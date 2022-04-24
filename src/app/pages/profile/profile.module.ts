import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { GridModule } from "@progress/kendo-angular-grid";
import "hammerjs";
import { SharedModule } from "../../shared/shared.module";
import { AccountComponent } from "./components/account/account.component";
import { BillsComponent } from "./components/account/bills/bills.component";
import { ContractsComponent } from "./components/account/contracts/contracts.component";
import { InvoicesComponent } from "./components/account/invoices/invoices.component";
import { MedicalBillComponent } from "./components/account/medical-bill/medical-bill.component";
import { PrintComponent } from "./components/account/print/print.component";
import { CreateInvoiceComponent } from "./components/invoice/create-invoice/create-invoice.component";
import { CreateListOfChargeComponent } from "./components/invoice/create-service/create-service.component";
import { EditListOfChargeComponent } from "./components/invoice/edit-service/edit-service.component";
import { InvoiceComponent } from "./components/invoice/invoice.component";
import { EditInvoiceComponent } from "./components/invoice/verify/dialog/edit-invoice.component";
import { VerifyComponent } from "./components/invoice/verify/verify.component";
import { CreateMedicationComponent } from "./components/medication/create-medication/create-medication.component";
import { CurrentMedicationComponent } from "./components/medication/list-medication/current-medication/current-medication.component";
import { MedicationHistoryComponent } from "./components/medication/list-medication/history-medication/medication-history.component";
import { ProblemsMedicationComponent } from "./components/medication/list-medication/problems-medication/problems-medication.component";
import { MedicationComponent } from "./components/medication/medication.component";
import { UpdateMedicationComponent } from "./components/medication/update-medication/update-medication.component";
import { MessageComponent } from './components/message/message.component';
import { NewGroupComponent } from './components/message/new-group/new-group.component';
import { DemographicsModule } from "./components/personal-profile/demographics/demographics.component";
import { FamilyHistoryModule } from "./components/personal-profile/family-history/family-history.component";
import { ImmunizationModule } from "./components/personal-profile/immunization/immunization.component";
import { ListOfVisitsModule } from "./components/personal-profile/list-of-visits/list-of-visits.component";
import { MedicalHistoryModule } from "./components/personal-profile/medical-history/medical-history.component";
import { PersonalProfileComponent } from "./components/personal-profile/personal-profile.component";
import { SocialHistoryComponent } from "./components/personal-profile/social-history/social-history.component";
import { CreatePresciptionComponent } from "./components/plan/detail/prescription/create-presciption/create-presciption.component";
import { DetailsPrescriptionComponent } from "./components/plan/detail/prescription/details-prescription/details-prescription.component";
import { ProblemListModule } from "./components/problem-list/problem-list.component";
import { ReportComponent } from "./components/report/report.component";
import { ViewTestComponent } from "./components/tests/biopsy/view-test/view-test.component";
import { CreateVitalComponent } from "./components/vitals/create-vital/create-vital.component";
import { UpdateVitalComponent } from "./components/vitals/update-vital/update-vital.component";
import { VitalsComponent } from "./components/vitals/vitals.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { SelectDescriptorComponent } from './components/history/detail/descriptor-category/select-descriptor/select-descriptor.component';
import { CallModalComponent } from '../message/components/call-modal/call-modal.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PrescriptionMedicitionComponent } from './components/medication/list-medication/prescription-medicition/prescription-medicition.component';
import { HistoryMedicitionComponent } from './components/medication/list-medication/prescription-medicition/history-medicition/history-medicition.component';
@NgModule({
    declarations: [
        InvoiceComponent,
        VerifyComponent,
        CreateInvoiceComponent,
        MedicalBillComponent,
        PrintComponent,
        PersonalProfileComponent,
        MedicationComponent,
        CurrentMedicationComponent,
        MedicationHistoryComponent,
        AccountComponent,
        InvoicesComponent,
        ContractsComponent,
        BillsComponent,
        SocialHistoryComponent,
        ReportComponent,
        ViewTestComponent,
        CreateMedicationComponent,
        CreateListOfChargeComponent,
        EditListOfChargeComponent,
        VitalsComponent,
        CreateVitalComponent,
        UpdateVitalComponent,
        ProblemsMedicationComponent,
        UpdateMedicationComponent,
        CreatePresciptionComponent,
        DetailsPrescriptionComponent,
        EditInvoiceComponent,
        MessageComponent,
        NewGroupComponent,
        SelectDescriptorComponent,
        CallModalComponent,
        PrescriptionMedicitionComponent,
        HistoryMedicitionComponent,
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        MatFormFieldModule,
        MatIconModule,
        MatTableModule,
        NgbModule,
        ButtonsModule,
        GridModule,
        MatSelectModule,
        ChartsModule,
        ProblemListModule,
        MatTabsModule,
        DemographicsModule,
        FamilyHistoryModule,
        TranslateModule,
        SharedModule,
        ListOfVisitsModule,
        MedicalHistoryModule,
        ImmunizationModule,
        DragDropModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ProfileModule { }
