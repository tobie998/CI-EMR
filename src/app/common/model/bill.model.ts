export class BillModel {
    public BillId: number;
    public PatientId: number;
    public StartDate: string;
    public EndDate: string;
    public GeneratedDate: string;
    public TotalAmount: number;
    public CurrencyId: number;
    public Type: number;
    public Status: number;
    public CreatedOn: string;
    public CreatedBy: number;
    public UpdatedOn: string;
    public UpdatedBy: number;
    public Invoices: [];
}