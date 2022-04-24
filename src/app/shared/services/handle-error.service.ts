import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AlertService } from './alert.service';
@Injectable({
    providedIn: 'root'
})

export class HandleErrorService {

    constructor(
        public alertService: AlertService
    ) { }

    handleError = (error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.status == 401) {
            errorMessage = 'Bạn không có quyền thực hiện chức năng này';
        }
        else if (error.status == 400) {
            errorMessage = error.error?.Message;
        }
        else if (error.status == 500) {
            errorMessage = 'Máy chủ hiện đang lỗi, vui lòng thử lại sau';
        }

        this.alertService.changeMessage({
            color: 'red',
            text: errorMessage
        });

        return throwError(errorMessage);
    }
}