import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NoteModel } from 'src/app/common/model';
import { NoteService } from 'src/app/common/service';
import { TabMenuService } from 'src/app/shared/services';
import { CreateNoteComponent } from './create-note/create-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

    notes: NoteModel[];

    constructor(
        public dialog: MatDialog,
        private noteService: NoteService,
        private router: Router,
        public hideMenu: TabMenuService
    ) { }

    ngOnInit() {
        this.listNotes();
    }

    createNote() {
        this.dialog
            .open(CreateNoteComponent, {
                panelClass: "dialog-40-97",
            })
            .afterClosed()
            .subscribe(() => {
                this.listNotes();
            });
    }

    listNotes() {
        this.noteService.listNote().subscribe(res => {
            this.notes = res;
        })
    }

    onDeleteNote = (item) => {
        this.noteService.delete(item.NoteId).subscribe(res => {
            this.notes = this.notes.filter(x => x.NoteId !== item.NoteId);
        })
    }

    onUpdateNote = (item) => {
        this.dialog.open(UpdateNoteComponent, {
            panelClass: "dialog-40-97", disableClose: true,
            data: item,
        }).afterClosed().subscribe(() => {
            this.listNotes();
        });
    }

    onBackHome = () => {
        this.router.navigateByUrl('/pages/home');
        this.hideMenu.sentHideMenuValue(false);
    }
}

@NgModule({
    declarations: [
        NoteComponent,
    ],
    imports: [
        CommonModule
    ],
    providers: [],
})
export class NoteHomeModule { }
