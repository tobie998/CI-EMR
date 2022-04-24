import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { MedicationService } from "src/app/common/service";
import { CreateMedicationComponent } from '../../create-medication/create-medication.component';
import { UpdateMedicationComponent } from '../../update-medication/update-medication.component';
@Component({
    selector: "app-current-medication",
    templateUrl: "./current-medication.component.html",
    styleUrls: ["./current-medication.component.scss"],
})
export class CurrentMedicationComponent implements OnInit {
    @Output() callback = new EventEmitter<any>();
    @Input() dataSource;
    patientId: number;

    constructor(
        public route: ActivatedRoute,
        public dialog: MatDialog,
        private medicationService: MedicationService
    ) { }

    ngOnInit() {
        this.patientId = +this.route.snapshot.params.patientId;
    }

    displayedColumns: string[] = [
        "Name",
        "Problem",
        "Dose",
        "Number",
        "Frequency",
        "StartDate",
        "EndDate",
        "Route",
        "Detail",
        "Action"
    ];

    openDialogEdit = (item) => {
        this.dialog.open(UpdateMedicationComponent, {
            panelClass: "dialog-60-97",
            disableClose: true,
            data: item
        }).afterClosed().subscribe((result) => {
            this.callback.emit();
        });
    }

    onDeleteMedication = (item) => {
        this.medicationService.delete(item.PatientMedicalfactorDrugId).subscribe(res => {
            this.dataSource = this.dataSource.filter(x => x.PatientMedicalfactorDrugId != item.PatientMedicalfactorDrugId);
            this.callback.emit();
        }, err => {
        });
    }

    openDialog() {
        this.dialog.open(CreateMedicationComponent, {
            panelClass: "dialog-60-97", disableClose: true,
            data: {
                patientId: this.patientId,
                type: 2
            }
        }).afterClosed().subscribe(() => {
            this.callback.emit();
        });
    }
}
