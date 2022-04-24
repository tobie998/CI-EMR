import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MedicationService } from 'src/app/common/service';
import { CreateMedicationComponent } from '../../create-medication/create-medication.component';
import { UpdateMedicationComponent } from '../../update-medication/update-medication.component';
@Component({
    selector: "app-medication-history",
    templateUrl: "./medication-history.component.html",
    styleUrls: ["./medication-history.component.scss"],
})
export class MedicationHistoryComponent implements OnInit {
    @Output() callback = new EventEmitter<any>();
    @Output() callback2 = new EventEmitter<any>();
    @Input() dataSource;
    constructor(
        public route: ActivatedRoute,
        public dialog: MatDialog,
        private medicationService: MedicationService
    ) { }
    patientId: number;

    ngOnInit() {
        this.patientId = +this.route.snapshot.params.patientId;
    }

    displayedColumns: string[] = [
        "Problem",
        "Name",
        "Dose",
        "Frequency",
        "StartDate",
        "EndDate",
        "Route",
        "Detail",
        "Action"
    ];

    openDialogEdit = (item) => {
        this.dialog.open(UpdateMedicationComponent, {
            panelClass: "dialog-60-97", disableClose: true,
            data: item
        }).afterClosed().subscribe((result) => {
            this.callback2.emit();
        });
    }

    onDeleteMedication = (item) => {
        this.medicationService.delete(item.PatientMedicalfactorDrugId).subscribe(res => {
            this.dataSource = this.dataSource.filter(x => x.PatientMedicalfactorDrugId != item.PatientMedicalfactorDrugId);
            this.callback.emit(item);
        }, err => {
        });
    }

    openDialog() {
        this.dialog.open(CreateMedicationComponent, {
            panelClass: "dialog-60-97", disableClose: true,
            data: {
                patientId: this.patientId,
                type: 1
            }
        }).afterClosed().subscribe(() => {
            this.callback2.emit();
        });
    }
}
