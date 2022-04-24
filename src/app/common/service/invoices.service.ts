import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { BaseApiService } from "src/app/shared/services/base.service";

@Injectable({
    providedIn: "root",
})
export class InvoicesService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, "api/Invoice");
    }

    listInvoiceVisitOfPatient(patientId, visitId) {
        return this.http
            .get(`api/Invoice?PatientId=${patientId}&InvoiceId=${visitId}`)
            .pipe(map((res: any) => res.Payload));
    }

    listServiceTypes() {
        return this.http
            .get("api/ServiceTypes")
            .pipe(map((res: any) => res.Payload));
    }

    createVisitService(data) {
        return this.http
            .post("api/VisitService", data)
            .pipe(map((res: any) => res.Payload));
    }

    // getServiceTypes() {
    //   return this.http
    //       .get("api/ServiceTypes")
    //       .pipe(map((res: any) => res.Payload));
    // }

    detailInvoiceVisit(id: number) {
        return this.http
            .get(`api/VisitService/service/${id}`)
            .pipe(map((res: any) => res.Payload));
    }

    deleteInvoice(visitServiceId, VisitId, serviceType, serviceId, servicePriceId) {
        return this.http
            .delete<any>(
                `api/VisitService?visitServiceId=${visitServiceId}&VisitId=${VisitId}&serviceType=${serviceType}&serviceId=${serviceId}&servicePriceId=${servicePriceId}`
            )
            .pipe(map((res: any) => res.Payload));
    }

    updateInvoice(servicepriceId, visitServiceId, visitId, data) {
        return this.http
            .put<any>(
                `api/VisitService/Service?servicepriceId=${servicepriceId}&visitServiceId=${visitServiceId}&visitId=${visitId}`,
                data
            )
            .pipe(map((res: any) => res.Payload));
    }

    updateMecicalService(visitId, DrugId, PrescriptionDrugId, data) {
        return this.http
            .put<any>(
                `api/VisitService/PrescriptionInvoice?VisitId=${visitId}&DrugId=${DrugId}&PrescriptionDrugId=${PrescriptionDrugId}`,
                data
            )
            .pipe(map((res: any) => res.Payload));
    }

    detailInvoice(visitId, patientId) {
        return this.http
            .get(`api/VisitService/ClientInfoVoice?VisitId=${visitId}&PatientId=${patientId}`)
            .pipe(map((res: any) => res.Payload));
    }
}
