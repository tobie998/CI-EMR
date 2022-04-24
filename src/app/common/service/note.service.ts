import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from '../../shared/services';
import { NoteModel } from '../model';
@Injectable({
    providedIn: 'root'
})
export class NoteService extends BaseApiService<any>{
    constructor(public http: HttpClient) {
        super(http, 'api/note');
        const token = localStorage.getItem('token');
        this.httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + token,
            })
        };
    }

    listNote(): Observable<NoteModel[]> {
        return this.http.get(`api/note`, this.httpOptions).pipe(map((res: any) => res.Payload));
    }

    createNote(note): Observable<NoteModel> {
        {
            return this.http.post<NoteModel>(
                `api/note`,
                note
            );
        }
    }

    listNoteVisitOfPatient(patientId: number, visitId: number) {
        return this.http
            .get(`api/patientnote?PatientId=${patientId}&VisitId=${visitId}`)
            .pipe(map((res: any) => res.Payload));
    }

    createPatientNote(model) {
        return this.http
            .post("api/patientnote", model, this.httpOptions)
            .pipe(map((res: any) => res.Payload));
    }

    updateNote(id, model) {
        return this.http
            .put<NoteModel>(`api/note/${id}`, model)
            .pipe(map((res: any) => res.Payload));
    }
}
