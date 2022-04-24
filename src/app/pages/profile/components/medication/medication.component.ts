import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MedicationService, PrescriptionService } from 'src/app/common/service';
import { CreateMedicationComponent } from './create-medication/create-medication.component';
@Component({
    selector: 'app-medication',
    templateUrl: './medication.component.html',
    styleUrls: ['./medication.component.scss']
})
export class MedicationComponent implements OnInit {
    patientId;
    constructor(
        public dialog: MatDialog,
        private medicationService: MedicationService,
        private route: ActivatedRoute
    ) { }

    listData: any = {
        current: [],
        history: [],
        problems: [],
        prescription: []
    }
    listDrugRouter: any = [];
    type = 2;

    async ngOnInit() {
        let respone;
        this.patientId = this.route.snapshot.params.patientId;
        respone = await this.medicationService.listMedication(this.patientId, 1);
        this.listData.history = this.sortDate(respone.Payload);
        respone = await this.medicationService.listMedication(this.patientId, 2);
        this.listData.current = this.sortDate(respone.Payload);
        respone = await this.medicationService.listMedicationByProblem(this.patientId, 3);
        this.listData.problems = this.sortName(respone.Payload);
        this.getPrescriptionByPatient(this.patientId);
    }

    getPrescriptionByPatient(patientId) {
      this.medicationService
        .listPrescriptionDrug(patientId)
        .subscribe((res) => {
          this.listData.prescription = res;
        });
    }

    onChangeTab = (event) => {
        this.type = event.index;
        switch (event.index) {
            case 1:
                this.type = 1;
                break;
            case 0:
                this.type = 2;
                break;
            default:
                break;
        }
    }

    openDialog() {
        this.dialog.open(CreateMedicationComponent, {
            panelClass: "dialog-60-97", disableClose: true,
            data: {
                patientId: this.patientId
            }
        }).afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }

    onLoadDate = () => {
        this.ngOnInit();
    }

    onLoadDate2 = () => {
        this.ngOnInit()
    }
    sortDate(data: any[]) {
        data.forEach(element => {
            if (element.UpdatedOn) {
                element.dateSort = element.UpdatedOn;
            } else if (element.CreatedOn) {
                element.dateSort = element.CreatedOn;
            } else {
                element.dateSort = "1980-01-01T00:00:00.0000000"
            }
            
        });
        data.sort((a, b) => {
          return <any>new Date(b.dateSort) - <any>new Date(a.dateSort);
        });
        return data;
    }
    sortName(data: any[]) {
        data.sort((a,b) => a.Purpose.localeCompare(b.Purpose));
        return data;
    }

}
