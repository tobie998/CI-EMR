import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services';

@Injectable({
    providedIn: 'root'
})
export class OrderTestService extends BaseApiService<any> {

    constructor(
        public http: HttpClient
    ) {
        super(http, 'api/order')
    }
    listOrderTest(visitId, problemId) {
      return this.http.get(`api/order?VisitId=${visitId}&ProblemId=${problemId}`).pipe(map((res: any) => res.Payload));
    }
    createAll(data) {
      return this.http.post(`api/order/all`, data).pipe(map((res: any) => res.Payload));
    }
    listParentTestcategory(id) {
        return this.http.get(`api/Testcategory?ParentTestcategoryId=${id}`).pipe(map((res: any) => res.Payload));
    }

    listTest(OrganId, TestCategoryId) {
        return this.http.get(`api/VisitTest/TestCombinationTests?OrganId=${OrganId}&TestCategoryId=${TestCategoryId}`).pipe(map((res: any) => res.Payload));
    }

    listTestLab(id) {
        return this.http.get(`api/VisitTest/TestcategoryTests?TestCategoryId=${id}`).pipe(map((res: any) => res.Payload));
    }

    detailTest(id) {
        return this.http.get(`api/VisitTest/${id}`).pipe(map((res: any) => res.Payload));
    }

    listResultOrderTest(visitId, problemId) {
        return this.http
            .get(`api/VisitTest/VisitProblemTests?VisitId=${visitId}&ProblemId=${problemId}`)
            .pipe(map((res: any) => res.Payload));
    }

    listTestPatient(visitid, testcategoryId, organid) {
        return this.http
            .get(`/api/test/result?visitid=${visitid}&testcategoryId=${testcategoryId}&organid=${organid}`)
            .pipe(map((res: any) => res.Payload));
    }

}
