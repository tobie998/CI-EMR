import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialHistoryModel } from 'src/app/common/model';
import { SocialHistoryService } from 'src/app/common/service/social-history.service';
import { AlertService } from 'src/app/shared/services';
@Component({
    selector: 'app-social-history',
    templateUrl: './social-history.component.html',
    styleUrls: ['./social-history.component.scss']
})
export class SocialHistoryComponent implements OnInit {
    isShow = true
    Smoking: any;
    Alcohol: any;
    Excercise: any;
    patientId: any;
    socialHistory: any;
    frequencyValueAlcohol: any;
    frequencyValueExcercise: any;
    frequencyValueSmoking: any;
    frequencyUnitExcercise: any;
    frequencyUnitSmoking: any;
    frequencyUnitAlcohol: any;
    selectedExcerciseDate: any = '1';
    selectedAlcohol: any = '1';
    selectedExcercise: any = '1';
    selectedAlcoholDate: any = '1';
    selectedForAncohol: any = '1';
    selectedForExcercise: any = '1';
    yearForNumber: any;
    year: any;
    numberYear: number = 0;
    dateForAlcohol: any;
    dateForExcercise: any;
    time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    timeId: number = 0;
    constructor(
        private activatedRoute: ActivatedRoute,
        private socialHistoryService: SocialHistoryService,
        private alertService: AlertService,

    ) { }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));
        this.getSocialHistory();
    }


    clickTime(item) {
        this.timeId = +item;
    }
    clickYear(item) {
        this.numberYear = +item;
    }
    getSocialHistory() {
        this.socialHistoryService.listSocialHistoryByPatientId(this.patientId).subscribe(data => {
            this.socialHistory = data;
            this.Smoking = this.socialHistory.find(res => res.Name == "Smoking");
            this.Alcohol = this.socialHistory.find(res => res.Name == "Alcohol");
            this.Excercise = this.socialHistory.find(res => res.Name == "Excercise");
            this.frequencyValueAlcohol = this.Alcohol  ? this.Alcohol.FrequencyValue : '';
            this.frequencyValueExcercise = this.Excercise ? this.Excercise.FrequencyValue : '';
            this.frequencyValueSmoking = this.Smoking ? this.Smoking.FrequencyValue : '';
            this.frequencyUnitExcercise = this.Excercise ? this.Excercise.FrequencyUnit : '';
            this.frequencyUnitSmoking = this.Smoking ? this.Smoking.FrequencyUnit : '';
            this.frequencyUnitAlcohol = this.Alcohol  ? this.Alcohol.FrequencyUnit : '';
            var today = new Date();
            if (this.Alcohol && this.Alcohol.Type == 1) {
                this.dateForAlcohol = today.getFullYear() - parseInt(this.Alcohol.StartDate);
            }
            else if (this.Alcohol && this.Alcohol.Type == 3) {
              this.dateForAlcohol = today.getFullYear() - parseInt(this.Alcohol.EndDate);
            }
            if ( this.Excercise && this.Excercise.Type == 1) {
                this.dateForExcercise = today.getFullYear() - parseInt(this.Excercise.StartDate);
            }
            else if (this.Excercise &&  this.Excercise.Type == 3) {
              this.dateForExcercise = today.getFullYear() - parseInt(this.Excercise.EndDate);
            }
        })
    }
    updateSocialfactor(type: number, id: number) {
        let data = new SocialHistoryModel();
        data.Type = type;
        this.socialHistoryService.update(data, id).subscribe(res => {
            this.getSocialHistory();
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        })
    }
    chooseDateAlcohol(frequencyValue: number) {
        this.frequencyValueAlcohol = frequencyValue;
    }
    chooseDateExcercise(frequencyValue: number) {
        this.timeId = frequencyValue;
        this.frequencyValueExcercise = frequencyValue;
    }
    updateDateAlcohol(id: number) {
        let data = new SocialHistoryModel();
        data.FrequencyValue = this.frequencyValueAlcohol;
        this.socialHistoryService.update(data, id).subscribe(res => {
            this.getSocialHistory();
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        })
    }
    updateDateExcercise(PatientSocialfactorId: number, item) {
        this.frequencyValueExcercise = +item;
        let data = new SocialHistoryModel();
        data.FrequencyValue = this.frequencyValueExcercise;
        this.socialHistoryService.update(data, PatientSocialfactorId).subscribe(res => {
            this.getSocialHistory();
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        })
    }
    updateDateSmoking(PatientSocialfactorId: number, item) {
        this.frequencyValueSmoking = +item;
        let data = new SocialHistoryModel();
        data.FrequencyValue = this.frequencyValueSmoking;
        this.socialHistoryService.update(data, PatientSocialfactorId).subscribe(res => {
            this.getSocialHistory();
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        })
    }
    chooseFrequencyUnitExcercise(frequencyUnit: number) {
        this.frequencyUnitExcercise = frequencyUnit;

    }
    chooseFrequencyUnitAlcohol(frequencyUnit: number) {
        this.frequencyUnitAlcohol = frequencyUnit;
    }
    updateFrequencyUnit(id: number, item) {
        let data = new SocialHistoryModel();
        data.FrequencyUnit = +item;
        this.socialHistoryService.update(data, id,).subscribe(res => {
            this.getSocialHistory();
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        })
    }
    updateFrequencyUnitAlcohol(PatientSocialfactorId: number) {
        let data = new SocialHistoryModel();
        data.FrequencyUnit = this.frequencyUnitAlcohol;
        this.socialHistoryService.update(data, PatientSocialfactorId).subscribe(res => {
            this.getSocialHistory();
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        })
    }

    chooseForAlcohol(yearForNumber: number) {
        this.yearForNumber = yearForNumber;
    }

    updateDateForAlcohol(Type: number, id: number) {
        let data = new SocialHistoryModel();
        var today = new Date();
        var startYear = today.getFullYear() - parseInt(this.dateForAlcohol);
        today.setFullYear(startYear);
        if (Type == 1) {
            data.StartDate = today.toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric'
            }).replace(/ /g, '-');
        }
        else {
            if (Type == 3) {
                data.EndDate = today.toLocaleDateString('en-GB', {
                    day: 'numeric', month: 'short', year: 'numeric'
                }).replace(/ /g, '-');
            }
        }
        this.socialHistoryService.update(data, id).subscribe(res => {
            this.getSocialHistory();
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        })
    }
    chooseForExcercise(yearForNumber: number) {
        this.yearForNumber = yearForNumber;
    }
    updateDateForExcercise(Type: number, PatientSocialfactorId: number, item) {
        this.yearForNumber = +item;
        let data = new SocialHistoryModel();
        var today = new Date();
        var startYear = today.getFullYear() - parseInt(this.dateForExcercise);
        today.setFullYear(startYear);
        if (Type == 1) {
            data.StartDate = today.toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric'
            }).replace(/ /g, '-');
        }
        else {
            if (Type == 3) {
                data.EndDate = today.toLocaleDateString('en-GB', {
                    day: 'numeric', month: 'short', year: 'numeric'
                }).replace(/ /g, '-');
            }
        }
        this.socialHistoryService.update(data, PatientSocialfactorId).subscribe(res => {
            this.getSocialHistory();
        }, err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
        })
    }
}

