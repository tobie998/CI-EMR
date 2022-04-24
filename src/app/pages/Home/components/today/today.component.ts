import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-today',
    templateUrl: './today.component.html',
    styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    openBox() {
        document.getElementById('box').style.display = "none";
        document.getElementById('box-large').style.display = "block";
    };
    closeBox() {
        document.getElementById('box-large').style.display = "none";
        document.getElementById('box').style.display = "inline";
    }
}
