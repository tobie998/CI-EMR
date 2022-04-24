import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ResultHomeComponent } from './components/result-home/result-home.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { ResultListDetailComponent } from './components/result-list-detail/result-list-detail.component';
import { RouterModule } from "@angular/router";
import { resultRoutes } from "./result.routes";
import { ListPatientModule } from "src/app/shared/components/base@ci/list-patient/list-patient.component";
import { UserModule } from "src/app/shared/components/user/user.component";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";
import { MatTabsModule } from "@angular/material/tabs";
import { TableBaseModule } from "src/app/shared/components/base@ci/table/table.component";
import { UploadResultComponent } from "./components/upload-result/upload-result.component";
import { UploadBaseModule } from "src/app/shared/components/base@ci/base-upload/base-upload.component";
import { LoaderModule } from "src/app/shared/components/loader/loader.component";



@NgModule({
    declarations: [ResultHomeComponent, ResultListComponent, ResultListDetailComponent, UploadResultComponent],
    imports: [UploadBaseModule,LoaderModule, CommonModule,MatIconModule, TranslateModule, MatTabsModule, TableBaseModule, CommonModule, RouterModule.forChild(resultRoutes), ListPatientModule, UserModule],
    exports: []
})

export class ResultModule { }