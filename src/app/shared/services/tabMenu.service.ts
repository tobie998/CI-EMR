import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class TabMenuService {
    messageSource = new BehaviorSubject<any>(null);
    hideMenu = new BehaviorSubject<any>(null);
    sizeMenu = new BehaviorSubject<any>(null);
    currentMessage = this.messageSource.asObservable();
    hideMenuValue = this.hideMenu.asObservable();
    closeLargeMenu = this.sizeMenu.asObservable();
    // có thể subcribe theo dõi thay đổi value của biến này thay cho messageSource

    constructor() { }
    // method này để change source message 
    changeMessage(message: any) {
        this.messageSource.next(message);
    }
    sentHideMenuValue(message: any) {
        this.hideMenu.next(message);
    }
    showSmallMenu(message: any) {
        this.sizeMenu.next(message);
    }
}