export class PaymentModel {
    public PaymentmethodId: number;
    public PaymentMethodName: string;
    public PaymentGatewayURL: string;
    public PaymentMethodDescription: string;
    public Amount: number;
    public CurrencyId: string;
    public CurrencyCode: string;
    public PayerName: string;
    public PayerPhone: string;
    public PayerRelationship: string;
    public PayerBillingAddress: string;
    public Type: number;
    public Status: number;
    public CreatedOn: string;
    public CreatedBy: number;
    public UpdatedOn: string;
    public UpdatedBy: number;
    public InvoiceId: number;
    public ContractId: number;
}