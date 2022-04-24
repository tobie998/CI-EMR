import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
export abstract class BaseApiService<T>{
    public httpOptions;

    constructor(protected http: HttpClient, protected actionUrl: string) {

        const token = localStorage.getItem('token');
        this.httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + token,
            })
        };
    }

    list(): Observable<T[]> {
        return this.http.get(`${this.actionUrl}/`).pipe(map((res: any) => res.Payload));
    }

    get(id: number): Observable<HttpEvent<T>> {
        return this.http.get<T>(`${this.actionUrl}/${id}`, this.httpOptions).pipe(map((res: any) => res.Payload));
    }

    create(data: T): Observable<HttpEvent<T>> {
        return this.http.post<T>(`${this.actionUrl}`, data, this.httpOptions);
    }

    update(data: T, id: number): Observable<HttpEvent<T>> {
        return this.http.put<T>(`${this.actionUrl}/${id}`, data, this.httpOptions);
    }

    delete(id: number): Observable<HttpEvent<T>> {
        return this.http.delete<T>(`${this.actionUrl}/${id}`, this.httpOptions);
    }
}
