import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class CalendarService {

    API_URI = 'api/schedule';

    constructor(public http: HttpClient) { }

    createCalender(data) {
        return this.http.post(this.API_URI, data).pipe(map((res: any) => res.Payload));
    }

    listCalenderByDateOfProvider(date) {
      return this.http.get(`api/ScheduleProvider/Date?Date=${date}`).pipe(map((res: any) => res.Payload));
      // return this.http.get(`api/ScheduleProvider?ProviderId=${providerId}&Date=${date}`).pipe(map((res: any) => res.Payload));
    }

    updateSchedule(id, model) {
        return this.http.put(`${this.API_URI}/${id}`, model).pipe(map((res: any) => res.Payload));
    }

    deleteSchedule(id) {
        return this.http.delete(`${this.API_URI}/${id}`).pipe(map((res: any) => res.Payload));
    }
    getScheduletype() {
      return this.http.get(`api/scheduletype`).pipe(map((res: any) => res.Payload));
    }
}
