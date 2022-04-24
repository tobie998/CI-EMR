import { DiagnosesReportModel } from './diagnoses.model';
import { ExamReportModel } from './exam.model';

export class ReportModel {
    public ReportId: number;
    public VisitId: number;
    public HospitalName: string;
    public HospitalDepartment: string;
    public HospitalBed: string;
    public StorageNumber: number;
    public YTCode: number;
    public PatientId: number;
    public PatientFirstName: string;
    public PatientLastName: string;
    public PatientPhone: string;
    public PatientGender: number;
    public PatientDOB: string;
    public PatientNationalId: number;
    public PatientEmail: string;
    public PatientAddress: string;
    public EmergencyFirstName: string;
    public EmergencyLastName: string;
    public EmergencyPhone: string;
    public EmergencyRelationship: string;
    public Type: number;
    public Status: number;
    public CreatedOn: string;
    public CreatedBy: string;
    public UpdatedOn: string;
    public UpdatedBy: string;
    public VisitProblemDiagnoses: DiagnosesReportModel;
    public VisitProblemExam: ExamReportModel;
    constructor(model?: ReportModel) {
        if (model) {
            if (model.ReportId) this.ReportId = model.ReportId;
            if (model.VisitId) this.VisitId = model.VisitId;
            if (model.HospitalName) this.HospitalName = model.HospitalName;
            if (model.HospitalDepartment) this.HospitalDepartment = model.HospitalDepartment;
            if (model.HospitalBed) this.HospitalBed = model.HospitalBed;
            if (model.StorageNumber) this.StorageNumber = model.StorageNumber;
            if (model.YTCode) this.YTCode = model.YTCode;
            if (model.PatientId) this.PatientId = model.PatientId;
            if (model.PatientFirstName) this.PatientFirstName = model.PatientFirstName;
            if (model.PatientLastName) this.PatientLastName = model.PatientLastName;
            if (model.PatientPhone) this.PatientPhone = model.PatientPhone;
            if (model.PatientGender) this.PatientGender = model.PatientGender;
            if (model.PatientDOB) this.PatientDOB = model.PatientDOB;
            if (model.PatientNationalId) this.PatientNationalId = model.PatientNationalId;
            if (model.PatientEmail) this.PatientEmail = model.PatientEmail;
            if (model.PatientAddress) this.PatientAddress = model.PatientAddress;
            if (model.EmergencyFirstName) this.EmergencyFirstName = model.EmergencyFirstName;
            if (model.EmergencyLastName) this.EmergencyLastName = model.EmergencyLastName;
            if (model.EmergencyPhone) this.EmergencyPhone = model.EmergencyPhone;
            if (model.EmergencyRelationship) this.EmergencyRelationship = model.EmergencyRelationship;
            if (model.Type) this.Type = model.Type;
            if (model.Status) this.Status = model.Status;
            if (model.CreatedOn) this.CreatedOn = model.CreatedOn;
            if (model.CreatedBy) this.CreatedBy = model.CreatedBy;
            if (model.UpdatedOn) this.UpdatedOn = model.UpdatedOn;
            if (model.UpdatedBy) this.UpdatedBy = model.UpdatedBy;
            if (model.VisitProblemDiagnoses) this.VisitProblemDiagnoses = model.VisitProblemDiagnoses;
            if (model.VisitProblemExam) this.VisitProblemExam = model.VisitProblemExam;
        }
    }
}
