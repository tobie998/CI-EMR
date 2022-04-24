export class DiagnosisModel {
    [x: string]: any;
    public VisitDiagnosisId: number;
    public DiagnosisId: number;
    public SequenceNumber: number;
    public Status: number;
    public ProblemId: number;
    public ProblemName: string;
    public SNOMEDFullName: string;
    public SNOMEDCode: number
    public SNOMEDName: string
}

export class DiagnosesReportModel {
    public ProblemName: string;
    public VisitDiagnoses: [DiagnosesModel];
}

export class DiagnosesModel {
    public ProblemName: string;
    public VisitDiagnoses: DiagnosesModel;
}
