export class InvoicesModel {
    public InvoiceId: number;
    public InvoiceNumber: string;
    public VisitId: number;
    public PaymentId: number;
    public ContractId: number;
    public ContractAmountUsage: number;
    public CurrencyId: number;
    public CurrencyCode: string;
    public Type: number;
    public Status: number;
    public CreatedOn: string;
    public CreatedBy: number;
    public UpdatedOn: string;
    public UpdatedBy: number;
    public PatientId: number;
    public StartDate: string;
    public EndDate: string;
    public serviceCharges: object;
}