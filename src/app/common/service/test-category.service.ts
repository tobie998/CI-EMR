import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TestCategoryService {
    constructor(
        private http: HttpClient
    ) { }

    listTestCategories(id?) {
        return this.http.get(`api/Testcategory?ParentTestcategoryId=${id}`)
            .toPromise().then(
                result => JSON.parse(
                    JSON.stringify(result)
                )
            );
    }
}
