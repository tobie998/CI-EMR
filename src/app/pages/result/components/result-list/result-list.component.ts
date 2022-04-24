import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ResultLabModel } from 'src/app/common/model/result-lab.model';
import { OrderTestService, PatientService } from 'src/app/common/service';
import { TestresultService } from 'src/app/common/service/testresult.service';
import { UploadResultComponent } from '../upload-result/upload-result.component';

@Component({
    selector: 'app-result-list',
    templateUrl: './result-list.component.html',
    styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
    @Input() selectedIndex: number | null
    constructor(
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private patientService: PatientService,
        private orderTestService: OrderTestService,
        private testresultService: TestresultService
    ) { }
    patientId: number;
    check = true;
    config = new ResultLabModel();
    height = '75vh';
    patientName: string;
    // categoryList: any = ['Lab', 'Biopsy', 'Functional', 'Imaging'];
    categoryList: any = [
      {
        Name: 'Lab',
        Data: []
      },
      {
        Name: 'Biopsy',
        Data: []
      },
      {
        Name: 'Functional',
        Data: []
      },
      {
        Name: 'Imaging',
        Data: []
      },
    ];
    data: any
    // = [
    //     {
    //         'id': 1,
    //         'VisitDate': '2020',
    //         'ProblemName': 'Chest pain',
    //         'Type': 'lab',
    //         'Category': 'Whole blood panel'
    //     },
    //     {
    //         'id': 2,
    //         'VisitDate': '2020',
    //         'ProblemName': 'Chest pain',
    //         'Type': 'lab',
    //         'Category': 'Whole blood panel'
    //     }

    // ];
    ngOnInit(): void {
        this.patientId = this.activatedRoute.snapshot.params.patientId;
        this.patientService
            .detailPatient(this.patientId)
            .then((data: any) => {
                this.patientName = data.FirstName + " " + data.LastName;
                // lỗi
                // this.data.map(x => {
                //     x.PatientId = this.patientId,
                //         x.PatientName = this.patientName
                // })
            });

    }
    checkActiveTab() {
        this.activatedRoute.queryParamMap.subscribe(params => {
            this.selectedIndex = +params.get('tab');
        });
    }

    handleCallBackTable(event) {
        if (event.typeBtn.type === 'upload') {
            const dialogRef = this.dialog.open(UploadResultComponent, {
                panelClass: "dialog-97-97",
                disableClose: true,
                data: {
                    data: event.item,
                    type: 'lab',
                    title: 'Add results'
                },
            })
            dialogRef.afterClosed().subscribe((result) => {

            });;
        }
    }
}
