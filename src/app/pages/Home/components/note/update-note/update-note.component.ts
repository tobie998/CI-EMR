import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { NoteService } from 'src/app/common/service';
import { FormatDateService } from 'src/app/shared/services';

@Component({
    selector: 'app-update-note',
    templateUrl: './update-note.component.html',
    styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<UpdateNoteComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private formatService: FormatDateService,
        private noteService: NoteService,
    ) { }

    ngOnInit() {
        this.data.noteDate = this.formatService.formatDate(this.data.CreatedOn, 'DD/MM/yyyy');
        this.data.noteTime = this.formatService.formatDate(this.data.CreatedOn, 'hh:mm a');
    }

    updateNote = () => {
        this.noteService.update(this.data, this.data.NoteId).subscribe(res => {
            this.closeDialog();
        })
    }

    closeDialog() {
        this.dialogRef.close();
    }
}
@NgModule({
    declarations: [
        UpdateNoteComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule
    ],
    providers: [],
})
export class UpdateNoteHomeModule { }