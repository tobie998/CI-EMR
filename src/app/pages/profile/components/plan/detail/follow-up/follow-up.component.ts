import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FollowUpService } from "src/app/common/service";
import { AlertService, FormatDateService } from "src/app/shared/services";
@Component({
    selector: "app-follow-up",
    templateUrl: "./follow-up.component.html",
    styleUrls: ["./follow-up.component.scss"],
})
export class FollowUpComponent implements OnInit {
    @Input() data;

    constructor(
        public route: Router,
        public activeRouter: ActivatedRoute,
        private followUp: FollowUpService,
        private alertService: AlertService,
        public formatDate: FormatDateService
    ) { }
    time: any = [
        {
            id: 1,
            Name: {
                en: "Hours",
                vi: "Giờ",
            },
            key: "hours"
        },
        {
            id: 2,
            Name: {
                en: "Days",
                vi: "Ngày",
            },
            key: "days"
        },
        {
            id: 3,
            Name: {
                en: "Weeks",
                vi: "Tuần",
            },
            key: "weeks"
        },
        {
            id: 4,
            Name: {
                en: "Months",
                vi: "Tháng",
            },
            key: "months"
        },
        {
            id: 5,
            Name: {
                en: "Years",
                vi: "Năm",
            },
            key: "years"
        },
    ];

    quantity: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    Where: any = [
        {
            id: 1,
            Name: {
                en: "Hospital",
                vi: "Bệnh viện",
            },
        },
        {
            id: 2,
            Name: {
                en: "Clinic",
                vi: "Phòng khám",
            },
        },
        {
            id: 3,
            Name: {
                en: "Home",
                vi: "Tại nhà",
            },
        }
    ];
    timeUnit = 0;
    homeCare: Number;
    quantityNumber: number;
    timeActive = 0;
    whereActive = 0;
    // today: any;
    // getTime: any;
    // timer: any;
    followUpId: number;
    followUpData: any;
    // listFollowUp: any;
    // isUpdate = false;
    // dateTime: any;
    // followDate: any;
    typeTranslate: string;
    // nameTime: string = 'Days';
    // whereName: string = 'Hospital';
    patientId: number;
    // CreatedOn;

    ngOnInit() {
        this.typeTranslate = localStorage.getItem("translate")??'en';
        this.getFollowUp();
        this.patientId = this.activeRouter.snapshot.params.patientId;
    }

    getFollowUp() {
        this.followUp
            .listFollowUp(this.data.VisitId, this.data.ProblemId)
            .subscribe((res) => {
                if (res) {
                    this.followUpData = res;
                    this.timeUnit = res.TimeUnit;
                    this.quantityNumber = res.TimeValue;
                    // if (res.FollowDate) {
                    //     const time = Math.ceil(Math.abs(new Date(res.FollowDate).getTime() - new Date(res.CreatedOn).getTime()) / (1000 * 60 * 60 * 24));
                    //     // const type = +localStorage.getItem('timeFLUP');
                    //     if 
                    //     this.timeActive = res.TimeUnit ;
                    //     switch (type) {
                    //         case 1:
                    //             this.quantityNumber = Math.round(time * 24);
                    //             break;
                    //         case 2:
                    //             this.quantityNumber = Math.round(time);
                    //             break;
                    //         case 3:
                    //             this.quantityNumber = Math.round(time / 7);
                    //             break;
                    //         case 4:
                    //             this.quantityNumber = Math.round(time / 30);
                    //             break;
                    //         case 5:
                    //             this.quantityNumber = Math.round(time / 365);
                    //             break;
                    //         default:
                    //             break;
                    //     }
                    // }
                    // this.followDate = res.FollowDate;
                    this.followUpId = res.FollowupId;
                    this.whereActive = res.PlaceValue;
                    console.log( res.HomeCare);
                    
                    this.homeCare = res.HomeCare;
                    // this.CreatedOn = res.CreatedOn;
                }
            });
    }

    book() {
        localStorage.setItem('FollowUpBook', 'true');
        this.route.navigateByUrl(`pages/clients/reason-booking/${this.patientId}/schedule/${this.data.ProblemId}`);
    }

    setTimer(quantityNumber, timeUnit) {
        const today = (this.followUpData && this.followUpData.CreatedOn) ? new Date(this.followUpData.CreatedOn) : new Date();
        const getTime = today.getTime();
        if (quantityNumber && timeUnit) {
            let time = 0;
            switch (timeUnit) {
                case 1:
                  time = getTime + quantityNumber * 60 * 60 * 1000;
                  break;
                case 2:
                    time = getTime + quantityNumber * 86400 * 1000;
                  break;
                case 3:
                    time = getTime + quantityNumber * 7 * 86400 * 1000;
                  break;
                case 4:
                    time = getTime + quantityNumber * 30 * 86400 * 1000;
                  break;
                case 5:
                    time = getTime + quantityNumber * 365 * 86400 * 1000;
                  break;
                default:
                  time = getTime;
                  break;
            }
            console.log(getTime, time,getTime + quantityNumber * 7 * 86400 * 1000);

            return this.getDateTime(time);
        } else {
            return '';
        }
    }

    getDateTime(date: number) {
        return this.formatDate.formatDate(date, "YYYY/MM/DDTHH:mm");
    }

    clickQuantity(item) {
        // this.setTimer();
        
        this.quantityNumber = item;
        // if (this.timeActive === 1) {
        //     const time = this.getTime + this.quantityNumber * 60 * 60 * 1000;
        //     this.getDateTime(time);
        // }
        // if (this.timeActive === 2) {
        //     const time = this.getTime + this.quantityNumber * 86400 * 1000;
        //     this.getDateTime(time);
        // }
        // if (this.timeActive === 3) {
        //     const time = this.getTime + this.quantityNumber * 7 * 86400 * 1000;
        //     this.getDateTime(time);
        // }
        // if (this.timeActive === 4) {
        //     const time = this.getTime + this.quantityNumber * 30 * 86400 * 1000;
        //     this.getDateTime(time);
        // }
        // if (this.timeActive === 5) {
        //     const time = this.getTime + this.quantityNumber * 365 * 86400 * 1000;
        //     this.getDateTime(time);
        // }
        this.confirmButton();
    }

    clickTimeActive(item) {
        this.timeUnit = item.id;
        // this.setTimer();
        // this.nameTime = item.Name[this.typeTranslate];
        // this.timeActive = item.id;
        // if (this.timeActive === 1) {
        //     const time = this.getTime + this.quantityNumber * 60 * 60 * 1000;
        //     this.getDateTime(time);
        // }
        // if (this.timeActive === 2) {
        //     const time = this.getTime + this.quantityNumber * 86400 * 1000;
        //     this.getDateTime(time);
        // }
        // if (this.timeActive === 3) {
        //     const time = this.getTime + this.quantityNumber * 7 * 86400 * 1000;
        //     this.getDateTime(time);
        // }
        // if (this.timeActive === 4) {
        //     const time = this.getTime + this.quantityNumber * 30 * 86400 * 1000;
        //     this.getDateTime(time);
        // }
        // if (this.timeActive === 5) {
        //     const time = this.getTime + this.quantityNumber * 365 * 86400 * 1000;
        //     this.getDateTime(time);
        // }
        this.confirmButton();
    }

    clickWhereActive(item) {
        this.whereActive = item.id;
        this.confirmButton();
    }

    clickHomeCare(homeCare) {
        this.homeCare = homeCare;
        this.confirmButton();
    }

    confirmButton() {
        if (!this.followUpId) {
            this.createFollowUp();
        } else {
            this.updateFollowUp();
        }
    }

    createFollowUp() {
        let model = {
            FollowDate: this.setTimer(this.quantityNumber, this.timeUnit),
            PlaceValue: this.whereActive,
            HomeCare: this.homeCare,
            VisitId: this.data.VisitId,
            ProblemId: this.data.ProblemId,
            Type: 1,
            TimeValue: this.quantityNumber,
            TimeUnit: this.timeUnit
        };
        console.log(model);
        
        this.followUp.create(model).subscribe((res) => {
            console.log(res);
            this.getFollowUp();
            // localStorage.setItem('timeFLUP', this.timeActive.toString());
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        });
    }

    updateFollowUp() {
        let model = {
            FollowDate: this.setTimer(this.quantityNumber, this.timeUnit),
            PlaceValue: this.whereActive,
            HomeCare: this.homeCare,
            VisitId: this.data.VisitId,
            ProblemId: this.data.ProblemId,
            Type: 1,
            TimeValue: this.quantityNumber,
            TimeUnit: this.timeUnit
        };
        console.log(model);

        this.followUp.update(model, this.followUpId).subscribe((res) => {
            console.log(res);
            // localStorage.setItem('timeFLUP', this.timeActive.toString());
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        });
    }
}
@NgModule({
    declarations: [
        FollowUpComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        FollowUpComponent
    ]
})
export class FollowUpModule { }
