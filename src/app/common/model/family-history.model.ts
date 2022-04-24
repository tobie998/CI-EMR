export class FamilyHistoryModel {
    public PatientFamilyfactorId: number;
    public PatientId: number;
    public Relationship: string;
    public SNOMEDCode: string;
    public StartDate: string;
    public EndDate: string;
    public Type: number;
    public Status: number;
    public CreatedOn: string;
    public CreatedBy: string;
    public UpdatedOn: string;
    public UpdatedBy: string;

    public get collumsFamily(): Array<any> {
        return [
            {
                id: 'Relationship',
                name: 'Relationship',
                type: 'text',
                width: '40%',
            },
            {
                id: 'DiseaseName',
                name: 'Name Of Disease',
                type: 'text',
                width: '40%'
            },
            {
                id: 'setting',
                name: '',
                type: 'setting',
                width: '20%',
                listBtn: [{
                    type: 'delete',
                    icon: 'assets/svg/deleteinline.svg'
                }]
            }];
    }
}
