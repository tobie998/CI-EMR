import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class DescriptorService {
    constructor(
        public http: HttpClient
    ) { }

    listDescriptorCategory(): Observable<any> {
        return this.http.get(`api/DescriptorCategory`).pipe(map((res: any) => res.Payload))
    }

    listDescriptorId(DescriptorCategoryId, VisitSymptomId): Observable<any> {
        return this.http.get(`api/Descriptor?DescriptorCategoryId=${DescriptorCategoryId}&VisitSymptomId=${VisitSymptomId}`).pipe(map((res: any) => res.Payload))
    }

    createDescriptorCategory(data): Observable<any> {
        return this.http.post(`api/DescriptorCategory`, data).pipe(map((res: any) => res.Payload))
    }

    createDescriptorId(data): Observable<any> {
        return this.http.post(`api/Descriptor`, data).pipe(map((res: any) => res.Payload))
    }

    createSymptomDescriptor(data): Observable<any> {
        return this.http.post(`api/VisitSymptomDescriptor/bulkpost`, data).pipe(map((res: any) => res.Payload))
    }
}