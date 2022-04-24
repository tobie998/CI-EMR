import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProviderService } from 'src/app/common/service';
import { AlertService, TabMenuService } from 'src/app/shared/services';

@Component({
    selector: 'app-profile-doctor',
    templateUrl: './profile-doctor.component.html',
    styleUrls: ['./profile-doctor.component.scss']
})
export class ProfileDoctorComponent implements OnInit {

    constructor(
        public showMenu: TabMenuService,
        public providerService: ProviderService,
        private alertService: AlertService,
        private router: Router,
        public translate: TranslateService
    ) { }

    profileImageString: any;
    model: any = {};
    isShow = false;
    language: string = 'en';

    ngOnInit(): void {
        this.providerService.detailProfileProvider().subscribe(res => {
            this.model = res;
            const ItemUser = JSON.parse(localStorage.getItem('access_token'));
            this.model.Position = ItemUser.Position;
            this.profileImageString = this.model.MediaURL;
            this.model.DOB = this.model.DOB.split('T')[0];
        });
    }

    switchLang(lang: string) {
        this.language = lang;
        this.translate.use(lang);
        localStorage.setItem('translate', lang);
    }

    updateProfileProvider() {
        if (this.profileImageString.split(',')[1]) {
            this.model.MediaURL = this.profileImageString.split(',')[1];
        } else {
            delete this.model.MediaURL;
        }
        this.providerService.update(this.model, this.model.ProviderId).subscribe(res => {
            this.isShow = false;
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        });

    }

    processFileProfileImage(files: File) {
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = _event => {
            this.profileImageString = reader.result;
        };
    }

    back() {
        this.router.navigateByUrl(`/pages/home`);
        this.showMenu.sentHideMenuValue(false);
    }

}

@NgModule({
    declarations: [
        ProfileDoctorComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        MatIconModule
    ],
    providers: [],
})
export class ProfileDoctorModule { }
