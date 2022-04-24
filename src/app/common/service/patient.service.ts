import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { BaseApiService } from 'src/app/shared/services';
import { PatientModel } from '../model';

@Injectable({
    providedIn: 'root'
})

export class PatientService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, "api/patient");
    }
    patient: any;
    detailPatient(id, refresh?) {
        return new Promise<void>((resolve, reject) => {
            if (this.patient && this.patient.PatientId === +id && refresh !== true) {
                resolve(this.patient);
            } else {
                this.getDetailPatient(id).subscribe(res => {
                    this.patient = res;
                    resolve(res);
                }, error => {
                    reject(error);
                } );
            }
        });
    }
    getDetailPatient(id) {
        return this.http.get(`api/patient?PatientId=${id}`).pipe(map((res: any) => res.Payload));
    }

    // detailPatientToPromise(id) {
    //     return this.http.get(`api/patient?PatientId=${id}`).toPromise().then(result => JSON.parse(JSON.stringify(result)));
    // }

    searchPatient(keyword) {
        return this.http.get<PatientModel>(`api/patient/search?keyword=${keyword}&pagenumber=1`)
            .pipe(map((res: any) => res.Payload));
    }

    listPatientRecent() {
        return this.http.get<PatientModel>('api/patient/recent').pipe(map((res: any) => res.Payload));

    }

    listPatientScheduled(today) {
        return this.http.get(`api/schedule?ScheduleId=null&PatientId=null&Date=${today}`).pipe(map((res: any) => res.Payload));;
    }
}
