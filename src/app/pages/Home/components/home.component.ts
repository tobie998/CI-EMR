import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { NoteService, PatientService } from "src/app/common/service";
import { FormatDateService, TabMenuService, ViewAllClientService } from "src/app/shared/services";
import { CreateNoteComponent } from "./note/create-note/create-note.component";
import { UpdateNoteComponent } from './note/update-note/update-note.component';
import { HostListener } from '@angular/core';
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    notes: any;
    count: number = 0;
    getTime: string;

    listRecent = [];
    configRecent = {
        title: 'RECENT CLIENTS',
        class: 'insideShadow',
        col: 'col-4',
        cssItem: 'content-home',
        hideVisit: true,
        hideMessage: true,
        splice: 3,
        viewAll: true
    }
    listOpenClients = [];
    configOpenClients = {
        title: 'OPEN CLIENTS',
        class: 'insideShadow',
        col: 'col-4',
        cssItem: 'content-home',
        hideVisit: true,
        hideMessage: true,
        splice: 3,
        viewAll: true
    }

    constructor(
        private dialog: MatDialog,
        private noteService: NoteService,
        private router: Router,
        private formatDateService: FormatDateService,
        private patientService: PatientService,
        private menuService: TabMenuService,
        private viewAllClient: ViewAllClientService
    ) { }

    @HostListener('window:popstate', ['$event'])
      onPopState(event) {
        console.log('Back button pressed');
        this.router.navigateByUrl('/pages/home')
      }
    ngOnInit(): void {
        this.listNotes();
        const date = new Date();
        this.getTime = this.formatDateService.formatDate(date, 'DD/MM/YYYY');
        this.patientService.listPatientRecent().subscribe(res => {
            this.listRecent = res;
        });
        this.patientService.list().subscribe(res => {
            if (res) {
                this.listOpenClients = res.filter(x => x.VisitId);
            }
        })
    }

    routerLinkListPatient(title) {
      console.log('routerLinkListPatient');

        if (title === 'RECENT CLIENTS') {
          localStorage.setItem('backhome', 'recent');
        } else if (title === 'OPEN CLIENTS') {
          localStorage.setItem('backhome', 'open');
        }
        this.router.navigateByUrl(`pages/clients`);
    }

    listNotes() {
        this.noteService.listNote().subscribe((res) => {
            this.notes = res;
            this.count = this.notes.length;
        });
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

    showAllNote() {
        this.menuService.sentHideMenuValue(true);
        this.router.navigateByUrl("/pages/home/note");
    }

    openDialogUpdate = (item) => {
        this.dialog.open(UpdateNoteComponent, {
            panelClass: "dialog-40-97", disableClose: true,
            data: item,
        }).afterClosed().subscribe(() => {
            this.listNotes();
        });
    }
}
