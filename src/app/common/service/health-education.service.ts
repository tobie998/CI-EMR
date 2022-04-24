import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { BaseApiService } from "src/app/shared/services";

@Injectable({
    providedIn: "root",
})
export class HealthEducationService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, 'api/HealthEducation')
    }

    listEducation(VisitId: number, ProblemId: number) {
      return this.http
            .get(`${this.actionUrl}?VisitId=${VisitId}&ProblemId=${ProblemId}`)
            .pipe(map((res: any) => res.Payload));
    }
    listEducationReport(VisitId: number) {
        return this.http
              .get(`${this.actionUrl}/Report?VisitId=${VisitId}`)
              .pipe(map((res: any) => res.Payload));
      }
    // detailVisitEducation(VisitId: number, ProblemId: number) {
    //     return this.http
    //         .get(`api/visiteducation?VisitId=${VisitId}&EducationcombinationId=${null}&ProblemId=${ProblemId}`)
    //         .pipe(map((res: any) => res.Payload));
    // }

    // listCombinations(OrganId: number, EducationcategoryId: number, EducationitemId: number) {
    //     return this.http
    //         .get(`api/educationcombinations?OrganId=${OrganId}&EducationcategoryId=${EducationcategoryId}&EducationitemId=${EducationitemId}`)
    //         .pipe(map((res: any) => res.Payload));
    // }
}
