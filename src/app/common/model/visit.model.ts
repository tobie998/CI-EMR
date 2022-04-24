export class VisitModel {
    public PatientId: string;
    public Type: number;
    public Status: number;
    public StartDate: string;
    public ScheduleId?: string;
    public MediaURL?: string;
    constructor(model?: VisitModel) {
        this.PatientId = model.PatientId;
        this.Type = model.Type || 1;
        this.Status = model.Status || 1;
        this.StartDate = model.StartDate;
        this.ScheduleId = model.ScheduleId;
        this.MediaURL = model.MediaURL || '';
    }
}

