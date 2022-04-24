import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MedicationService } from 'src/app/common/service';
import { UpdateMedicationComponent } from '../../update-medication/update-medication.component';
@Component({
    selector: "app-problems-medication",
    templateUrl: "./problems-medication.component.html",
    styleUrls: ["./problems-medication.component.scss"],
})
export class ProblemsMedicationComponent {
    @Input() dataSource;
    @Output() callback = new EventEmitter<any>();
    @Output() callback2 = new EventEmitter<any>();
    constructor(
        public route: ActivatedRoute,
        public dialog: MatDialog,
        private medicationService: MedicationService
    ) { }

    displayedColumns: string[] = [
        "Problem",
        "Name",
        "Dose",
        "Frequency",
        "StartDate",
        "EndDate",
        "Route",
        "Detail"
    ];
}
