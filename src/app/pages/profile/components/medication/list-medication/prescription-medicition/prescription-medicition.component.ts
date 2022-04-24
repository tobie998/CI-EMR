import { Component, OnInit, Input, ViewChild, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MedicationService, PrescriptionService } from 'src/app/common/service';
import { AlertService } from 'src/app/shared/services';
import { DetailsPrescriptionComponent } from '../../../plan/detail/prescription/details-prescription/details-prescription.component';
import { HistoryMedicitionComponent } from './history-medicition/history-medicition.component';

@Component({
  selector: 'app-prescription-medicition',
  templateUrl: './prescription-medicition.component.html',
  styleUrls: ['./prescription-medicition.component.scss']
})
export class PrescriptionMedicitionComponent implements OnInit {
  @Input() dataInput: any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  dataSource: MatTableDataSource<unknown>;
  constructor(
    private prescriptionService: PrescriptionService,
    private medicationService: MedicationService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private alertService: AlertService) { }
  listOfPrecription: any;
  Role = "";
  displayedColumns: string[] = [
    "Name",
    "Dose",
    "Number",
    "Frequency",
    "Start Date",
    "Route",
    "Visit Date",
    "Problem",
    "edit"
  ];
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('access_token'));
    this.Role = user.Role;
  }
  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(this.dataInput);
    this.dataSource.paginator = this.paginator;
  }
  openDetailDialog(data) {
    const dialogRef = this.dialog.open(DetailsPrescriptionComponent, {
      width: "900px",
      height: "300px",
      panelClass: "dialog-60-97", disableClose: true,
      data: data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.getPrescriptionByPatient();
      }
    });
  }
  getPrescriptionByPatient() {
    this.medicationService
      .listPrescriptionDrug(this.route.snapshot.params.patientId)
      .subscribe((res) => {
        this.dataInput = res;
        this.dataSource = new MatTableDataSource(this.dataInput);
      });
  }
  openHistoryItem(item) {
    const dialogRef = this.dialog.open(HistoryMedicitionComponent, {
      width: "900px",
      height: "289px",
      panelClass: "dialog-40-97", disableClose: true,
      data: item,
    });
    dialogRef.afterClosed().subscribe((result) => { });
  }
}
