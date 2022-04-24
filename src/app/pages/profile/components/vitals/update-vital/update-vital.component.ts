import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VisitVitalUpdateModel } from 'src/app/common/model';
import { VisitVitalService } from 'src/app/common/service';
import { FormatDateService } from 'src/app/shared/services';
@Component({
    selector: 'app-update-vital',
    templateUrl: './update-vital.component.html',
    styleUrls: ['./update-vital.component.scss']
})
export class UpdateVitalComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<UpdateVitalComponent>,
        private visitVitalService: VisitVitalService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public formatDateService: FormatDateService
    ) { }

    model: any = {};
    patientId: number;
    ResultDate: any = {
        Date: new Date(),
        Time: '',
        ListTime: [],
        Data: []
    }

    async ngOnInit() {
        this.patientId = this.data.id;
        const time = this.formatDateService.formatDate(this.data.time, 'hh:mm A');
        const date = this.formatDateService.formatDate(this.data.time, 'YYYY-MM-DD');
        const res = await this.visitVitalService.listResultTime(date, this.patientId);
        const data = res.Payload.filter(x => x.ResultTime === time);
        this.model.Date = date;
        this.model.Time = time;
        this.model.ListVital = data.map(x => {
            return {
                VisitVitalId: x.VisitVitalId,
                VitalId: x.VitalId,
                NumericValue: x.NumericValue
            }
        });
        this.onLoadModel(this.model.ListVital);
    }

    onCloseModal = () => {
        this.dialogRef.close();
    }

    onChangeDate = async (value) => {
        if (!value) return;
        const res = await this.visitVitalService.listResultTime(this.ResultDate.Date, this.patientId);
        this.ResultDate.Data = res.Payload;
        this.ResultDate.ListTime = res.Payload.filter(x => x.VitalId === 1).map(a => { return a.ResultTime });
        this.ResultDate.Time = this.ResultDate.ListTime[0];
        const data = this.ResultDate.Data.filter(x => x.ResultTime === this.ResultDate.Time).sort(function (a, b) {
            return a.VitalId - b.VitalId;
        });
        this.model.ListVital = data.map(x => {
            return {
                VisitVitalId: x.VisitVitalId,
                VitalId: x.VitalId,
                NumericValue: x.NumericValue
            }
        });
        if (!data) return;
        this.onLoadModel(this.model.ListVital);
    }

    onSeclectTime = (value) => {
        this.ResultDate.Time = value;
        const data = this.ResultDate.Data.filter(x => x.ResultTime === value).sort(function (a, b) {
            return a.VitalId - b.VitalId;
        });
        if (!data) return;
        this.model.ListVital = data.map(x => {
            return {
                VisitVitalId: x.VisitVitalId,
                VitalId: x.VitalId,
                NumericValue: x.NumericValue
            }
        })
        this.onLoadModel(this.model.ListVital);
    }

    onLoadModel = (data) => {
        if (!data.length) return this.model = {};
        this.model.BPsystolic = data[0].NumericValue;
        this.model.BPdiastolic = data[1].NumericValue;
        this.model.Pulse = data[2].NumericValue;
        this.model.RepiratoryRate = data[3].NumericValue;
        this.model.sPO2 = data[4].NumericValue;
        this.model.Height = data[5].NumericValue;
        this.model.Temperature = data[6].NumericValue;
        this.model.Weight = data[7].NumericValue;
    }

    onUpdateVital = () => {
        this.onLoadListVital();
        const model = new VisitVitalUpdateModel(this.model);
        this.visitVitalService.updateVisitVital(model.ListVital).subscribe(res => {
            this.onCloseModal();
        })
    }

    onLoadListVital = () => {
        this.model.ListVital[0].NumericValue = this.model.BPsystolic || 0;
        this.model.ListVital[1].NumericValue = this.model.BPdiastolic || 0;
        this.model.ListVital[2].NumericValue = this.model.Pulse || 0;
        this.model.ListVital[3].NumericValue = this.model.RepiratoryRate || 0;
        this.model.ListVital[4].NumericValue = this.model.sPO2 || 0;
        this.model.ListVital[5].NumericValue = this.model.Height || 0;
        this.model.ListVital[6].NumericValue = this.model.Temperature || 0;
        this.model.ListVital[7].NumericValue = this.model.Weight || 0;
        this.model.ListVital[0].SNOMEDCode = "271649006";
        this.model.ListVital[1].SNOMEDCode = "271650006";
        this.model.ListVital[2].SNOMEDCode = "8499008";
        this.model.ListVital[3].SNOMEDCode = "86290005";
        this.model.ListVital[4].SNOMEDCode = "373638005";
        this.model.ListVital[5].SNOMEDCode = "251832002";
        this.model.ListVital[6].SNOMEDCode = "386725007";
        this.model.ListVital[7].SNOMEDCode = "27113001";
    }
}
