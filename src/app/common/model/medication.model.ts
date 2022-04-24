export class MedicationModel {
    public PatientMedicalfactorDrugId: number;
    public PatientId: number;
    public PatientMedicalfactorId: number;
    public DrugId: number;
    public DrugName: string;
    public NoteId: number;
    public StartDate: string;
    public EndDate: string;
    public DoseValue: string;
    public DoseUnit: string;
    public FrequencyValue: number;
    public FrequencyUnit: string;
    public DrugrouteId: number;
    public DruginstructionId: number;
    public Type: number;
    public Status: number;
    public CreatedOn: string;
    public CreatedBy: string;
    public UpdatedOn: string;
    public UpdatedBy: string;
    public Content: string;
    public NoteContent: string;
    public Route: string;
    public Detail: string;
    public Purpose: string;
    public AmountNumber: number;
    public Number: number;
    public NumberUnit: number;
    constructor(model?: MedicationModel) {
        if (model) {
            if (model.PatientMedicalfactorDrugId) this.PatientMedicalfactorDrugId = model.PatientMedicalfactorDrugId;
            if (model.PatientId) this.PatientId = model.PatientId;
            if (model.PatientMedicalfactorId) this.PatientMedicalfactorId = model.PatientMedicalfactorId;
            if (model.DrugId) this.DrugId = model.DrugId;
            if (model.DrugName) this.DrugName = model.DrugName;
            if (model.NoteId) this.NoteId = model.NoteId;
            if (model.StartDate) this.StartDate = model.StartDate;
            if (model.EndDate) this.EndDate = model.EndDate;
            if (model.DoseValue) this.DoseValue = model.DoseValue;
            if (model.DoseUnit) this.DoseUnit = model.DoseUnit;
            if (model.FrequencyValue) this.FrequencyValue = model.FrequencyValue;
            if (model.FrequencyUnit) this.FrequencyUnit = model.FrequencyUnit;
            if (model.DrugrouteId) this.DrugrouteId = model.DrugrouteId;
            if (model.DruginstructionId) this.DruginstructionId = model.DruginstructionId;
            if (model.Type) this.Type = model.Type;
            if (model.Status) this.Status = model.Status;
            if (model.CreatedOn) this.CreatedOn = model.CreatedOn;
            if (model.CreatedBy) this.CreatedBy = model.CreatedBy;
            if (model.UpdatedOn) this.UpdatedOn = model.UpdatedOn;
            if (model.UpdatedBy) this.UpdatedBy = model.UpdatedBy;
            if (model.Content) this.Content = model.Content;
            if (model.NoteContent) this.NoteContent = model.NoteContent;
            if (model.Route) this.Route = model.Route;
            if (model.Detail) this.Detail = model.Detail;
            if (model.Purpose) this.Purpose = model.Purpose;
            if (model.AmountNumber) this.AmountNumber = model.AmountNumber;
            if (model.Number) this.Number = model.Number;
            if (model.NumberUnit) this.NumberUnit = model.NumberUnit;
        }
    }
}