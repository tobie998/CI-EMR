import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-personal-profile',
    templateUrl: './personal-profile.component.html',
    styleUrls: ['./personal-profile.component.scss']
})

export class PersonalProfileComponent implements OnInit {
    selectedIndex = 0;
    constructor(
        private activatedRoute: ActivatedRoute,
    ) { }

    patientId: string;

    ngOnInit(): void {
      if (localStorage.getItem('haveReport') ) {
        localStorage.removeItem('haveReport')
        this.selectedIndex = 1
      }
    }

    ngAfterViewInit() {
    }

}
