import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PrescriptionService } from 'src/app/common/service';
import { AlertService } from 'src/app/shared/services';

@Component({
  selector: 'app-history-medicition',
  templateUrl: './history-medicition.component.html',
  styleUrls: ['./history-medicition.component.scss']
})
export class HistoryMedicitionComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<HistoryMedicitionComponent>,
    public prescriptionService: PrescriptionService,
    private alertService: AlertService,) { }
  dataSource: any;
  history: any;
  displayedColumns: string[] = [
    "UpdateOn",
    "Name",
    "Dose",
    "Number",
    "Frequency",
    "StartDate",
    "Route",
    "VisitDate",
    "Problem",
  ];
  ngOnInit(): void {
    this.getHistory(this.data.PrescriptionDrugId);
  }
  getHistory(prescriptionDrugId) {
    this.prescriptionService
      .historyPrescriptionDrug(prescriptionDrugId)
      .subscribe((res) => {
        this.history = res;
        console.log(this.history);
        this.dataSource = new MatTableDataSource(this.history);
        this.dataSource.paginator = this.paginator;
      });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
