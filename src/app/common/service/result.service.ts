import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ResultService {

    constructor(
        private http: HttpClient
    ) { }

   listPatientOrderTest(keyword: string){
    return this.http.get<any>(`api/patient/order?keyword=${keyword}`).toPromise().then(
        result => JSON.parse(
            JSON.stringify(result.Payload)
        )
    );
   }

   getListOrderPatient(patientId: any, testCategoryId: any){
    return this.http.get<any>(`api/order/testCategory?PatientId=${patientId}&TestCategoryId=${testCategoryId}`).toPromise().then(
        result => JSON.parse(
            JSON.stringify(result.Payload)
        )
    );
   }
   getListOrderCategory(patientId: any, testCategoryId: any){
    return this.http.get<any>(`api/order?PatientId=${patientId}&TestCategoryId=${testCategoryId}`).toPromise().then(
        result => JSON.parse(
            JSON.stringify(result.Payload)
        )
    );
   }

   getLabOrderTestDetail(visitId: any, problemId: any, testCategoryId: any){
    return this.http.get<any>(`api/order/testCategory?VisitId=${visitId}&ProblemId=${problemId}&TestcategoryId=${testCategoryId}`).toPromise().then(
        result => JSON.parse(
            JSON.stringify(result.Payload)
        )
    );
   }

   getDetailOrderCategory(orderId: any){
       return this.http.get<any>(`api/order/${orderId}`).toPromise().then(
        result => JSON.parse(
            JSON.stringify(result.Payload)
        )
    );
   }

   getLayer3CategoryLab(testCategoryId, visitId, problemId){
    return this.http.get<any>(`api/order/testCategory/test?TestCategoryId=${testCategoryId}&VisitId=${visitId}&ProblemId=${problemId}`).toPromise().then(
        result => JSON.parse(
            JSON.stringify(result.Payload)
        )
    );
   }

   getListOtherDoc(patientId){
    return this.http.get<any>(`api/visit/patient?id=${patientId}`).toPromise().then(
        result => JSON.parse(
            JSON.stringify(result.Payload)
        )
    );
   }

   getDetailVisit(visitId, type){
    return this.http.get<any>(`api/visit/${visitId}`).toPromise().then(
        result => JSON.parse(
            JSON.stringify(result.Payload)
        )
    );
   }

   uploadResultOrderTestLab(data: any){
    return this.http.post<any>('api/ordermedia/testCategory', data).toPromise().then(
        result => JSON.parse(
            JSON.stringify(result.Payload)
        )
    );
   }
   uploadResultCategory(data: any){
    return this.http.post<any>('api/OrderMedia', data).toPromise().then(
        result => JSON.parse(
            JSON.stringify(result.Payload)
        )
    );
   }

   updateLabLayer3(data){
    return this.http.put<any>('api/order/bulkPut', data).toPromise().then(
        result => JSON.parse(
            JSON.stringify(result.Payload)
        )
    );
   }
   updateVisitMedia(data){
    return this.http.post<any>('api/VisitMedia/bulkpost', data).toPromise().then(
        result => JSON.parse(
            JSON.stringify(result.Payload)
        )
    );
   }

}
