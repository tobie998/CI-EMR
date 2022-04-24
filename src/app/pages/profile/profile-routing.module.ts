import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./components/account/account.component";
import { MedicalBillComponent } from "./components/account/medical-bill/medical-bill.component";
import { PrintComponent } from "./components/account/print/print.component";
import { AllegryComponent } from "./components/allegry/allegry.component";
import { DiagnosisComponent } from "./components/diagnosis/diagnosis.component";
import { ExamComponent } from "./components/exam/exam.component";
import { HistoryComponent } from "./components/history/history.component";
import { InvoiceComponent } from "./components/invoice/invoice.component";
import { VerifyComponent } from "./components/invoice/verify/verify.component";
import { MedicationComponent } from "./components/medication/medication.component";
import { MessageComponent } from './components/message/message.component';
import { PersonalProfileComponent } from "./components/personal-profile/personal-profile.component";
import { PlanComponent } from "./components/plan/plan.component";
import { ProblemListComponent } from "./components/problem-list/problem-list.component";
import { ReportComponent } from "./components/report/report.component";
import { TestsComponent } from "./components/tests/tests.component";
import { VitalsComponent } from "./components/vitals/vitals.component";

const routes: Routes = [
    {
        path: "detail/:patientId/invoice/verify",
        component: VerifyComponent,
    },
    {
        path: "detail/:patientId/exam",
        component: ExamComponent,
    },
    {
        path: "detail/:patientId/invoice",
        component: InvoiceComponent,
    },
    {
        path: "detail/:patientId/report",
        component: ReportComponent,
    },
    {
        path: "detail/:patientId/plan",
        component: PlanComponent,
    },
    {
        path: "detail/:patientId/allegry",
        component: AllegryComponent,
    },
    {
        path: "detail/:patientId/test",
        component: TestsComponent,
    },
    {
        path: "detail/:patientId/diagnosis",
        component: DiagnosisComponent,
    },
    {
        path: "detail/:patientId/vital",
        component: VitalsComponent,
    },
    {
        path: "detail/:patientId/problem-list",
        component: ProblemListComponent,
    },
    {
        path: "detail/:patientId/medication",
        component: MedicationComponent,
    },
    {
        path: "detail/:patientId/account",
        component: AccountComponent,
    },
    {
        path: "detail/:patientId/account/medical-bill/:billId",
        component: MedicalBillComponent,
    },
    {
        path: "detail/:patientId/account/print",
        component: PrintComponent,
    },
    {
        path: "detail/:patientId/profile-info",
        component: PersonalProfileComponent,
    },
    {
        path: "detail/:patientId/history",
        component: HistoryComponent,
    },
    {
        path: "detail/:patientId/message",
        component: MessageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProfileRoutingModule { }
