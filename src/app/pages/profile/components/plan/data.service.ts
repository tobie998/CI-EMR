import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    listOrgans = new BehaviorSubject<any>([]);
    currentListOrgans = this.listOrgans.asObservable();

    listTestCategory = new BehaviorSubject<any>([]);
    currentListTestCategory = this.listTestCategory.asObservable();

    constructor() { }

    changeListOrgans(listOrgans) {
        this.listOrgans.next(listOrgans);
    }

    changeListTestCategory(data) {
        this.listTestCategory.next(data);
    }
}
