import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ViewAllClientService {
    openClient = new BehaviorSubject<any>(null);
    recentClient = new BehaviorSubject<any>(null);
    viewClient = new BehaviorSubject<any>(null);
    openClientMessage = this.openClient.asObservable();
    clientMessage = this.viewClient.asObservable();
    recentClientMessage = this.recentClient.asObservable();
    // có thể subcribe theo dõi thay đổi value của biến này thay cho messageSource

    constructor() { }
    // method này để change source message 
    showOpenClientAll(message: boolean) {
        this.openClient.next(message);
    }
    showClient(mess: boolean) {
        this.viewClient.next(mess);
    }
    showRecentClient(mess: boolean) {
        this.recentClient.next(mess);
    }
}