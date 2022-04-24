export class VisitVitalModel {
    public Type: number;
    public VisitId: number;
    public Status: number;
    public ResultDate: string;
    public ListVital: [
        {
            VitalId: number;
            NumericValue: number;
            SNOMEDCode: string;
        }
    ];
    constructor(model?: VisitVitalModel) {
        this.Type = model.Type || 1;
        this.Status = model.Status || 1;
        this.VisitId = model.VisitId;
        this.ResultDate = model.ResultDate;
        this.ListVital = model.ListVital;
    }
}


export class VisitVitalUpdateModel {
    public ListVital: [
        {
            VitalId: number;
            NumericValue: number;
            VisitVitalId: number;
            SNOMEDCode: string;
        }
    ];
    constructor(model?: VisitVitalUpdateModel) {
        this.ListVital = model.ListVital;
    }
}



