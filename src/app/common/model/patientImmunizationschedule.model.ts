export class PatientImmunizationscheduleModel {
    public PatientImmunizationscheduleId: number;
    public PatientId: number;
    public ImmunizationId: number;
    public ImmunizationscheduleId: number;
    public AppliedDate: string;
    public Description: string;
    public Type: number;
    public Status: number;
    public CreatedOn: string;
    public CreatedBy: number;
    public UpdatedOn: string;
    public UpdatedBy: number;
    public Vaccine: string;
    public get collumsImmunization(): Array<any> {
        return [
            {
                id: 'Vaccine',
                name: 'Vaccine',
                type: 'text',
                width: '40%',
            },
            {
                id: 'AppliedDate',
                name: 'Since',
                type: 'text',
                width: '40%'
            },
            {
                id: 'setting',
                name: '',
                type: 'setting',
                width: '20%',
                listBtn: [{
                    type: 'detail',
                    icon: 'assets/svg/edit-inline.svg'
                },
                {
                    type: 'delete',
                    icon: 'assets/svg/deleteinline.svg'
                }]
            }];
    }
}
