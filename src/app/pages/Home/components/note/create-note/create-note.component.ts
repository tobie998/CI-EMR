import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { NoteModel } from 'src/app/common/model';
import { NoteService } from 'src/app/common/service';
import { AlertService, FormatDateService } from 'src/app/shared/services';

@Component({
    selector: 'app-create-note',
    templateUrl: './create-note.component.html',
    styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
    isLoading = false;
    model = new NoteModel;
    constructor(
        private noteService: NoteService,
        private alertService: AlertService,
        public dialogRef: MatDialogRef<CreateNoteComponent>,
        public formatDateService: FormatDateService
    ) { }

    ngOnInit() {
        const date = new Date();
        this.model.DateSub = this.formatDateService.formatDate(date, 'yyyy-MM-DD');
        this.model.TimeSub = '08:00';
    }

    closeDialog() {
        this.dialogRef.close();
    }

    createNote() {
        this.isLoading = true;
        this.model.NoteDate = this.model.DateSub + 'T' + this.model.TimeSub;
        this.noteService.createNote(this.model).subscribe(res => {
            this.isLoading = false;
            this.closeDialog();
        }), err => {
            this.alertService.changeMessage({
                color: 'red',
                text: `An error occurred.Please try again later.!`
            })
            this.isLoading = false;
        };
    }
}
@NgModule({
    declarations: [
        CreateNoteComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule
    ],
    providers: [],
})
export class CreateNoteHomeModule { }