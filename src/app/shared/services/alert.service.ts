import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AlertService {
    messageSource = new BehaviorSubject<any>('');
    currentMessage = this.messageSource.asObservable();
    // có thể subcribe theo dõi thay đổi value của biến này thay cho messageSource

    constructor() { }
    // method này để change source message 
    changeMessage(message: any) {
        this.messageSource.next(message);
    }

}